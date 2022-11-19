import React from 'react';
import BenefitsCard from './BenefitsCard/BenefitsCard';
import BenefitsInfo from './BenefitsInfo/BenefitsInfo';

const Benefits = () => {
    return (
        <div className='mx-10'>
            <h1 className='text-white font-bold text-3xl text-center mb-10'>এই কোর্স থেকে কি কি শিখতে পারবে:</h1>
            <div className='lg:flex block lg:gap-20'>
                <div>
                    <BenefitsCard/>
                </div>
                <div>
                    <BenefitsInfo/>
                </div>
            </div>
        </div>
    );
};

export default Benefits;