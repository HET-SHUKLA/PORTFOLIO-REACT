import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='h-screen flex items-center mx-10'>
            <div className='text-center content-center h-3/4 rounded-md p-2 border border-purple-500'>
                <ul>
                    <li> <Link to="">Home</Link> </li>
                    <li> <Link to="about">About</Link> </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;
