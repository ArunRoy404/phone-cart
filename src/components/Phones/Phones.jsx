import React, { use, useEffect} from 'react';
import Phone from '../Phone/Phone';
import { getStoredCart } from '../../utilities/localStorageCart';

const Phones = ({ fetchPhones, handleAddToCart, handleAddStoredCart}) => {
    const phones = use(fetchPhones).mobile

    useEffect(()=>{
        const cart = []

        const storedCart = getStoredCart()

        storedCart.forEach(([id, quantity])=> {
            phones.forEach(phone=> {
                if(phone.id===id){
                    const cartPhone = {...phone}
                    cartPhone.quantity = quantity
                    cart.push(cartPhone)
                }
            })
        });
        handleAddStoredCart(cart)
    },[])

    return (
        <div className='w-max md:w-auto mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
            {
                phones.map(phone => <Phone
                    key={phone.id}
                    phone={phone}
                    handleAddToCart={handleAddToCart}
                ></Phone>)
            }
        </div>
    );
};

export default Phones;