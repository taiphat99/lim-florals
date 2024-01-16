import React from 'react';
import 'animate.css';

const Contact = () => {
    return (
        <>
            <a className=' bg-green-600 fixed bottom-6 left-5 z-10 rounded-full'>
                <div className=' grid place-items-center w-[48px] aspect-square  animate__animated animate__tada animate__infinite'>
                    <box-icon size="md" name='phone-call' type='solid' color='#ffffff' ></box-icon>
                </div>
            </a>
            <a className='fixed bottom-20 left-5 z-10 bg-red-600 rounded-full'>
                <div className=' grid place-items-center w-[48px] aspect-square  animate__animated animate__tada animate__infinite'>
                    <box-icon size="md" name='messenger' type='logo' color='#ffffff' ></box-icon>
                </div>
            </a>
            <a className='fixed bottom-36 left-5 z-10 grid place-items-center w-[48px] aspect-square rounded-full animate__animated animate__tada animate__infinite'>
                <img className='w-[90%] h-[90%] object-cover' src='/public/images/zalo-logo.webp' />
            </a>
        </>
    );
};

export default Contact;