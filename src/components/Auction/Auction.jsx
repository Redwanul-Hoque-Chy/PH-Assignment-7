import React, { useEffect, useState } from 'react';
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

const Auction = () => {
    const [auction, setAuction] = useState([]);

    useEffect(() => {
        fetch('auction.json')
            .then(res => res.json())
            .then(data => setAuction(data))
    }, []);

    const [clickBid, setClickBid] = useState([]);

    const [favourite, setFavourite] = useState([]);

    const [totalBid, setTotalBid] = useState([]);

    const handleClickBid = (id) => {
        setAuction((auctionAll) =>
            auctionAll.map((oneAuction) =>
                oneAuction.id === id
                ? { ...oneAuction, disabled: true }
                : oneAuction
            )
        );

        if(!favourite.includes(id)) {
            setFavourite((favList) => [...favList, id]);
            toast.success("Item added to favourites!");
        }

        if(!totalBid.includes(id)) {
            setTotalBid((totalList) => [...totalList, id]);
        }
        
    };

    const handleRemoveFav = (id) => {
        const newFav=favourite.filter(favData => favData !== id);
        setFavourite(newFav);
        toast.warning("Item removed from favourites!");

        const newTotalBid = totalBid.filter((totalB) => totalB !== id);
        setTotalBid(newTotalBid);

        setAuction((auctionAll) =>
            auctionAll.map((oneAuction) =>
                oneAuction.id === id ? { ...oneAuction, disabled: false } : oneAuction
            )
        );
    }; 

    const favouriteData=favourite.map((id) =>
        auction.find((favData)=> favData.id === id)
    );

    const totalBidData=totalBid.map((id) =>
        auction.find((totalData)=> totalData.id === id)
    );

    let total = 0;

    for (let i = 0; i < totalBidData.length; i++) {
        total += totalBidData[i].currentBidPrice;
    }

    return (
        <div className='bg-[#EBF0F5]'>
            <div className='md:container mx-auto py-[50px] flex flex-col'>
                <div>
                    <h2 className='text-[#0E2954] text-xl lg:text-2xl font-medium'>Active Auctions</h2>
                    <p className='text-base lg:text-xl opacity-80'>Discover and bid on extraordinary items</p>
                </div>
                <div className='grid grid-cold-2 lg:grid-cols-3 gap-[20px] mt-[20px]'>
                    <div className='col-span-1 lg:col-span-2 bg-white rounded-[24px]'>
                        <div className='grid grid-cols-6 gap-[10px] mt-[20px] mb-[10px] px-[20px]'>
                            <div className='text-base lg:text-lg col-span-3'>Items</div>
                            <div className='text-base lg:text-lg text-center'>Current Bid</div>
                            <div className='text-base lg:text-lg text-center'>Time Left</div>
                            <div className='text-base lg:text-lg text-center'>Bid Now</div>
                        </div>
                        {
                            auction.map(auctions =>
                                <div className='flex flex-col'>
                                    <hr className='border-[#DCE5F3] border-t-1 my-[10px]' />
                                    <div className='grid grid-cols-6 gap-[10px] my-[10px] px-[20px] items-center'>
                                        <div className='text-base lg:text-lg col-span-3 flex items-center gap-[10px]'><img src={auctions.image} className='w-[96px] h-[96px]' />{auctions.title}</div>
                                        <div className='text-base lg:text-lg text-center'>${auctions.currentBidPrice}</div>
                                        <div className='text-base lg:text-lg text-center'>{auctions.timeLeft} Left</div>
                                        <div className='text-base lg:text-lg text-center mx-auto'>
                                            <button onClick={()=>handleClickBid(auctions.id)} disabled={auctions.disabled}
                                            style={{
                                                cursor: auctions.disabled ? 'not-allowed' : 'pointer'
                                            }}>
                                                {auctions.disabled ?<FaHeart className='text-center justify-center text-[#ff0000]' />:<FiHeart className='text-center justify-center'/>}
                                            </button>
                                        </div>
                                    </div>
                                </div> 
                            )
                        }
                    </div>
                    <div className='col-span-1 bg-white rounded-[24px]'>
                        <h6 className='text-[#0E2954] text-xl lg:text-2xl text-center justify-center flex items-center gap-[10px] my-[10px]'><FiHeart /> Favorite Items</h6>
                        {favouriteData.length > 0 ? (
                        favouriteData.map((data, index) => (
                            <div>
                                <hr className='border-[#DCE5F3] border-t-1 mt-[20px] mb-[10px]' />
                                <div className='grid grid-cols-[96px_1fr_20px] gap-[10px] px-[10px]'>
                                    <div>
                                        <img src={data.image} className='w-[96px] h-[96px]' />
                                    </div>
                                    <div>
                                        <h6 className='text-lg lg:text-xl'>{data.title}</h6>
                                        <div className="flex">
                                            <div className='text-sm lg:text-base flex-1'>${data.currentBidPrice}</div>
                                            <div className='text-sm lg:text-base flex-1'>Bids: {data.bidsCount}</div>
                                        </div>
                                    </div>
                                    <div>
                                    <button key={data.id} onClick={()=>handleRemoveFav(data.id)} style={{ cursor: 'pointer' }} className='text-[#ff0000] font-bold'>X
                                    </button>
                                    </div>
                                </div>
                            </div>
                        ))
                        ) : (
                            <div>
                                <hr className='border-[#DCE5F3] border-t-1 mt-[20px] mb-[10px]' />
                                <h6 className='text-lg lg:text-xl text-center justify-center font-medium'>No items</h6>
                                <p className='text-sm lg:text-base text-center justify-center opacity-70'>Click the heart icon on any item to add it to your favorites</p>
                            </div>
                        )}
                        <hr className='border-[#DCE5F3] border-t-1 my-[10px]' />
                        <div className='flex justify-between px-[20px] my-[10px]'>
                            <h5 className='text-lg lg:text-xl'>Total bids Amount</h5>
                            {totalBidData.length > 0 ? (
                                <div><h5 className='text-lg lg:text-xl'>${total.toLocaleString()}</h5></div>
                            ):
                            (
                                <div><h5 className='text-lg lg:text-xl'>$0000</h5></div>
                            )
                            }  
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Auction;