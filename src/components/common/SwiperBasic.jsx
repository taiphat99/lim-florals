import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const SwiperBasic = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper py-4 mt-3 mb-0"
                navigation={true}
                breakpoints={{
                    350: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },

                }}
            >
                <SwiperSlide>
                    <div className='flex flex-col bg-[#fff] rounded-[11px] overflow-hidden shadow-md'>
                        <div className='relative'>
                            <img className='object-cover w-full aspect-square' src='https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/christmas-eve.jpg.webp' />
                            <button className='cursor-pointer  transition-all ease-in-out duration-200 flex items-center bg-third px-2 py-2 rounded-md gap-1 mx-auto absolute top-[5%] right-[5%] lg:px-[10px] lg:py-[10px] hover:bg-fourth' >
                                <box-icon name='plus-circle' className="relative"></box-icon>
                            </button>
                        </div>
                        <div className='px-2 py-4 flex-1 flex flex-col gap-1 md:px-3 md:py-5'>
                            <p className='font-medium text-xs flex-1 md:text-sm xl:text-base'>Ocean Buckle Bouquet</p>
                            <p className='text-[13px] text-fifth font-bold xl:text-[16px]'>500.000đ</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col bg-[#fff] rounded-[11px] overflow-hidden shadow-md'>
                        <div className='relative'>
                            <img className='object-cover w-full aspect-square' src='https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/christmas-eve.jpg.webp' />
                            <button className='cursor-pointer  transition-all ease-in-out duration-200 flex items-center bg-third px-2 py-2 rounded-md gap-1 mx-auto absolute top-[5%] right-[5%] lg:px-[10px] lg:py-[10px] hover:bg-fourth' >
                                <box-icon name='plus-circle' className="relative"></box-icon>
                            </button>
                        </div>
                        <div className='px-2 py-4 flex-1 flex flex-col gap-1 md:px-3 md:py-5'>
                            <p className='font-medium text-xs flex-1 md:text-sm xl:text-base'>Ocean Buckle Bouquet</p>
                            <p className='text-[13px] text-fifth font-bold xl:text-[16px]'>500.000đ</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col bg-[#fff] rounded-[11px] overflow-hidden shadow-md'>
                        <div className='relative'>
                            <img className='object-cover w-full aspect-square' src='https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/christmas-eve.jpg.webp' />
                            <button className='cursor-pointer  transition-all ease-in-out duration-200 flex items-center bg-third px-2 py-2 rounded-md gap-1 mx-auto absolute top-[5%] right-[5%] lg:px-[10px] lg:py-[10px] hover:bg-fourth' >
                                <box-icon name='plus-circle' className="relative"></box-icon>
                            </button>
                        </div>
                        <div className='px-2 py-4 flex-1 flex flex-col gap-1 md:px-3 md:py-5'>
                            <p className='font-medium text-xs flex-1 md:text-sm xl:text-base'>Ocean Buckle Bouquet</p>
                            <p className='text-[13px] text-fifth font-bold xl:text-[16px]'>500.000đ</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col bg-[#fff] rounded-[11px] overflow-hidden shadow-md'>
                        <div className='relative'>
                            <img className='object-cover w-full aspect-square' src='https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/christmas-eve.jpg.webp' />
                            <button className='cursor-pointer  transition-all ease-in-out duration-200 flex items-center bg-third px-2 py-2 rounded-md gap-1 mx-auto absolute top-[5%] right-[5%] lg:px-[10px] lg:py-[10px] hover:bg-fourth' >
                                <box-icon name='plus-circle' className="relative"></box-icon>
                            </button>
                        </div>
                        <div className='px-2 py-4 flex-1 flex flex-col gap-1 md:px-3 md:py-5'>
                            <p className='font-medium text-xs flex-1 md:text-sm xl:text-base'>Ocean Buckle Bouquet</p>
                            <p className='text-[13px] text-fifth font-bold xl:text-[16px]'>500.000đ</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col bg-[#fff] rounded-[11px] overflow-hidden shadow-md'>
                        <div className='relative'>
                            <img className='object-cover w-full aspect-square' src='https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/christmas-eve.jpg.webp' />
                            <button className='cursor-pointer  transition-all ease-in-out duration-200 flex items-center bg-third px-2 py-2 rounded-md gap-1 mx-auto absolute top-[5%] right-[5%] lg:px-[10px] lg:py-[10px] hover:bg-fourth' >
                                <box-icon name='plus-circle' className="relative"></box-icon>
                            </button>
                        </div>
                        <div className='px-2 py-4 flex-1 flex flex-col gap-1 md:px-3 md:py-5'>
                            <p className='font-medium text-xs flex-1 md:text-sm xl:text-base'>Ocean Buckle Bouquet</p>
                            <p className='text-[13px] text-fifth font-bold xl:text-[16px]'>500.000đ</p>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    );
};

export default SwiperBasic;