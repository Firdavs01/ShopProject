"use strict";

console.log("js  main start");

import { addToCart } from "./cart.js";
import {
  clearBasketElement,
  favoriteBtnElement,
  mainListElement,
  mainPageBtnElement,
  sidebarListElement,
} from "./elemets.js";
import { renderCart } from "./renderCart.js";
import { productsApi } from "./shopAPI.js";

import { initSidebar } from "./sidebar.js";

import { renderBasket } from "./renderBasket.js";

import { getFromStorage, getFromStorageForFavoriteCarts, setToStorage } from "./stotage.js";
import { search } from "./search.js";
import { checkout } from "./checkout.js";
import { favorites } from "./favorites.js";

initSidebar();

const products = await productsApi();

mainPageBtnElement.addEventListener("click", () => {
  renderCart(products)
})

mainListElement.addEventListener("click", (e) => {
  let storageProducts = getFromStorage();

  if (e.target.classList.contains("buy-btn")) {
    const id = +e.target.dataset.id;

    const selectedProduct = products.find((product) => product.id === id);

    console.log("BEFORE BUY:", mainListElement.children.length);

    addToCart(selectedProduct);
    renderBasket();
    renderCart(products);

    console.log("AFTER BUY:", mainListElement.children.length);
  }

  // minus/plus for basket

  if (e.target.dataset.action === "plus") {
    const id = +e.target.dataset.id;

    const selectedButton = storageProducts.find((product) => product.id === id);

    selectedButton.quantity++;

    setToStorage(storageProducts);
    renderCart(products);
    renderBasket();
  } else if (e.target.dataset.action === "minus") {
    const id = +e.target.dataset.id;
    const selectedButton = storageProducts.find((product) => product.id === id);

    selectedButton.quantity--;

    if (selectedButton.quantity < 1) {
      storageProducts = storageProducts.filter((product) => product.id !== id);
    }

    setToStorage(storageProducts);
    renderCart(products);
    renderBasket();
  }


  // datas for favoriteCarts

  if (e.target.classList.contains('liked-btn')){
    const id = +e.target.dataset.id

    favorites(id, products)
    renderCart(products)
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
    renderCart(products);
  }
});

clearBasketElement.addEventListener("click", () => {
  setToStorage([]);
  renderBasket();
});

sidebarListElement.addEventListener("click", (e) => {
  let productsFromStorage = getFromStorage();

  if (e.target.classList.contains("deleteCart-btn")) {
    const id = +e.target.dataset.id;

    productsFromStorage = productsFromStorage.filter(
      (product) => product.id !== id,
    );
    setToStorage(productsFromStorage);
    renderCart(products);
    renderBasket();
  }
});

favoriteBtnElement.addEventListener("click", () => {
  const favoriteCartArr = getFromStorageForFavoriteCarts()

  renderCart(favoriteCartArr)
})
checkout();
renderCart(products);
renderBasket();
search();