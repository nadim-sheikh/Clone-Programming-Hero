import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";
import CourseInfo1 from './CourseInfo1/CourseInfo1';

const CourseInfo = () => {
    return (
        <div>
            <div className='flex justify-around mb-20 items-center w-[50%] mx-auto mt-20 bg-[#090A27] rounded-md py-5'>
                <div className='flex flex-col items-center'>
                    <AiFillStar className='text-rose-500 text-center text-6xl' />
                    <p className='text-rose-500 py-2 font-semibold'>এই কোর্সের বিশেষত্ব কি?</p>
                    <span className='border-b-8 border-rose-500 w-48 h-2 rounded-md'></span>
                </div>
                <div className='flex flex-col items-center'>
                    <TfiWrite className='text-gray-600 text-center text-6xl' />
                    <p className='text-gray-600 py-2 font-semibold'>এই কোর্স কিভাবে চলবে?</p>
                    <span className='border-b-8 border-gray-600 w-48 h-2 rounded-md'></span>
                </div>
            </div>
            <CourseInfo1/>
        </div>
    );
};

export default CourseInfo;