"use strict"

async function productsApi() {
    try {
        const response = await fetch('https://fakestoreapi.com/products')

        if (!response.ok) {
            throw new Error("Error loading products")
        }

        const data = await response.json()
        
        return data
    } catch(err) {
        console.log(err, "fuck off")
    }
}

export {productsApi}