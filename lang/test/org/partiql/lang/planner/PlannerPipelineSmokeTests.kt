package org.partiql.lang.planner

import com.amazon.ionelement.api.ionInt
import com.amazon.ionelement.api.ionString
import com.amazon.ionelement.api.toIonValue
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.partiql.lang.ION
import org.partiql.lang.ast.SourceLocationMeta
import org.partiql.lang.domains.PartiqlPhysical
import org.partiql.lang.errors.Problem
import org.partiql.lang.errors.ProblemDetails
import org.partiql.lang.errors.ProblemSeverity
import org.partiql.lang.eval.physical.sourceLocationMetaOrUnknown
import org.partiql.lang.planner.transforms.PLAN_VERSION_NUMBER
import org.partiql.lang.planner.transforms.PlanningProblemDetails
import org.partiql.lang.util.SexpAstPrettyPrinter

/**
 * Query planning primarily consists of AST traversals and rewrites.  Each of those are thoroughly tested separately,
 * but it is still good to have a simple "smoke test" for the planner pipeline.
 */
class PlannerPipelineSmokeTests {

    @Suppress("DEPRECATION")
    private fun createPlannerPipelineForTest(
        allowUndefinedVariables: Boolean,
        block: PlannerPipeline.Builder.() -> Unit = { }
    ) = PlannerPipeline.build(ION) {
        allowUndefinedVariables(allowUndefinedVariables)
        metadataResolver(createFakeMetadataResolver("Customer" to "fake_uid_for_Customer"))
        block()
    }

    @Test
    fun `happy path`() {
        val pipeline = createPlannerPipelineForTest(allowUndefinedVariables = true)
        val result = pipeline.plan("SELECT c.* FROM Customer AS c WHERE c.primaryKey = 42")

        result as PassResult.Success
        println(SexpAstPrettyPrinter.format(result.result.toIonElement().asAnyElement().toIonValue(ION)))

        assertEquals(
            result,
            PassResult.Success(
                result = PartiqlPhysical.build {
                    plan(
                        stmt = query(
                            bindingsToValues(
                                exp = struct(structFields(localId(0))),
                                query = filter(
                                    i = impl("default"),
                                    predicate = eq(
                                        operands0 = path(
                                            localId(0),
                                            pathExpr(lit(ionString("primaryKey")), caseInsensitive())
                                        ),
                                        operands1 = lit(ionInt(42))
                                    ),
                                    source = scan(
                                        i = impl("default"),
                                        expr = globalId("fake_uid_for_Customer", caseInsensitive()),
                                        asDecl = varDecl(0)
                                    )
                                )
                            )
                        ),
                        locals = listOf(localVariable("c", 0)),
                        version = PLAN_VERSION_NUMBER
                    )
                },
                warnings = emptyList()
            )
        )
    }

    @Test
    fun `undefined variable`() {
        val qp = createPlannerPipelineForTest(allowUndefinedVariables = false)
        val result = qp.plan("SELECT undefined.* FROM Customer AS c")
        assertEquals(
            PassResult.Error<PartiqlPhysical.Statement>(
                listOf(problem(1, 8, PlanningProblemDetails.UndefinedVariable("undefined", caseSensitive = false)))
            ),
            result
        )
    }

    @Test
    fun `physical plan pass - happy path`() {
        val qp = createPlannerPipelineForTest(allowUndefinedVariables = false) {
            addPhysicalPlanPass { inputPlan, _ ->
                // ensure we're getting the correct plan as input
                assertEquals(createFakePlan(1), inputPlan)

                // instead of doing something smart (this is after all a "smoke" test), just return a different
                // plan entirely.
                createFakePlan(2)
            }
            addPhysicalPlanPass { inputPlan, _ ->
                // second pass should get the output of the first pass as input
                assertEquals(createFakePlan(2), inputPlan)
                createFakePlan(3)
            }
            addPhysicalPlanPass { inputPlan, _ ->
                // third pass should get the output of the second pass as input
                assertEquals(createFakePlan(3), inputPlan)
                createFakePlan(4)
            }
        }
        val actualPlanResult = qp.plan("1")

        // final plan should be the output of the third pass.
        assertEquals(PassResult.Success(createFakePlan(4), emptyList()), actualPlanResult)
    }

    private fun createFakePlan(number: Int) =
        PartiqlPhysical.build {
            plan(
                stmt = query(lit(ionInt(number.toLong()))),
                version = PLAN_VERSION_NUMBER
            )
        }

    @Test
    fun `physical plan pass - first user pass sends semantic error`() {
        val qp = createPlannerPipelineForTest(allowUndefinedVariables = false) {
            addPhysicalPlanPass { inputPlan, problemHandler ->
                problemHandler.handleProblem(
                    createFakeErrorProblem(inputPlan.stmt.metas.sourceLocationMetaOrUnknown)
                )
                inputPlan
            }
            addPhysicalPlanPass { _, _ ->
                error(
                    "This pass should not be reached due to an error being sent to to the problem handler " +
                        "in the previous pass"
                )
            }
        }
        val expectedError = createFakeErrorProblem(SourceLocationMeta(1, 1, 57))

        val actualPassResult = qp.plan(
            // the actual expression doesn't matter as long as it doesn't have an error detected by a built-in pass
            "'the meaning of life, the universe, and everything is 42'"
        )

        assertEquals(PassResult.Error<PartiqlPhysical.Plan>(listOf(expectedError)), actualPassResult)
    }

    private fun createFakeErrorProblem(sourceLocationMeta: SourceLocationMeta): Problem {
        data class FakeProblemDetails(
            override val severity: ProblemSeverity = ProblemSeverity.ERROR,
            override val message: String = "Ack, the query author presented us with a logical conundrum!"
        ) : ProblemDetails

        return Problem(
            sourceLocationMeta,
            FakeProblemDetails()
        )
    }
}