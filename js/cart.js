import { getFromStorage } from "./stotage.js"
import { setToStorage } from "./stotage.js"

function addToCart(product) {
    const cart = getFromStorage()
    const existsProduct = cart.find(prod => product.id === prod.id)

    if (existsProduct) {
        existsProduct.quantity++
        setToStorage(cart)
    } else {

        const newItem = {
            id: product.id,
            img: product.image,
            name: product.title,
            price: product.price,
            quantity: 1 // создаем товар со стартовым количеством 1
        }
        cart.push(newItem)
        setToStorage(cart)
    }
}

export {addToCart}