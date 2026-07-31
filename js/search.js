"use strict"

import { searchElement } from "./elemets.js"
import { renderCart } from "./renderCart.js"
import { productsApi } from "./shopAPI.js"

const products = await productsApi()
export function search() {
    searchElement.addEventListener('input', () => {
        console.log("inpur")
        let usersText = searchElement.value.toLowerCase()
        const filtered = products.filter(product => product.title.toLowerCase().includes(usersText))
        console.log(filtered)
        console.log(products.length);
console.log(filtered.length);
        renderCart(filtered)
    })
}