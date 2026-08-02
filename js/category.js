"use strict"

import {categoryElement} from "./elemets.js"
import { productsApi } from "./shopAPI.js"
import {renderCart} from "./renderCart.js"

const products = await productsApi()

function showCategoryProducts() {
    categoryElement.addEventListener("change", () => {
        const selectedCategory = categoryElement.value

        const categoryProducts = products.filter(product => {
            if (product.category === selectedCategory || selectedCategory === "all") {
                return true
            }

            return false
        })

        renderCart(categoryProducts)
    })
}

export { showCategoryProducts }