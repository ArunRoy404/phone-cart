
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
    let newCart = [phone, 1]

    for(let i=0; i<cart.length; i++){
      const [p, quantity] = cart[i]
      if(p.id==phone.id){
        newCart = cart.splice(i,1)[0]
        newCart[1]++
      }
    }
    setCart([...cart, newCart])
  }

  const handleRemoveFromCart = (id) =>{
    const newCart = cart.filter(([phone,quantity]) => phone.id!==id)
    setCart([...newCart])
  }
  
  return (
    <>
      <div className='bg-[#633AE4] py-9'>
        <div className='w-[80%] mx-auto space-y-5 md:flex justify-between items-center'>
          <h1 className='text-white text-3xl font-bold'>Shop Your Favorite Phone</h1>
          <CartDrawer handleRemoveFromCart={handleRemoveFromCart} cart={cart} ></CartDrawer>
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
