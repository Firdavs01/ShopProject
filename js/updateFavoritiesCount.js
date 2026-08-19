"use strict"

import { favoritiesCountElement } from "./elemets.js"
import { getFromStorageForFavoriteCarts } from "./stotage.js"

export function updateFavoritiesCount() {
    const favoriteCartArr = getFromStorageForFavoriteCarts()

    favoritiesCountElement.textContent = favoriteCartArr.length
}