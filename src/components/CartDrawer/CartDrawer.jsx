import React from 'react';
import CartCard from '../CartCard/CartCard';

const CartDrawer = ({ cart, handleRemoveFromCart, handleClearCart}) => {

    return (
        <div>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <span className='ml-1 text-xl font-bold'>{cart.length}</span>
                    </label>
                </div>
                <div className="drawer-side z-10">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="relative menu bg-base-200 text-base-content min-h-full w-96 p-4 pr-8 border">
                        <div className='sticky top-0 bg-white px-6  py-4 z-20 rounded=xl flex justify-between items-center'>
                            <h1 className='text-3xl font-bold'>cart</h1>
                            <button onClick={handleClearCart} className='btn rounded-md bg-[#EE8E00] text-white font-bold'>Clear</button>
                        </div>
                        <div className='flex flex-col-reverse'>
                            {
                                cart.map(item => <CartCard
                                    key={item.id}
                                    item={item}
                                    handleRemoveFromCart={handleRemoveFromCart}
                                ></CartCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CartDrawer;