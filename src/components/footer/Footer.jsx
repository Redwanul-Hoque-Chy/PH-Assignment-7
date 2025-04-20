import React, { useState } from 'react';

const Footer = () => {

    return (
        <div className="bg-white mx-auto py-[50px] lg:py-[100px]">
            <div className="justify-center text-center">
                <a className="text-xl lg:text-2xl" href='/'><span className='text-[#003EA4]'>Auction</span><span className='text-[#FFD337]'>Gallery</span></a>
            </div>
            <div className='flex text-base lg:text-xl justify-center gap-[10px]'>
                <div>Bid.</div><div>Win.</div><div>Own.</div>
            </div>
            <div className="flex text-xl lg:text-1xl justify-center gap-[30px] text-center mx-auto">
                <ul className="menu menu-vertical lg:menu-horizontal px-1">
                    <li><a className='text-lg lg:text-xl poppins justify-center'>Home</a></li>
                    <li><a className='text-lg lg:text-xl poppins justify-center'>Auctions</a></li>
                    <li><a className='text-lg lg:text-xl poppins justify-center'>Categories</a></li>
                    <li><a className='text-lg lg:text-xl poppins justify-center'>How to works</a></li>
                </ul>
            </div>
            <div className='text-base lg:text-xl justify-center text-center flex'>
                &copy; 2025 AuctionHub. All rights reserved.
            </div>
        </div>
    )
}

export default Footer;