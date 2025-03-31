import React from 'react';

const CartCard = ({ phone }) => {
    return (
        <div className='border-b p-3 flex justify-between'>
            <div className='flex gap-3'>
                <div className='bg-slate-200 h-[100px] w-[100px] rounded-xl flex justify-center items-center'>
                    <img className='h-[80px]' src={phone.img_url} alt="" />
                </div>
                <div className='flex flex-col justify-between'>
                    <div>
                        <h2 className='font-bold'>Model: {phone.model}</h2>
                        <h3 className='text-sm'>Brand: {phone.brand}</h3>
                    </div>

                    <div>
                        <h3 className='text-sm font-bold'>Quantity: 1</h3>
                        <h3 className='text-lg font-bold'>Price: ${phone.approx_price_EUR}</h3>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
    );
};

export default CartCard;