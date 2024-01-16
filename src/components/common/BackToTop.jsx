// BackToTop.js
import React, { useState, useEffect } from 'react';


const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            id="back-to-top"
            title="Back to Top"
            className={`${isVisible ? "visible" : ""} shadow-md hover:bg-fifth relative`}
            onClick={scrollToTop}
        >
            <div className='cursor-pointer absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center'>
                <box-icon name='up-arrow-alt' flip='horizontal' ></box-icon>
            </div>
        </div >
    );
};

export default BackToTop;
