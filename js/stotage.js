const STORAGE_KEY = 'shop-cart'
const STORAGE_KEY_FAVORITE = 'favorite-cart'

function getFromStorage() {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
}

function setToStorage(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

function getFromStorageForFavoriteCarts() {
    const data = localStorage.getItem(STORAGE_KEY_FAVORITE)
    return data ? JSON.parse(data) : []
}

function setToStorageForFavoriteCarts(data) {
    localStorage.setItem(STORAGE_KEY_FAVORITE, JSON.stringify(data))
}

export {setToStorage, getFromStorage, getFromStorageForFavoriteCarts, setToStorageForFavoriteCarts}