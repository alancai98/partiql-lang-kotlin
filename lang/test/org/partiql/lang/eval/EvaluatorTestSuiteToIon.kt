package org.partiql.lang.eval

import com.amazon.ion.IonReader
import com.amazon.ion.IonSystem
import com.amazon.ion.IonType
import com.amazon.ion.IonValue
import com.amazon.ion.IonWriter
import com.amazon.ion.system.IonSystemBuilder
import com.amazon.ion.system.IonTextWriterBuilder
import org.partiql.lang.util.testdsl.IonResultTestCase
import org.partiql.lang.util.testdsl.IonResultTestGroup
import java.io.File

val ION: IonSystem = IonSystemBuilder.standard().build()

fun main() {
    val file = File("./evaluator_test_suite.ion")
    val outputStream = file.outputStream()

    val ionWriter = IonTextWriterBuilder.pretty()
        .build(outputStream)

    val globals = EVALUATOR_TEST_SUITE.globals
    ionWriter.writeTestGlobals(globals)

    val groups = EVALUATOR_TEST_SUITE.groups
    groups.forEach { group ->
        ionWriter.writeEvalTestGroup(group)
    }
}

fun IonWriter.writeTestGlobals(globals: Map<String, IonValue>) {
    this.setTypeAnnotations("envs")
    this.stepIn(IonType.STRUCT) // in: envs struct

    globals.entries.forEach { global ->
        this.setFieldName(global.key)
        global.value.writeTo(this)
    }
    this.stepOut() // out: envs struct
}

fun IonWriter.writeEvalTestGroup(testGroup: IonResultTestGroup) {
    this.setTypeAnnotations(testGroup.name)
    this.stepIn(IonType.LIST)
    this.writeEvalTestCases(testGroup.tests)
    this.stepOut()
}

fun IonWriter.writeEvalTestCases(testCases: List<IonResultTestCase>) {
    testCases.forEach { test ->
        val rewrittenOutput = test.expectedLegacyModeIonResult.replace("\$partiql_", "\$")
        val ionReaderForOutput = ION.newReader(rewrittenOutput)
        ionReaderForOutput.next()

        val statement = reformatStatementString(test.sqlUnderTest)

        this.writeEvalTestCase(test.name, statement, ionReaderForOutput)
    }
}

fun reformatStatementString(statement: String): String {
    return statement.replace("\n", "").trimIndent().replace("\\s+".toRegex(), " ").trim()
}

fun IonWriter.writeEvalTestCase(name: String, statement: String, output: IonReader) {
    // enter outer struct
    this.stepIn(IonType.STRUCT) // in: test case struct

    // set struct fields for name, statement
    this.setFieldName("name")
    this.writeString(name)
    this.setFieldName("statement")
    this.writeString(statement)

    // set struct fields for assert
    this.setFieldName("assert") // in: assert struct
    this.stepIn(IonType.STRUCT)
    this.setFieldName("result")
    this.writeSymbol("EvaluationSuccess")
    this.setFieldName("output")

    // println("reader: $output")
    this.writeValue(output)
    this.stepOut() // out: assert struct

    this.stepOut() // out: test case struct
}
