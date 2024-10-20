import React from 'react';
import { Link } from 'react-router-dom';
import '../../animations.css';

const MenuItem = ({image, text, to="", hovers=false}) => {

    return (
        <>
            <div className=''>
                <Link to={to}>
                    <div className='flex items-center'>
                        <div className={`ml-3`}>
                            <p className='text-white'>{text}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default MenuItem;
