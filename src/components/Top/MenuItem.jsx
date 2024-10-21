import React from 'react';
import { Link } from 'react-router-dom';
import '../../animations.css';

const MenuItem = ({image, text, to="", hovers=false}) => {

    return (
        <>
            <div className='hover:bg-black cursor-pointer p-3 rounded-lg'>
                <button className='text-center' onClick={() => {
                    const ele = document.querySelector(to);
                    ele?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest'
                    })
                }} >
                    <p className='text-white hover:underline'>{text}</p>
                </button>
            </div>
        </>
    );
}

export default MenuItem;
