"use stirict"

import { favoritiesCountElement } from "./elemets.js"
import {getFromStorageForFavoriteCarts, setToStorageForFavoriteCarts } from "./stotage.js"

export function favorites(id, products) {
        
    let productsFromStorage = getFromStorageForFavoriteCarts()
    
    const cart = productsFromStorage.find(product => product.id === id)
    
    if (!cart) {
        productsFromStorage.push(
            products.find(product => product.id === id)
        )
    } else {
        productsFromStorage = productsFromStorage.filter(product => product.id !== id)
    }
    
    
    favoritiesCountElement.textContent = productsFromStorage.length 
    setToStorageForFavoriteCarts(productsFromStorage)
}