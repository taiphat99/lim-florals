import React from 'react';

const CartCard = () => {
    return (
        <>

            <div className='bg-white shadow-lg rounded-lg mb-4 gap-2 grid grid-cols-11 p-2 snap-end'>
                <div className='w-[100%] col-span-4 flex items-center'>
                    <img className='object-cover w-full aspect-4/5 rounded-md' src='https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-cam-chuong-nhap-mau-nau.jpg.webp' />
                </div>
                <div className='col-span-7 flex flex-col justify-between'>

                    <div className=''>
                        <p className='text-[15px]'>Blossom Flower Lim Floral and Florist</p>
                    </div>

                    <div className='col-span-12 flex justify-between items-center'>
                        <div className=''>
                            <p className='text-[11px] leading-5 font-extralight sm:max-4xl:text-[12px] sm:max-4xl:leading-5'>Quantity: <span className='text-sm font-medium'>2</span></p>
                            <p className='text-[11px] leading-5 font-extralight sm:max-4xl:text-[12px] sm:max-4xl:leading-5'>Price: <span className='text-sm font-medium'>120.000đ</span></p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='text-[20px] border-[1px] px-3 py-[2px] rounded-t-md flex items-center justify-center select-none cursor-pointer hover:bg-[#2a2a2a] hover:text-white transition duration-200 ease-in-out'>+</div>
                            <div className='text-[20px] border-[1px] px-3 py-[2px] rounded-b-md flex items-center justify-center select-none cursor-pointer hover:bg-[#2a2a2a] hover:text-white transition duration-200 ease-in-out'>-</div>
                        </div>
                    </div>
                    <div className=''>
                        <button className=' border-[1px] rounded-md py-1 px-2 hover:border-black transition duration-200 ease-in-out'>
                            <div className='flex text-[14px] items-center gap-1 '>
                                <box-icon name='trash' size='22px'></box-icon>
                                <span className='font-light'>Xoá</span>
                            </div>
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default CartCard;