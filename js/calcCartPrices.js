"user strict"

function calcSum(products) {
    let total = 0;

    for (let product of products) {
        total += product.price * product.quantity
    }

    return total
}


export {calcSum}