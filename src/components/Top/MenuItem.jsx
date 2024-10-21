import React from 'react';
import { Link } from 'react-router-dom';
import '../../animations.css';

const MenuItem = ({image, text, to="", hovers=false}) => {

    return (
        <>
            <div className='hover:bg-black cursor-pointer p-3 rounded-lg'>
                <a to={to} className='text-center'>
                    <p className='text-white'>{text}</p>
                </a>
            </div>
        </>
    );
}

export default MenuItem;
