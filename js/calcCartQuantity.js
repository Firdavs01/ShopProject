"use strict"

import { getFromStorage } from "./stotage.js"

export function calcCartQuantity(basket) {
    const result = basket.reduce((acc, num) => {
        return acc + num.quantity
    }, 0)

    return result
}

    