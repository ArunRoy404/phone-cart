const addCartToLocalStorage = (cartInfo) =>{
    const cart = JSON.stringify(cartInfo)
    localStorage.setItem('cart',cart)
}

const getCartFromLocalStorage = () =>{
    const cart = localStorage.getItem('cart')
    if(cart){
        return JSON.parse(cart)
    }
    return []
}

export {addCartToLocalStorage, getCartFromLocalStorage}