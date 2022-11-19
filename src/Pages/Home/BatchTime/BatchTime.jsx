import React from 'react';
import { BsFillCalendarMinusFill,BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const BatchTime = () => {
    return (
        <div>
            <div className='bg-[#19223C] mx-auto w-[90%] lg:w-[70%] h-[400px] relative bottom-24 rounded-2xl'>
                <div>
                <h1 className='lg:text-4xl text-2xl text-white text-center font-bold py-10 lg:py-14'>পরবর্তী ব্যাচের সময় সূচি</h1>
                <div className='block lg:grid grid-cols-2 ml-5 lg:ml-16'>
                    <p className='text-white '><BsFillCalendarMinusFill className='mb-1 text-rose-500 mr-2 items-center inline text-2xl' /> এনরোলমেন্ট শুরু: ডিসেম্বর ১০, ২০২২ (শনিবার)</p>
                    <p className='text-white '><BsFillCalendarMinusFill className='mb-1 text-purple-500 mr-2 items-center inline text-2xl' /> ব্যাচের ওরিয়েন্টশন: ডিসেম্বর ২৮, ২০২২ (বুধবার)</p>
                    <p className='text-white lg:my-5'><BsFillCalendarMinusFill className='mb-1 text-green-500 mr-2 items-center inline text-2xl' /> এনরোলমেন্ট শেষ: ডিসেম্বর ২৪, ২০২২ (শনিবার)</p>
                    <p className='text-white mb-10 lg:my-5'><BsFillCalendarMinusFill className='mb-1 text-sky-500 mr-2 items-center inline text-2xl' /> ক্লাস শুরু: ডিসেম্বর ৩০, ২০২২ (শুক্রবার )</p>
                </div>
                <div className='bg-[#19223C] rounded-md md:border lg:border border-gray-600 mx-10 lg:mx-20'>
                   <div className='block lg:flex justify-center items-center mt-2 mb-1'>
                   <div>
                    <h1 className='text-white font-bold mr-5 lg:block hidden text-xs lg:text-base'>তুমি ৭ম ব্যাচে এনরোল করতে আগ্রহি হলে , ওয়েবসাইটে রেজিস্ট্রেশন করে রাখো</h1>
                    </div>
                    <div>
                    <Link className='bg-pink-500 rounded-3xl py-4 px-7 text-white font-semibold'><button>Enroll Now <BsFillArrowRightCircleFill className='mb-1 items-center inline text-4xl' /></button></Link>
                    </div>
                   </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BatchTime;