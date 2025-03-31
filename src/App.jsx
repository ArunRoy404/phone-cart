
import { Suspense, useEffect, useState} from 'react'
import './App.css'
import Phones from './components/Phones/Phones'
import { ErrorBoundary } from "react-error-boundary"
import CartDrawer from './components/CartDrawer/CartDrawer'

const url = '../public/phone.json'
const fetchPhonesPromise = async () => {
  const fetchPromise = await fetch(url)
  return fetchPromise.json()
}

const fetchPhones = fetchPhonesPromise()

function App() {
  const [cart, setCart] = useState([])
  
  const handleAddToCart = (phone)=>{
    setCart([...cart, phone])
  }
  
  
  return (
    <>
      <div className='bg-[#633AE4] py-9'>
        <div className='w-[80%] mx-auto flex justify-between items-center'>
          <h1 className='text-white text-3xl font-bold'>Shop Your Favorite Phone</h1>
          <CartDrawer cart={cart} ></CartDrawer>
        </div>
      </div>
      

      <div className='w-[80%] mx-auto mt-10 pb-10'>
        <ErrorBoundary fallback={<h1 className='text-3xl font-bold'>Something Went Wrong</h1>}>
          <Suspense fallback={<div className='text-center'><span className="loading loading-dots loading-xl"></span></div>}>
            <Phones fetchPhones={fetchPhones} handleAddToCart={handleAddToCart}></Phones>
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  )
}

export default App
