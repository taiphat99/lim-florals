import React, { useEffect, useState } from 'react';

const QuantityHandler = ({ number, borderRadius, fontSize, max, onData }) => {
    const [quantity, setQuantity] = useState(number);

    useEffect(() => {
        onData(quantity);
    }, [quantity])

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        if (quantity < max) {
            setQuantity(quantity + 1);
        }
    };

    return (
        <>
            <div className={`items-center flex justify-between gap-3 px-3 py-1 border-[1px] rounded-[${borderRadius}]`} >
                <div className={`text-[${fontSize}]`} onClick={decreaseQuantity} >
                    -
                </div>
                {/* <i className='bx bx-minus minus-icon' style={{ fontSize: `${fontSize}`, color: quantity == 1 ? "rgb(136 136 136 / 36%)" : 'black' }} ></i> */}
                <span className={`quantity-number  text-[${fontSize}] inline-block min-w-[20px] text-center`} >{quantity}</span>
                {/* <i className='bx bx-plus plus-icon' style={{ fontSize: `${fontSize}`, color: quantity == max ? "rgb(136 136 136 / 36%)" : 'black' }} ></i> */}
                <div className={`text-[${fontSize - 5}px]`} onClick={increaseQuantity}>

                    +
                </div>
            </div>
        </>
    );
};

export default QuantityHandler;