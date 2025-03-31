import React from 'react';
import PhoneSkeleton from '../PhoneSskeleton/PhoneSkeleton';

const PhonesLoading = () => {
    return (
        <div>
            <div className='w-max md:w-auto mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
                  <PhoneSkeleton></PhoneSkeleton>
                  <PhoneSkeleton></PhoneSkeleton>
                  <PhoneSkeleton></PhoneSkeleton>
                  <PhoneSkeleton></PhoneSkeleton>
                  <PhoneSkeleton></PhoneSkeleton>
                  <PhoneSkeleton></PhoneSkeleton>
                  <PhoneSkeleton></PhoneSkeleton>
                  <PhoneSkeleton></PhoneSkeleton>
                  <PhoneSkeleton></PhoneSkeleton>
                  <PhoneSkeleton></PhoneSkeleton>
            </div>
        </div>
    );
};

export default PhonesLoading;