const setCartToLocalStorage = cart =>{
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}

const getCartFromLocalStorage = () =>{
    const cartStringified = localStorage.getItem('cart')
    if(cartStringified){
        return JSON.parse(cartStringified)
    }
    return []
}

const removeItemFromLocalStorage = itemId =>{
    const cart = getCartFromLocalStorage()
    const newCart = cart.filter(([id])=> id!==itemId)
    setCartToLocalStorage(newCart)
}

const addItemToLocalStorage = (itemId, quantity) =>{
    removeItemFromLocalStorage(itemId)
    const cart = getCartFromLocalStorage()
    const newItem = [itemId, quantity]
    cart.push(newItem)
    setCartToLocalStorage(cart)
}

const removeCartFromLocalStorage = ()=>{
    localStorage.removeItem('cart')
}

export {
    getCartFromLocalStorage as getStoredCart,
    addItemToLocalStorage as addIdToStoredCart,
    removeItemFromLocalStorage as removeFromStoredCart,
    removeCartFromLocalStorage as deleteStoredCart
}

