package org.partiql.lang

class Divide() {
    fun divide (x: Int, y: Int): Int {
        if (y == 0) {
            return 0
        }
        return x / y
    }
}