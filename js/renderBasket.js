"use strict"

import { getFromStorage } from "./stotage.js"
import { sidebarListElement } from "./elemets.js";


function renderBasket() {
    const basket = getFromStorage()

    sidebarListElement.innerHTML = ''

    for (let product of basket) {
        const div = document.createElement("div");

        div.innerHTML = `
            <img src="${product.img}" class="cartProduct__img">
            <h1>${product.name}</h1>
            <p>
                ${product.quantity} <br>
                ${product.price}
            </p>
            <button data-id="${product.id}" class="cartBuy-btn">Buy</button>
        `

        sidebarListElement.appendChild(div)
        console.log(product)
    }
}

export {renderBasket}
