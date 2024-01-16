import React from 'react';

const Footer = () => {
    return (

        <div className=''>
            <div className='grid grid-cols-1 place-items-center xl:grid-cols-12 border-b'>
                <div className='grid grid-cols-1 gap-4 place-items-center px-10 py-3 xl:col-span-3'>
                    <img className='h-20 w-auto' src='/images/logo-w-bg-2.png' />
                    <div className=' flex gap-2'>
                        <box-icon name='instagram' type='logo' color='#000' ></box-icon>
                        <box-icon type='logo' name='facebook-circle'></box-icon>
                        <box-icon name='twitter' type='logo' ></box-icon>
                        <box-icon name='youtube' type='logo' ></box-icon>
                    </div>
                    <p className='text-xs font-light text-center'>
                        Subscribe our newsletter and get discount 10% off
                    </p>
                </div>
                <div className='w-[70%] flex rounded-lg overflow-hidden xl:col-span-9 my-2'>
                    <div className='w-[85%] bg-[#f4f4f4] px-5 py-3'>
                        <input className='bg-[#f4f4f4] focus:outline-none w-full' placeholder='Your email address... '></input>
                    </div>
                    <div className='w-[15%] grid place-content-center bg-[#2a2a2a] transition ease-in-out duration-200 hover:bg-[#494949]'>
                        <box-icon name='paper-plane' color='#ffffff' ></box-icon>
                    </div>
                </div>


            </div>
            <div className='p-2'>
                <p className='font-extralight text-xs'>© Copyright 2022 | Lim Floral</p>
            </div>

        </div>
    );
};

export default Footer;