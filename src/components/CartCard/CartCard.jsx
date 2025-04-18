import React from 'react';

const CartCard = ({ item, handleRemoveFromCart }) => {
    return (
        <div className='border-b p-3 flex justify-between'>
            <div className='flex gap-3'>
                <div className='bg-slate-200 h-[100px] w-[100px] rounded-xl flex justify-center items-center'>
                    <img className='h-[80px] mix-blend-darken' src={item.img_url} alt="" />
                </div>
                <div className='flex flex-col justify-between'>
                    <div>
                        <h2 className='font-bold'>Model: {item.model}</h2>
                        <h3 className='text-sm'>Brand: {item.brand}</h3>
                    </div>

                    <div>
                        <h3 className='text-sm font-bold'>Quantity: {item.quantity}</h3>
                        <h3 className='text-lg font-bold'>Price: ${item.approx_price_EUR * item.quantity}</h3>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center '>
                <button
                    onClick={()=>handleRemoveFromCart(item.id)}
                    className='btn border-none'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CartCard;