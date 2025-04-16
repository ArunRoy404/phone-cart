
import { Suspense} from 'react'
import './App.css'
import Phones from './components/Phones/Phones'
import { ErrorBoundary } from "react-error-boundary"
import CartDrawer from './components/CartDrawer/CartDrawer'
import PhonesLoading from './components/PhonesLoading/PhonesLoading'

// const url = '../public/phone.json'
const url = 'https://raw.githubusercontent.com/ArunRoy404/phone-cart/refs/heads/main/public/phone.json'
const fetchPhonesPromise = async () => {
  const fetchPromise = await fetch(url)
  return fetchPromise.json()
}


function App() {

  const fetchPhones = fetchPhonesPromise()
  console.log(fetchPhones)

  return (
    <>
      <div className='relative'>
        <div className='bg-[#633AE4CC] backdrop-blur-2xl py-9 sticky top-0 z-5 drop-shadow-xl'>
          <div className='w-[80%] mx-auto space-y-5 md:flex justify-between items-center'>
            <h1 className='text-white text-3xl font-bold'>Shop Your Favorite Phone</h1>
            <CartDrawer></CartDrawer>
          </div>
        </div>


        <div className='w-[80%] mx-auto mt-10 pb-10'>
          <ErrorBoundary fallback={<h1 className='text-3xl font-bold'>Something Went Wrong</h1>}>
            <Suspense fallback={<PhonesLoading></PhonesLoading>}>
              <Phones
                fetchPhones={fetchPhones} 
              ></Phones>
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </>
  )
}

export default App
