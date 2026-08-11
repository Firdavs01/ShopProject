"use strict"

import { checkoutBtnElement } from "./elemets.js";
import { getFromStorage } from "./stotage.js";

export function updateCheckoutButton() {

    const basket = getFromStorage()
    
        if (basket.length === 0) {
            checkoutBtnElement.innerHTML = "Переместите заказ в корзину"
        } else {
            checkoutBtnElement.innerHTML = "Можно оформить заказ"
        }
}

export function checkout() {
    const basket = getFromStorage()
    checkoutBtnElement.addEventListener("click", () => {

    })
}