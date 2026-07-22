"use strict"

import { mainListElement } from "./elemets.js"
import { renderCart } from "./renderCart.js"
import { productsApi } from "./shopAPI.js"

const products = await productsApi()

mainListElement.addEventListener("click", e => {
    if (e.target.classList.contains('buy-btn')) {

        const id = +e.target.dataset.id

        const selectedProduct = products.find(product => product.id === id)
    }
})



renderCart(products)