import React from 'react';
import OurInfocard from './OurInfocard';
import img from '../../../Assets/banner.png';

const OurInfo = () => {
    return (
        <div>
            <h1 className='text-center text-4xl text-white font-bold py-10'>কোর্সে যা কিছু আছে</h1>
            <div className='flex justify-center items-center'>
                <div><OurInfocard/></div>
                <img src={img} className="" alt="" />
            </div>
        </div>
    );
};

export default OurInfo;