"use strict"

import { addToCart } from "./cart.js"
import { mainListElement } from "./elemets.js"
import { renderCart } from "./renderCart.js"
import { productsApi } from "./shopAPI.js"

import { initSidebar } from "./sidebar.js"

import { renderBasket } from "./renderBasket.js"

initSidebar()

const products = await productsApi()

mainListElement.addEventListener("click", e => {
    if (e.target.classList.contains('buy-btn')) {

        const id = +e.target.dataset.id

        const selectedProduct = products.find(product => product.id === id)

        addToCart(selectedProduct)
    }
})




renderCart(products)
renderBasket()