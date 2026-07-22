"use strict"

import { mainListElement } from "./elemets.js";

function renderCart(productsCarts) {
    for (let product of productsCarts) {

        const cartElement = document.createElement("div");
    
        cartElement.innerHTML = `
            <img src="${product.image}" class="product__img">
            <h1>${product.title}</h1>
            <p>
                ${product.description} <br>
                ${product.price}
            </p>
            <button data-id="${product.id}" class="buy-btn">Buy</button>
        `
    
        mainListElement.appendChild(cartElement)
    }
}

export {renderCart}