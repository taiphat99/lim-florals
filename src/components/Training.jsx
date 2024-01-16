import React, { useEffect, useRef, useState } from 'react';


const Training = () => {
    const divRef = useRef(null);
    const [clickedOutside, setClickedOutside] = useState(false);

    const handleClick = (event) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
            setClickedOutside(true);
        } else {
            setClickedOutside(false);
        }
    };

    useEffect(() => {
        // Attach the event listener on component mount
        document.addEventListener('click', handleClick);

        // Detach the event listener on component unmount
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []); // Empty dependency array ensures that the effect runs only once on mount
    return (
        <div ref={divRef} className='bg-red-400 w-full h-20'>
            <p>Click inside or outside this div.</p>
            {clickedOutside && <p>You clicked outside the div!</p>}
        </div>
    );
};


export default Training;