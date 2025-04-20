import React, { useState } from 'react';
import bannerImage from "../../assets/Banner-min.jpg";

const Banner = () => {

    return (
        <div className="carousel mx-auto justify-center flex">
            <div className="carousel-item w-full relative">
                <img src={bannerImage} className="w-[100%] h-[400px] object-cover" />
            </div>
            <div className="mx-auto md:container absolute flex-col text-white items-center self-center px-[10px] lg:px-0">
                <h2 className="text-2xl lg:text-4xl font-semibold text-white">Bid on Unique Items from<br></br>Around the World</h2>
                <p className="text-base lg:text-xl font-light text-white opacity-80 mt-[20px] w-full lg:w-[600px]">Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
                <button className='bg-white py-[16px] px-[32px] text-[#010000] font-medium text-base lg:text-lg rounded-[35px] mt-[20px]'>Explore Auctions</button>
            </div>
        </div>
    )
}

export default Banner;