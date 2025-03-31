import React, { use, useState } from 'react';
import Phone from '../Phone/Phone';

const Phones = ({fetchPhones, handleAddToCart}) => {

    

    const phones = use(fetchPhones).mobile
    return (
        <div className='w-max md:w-auto mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
            {
                phones.map(phone => <Phone key={phone.id} phone={phone} handleAddToCart={handleAddToCart}></Phone>)
            }
        </div>
    );
};

export default Phones;