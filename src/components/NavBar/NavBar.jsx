import React, { useState } from 'react';
import { IoNotificationsOutline } from "react-icons/io5";
import userImage from "../../assets/user.png";


const NavBar = () => {

    return (
        <div className="navbar bg-white md:container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a className='text-lg lg:text-xl poppins'>Home</a></li>
                    <li><a className='text-lg lg:text-xl poppins'>Auctions</a></li>
                    <li><a className='text-lg lg:text-xl poppins'>Categories</a></li>
                    <li><a className='text-lg lg:text-xl poppins'>How to works</a></li>
                </ul>
                </div>
                <a className="text-xl" href='/'><span className='text-[#003EA4]'>Auction</span><span className='text-[#FFD337]'>Gallery</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className='text-lg lg:text-xl poppins'>Home</a></li>
                    <li><a className='text-lg lg:text-xl poppins'>Auctions</a></li>
                    <li><a className='text-lg lg:text-xl poppins'>Categories</a></li>
                    <li><a className='text-lg lg:text-xl poppins'>How to works</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className='bg-[#EBF0F5] flex rounded-[50%] w-[40px] h-[40px] text-center items-center justify-center'>
                    <IoNotificationsOutline className='relative inline-block text-[#0E2954] w-[30px] h-[30px]' /><span className='bg-[#0E2954] absolute text-white text-[9px] rounded-[50%] w-[13px] h-[13px] text-center items-center mt-[-20px] mr-[-10px]'>9</span>
                </div>
                <div className='bg-[#EBF0F5] flex rounded-[50%] w-[40px] h-[40px] self-center items-center justify-center ml-[20px]'>
                    <img src={userImage} className='w-[60%] h-[60%]' />
                </div>
            </div>
        </div>
    )
}

export default NavBar;