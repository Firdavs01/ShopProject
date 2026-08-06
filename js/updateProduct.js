"use strict"

import { productsApi } from "./shopAPI.js"
import { renderCart } from "./renderCart.js"
import { mainListElement } from "./elemets.js"

const products = await productsApi()

export function updateProducts(searchText, selectedCategory, selectedSort) {  

    
    const filtered = products.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()))
    
    const categoryProducts = filtered.filter(product => {
        if (product.category === selectedCategory || selectedCategory === "all") {
            return true
        }

            return false
        })
    
        let selectedSorted
        if (selectedSort === "asc") {
            selectedSorted = [...categoryProducts].sort((a, b) => a.price - b.price)
        } else if (selectedSort === "desc") {
            selectedSorted = [...categoryProducts].sort((a, b) => b.price - a.price)
        } else {
            selectedSorted = categoryProducts
        }

        if (selectedSorted.length === 0) {

        mainListElement.innerHTML = "Not found"

    } else {
        

        console.log("SEARCH:", searchText);
        console.log("CATEGORY:", selectedCategory);
        console.log("SORT:", selectedSort);
        console.log("RESULT:", selectedSorted.length);
        
        renderCart(selectedSorted)
    }
    console.log("FILTER:", selectedSorted);
}
