"use strict"

import { categoryElement, searchElement, sortElement} from "./elemets.js"
import { updateProducts } from "./updateProduct.js"

export function search() {
    searchElement.addEventListener('input', () => {
        
        updateProducts(
            searchElement.value,
            categoryElement.value,
            sortElement.value
        )
    })
}