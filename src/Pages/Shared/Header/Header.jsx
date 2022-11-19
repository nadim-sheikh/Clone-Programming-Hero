import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo.png';
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
    const nav = (
        <>
            <Link className='ml-5 font-semibold text-white'>About Us</Link>
            <Link className='ml-5 font-semibold text-white'>Blog</Link>
            <Link className='ml-5 font-semibold text-white'>Success</Link>
            <Link className='ml-5 font-semibold text-white'>Login</Link>
            <Link className='ml-5 font-semibold text-white'>Register</Link>
        </>
    )
    const nav2 = (
        <>
            <Link className='ml-5 pb-3 font-semibold block text-white'>About Us</Link>
            <Link className='ml-5 pb-3 font-semibold block text-white'>Blog</Link>
            <Link className='ml-5 pb-3 font-semibold block text-white'>Success</Link>
            <Link className='ml-5 pb-3 font-semibold block text-white'>Login</Link>
            <Link className='ml-5 pb-3 font-semibold block text-white'>Register</Link>
        </>
    )
    const [menu, setMenu] = useState(false)
    console.log(menu);
    return (
        <div className='flex justify-between mt-6 items-center'>
            <div className="">
                <Link><img src={logo} alt="" className='w-[75%] ml-5 lg:ml-5' /></Link>
            </div>
            <dir className="lg:hidden">
                {
                    menu ? <AiOutlineClose className='  mr-5 lg:mr-0  cursor-pointer text-4xl' onClick={() => { setMenu(!menu) }} />
                        : <FiMenu className=' mr-5 lg:mr-0  cursor-pointer text-4xl' onClick={() => { setMenu(!menu) }} />
                }
            </dir>
            <div className='hidden lg:flex-col lg:flex'>
                <ul>
                    {nav}
                </ul>
            </div>
            <div className={`flex flex-col absolute ${menu ? 'block top-20 py-10 duration-300 bg-[#0F1729] w-full items-center' : 'duration-300 hidden py-10 w-full items-center'}`}>
                {nav2}
            </div>
            <div className='lg:hidden block'>
            </div>
        </div>
    );
};

export default Header;