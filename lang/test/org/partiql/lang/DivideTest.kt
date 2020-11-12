package org.partiql.lang

import org.junit.Test
import kotlin.test.assertEquals

class DivideTest {
    @Test
    fun validDivideTest() {
        assertEquals(2, Divide().divide(4, 2))
    }

    @Test
    fun invalidDivideTest() {
        assertEquals(0, Divide().divide(4, 0))
    }
}