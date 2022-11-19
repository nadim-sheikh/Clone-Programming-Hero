import React from 'react';
import courses from '../../../Assets/courses.png';
import { Link } from 'react-router-dom';
import CourseScroll from './CourseScroll/CourseScroll';

const CourseFullInfo = () => {
    return (
        <div className='bg-[#090A27] my-32'>
            <h1 className='text-center text-4xl text-white font-bold py-10'>কোর্সে যা কিছু আছে</h1>
            <div className='grid grid-cols-2 gap-20 mx-52 pb-20'>
                <div className="card bg-base-100 p-5 shadow-xl">
                    <figure><img src={courses} className='w-full' alt="Shoes" /></figure>
                    <Link className='bg-pink-500 rounded-md w-full py-2 text-white text-xl font-semibold 
                    mt-5 text-center'><button>Enrollment is Closed</button></Link>
                </div>
                <div className='rounded-md h-[450px] mx-auto overflow-y-scroll'>
                    <CourseScroll />
                </div>
            </div>
            {/* <br />
            <br />
            <br /> */}
        </div>
    );
};

export default CourseFullInfo;