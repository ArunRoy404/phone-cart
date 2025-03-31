import React from 'react';

const PhoneSkeleton = () => {
    return (
        <div>
            <div className='p-4 w-[250px] md:w-auto bg-white rounded-2xl drop-shadow-xl flex flex-col justify-between'>
                <div>
                    <div className="skeleton w-full h-[170px] rounded-xl"></div>

                    <div className='mt-3 space-y-1'>
                        <div className="skeleton w-[90%] h-4 rounded-xl"></div>
                        <div className="skeleton w-[60%] h-3 rounded-xl"></div>
                        <div className="skeleton w-[50%] h-3 rounded-xl"></div>
                        <div className="mt-3 skeleton w-[20%] h-4 rounded-xl"></div>
                    </div>
                </div>

                <div className='mt-4 text-center'>
                    <div className="skeleton w-full h-10 "></div>
                </div>
            </div>
        </div>
    );
};

export default PhoneSkeleton;