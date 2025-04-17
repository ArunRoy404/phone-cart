
import { Suspense, useState } from 'react'
import './App.css'
import Phones from './components/Phones/Phones'
import { ErrorBoundary } from "react-error-boundary"
import CartDrawer from './components/CartDrawer/CartDrawer'
import PhonesLoading from './components/PhonesLoading/PhonesLoading'
import { addIdToStoredCart } from './utilities/localStorageCart'

// const url = '../public/phone.json'
const url = 'https://raw.githubusercontent.com/ArunRoy404/phone-cart/refs/heads/main/public/phone.json'
const fetchPhonesPromise = async () => {
  const fetchPromise = await fetch(url)
  return fetchPromise.json()
}

// this fetchPhones function should call outside 
// cause the useState triggers the App function every time 
// and the fetchPhone get calls every time
const fetchPhones = fetchPhonesPromise()



function App() {
  const [cart, setCart] = useState([])

  const handleAddToCart = (item) => {
    let newItem = { ...item }

    // if the same item exist 
    const oldItemIndex = cart.findIndex(oldItem => oldItem.id == newItem.id)

    // if found increase quantity 
    if (oldItemIndex >= 0) {
      newItem = cart.splice(oldItemIndex, 1)[0] //0 for the obj. cause splice returns an array
      newItem.quantity++
    } else {
      newItem.quantity = 1
    }

    setCart([...cart, newItem])
    addIdToStoredCart(newItem.id, newItem.quantity)
  }

  const handleRemoveFromCart = itemId => {
    const newCart = cart.filter(oldItem => oldItem.id !== itemId)
    setCart(newCart)
  }

  const handleAddStoredCart =(cart) =>{
    setCart(cart)
  }


  return (
    <>
      <div className='relative'>
        <div className='bg-[#633AE4CC] backdrop-blur-2xl py-9 sticky top-0 z-5 drop-shadow-xl'>
          <div className='w-[80%] mx-auto space-y-5 md:flex justify-between items-center'>
            <h1 className='text-white text-3xl font-bold'>Shop Your Favorite Phone</h1>
            <CartDrawer cart={cart}
              handleRemoveFromCart={handleRemoveFromCart}
            ></CartDrawer>
          </div>
        </div>


        <div className='w-[80%] mx-auto mt-10 pb-10'>
          <ErrorBoundary fallback={<h1 className='text-3xl font-bold'>Something Went Wrong</h1>}>
            <Suspense fallback={<PhonesLoading></PhonesLoading>}>
              <Phones
                fetchPhones={fetchPhones}
                handleAddToCart={handleAddToCart}
                handleAddStoredCart={handleAddStoredCart}
              ></Phones>
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </>
  )
}

export default App
