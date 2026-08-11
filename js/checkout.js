"use strict"

import { checkoutBtnElement } from "./elemets.js";
import { renderBasket } from "./renderBasket.js";
import { getFromStorage, setToStorage } from "./stotage.js";

export function updateCheckoutButton() {

    const basket = getFromStorage()
    
        if (basket.length === 0) {
            checkoutBtnElement.innerHTML = "Переместите заказ в корзину"
        } else {
            checkoutBtnElement.innerHTML = "Можно оформить заказ"
        }
}

export function checkout() {
    
    checkoutBtnElement.addEventListener("click", () => {
        const basket = getFromStorage()
        if (basket.length === 0) {
            return
        } else {
            alert("Товар оформлен")
            setToStorage([])
            renderBasket()
        }
    })
}