"use strict";

import { mainListElement } from "./elemets.js";
import { getFromStorage } from "./stotage.js";

function renderCart(productsCarts) {
  mainListElement.innerHTML = "";

  const products = getFromStorage();

  for (let product of productsCarts) {
    const productFinded = products.find(
      (productfind) => productfind.id === product.id,
    );

    const cartElement = document.createElement("div");

    if (!productFinded) {
      cartElement.innerHTML = `
                <img src="${product.image}" class="product__img">
                <h1 class="cartElement__title">${product.title}</h1>
                <p class="cartElement__description">
                    ${product.price}
                </p>
    
                <button data-id="${product.id}" class="buy-btn">Buy</button>
                <button data-id="${product.id}" class="liked-btn" id="likedBtn">♡</button>
            `;
    } else {
      cartElement.innerHTML = `
                <img src="${product.image}" class="product__img">
                <h1 class="cartElement__title">${product.title}</h1>
                <p class="cartElement__description">
                    ${product.price}
                </p>
    
                <p>
                <div>
                    <button data-action="minus" data-id="${productFinded.id}">-</button>
                    ${productFinded.quantity}
                    <button data-action="plus" data-id="${productFinded.id}">+</button>
                </div>
                </p>
                `;
    }

    cartElement.style.display = "flex";
    cartElement.style.flexDirection = "column";
    cartElement.style.justifyContent = "center";
    cartElement.style.alignItems = "center";
    mainListElement.appendChild(cartElement);
  }
}

export { renderCart };
