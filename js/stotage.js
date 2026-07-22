const STORAGE_KEY = 'shop-cart'

function getFromStorage() {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
}

function setToStorage(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export {setToStorage, getFromStorage}