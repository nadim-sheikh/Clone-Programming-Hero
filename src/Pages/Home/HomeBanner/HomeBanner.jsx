import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import banner from '../../../Assets/banner.png';

const HomeBanner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item block w-full lg:flex md:flex my-20 justify-center items-center">
                    <div>
                        <h1 className='text-2xl lg:text-5xl text-white font-bold'>Learn Effectively that will take you <br /> towards your goal</h1>
                        <p className='my-10 text-white'>ভিডিও কনটেন্ট বা কোর্স অনেকভাবেই ম্যানেজ করতে পারবে। কিন্তু সেটাকে ধরে ধরে ইন্টার্ন/ফুলটাইম চাকরি পর্যন্ত নিয়ে যাওয়ার জন্য একটা ইফেক্টিভ এবং এনজয়েবল লার্নিং এনভায়রনমেন্ট শুধু এই কোর্সেই পাবে।</p>
                        <Link className='bg-pink-500 rounded-3xl py-4 px-7 text-white font-semibold'><button>Enroll Now <BsFillArrowRightCircleFill className='mb-1 ml-2 items-center inline text-4xl' /></button></Link>
                    </div>
                    <img alt='' className='lg:w-[65%] md:w-[65%] w-full' src={banner} />
                </div>
                <div id="item2" className="carousel-item block w-full lg:flex md:flex my-20 justify-center items-center">
                    <div>
                        <h1 className='text-2xl lg:text-5xl text-white font-bold'>Complete Web Development Course with Jhankar Mahbub</h1>
                        <p className='my-10 text-white'>একদম জিরো থেকে, কোন প্রকার পূর্ব অভিজ্ঞতা ছাড়াই একজন প্রফেশনাল ওয়েব ডেভেলপার হওয়ার জন্য যা যা লাগবে তার সবকিছুই সহজ করে গিলিয়ে খাওয়ানো হবে এই কোর্সে।</p>
                        <Link className='bg-pink-500 rounded-3xl py-4 px-7 text-white font-semibold'><button>Enroll Now <BsFillArrowRightCircleFill className='mb-1 ml-2 items-center inline text-4xl' /></button></Link>
                    </div>
                    <img alt='' className='lg:w-[65%] md:w-[65%] w-full' src={banner} />
                </div>
                <div id="item3" className="carousel-item block w-full lg:flex md:flex my-20 justify-center items-center">
                    <div>
                        <h1 className='text-2xl lg:text-5xl text-white font-bold'>Build 12 professional projects while learning.</h1>
                        <p className='my-10 text-white'>কোর্সের অংশ হিসেবে হাতে কলমে নতুন ১২ টা প্রজেক্ট (এসাইনমেন্ট) করবে তুমি। আমরা তোমার প্রজেক্ট এর ফিডব্যাক দিবো। মার্কস দিবো। যাতে প্রফেশনাল ওয়েবসাইট বানিয়েই চাকরির ইন্টারভিউতে যেতে পারো। 💪</p>
                        <Link className='bg-pink-500 rounded-3xl py-4 px-7 text-white font-semibold'><button>Enroll Now <BsFillArrowRightCircleFill className='mb-1 ml-2 items-center inline text-4xl' /></button></Link>
                    </div>
                    <img alt='' className='lg:w-[65%] md:w-[65%] w-full' src={banner} />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default HomeBanner;