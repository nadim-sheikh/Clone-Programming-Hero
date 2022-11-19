import React from 'react';
import courses from '../../../../Assets/courses.png';
import { Link } from 'react-router-dom';

const BenefitsCard = () => {
    return (
        <div className="card lg:w-96 bg-base-100 p-5 shadow-xl">
            <figure><img src={courses} alt="Shoes" /></figure>
            <Link className='bg-pink-500 rounded-md w-full py-2 text-white text-xl font-semibold mt-5 text-center mb-5'><button>Enrollment is Closed</button></Link>
            <div className='lg:flex block justify-center items-center'>
                <p className='mr-4 mb-3 lg:mb-0 text-center w-full p-1 font-semibold border rounded-xl bg-white text-zinc-600'>775 Videos</p>
                <p className='mr-4 mb-3 lg:mb-0 text-center w-full p-1 font-semibold border rounded-xl bg-white text-zinc-600'>300 Quiz's</p>
                <p className='mr-4 mb-3 lg:mb-0 text-center w-full p-1 font-semibold border rounded-xl bg-white text-zinc-600'>12 Assignment</p>
            </div>
            <h1 className='font-bold text-4xl mt-2 text-white'>৳ 5500</h1>
        </div>
    );
};

export default BenefitsCard;