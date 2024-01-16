import React, { useEffect, useState } from 'react';
import { getDistricts, getProvinces, getWards } from '../service/CommonService';

const Order = () => {

    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [provinceCode, setProvinceCode] = useState(null);
    const [districtCode, setDistrictCode] = useState(null);
    const [provinces, setProvinces] = useState();
    const [districts, setDistricts] = useState();
    const [wards, setWards] = useState();

    const handlePaymentMethod = (event) => {
        setPaymentMethod(event.target.value);
    }

    const callProvinces = async () => {
        const provinces = await getProvinces();
        setProvinces(provinces);
    }

    const callDistricts = async () => {
        const res = await getDistricts(provinceCode);
        setDistricts(res.districts);
    }

    const callWards = async () => {
        const res = await getWards(districtCode);
        setWards(res.wards);
    }

    const handleProvinceChange = (e) => {
        setProvinceCode(e.target.value);
    }

    const handleDistrictChange = (e) => {
        setDistrictCode(e.target.value);
    }

    useEffect(() => {
        callProvinces();
    }, [])

    useEffect(() => {
        districtCode != null && callWards();
    }, [districtCode])

    useEffect(() => {
        provinceCode != null && callDistricts();
    }, [provinceCode])



    return (
        <>
            <div className='mt-[78px] max-w-[1920px] mx-auto'>
                <div className='mx-[8vw] grid grid-cols-12 gap-3'>
                    <div className='bg-[#] col-span-12 order-2 xl:order-2 xl:col-span-8'>
                        <div className='p-2'>
                            {/* <div className=''>
                                <p className='text-[40px] font-bold '>Hello, Pretty Mate</p>
                                <p className=''>Tổng số: 4 sản phẩm</p>
                            </div> */}
                            <div className='mt-8 mb-4'>
                                <p className='text-[24px] font-semibold'>Thông Tin Nhận Hàng</p>
                            </div>
                            <div className=''>
                                <div className='grid mb-4 gap-3 xl:gap-6'>
                                    <input name='name' placeholder='Name' className='placeholder:text-sm px-3 xl:px-6 py-3 border-[1px] focus:border-black rounded-xl focus:outline-none placeholder:font-light ' >
                                    </input>
                                </div>
                                <div className=' grid mb-4 gap-3 xl:gap-6'>
                                    <input name='phonenumber' placeholder='Phone Number' className='placeholder:text-sm px-3 xl:px-6 py-3 focus:border-black border-[1px] rounded-xl focus:outline-none placeholder:font-light'>
                                    </input>
                                </div>
                                <div className='grid mb-4'>
                                    <input name='email' placeholder='Email' className='placeholder:text-sm px-3 xl:px-6 focus:border-black py-3 border-[1px] rounded-xl focus:outline-none placeholder:font-light'></input>
                                </div>
                                <div className='grid mb-4' >
                                    <input name='address' placeholder='Address' className='placeholder:text-sm px-3 focus:border-black xl:px-6 py-3 border-[1px] rounded-xl focus:outline-none placeholder:font-light'></input>
                                </div>
                                <div className='grid grid-cols-1 mb-4 gap-3 lg:gap-6 lg:grid-cols-3'>
                                    <div className='relative group' >
                                        <select onChange={handleProvinceChange} name='city' className='w-full font-light text-sm bg-white focus:border-black overflow-hidden px-3 xl:px-6 py-3 border-[1px] rounded-xl focus:outline-none leading-6'>
                                            <option className='' value={''} disabled selected>
                                                City / Province
                                            </option>
                                            {provinces && provinces.map((p) => {
                                                return (
                                                    <option key={p.code} className='' value={p.code}>
                                                        {p.name}
                                                    </option>
                                                )
                                            })}

                                        </select>
                                        <div id='province' className='absolute right-2 top-[50%] translate-y-[-50%] flex items-center transition ease-in-out duration-200'>
                                            <box-icon name='chevron-down'></box-icon>
                                        </div>
                                    </div>
                                    <div className='relative'>
                                        <select onChange={handleDistrictChange} name='city' className='w-full font-light text-sm bg-white focus:border-black overflow-hidden px-3 xl:px-6 py-3 border-[1px] rounded-xl focus:outline-none leading-6'>
                                            <option className='' value={''} disabled selected>
                                                District
                                            </option>
                                            {districts && districts.map((d) => {
                                                return (
                                                    <option key={d.code} className='' value={d.code}>
                                                        {d.name}
                                                    </option>
                                                )
                                            })}

                                        </select>
                                        <div className='absolute right-2 top-[50%] translate-y-[-50%] flex items-center group-hover:rotate-180 transition ease-in-out duration-200'>
                                            <box-icon name='chevron-down'></box-icon>
                                        </div>
                                    </div>
                                    <div className='relative'>
                                        <select onChange={handleProvinceChange} name='city' className='w-full font-light text-sm bg-white focus:border-black overflow-hidden px-3 xl:px-6 py-3 border-[1px] rounded-xl focus:outline-none leading-6'>
                                            <option className='' value={''} disabled selected>
                                                Ward / Town
                                            </option>
                                            {wards && wards.map((w) => {
                                                return (
                                                    <option key={w.code} className='' value={w.code}>
                                                        {w.name}
                                                    </option>
                                                )
                                            })}

                                        </select>
                                        <div className='absolute right-2 top-[50%] translate-y-[-50%] flex items-center group-hover:rotate-180 transition ease-in-out duration-200'>
                                            <box-icon name='chevron-down'></box-icon>
                                        </div>
                                    </div>
                                </div>
                                <div className='grid mb-4' >
                                    <input name='address' placeholder='Note' className='placeholder:text-sm px-3 focus:border-black xl:px-6 py-3 border-[1px] rounded-xl focus:outline-none placeholder:font-light'></input>
                                </div>
                            </div>
                        </div>
                        <div className='p-2'>
                            <div className='mt-4'>
                                <p className='text-[24px] font-semibold'>Hình Thức Thanh Toán</p>
                            </div>
                            <div className=''>
                                <label className={`opacity-100 flex items-center px-5 py-4 rounded-2xl my-5 border-[1px] xl:max-h-[80px]  overflow-hidden ${paymentMethod === 'cod' ? 'border-[#26579b]' : ''} `}>
                                    <input onChange={handlePaymentMethod} value='cod' checked={paymentMethod === 'cod'} type='radio' name='payment-method' className='transform scale-150 mr-5' />
                                    <div className=' translate-y-[3px] min-w-[100px]'>
                                        <box-icon size='35px' color='' name='truck' type='solid' ></box-icon>
                                    </div>
                                    <span className="text-sm xl:text-base">COD - Thanh toán khi nhận hàng</span>
                                </label>
                                <label className={`opacity-100 flex items-center px-5 py-4 lg:py-7 rounded-2xl my-5 border-[1px] xl:max-h-[80px] overflow-hidden ${paymentMethod === 'vnpay' ? 'border-[#26579b]' : ''}`}>
                                    <input onChange={handlePaymentMethod} value="vnpay" checked={paymentMethod === "vnpay"} type="radio" name="payment-method" className='transform scale-150 mr-5' />
                                    <div className=' min-w-[100px]'>
                                        <img className='h-[16px] w-auto' src='https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-VNPAY-QR.png' />
                                    </div>
                                    <span className="text-sm xl:text-base">Ví điện tử VNPAY / VNPAY QR</span>
                                </label>
                            </div>
                        </div>
                        <div className='flex justify-center my-8'>
                            <button className=' border-[1px] px-10 py-3 border-[#2a2a2a] rounded-xl xl:px-28 bg-[#2a2a2a] text-white font-semibold hover:border-[#494949] transition ease-in-out duration-200 hover:bg-[#494949] shadow-lg'>
                                Thanh toán
                            </button>
                        </div>

                    </div>
                    <div className='col-span-12 order-1 xl:order-2 xl:col-span-4 '>
                        <div className='py-3 bg-[#bfbfbf65] rounded-3xl my-4 border-[1px] '>
                            <div className='flex items-center justify-center gap-2'>
                                <box-icon name='cart-alt' size='35px'></box-icon>
                                <p className='text-[27px] xl:text-[35px] font-bold'>Cart</p>
                            </div>
                            <div className=''>
                                <p className='text-center text-sm'>Tổng số: 2 sản phẩm</p>
                            </div>
                        </div>
                        <div className=' flex flex-col gap-2 py-4'>
                            {/* <div className='flex flex-col items-center gap-5 mt-5'>
                                <p className='font-medium text-lg'>Shopping cart is empty</p>
                                <button className='rounded-lg border-[1px] px-4 py-[10px]  border-[#2a2a2a]  xl:px-14 bg-[#2a2a2a] text-white font-semibold hover:border-[#494949] transition ease-in-out duration-200 hover:bg-[#494949] shadow-lg'>Go to shop</button>
                            </div> */}
                            <div className='bg-white shadow-md rounded-xl gap-2 grid grid-cols-11 p-3 border-[1px]'>
                                <div className='w-[100%] col-span-4 flex items-center'>
                                    <img className='object-cover w-full aspect-4/5 rounded-md' src='https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-cam-chuong-nhap-mau-nau.jpg.webp' />
                                </div>

                                <div className='col-span-7 flex  flex-col gap-4'>
                                    <div className=''>
                                        <p className='text-[15px] xl:text-base'>Blossom Flower Lim Floral and Florist</p>
                                    </div>
                                    <div className='col-span-12 flex items-center'>
                                        <div className=''>
                                            <p className='text-[11px] leading-5 font-extralight sm:max-4xl:text-[12px] sm:max-4xl:leading-5'>Quantity: <span className='text-sm font-normal xl:text-base'>2</span></p>
                                            <p className='text-[11px] leading-5 font-extralight sm:max-4xl:text-[12px] sm:max-4xl:leading-5'>Price: <span className='text-sm font-normal xl:text-base'>120.000đ</span></p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='bg-white shadow-md rounded-xl gap-2 grid grid-cols-11 p-3 border-[1px]'>
                                <div className='w-[100%] col-span-4 flex items-center'>
                                    <img className='object-cover w-full aspect-4/5 rounded-md' src='https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-cam-chuong-nhap-mau-nau.jpg.webp' />
                                </div>

                                <div className='col-span-7 flex flex-col  gap-4'>
                                    <div className=''>
                                        <p className='text-[15px] xl:text-base'>Blossom Flower Lim Floral and Florist</p>
                                    </div>
                                    <div className='col-span-12 flex items-center'>
                                        <div className=''>
                                            <p className='text-[11px] leading-5 font-extralight sm:max-4xl:text-[12px] sm:max-4xl:leading-5'>Quantity: <span className='text-sm font-normal xl:text-base'>2</span></p>
                                            <p className='text-[11px] leading-5 font-extralight sm:max-4xl:text-[12px] sm:max-4xl:leading-5'>Price: <span className='text-sm font-normal xl:text-base'>120.000đ</span></p>
                                        </div>
                                    </div>
                                </div>

                            </div>



                        </div>
                        <div className='flex gap-2 py-4  mt-4'>
                            <div className='flex-grow'>
                                <input placeholder='Nhập mã giảm giá' className='w-full placeholder:font-light placeholder:text-sm rounded-xl border-[1px] px-6 py-[10px] focus:outline-none focus:border-black' />
                            </div>
                            <div>
                                <button className='rounded-xl border-[1px] px-4 py-[10px]  border-[#2a2a2a] bg-[#2a2a2a] text-white hover:border-[#494949] transition ease-in-out  duration-200 hover:bg-[#494949] shadow-lg'>Áp dụng</button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6 border-t-[1px] pt-5'>
                            <div className='flex justify-between'>
                                <p className='text-sm'>Tạm tính</p>
                                <p className='text-sm'>688.000đ</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-sm'>Giảm giá</p>
                                <p className='text-sm'>0đ</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-sm'>Phí giao hàng</p>
                                <p className='text-sm'>Miễn phí</p>
                            </div>
                            <div className='flex justify-between border-y py-4'>
                                <p className='text-sm'>Tổng tiền</p>
                                <p className='font-bold'>688.000đ</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div >
        </>
    );
};

export default Order;