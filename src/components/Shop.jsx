import { Slider } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Shop = () => {
    const [priceRange, setPriceRange] = useState([0, 2000000]);
    const [filter, setFilter] = useState(false);

    const handleShowFilter = () => {
        setFilter(!filter);
    }
    const handleChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    return (
        <>
            <div className='mt-[90px] max-w-[1920px] mx-auto'>
                {/* <div className=''>
                    <div className='flex mx-[8vw] py-3 border-b-[2px] gap-3'>
                        <a className=''>Home</a>
                        <p className=''>&gt;</p>
                        <p className=''>Products</p>
                    </div>
                </div> */}
                <div className='mx-[8vw] xl:grid xl:grid-cols-12 gap-2 3xl:gap-10'>
                    <div className='hidden xl:!block xl:col-span-4 max-w-[360px] 3xl:col-span-3 '>
                        <div className='grid grid-cols-2 border-[1px] p-3 rounded-md sticky top-[105px]'>
                            <div className='col-span-2 overflow-hidden p-2'>
                                <div className='relative mb-6'>
                                    <p className='text-[19px] p-1 font-medium border-l-[3px] border-black after:border-b-[1px] after:absolute after:w-full after:top-[50%] after:translate-x-3 '>
                                        Shapes
                                    </p>
                                </div>
                                <label class="checkbox-container">Bó
                                    <input type="checkbox" checked="checked">
                                    </input>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-container">Lẵng
                                    <input type="checkbox">
                                    </input>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-container">Cây Khai Trương
                                    <input type="checkbox">
                                    </input>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-container">Cây Viếng Thăm
                                    <input type="checkbox">
                                    </input>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-container">Hoa Wedding
                                    <input type="checkbox">
                                    </input>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-container">Hộp
                                    <input type="checkbox">
                                    </input>
                                    <span class="checkmark"></span>
                                </label>

                            </div>
                            <div className='col-span-2 overflow-hidden p-2'>
                                <div className='relative mb-6'>
                                    <p className='text-[19px] p-1 font-medium border-l-[3px] border-black after:border-b-[1px] after:absolute after:w-full after:top-[50%] after:translate-x-3 '>Categories</p>
                                </div>
                                <label class="radio-container">Fresh Flower
                                    <input type="radio" name="radio"></input>
                                    <span class="radio-checkmark"></span>
                                </label>
                                <label class="radio-container">Dried Flower
                                    <input type="radio" name="radio"></input>
                                    <span class="radio-checkmark"></span>
                                </label>
                            </div>
                            <div className='col-span-2 overflow-hidden p-2'>
                                <div className='relative mb-6'>
                                    <p className='text-[19px] p-1 font-medium border-l-[3px] border-black after:border-b-[1px] after:absolute after:w-full after:top-[50%] after:translate-x-3 '>Price Range</p>
                                </div>
                                <div className=''>
                                    <Box sx={{ width: '80%', marginX: 'auto' }}>
                                        <Slider
                                            value={priceRange}
                                            onChange={handleChange}
                                            defaultValue={[0, 2000000]}
                                            min={0}
                                            max={3000000}
                                            step={50000}

                                        />
                                    </Box>
                                    <div className='flex justify-between'>
                                        <div className='px-2 py-1 bg-[#f2f2f283] rounded-[4px]  shadow-md flex flex-nowrap'>
                                            <p className='text-[9px]'> Min: <span className='text-sm font-semibold md:text-base '>{(new Intl.NumberFormat("de-DE").format(priceRange[0]))}</span> VND</p>
                                        </div>
                                        <div className='px-2 py-1 bg-[#f2f2f283] rounded-[4px]  shadow-md'>
                                            <p className='text-[9px]  '> Max: <span className='text-sm font-semibold md:text-base '>{(new Intl.NumberFormat("de-DE").format(priceRange[1]))}</span> VND</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border-t-[1px] col-span-2 pt-3 mt-4 flex justify-center'>
                                <button className='px-4 py-2 border-[1px] rounded-[7px] shadow-lg border-[#292929] hover:text-white hover:bg-[#292929] transition ease-in-out duration-200'>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='xl:col-span-8 3xl:col-span-9'>
                        <div className='flex justify-between mb-4 mt-4'>
                            <button onClick={handleShowFilter} className={`visible xl:invisible flex items-center justify-center px-4 py-2 border-[1px] rounded-[7px] shadow-md border-[#292929] ${filter ? ' bg-[#292929] text-white' : 'bg-white '} `}>
                                <box-icon box-icon name='filter-alt' color={`${filter ? 'white' : 'black'}`} flip='horizontal' ></box-icon>
                                <p>Filter</p>
                            </button>

                            <select className='px-3 py-2 focus:outline-none border-b-[1px] hover:border-black transition ease-in-out duration-200' >
                                <option value='latest'>Mới nhất</option>
                                <option value='bestsellers'>Bán chạy nhất</option>
                                <option value='price_asc'>Giá tăng dần</option>
                                <option value='price_desc'>Giá giảm dần</option>
                            </select>

                        </div>
                        <div className={`${filter ? 'max-h-[700px]' : 'max-h-0'} overflow-hidden transition-all ease-in-out duration-500 mb-5`}>                            <div className={`grid grid-cols-2 border-[1px] p-3 rounded-md`}>
                            <div className='col-span-2 sm:col-span-1 overflow-hidden p-2'>
                                <div className='relative mb-6'>
                                    <p className='text-[19px] p-1 font-medium border-l-[3px] border-black after:border-b-[1px] after:absolute after:w-full after:top-[50%] after:translate-x-3 '>
                                        Shapes
                                    </p>
                                </div>
                                <label class="checkbox-container">Bó
                                    <input type="checkbox" checked="checked">
                                    </input>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-container">Lẵng
                                    <input type="checkbox">
                                    </input>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-container">Cây Khai Trương
                                    <input type="checkbox">
                                    </input>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-container">Cây Viếng Thăm
                                    <input type="checkbox">
                                    </input>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-container">Hoa Wedding
                                    <input type="checkbox">
                                    </input>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-container">Hộp
                                    <input type="checkbox">
                                    </input>
                                    <span class="checkmark"></span>
                                </label>

                            </div>
                            <div className='col-span-2 sm:col-span-1 overflow-hidden p-2'>
                                <div className='relative mb-6'>
                                    <p className='text-[19px] p-1 font-medium border-l-[3px] border-black after:border-b-[1px] after:absolute after:w-full after:top-[50%] after:translate-x-3 '>Categories</p>
                                </div>
                                <label class="radio-container">Fresh Flower
                                    <input type="radio" name="radio"></input>
                                    <span class="radio-checkmark"></span>
                                </label>
                                <label class="radio-container">Dried Flower
                                    <input type="radio" name="radio"></input>
                                    <span class="radio-checkmark"></span>
                                </label>
                            </div>
                            <div className='col-span-2 overflow-hidden p-2'>
                                <div className='relative mb-6'>
                                    <p className='text-[19px] p-1 font-medium border-l-[3px] border-black after:border-b-[1px] after:absolute after:w-full after:top-[50%] after:translate-x-3 '>Price</p>
                                </div>
                                <div className=''>
                                    <Box sx={{ width: '80%', marginX: 'auto' }}>
                                        <Slider
                                            value={priceRange}
                                            onChange={handleChange}
                                            defaultValue={[0, 2000000]}
                                            min={0}
                                            max={3000000}
                                            step={50000}
                                        />
                                    </Box>
                                    <div className='flex justify-between'>
                                        <div className='px-2 py-1 bg-[#f2f2f283] rounded-[4px]  shadow-md flex flex-nowrap'>
                                            <p className='text-[9px]'> Min: <span className='text-sm font-semibold md:text-base '>{(new Intl.NumberFormat("de-DE").format(priceRange[0]))}</span> VND</p>
                                        </div>
                                        <div className='px-2 py-1 bg-[#f2f2f283] rounded-[4px]  shadow-md'>
                                            <p className='text-[9px]  '> Max: <span className='text-sm font-semibold md:text-base '>{(new Intl.NumberFormat("de-DE").format(priceRange[1]))}</span> VND</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border-t-[1px] col-span-2 pt-3 mt-4 flex justify-center'>
                                <button className='px-4 py-2 border-[1px] rounded-[7px] shadow-lg border-[#292929]'>
                                    Search
                                </button>
                            </div>
                        </div>
                        </div>
                        <div className=''>
                            <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-6 md:gap-5 xl:gap-6 3xl:grid-cols-4'>
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

                            </div>
                            <div className='flex justify-center mt-4 '>
                                <Stack spacing={2}>
                                    <Pagination count={3} boundaryCount={1} siblingCount={0} variant="outlined" shape="rounded" />
                                </Stack>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Shop;