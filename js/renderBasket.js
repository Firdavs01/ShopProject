"use strict";

import { getFromStorage } from "./stotage.js";
import { sidebarListElement } from "./elemets.js";
import { calcSum } from "./calcCartPrices.js";
import { totalPriceElement } from "./elemets.js";

function renderBasket() {
  const basket = getFromStorage();
  const total = calcSum(basket);

  sidebarListElement.innerHTML = "";

  for (let product of basket) {
    const div = document.createElement("div");

    div.innerHTML = `
        <img src="${product.img}" class="cartProduct__img">
        <h1>${product.name}</h1>
            <p>
              <div>
              <button data-action="minus" data-id="${product.id}">-</button>
                ${product.quantity}
              <button data-action="plus" data-id="${product.id}">+</button>
              </div>
                ${product.price}
            </p>
              <button data-id="${product.id}" class="cartBuy-btn">Buy</button>
            `;
    sidebarListElement.appendChild(div);
  }
  totalPriceElement.innerHTML = total;
}

export { renderBasket };
