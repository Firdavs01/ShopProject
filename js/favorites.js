"use stirict"

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


    setToStorageForFavoriteCarts(productsFromStorage)
}