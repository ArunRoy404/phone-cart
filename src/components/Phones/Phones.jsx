import React, { use, useEffect, useState } from 'react';
import Phone from '../Phone/Phone';

const Phones = ({ fetchPhones, handleAddToCart, handleLoadCart, cartData }) => {
    const phones = use(fetchPhones).mobile

    useEffect(() => {
        const cartPhones = cartData.map(({ id, quantity }) => {
            const cartPhone = phones.find(p => p.id === id)
            return [cartPhone, quantity]
        })
        handleLoadCart(cartPhones)
    }, [])


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