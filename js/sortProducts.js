"use strict"

import {sortElement} from "./elemets.js"
import { productsApi } from "./shopAPI.js"
import {renderCart} from "./renderCart.js"

const products = await productsApi()

function sortProducts() {
    sortElement.addEventListener("change", () => {
       const selectedSort = sortElement.value
       let selectedSorted
        
        if (selectedSort === "asc") {
            selectedSorted = [...products].sort((a, b) => a.price - b.price)
        } else if (selectedSort === "desc") {
            selectedSorted = [...products].sort((a, b) => b.price - a.price)
        } else {
            selectedSort = products
        }

        renderCart(selectedSorted)
    })
}

export {sortProducts}