import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Contact from './common/Contact';
import SwiperBasic from './common/SwiperBasic';

const Home = () => {
    return (
        <>


            <div className='mt-[78px] max-w-[1920px] mx-auto'>
                <div className=''>
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper z-0"
                    >
                        <SwiperSlide>
                            <div className='w-screen'>
                                <div data-aos="fade-up" data-aos-duration="1200" className='absolute max-w-[50vw] left-[7%] top-[30%] translate-y-[-50%]'>
                                    <p className='text-[28px] font-extrabold text-left leading-9 sm:text-[40px] sm:leading-[70px]x` xl:text-[50px] xl:leading-[80px] 2xl:text-[70px] 2xl:leading-[90px]'>Valentine Day</p>
                                    <p className='text-[8px] font-thin text-left leading-2 sm:text-[10px] sm:leading-4 md:text-[12px] md:leading-5 lg:text-[14px] lg:leading-5 xl:text-[16px] xl:leading-7 '>We are on hand to speak with you to create the most beautiful flowers and plants for your events.</p>
                                    <button className='text-[12px] text-white px-4 py-[7px] bg-[#2a2a2a] mt-3 sm:text-[12px] rounded-md shadow-md lg:text-[13px] lg:px-[17px] lg:py-[9px] xl:text-[14px] xl:px-[19px] xl:py-[10px] 2xl:px-[24px] 2xl:py-[12px] 2xl:text-[15px] transition ease-in-out duration-200 hover:bg-[#494949]'>SHOP NOW</button>
                                </div>
                                <img className='w-full' src='https://flocie-store-demo.myshopify.com/cdn/shop/files/slideshowV2-bg1.jpg?v=1686824339' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div data-aos="fade-up" data-aos-duration="1200" className='absolute max-w-[50vw] left-[7%] top-[30%] translate-y-[-50%]'>
                                    <p className='text-[28px] font-extrabold text-left leading-9 sm:text-[40px] sm:leading-[70px]x` xl:text-[50px] xl:leading-[80px] 2xl:text-[70px] 2xl:leading-[90px]'>Valentine Day</p>
                                    <p className='text-[8px] font-thin text-left leading-2 sm:text-[10px] sm:leading-4 md:text-[12px] md:leading-5 lg:text-[14px] lg:leading-5 xl:text-[16px] xl:leading-7 '>We are on hand to speak with you to create the most beautiful flowers and plants for your events.</p>
                                    <button className='text-[12px] text-white px-4 py-[7px] bg-[#2a2a2a] mt-3 sm:text-[12px] rounded-md shadow-md lg:text-[13px] lg:px-[17px] lg:py-[9px] xl:text-[14px] xl:px-[19px] xl:py-[10px] 2xl:px-[24px] 2xl:py-[12px] 2xl:text-[15px] transition ease-in-out duration-200 hover:bg-[#494949]s'>SHOP NOW</button>
                                </div>
                                <img src='https://flocie-store-demo.myshopify.com/cdn/shop/files/slideshowV2-bg2.jpg?v=1686824339' />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className='mx-[8vw] my-8 '>
                    <div className='w-full mx-auto grid grid-cols-2 gap-x-5 sm:w-[70%] sm:gap-x-12 md:w-[60%] md:gap-x-14 lg:gap-x-16 xl:w-[50%] xl:gap-x-20'>
                        <a className='' data-aos="fade-right" data-aos-duration="1200">
                            <div className=''>
                                <img className='w-full aspect-4/5 object-cover rounded-t-full p-1 border-[1px] border-[first] shadow-md' src='https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-cuc-tana-litle-tana.jpg.webp' />
                            </div>
                            <div className='py-2 xl:py-3'>
                                <p className='text-[15px] font-bold xl:leading-8 2xl:text-[20px] 2xl:leading-10'>Fresh Flower</p>
                                <div className='flex items-center'>
                                    <div>
                                        <box-icon type='solid' name='right-arrow' size='xs' color='black'></box-icon>
                                    </div>
                                    <p className='ml-1 text-[13px]'>View Collection</p>
                                </div>
                            </div>
                        </a>
                        <a className='' data-aos="fade-left" data-aos-duration="1200">
                            <div className=''>
                                <img className='w-full aspect-4/5 object-cover rounded-t-full p-1 border-[1px] border-[first] shadow-md' src='https://images.pexels.com/photos/4273435/pexels-photo-4273435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                            </div>
                            <div className='py-2 xl:py-3'>
                                <p className='text-[15px] font-bold xl:leading-8 2xl:text-[20px] 2xl:leading-10'>Dried Flower</p>
                                <div className='flex items-center'>
                                    <div>
                                        <box-icon type='solid' name='right-arrow' size='xs' color='black'></box-icon>
                                    </div>
                                    <p className='ml-1 text-[13px]'>View Collection</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className=''>
                        <div className='grid place-items-center relative mt-7 mb-9'>
                            <div before="" className='before:absolute before:w-28 xl:before:w-36 before:h-[2px] before:bg-fifth before:bottom-[-10px] before:left-[50%] before:translate-x-[-50%] text-[20px] xl:text-[28px] font-semibold'>OUR BEST SELLER</div>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <button className='px-3 py-2 text-[13px] sm:px-4 sm:py-[10px] sm:text-sm bg-fifth text-white border-[1px]  border-fifth rounded-lg shadow-lg xl:text-[16px] xl:px-5 xl:py-3 transition ease-linear duration-200 hover:bg-fifth'>NEW ARRIVALS</button>
                            <button className='px-3 py-2 text-[13px] sm:px-4 sm:py-[10px] sm:text-sm bg-white border-[1px] border-fifth text-fifth rounded-lg shadow-lg xl:text-[16px] xl:px-5 xl:py-3 transition ease-linear duration-200 hover:bg-fifth hover:text-white'>BEST SELLERS</button>
                        </div>
                    </div>

                    <div className=''>
                        <SwiperBasic />
                        <div className='grid place-items-end'>
                            <a className='px-2 rounded-lg py-1 underline cursor-pointer'>
                                More
                            </a>
                        </div>
                    </div>
                    <div className=''>
                        <div className='grid place-items-center relative mt-7 mb-9'>
                            <div before="" className='before:absolute before:w-28 xl:before:w-36 before:h-[2px] before:bg-fifth before:bottom-[-10px] before:left-[50%] before:translate-x-[-50%] text-[20px] xl:text-[28px] font-semibold'>Flower Bouquet</div>
                        </div>
                    </div>
                    <div className=''>
                        <SwiperBasic />
                        <div className='grid place-items-end'>
                            <a className='px-2 rounded-lg py-1 underline cursor-pointer'>
                                More
                            </a>
                        </div>
                    </div>
                    <div className=''>
                        <div className='grid place-items-center relative mt-7 mb-9'>
                            <div before="" className='before:absolute before:w-28 xl:before:w-36 before:h-[2px] before:bg-fifth before:bottom-[-10px] before:left-[50%] before:translate-x-[-50%] text-[20px] xl:text-[28px] font-semibold'>Flower Basket</div>
                        </div>
                    </div>
                    <div className=''>
                        <SwiperBasic />

                        <div className='grid place-items-end'>
                            <a className='px-2 rounded-lg py-1 underline cursor-pointer'>
                                More
                            </a>
                        </div>
                    </div>
                    <div className=''>
                        <div className='grid place-items-center relative mt-7 mb-9'>
                            <div before="" className='before:absolute before:w-28 xl:before:w-36 before:h-[2px] before:bg-fifth before:bottom-[-10px] before:left-[50%] before:translate-x-[-50%] text-[20px] xl:text-[28px] font-semibold'>Flower Tree</div>
                        </div>
                    </div>
                    <div className=''>
                        <SwiperBasic />

                        <div className='grid place-items-end'>
                            <a className='px-2 rounded-lg py-1 underline cursor-pointer'>
                                More
                            </a>
                        </div>
                    </div>

                    <div className=''>
                        <div className='grid place-items-center relative mt-7 mb-9'>
                            <div before="" className='before:absolute before:w-28 xl:before:w-36 before:h-[2px] before:bg-fifth before:bottom-[-10px] before:left-[50%] before:translate-x-[-50%] text-[20px] xl:text-[28px] font-semibold'>Flower Box</div>
                        </div>
                    </div>
                    <div className=''>
                        <SwiperBasic />

                        <div className='grid place-items-end'>
                            <a className='px-2 rounded-lg py-1 underline cursor-pointer'>
                                More
                            </a>
                        </div>
                    </div>


                    {/* <div className='grid grid-cols-2 mt-7 gap-3 sm:grid-cols-3 md:gap-5 sm:gap-6 xl:grid-cols-4 xl:gap-12'>
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



                    </div> */}

                </div>
                <div className='grid grid-cols-1 mt-6 xl:mt-9 xl:grid-cols-2'>
                    <div className="grid place-items-center  bg-no-repeat bg-cover bg-center bg-[url('https://flocie-store-demo.myshopify.com/cdn/shop/files/bannerV4-bg-content.jpg?v=1687423551')]">
                        <div data-aos="fade-up" data-aos-duration="1200" className="xl:p-10 p-5 ">
                            <p className='uppercase text-[12px] font-medium xl:text-[20px]'>Everyday florals</p>
                            <p className='uppercase text-xl font-bold leading-[1.8] xl:text-5xl xl:leading-[2]'>Flowers & Gift</p>
                            <p className='text-[10px] font-extralight xl:text-[12px]'>Where flowers are our inspiration to create lasting memories. Whatever the occasion inspirate...</p>
                            <button className='text-[12px] text-white px-4 py-[7px] bg-[#2a2a2a] mt-3 sm:text-[12px] rounded-md shadow-md lg:text-[13px] lg:px-[17px] lg:py-[9px] xl:text-[14px] xl:px-[19px] xl:py-[10px] 2xl:px-[24px] 2xl:py-[12px] 2xl:text-[15px]'>SHOP NOW</button>
                        </div>
                    </div>
                    <div className=' hidden xl:!block'>
                        <img src='https://flocie-store-demo.myshopify.com/cdn/shop/files/bannerV4-img.jpg?v=1687423678' />
                    </div>
                </div>
                <div className=''>
                    <div className='grid place-items-center relative mt-14 mb-9'>
                        <div before="" className='before:absolute before:w-28 xl:before:w-36 before:h-[2px] before:bg-fifth before:bottom-[-10px] before:left-[50%] before:translate-x-[-50%] text-[20px] xl:text-[28px] font-semibold'>LIM ON INSTAGRAM</div>
                        <div className='text-xl text-fifth'>#limfloral</div>
                    </div>

                    <div className=''>
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                            navigation={true}
                            breakpoints={{
                                350: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                                1280: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className='relative group transition-all ease-in-out duration-1000 rounded-md overflow-hidden'>
                                    <div className='rounded-md overflow-hidden aspect-4/5 '>
                                        <img className='w-full h-full object-cover' src='https://flocie-store-demo.myshopify.com/cdn/shop/files/instagram3.jpg?v=18396290207197529499'></img>
                                    </div>
                                    <button className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:bg-[rgba(12,12,12,0.58)] grid group-hover:opacity-100 opacity-0 w-full h-full place-items-center transition-all duration-300 ease-in-out'>
                                        <box-icon size="lg" name='instagram' type='logo' flip='horizontal' color='#ffffff' ></box-icon>
                                    </button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative group transition-all ease-in-out duration-1000 rounded-md overflow-hidden'>
                                    <div className='rounded-md overflow-hidden aspect-4/5 '>
                                        <img className='w-full h-full object-cover' src='https://flocie-store-demo.myshopify.com/cdn/shop/files/instagram2.jpg?v=11697528573462889490'></img>
                                    </div>
                                    <button className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:bg-[rgba(12,12,12,0.58)] grid group-hover:opacity-100 opacity-0 w-full h-full place-items-center transition-all duration-300 ease-in-out'>
                                        <box-icon size="lg" name='instagram' type='logo' flip='horizontal' color='#ffffff' ></box-icon>
                                    </button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative group transition-all ease-in-out duration-1000 rounded-md overflow-hidden'>
                                    <div className='rounded-md overflow-hidden aspect-4/5 '>
                                        <img className='w-full h-full object-cover' src='https://flocie-store-demo.myshopify.com/cdn/shop/files/instagram4.jpg?v=15261795169908192143'></img>
                                    </div>
                                    <button className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:bg-[rgba(12,12,12,0.58)] grid group-hover:opacity-100 opacity-0 w-full h-full place-items-center transition-all duration-300 ease-in-out'>
                                        <box-icon size="lg" name='instagram' type='logo' flip='horizontal' color='#ffffff' ></box-icon>
                                    </button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative group transition-all ease-in-out duration-1000 rounded-md overflow-hidden'>
                                    <div className='rounded-md overflow-hidden aspect-4/5 '>
                                        <img className='w-full h-full object-cover' src='https://flocie-store-demo.myshopify.com/cdn/shop/files/instagram5.jpg?v=3854439591481542654'></img>
                                    </div>
                                    <button className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:bg-[rgba(12,12,12,0.58)] grid group-hover:opacity-100 opacity-0 w-full h-full place-items-center transition-all duration-300 ease-in-out'>
                                        <box-icon size="lg" name='instagram' type='logo' flip='horizontal' color='#ffffff' ></box-icon>
                                    </button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative group transition-all ease-in-out duration-1000 rounded-md overflow-hidden'>
                                    <div className=' aspect-4/5 rounded-md overflow-hidden '>
                                        <img className='w-full h-full object-cover' src='https://flocie-store-demo.myshopify.com/cdn/shop/files/instagram1.jpg?v=4951894946828140948'></img>
                                    </div>
                                    <button className=' absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:bg-[rgba(12,12,12,0.58)] grid group-hover:opacity-100 opacity-0 w-full h-full place-items-center transition-all duration-400 ease-in-out'>
                                        <box-icon size="lg" name='instagram' type='logo' flip='horizontal' color='#ffffff' ></box-icon>
                                    </button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative group transition-all ease-in-out duration-1000 rounded-md overflow-hidden'>
                                    <div className='rounded-md overflow-hidden aspect-4/5 '>
                                        <img className='w-full h-full object-cover' src='https://flocie-store-demo.myshopify.com/cdn/shop/files/instagram3.jpg?v=18396290207197529499'></img>
                                    </div>
                                    <button className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:bg-[rgba(12,12,12,0.58)] grid group-hover:opacity-100 opacity-0 w-full h-full place-items-center transition-all duration-300 ease-in-out'>
                                        <box-icon size="lg" name='instagram' type='logo' flip='horizontal' color='#ffffff' ></box-icon>
                                    </button>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>

            </div >
        </>
    );
};

export default Home;