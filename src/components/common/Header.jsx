import React, { useEffect, useState } from 'react';
import QuantityHandler from './QuantityHandler';
import CartCard from './CartCard';


const Header = () => {
    const [sideBarIsActive, setSideBarIsActive] = useState(false);
    const [cartIsActive, setCartIsActive] = useState(false);
    const [quantity, setQuantity] = useState();
    const handleSideBar = () => {
        setCartIsActive(false);
        setSideBarIsActive(!sideBarIsActive);
    }
    const closeSideBar = () => {
        setSideBarIsActive(false);
    }
    const handleCart = () => {
        setCartIsActive(!cartIsActive);
        setSideBarIsActive(false);
    }
    const closeCartBar = () => {
        setCartIsActive(false);
    }
    const handleQuantityFromOrigin = (quantity) => {
        setQuantity(quantity);
    }


    return (
        <>
            <header className='bg-white left-0 top-0 right-0 fixed z-10'>
                <nav className='flex w-full justify-between items-center h-full py-3 px-[8vw] shadow-md'>

                    <div className=' flex items-center justify-between gap-6'>

                        <div className={`${sideBarIsActive ? 'bg-[#d7d4d4ae]' : ''} transition-all p-1 rounded-sm flex items-center xl:hidden`} onClick={handleSideBar} >
                            <box-icon name='menu' size='md'></box-icon>
                        </div>

                        <div className=' font-medium text-lg hidden xl:!block selection-on-header p-2 cursor-pointer border-2 border-[#fff] hover:border-b-2 hover:border-b-fifth hover:text-fifth transition-all ease-in-out duration-300 border-b-fifth text-fifth' >
                            HOME
                        </div>
                        <div className='font-medium text-lg hidden xl:!block selection-on-header p-2 cursor-pointer border-2 border-[#fff] hover:border-b-2 hover:border-b-fifth hover:text-fifth transition-all ease-in-out duration-300'>
                            SHOP
                        </div>
                        <div className='font-medium hidden text-lg xl:!block selection-on-header p-2 cursor-pointer border-2 border-[#fff] hover:border-b-2 hover:border-b-fifth hover:text-fifth transition-all ease-in-out duration-300'>
                            FEATURED
                        </div>
                        <div className='font-medium hidden text-lg xl:!block selection-on-header p-2 cursor-pointer border-2 border-[#fff] hover:border-b-2 hover:border-b-fifth hover:text-fifth transition-all ease-in-out duration-300'>
                            BLOGS
                        </div>

                    </div>
                    <div className='shrink-0 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <img className='h-16 w-auto' src='/images/logo-w-bg-2.png' />
                    </div>
                    <div className='flex sm:gap-x-[15px]'>
                        <div className='flex items-center p-1 rounded-sm border-2 border-[#fff] hover:border-b-2 hover:border-b-fifth transition-all ease-in-out duration-300'>
                            <box-icon name='search-alt-2' size='md' className=''></box-icon>
                        </div>
                        <div className={`relative p-1 rounded-sm border-2 border-[#fff] hover:border-b-2 hover:border-b-fifth transition-all ease-in-out duration-300 ${cartIsActive ? 'border-b-fifth' : ''}`} onClick={handleCart}>
                            <box-icon name='shopping-bag' size='md'></box-icon>
                            <span className='flex absolute items-center justify-center right-0 bottom-[4px] bg-[#f1b958ef] w-4 h-4 font-semibold rounded-full text-[12px] p-1'>7</span>
                        </div>
                    </div>
                </nav>
                {(sideBarIsActive || cartIsActive) && (<div className={`opacity-0 absolute w-screen h-screen bg-[#25252597] z-[14] delay-1000 ${sideBarIsActive || cartIsActive ? 'opacity-100' : ''}`} ></div>)}
                <div div className={`side-bar absolute ${sideBarIsActive ? 'translate-x-0' : ' translate-x-[-100%]'} w-screen transition-all ease-in-out duration-400 h-screen z-[15] left-0 flex opacity-100`}>
                    <div className='main-bar w-[300px] h-screen bg-gray-100'>
                        <ul>
                            <li className='flex justify-between items-center px-4 py-5 m-4  bg-[#E19251] rounded-md'>
                                <p className='text-[16px]'>
                                    HOME
                                </p>
                                <div className='bg-white flex items-center justify-center w-auto h-auto rounded-full'>
                                    <box-icon name='chevron-right' size='md'></box-icon>
                                </div>
                            </li>
                            <li className='flex justify-between items-center px-4 py-5 m-4  bg-[#dddadaa1] rounded-md'>
                                <p className='text-[16px]'>
                                    SHOP
                                </p>
                                <div className='bg-white flex items-center justify-center w-auto h-auto rounded-full'>
                                    <box-icon name='chevron-right' size='md'></box-icon>
                                </div>
                            </li>
                            <li className='flex justify-between items-center px-4 py-5 m-4  bg-[#dddadaa1] rounded-md'>
                                <p className='text-[16px]'>
                                    FEATURES
                                </p>
                                <div className='bg-white flex items-center justify-center w-auto h-auto rounded-full'>
                                    <box-icon name='chevron-right' size='md'></box-icon>
                                </div>
                            </li>
                            <li className='flex justify-between items-center px-4 py-5 m-4  bg-[#dddadaa1] rounded-md'>
                                <p className='text-[16px]'>
                                    PAGES
                                </p>
                                <div className='bg-white flex items-center justify-center w-auto h-auto rounded-full'>
                                    <box-icon name='chevron-right' size='md'></box-icon>
                                </div>
                            </li>
                            <li className='flex justify-between items-center px-4 py-5 m-4  bg-[#dddadaa1] rounded-md'>
                                <p className='text-[16px]'>
                                    BLOGS
                                </p>
                                <div className='bg-white flex items-center justify-center w-auto h-auto rounded-full'>
                                    <box-icon name='chevron-right' size='md'></box-icon>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div className='blur-bar h-screen w-[calc(100%-290px)] ml-[16px]' onClick={closeSideBar}></div>
                </div>
                <div className={`absolute flex right-0 h-[100dvh] w-screen z-[15] transition-all ease-out duration-400 ${cartIsActive ? 'translate-x-0' : 'translate-x-[100%]'}`}>
                    <div div className='w-[calc(100%-355px)] sm:max-4xl:w-[calc(100%-420px)] h-full' onClick={closeCartBar}></div>
                    <div className='w-[355px] sm:max-4xl:w-[420px] bg-gray-100 relative h-full'>
                        <div div className='h-[calc(100%-190px)] p-2 xl:p-4 snap-y snap-mandatory overflow-y-scroll scroll-smooth'>

                            <div className='flex justify-center item-center py-4 mb-4 gap-2 rounded-lg bg-[#bfbfbf65] xl:py-5 '>
                                <div className='flex items-center'>
                                    <box-icon name='cart-alt' size='30px'></box-icon>
                                </div>
                                <p className='font-bold text-[20px] xl:text-[23px]'>Shopping Cart</p>
                            </div>
                            <CartCard />
                            <CartCard />


                        </div>
                        <div className='absolute flex flex-col inset-x-0 bottom-[74px]'>
                            <div className='flex justify-between bg-white items-center'>
                                <span className='ps-4 py-4 font-semibold text-sm'>Total:</span>
                                <span className='pe-4 py-4 font-extrabold text-base text-[#338873]'>1.200.000đ</span>
                            </div>
                            <div className='grid-cols-1 grid'>
                                <button className='py-4 bg-[#2a2a2a] text-sm text-white font-semibold hover:border-[#494949] transition ease-in-out duration-200 hover:bg-[#494949]'>CHECK OUT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header >




        </>
    );
};

export default Header;