import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({image, text, to="", hovers=false}) => {

    return (
        <>
            <div className=''>
                <Link to={to}>
                    <div className='flex items-center'>
                        <div className='w-8 h-8'>
                            <img src={image} alt={text} /> 
                        </div>
                        <div className={`ml-3 ${!hovers && "hidden"}`}>
                            <p>{text}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default MenuItem;
