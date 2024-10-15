import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({image, text, to=""}) => {
    return (
        <>
            <div className=''>
                <Link to={to}>
                    <div className='flex'>
                        <div className='w-8 h-8'>
                            <img src={image} alt={text} /> 
                        </div>
                        <span className='hidden'>{text}</span>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default MenuItem;
