"use strict"


import { mainListElement } from "./elemets.js";

function renderCart(productsCarts) {
    console.log("RENDER CART:", productsCarts);
    console.trace();

    mainListElement.innerHTML = ''  

    for (let product of productsCarts) {

        const cartElement = document.createElement("div");
    
        cartElement.innerHTML = `
            <img src="${product.image}" class="product__img">
            <h1 class="cartElement__title">${product.title}</h1>
            <p class="cartElement__description">
                ${product.price}
            </p>
            <button data-id="${product.id}" class="buy-btn">Buy</button>
        `
        cartElement.style.display="flex"
        cartElement.style.flexDirection="column"
        cartElement.style.justifyContent="center"
        cartElement.style.alignItems="center"
        mainListElement.appendChild(cartElement)
    }
}

export {renderCart}