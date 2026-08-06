"use strict";

console.log("js  main start")

import { addToCart } from "./cart.js";
import { clearBasketElement, mainListElement, sidebarListElement } from "./elemets.js";
import { renderCart } from "./renderCart.js";
import { productsApi } from "./shopAPI.js";

import { initSidebar } from "./sidebar.js";

import { renderBasket } from "./renderBasket.js";

import { getFromStorage, setToStorage } from "./stotage.js";
import { search } from "./search.js";

initSidebar();

const products = await productsApi();

mainListElement.addEventListener("click", (e) => {
  if (e.target.classList.contains("buy-btn")) {
    const id = +e.target.dataset.id;

    const selectedProduct = products.find((product) => product.id === id);

     console.log("BEFORE BUY:", mainListElement.children.length);

    addToCart(selectedProduct);
    renderBasket()


    console.log("AFTER BUY:", mainListElement.children.length);
  }
});

sidebarListElement.addEventListener("click", (e) => {
  let cartProducts = getFromStorage();

  if (e.target.dataset.action === "plus") {
    const id = +e.target.dataset.id;

    const selectedButton = cartProducts.find((product) => product.id === id);

    selectedButton.quantity++;

    setToStorage(cartProducts);
    renderBasket();
  } else if (e.target.dataset.action === "minus") {
    const id = +e.target.dataset.id;
    const selectedButton = cartProducts.find((product) => product.id === id);

    selectedButton.quantity--;

    if (selectedButton.quantity < 1) {
      cartProducts = cartProducts.filter((product) => product.id !== id);
    }
    setToStorage(cartProducts);
    renderBasket();
  }
});

clearBasketElement.addEventListener("click", () => {
  setToStorage([])
  renderBasket()
})

renderCart(products);
renderBasket();
search()