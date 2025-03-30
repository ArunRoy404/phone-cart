import React from 'react';
const Phone = ({ phone }) => {
    return (
        <div className='p-4 bg-white rounded-2xl drop-shadow-xl'>
            {/* image */}
            <div className='bg-slate-200 h-[170px] rounded-2xl flex justify-center items-center'>
                <img className='h-[150px] mix-blend-darken' src={phone.img_url} alt="" />
            </div>
            <div className='mt-3'>
                <h2 className='font-bold'>Model: {phone.model}</h2>
                <h3 className='text-sm'>Brand: {phone.brand}</h3>
                <h3 className='text-sm'>RAM: {phone.RAM}</h3>
                <h3 className='mt-2 font-bold'>Price: ${phone.approx_price_EUR}</h3>
            </div>

            <div className='mt-4 text-center'>
                <button className='w-full btn bg-[#EE8E00] font-bold text-white'>Add to Cart </button>
            </div>

        </div>
    );
};

export default Phone;