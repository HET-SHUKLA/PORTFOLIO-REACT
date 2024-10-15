import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '/profile.png';
import aboutImage from '/about.png';

const Menu = () => {
    return (
        <div className='h-screen flex items-center mx-10'>

            <div className='flex flex-col justify-evenly items-center h-3/4 rounded-md p-2 border border-purple-500'>
            
                <div className='w-8 h-8'>
                    <Link to=""> <img src={profileImage} alt="Profile" /> </Link>
                </div>

                <div className='w-8 h-8'>
                    <Link to="/about"> <img src={aboutImage} alt="About" /> </Link>
                </div>
            </div>

        </div>
    );
}

export default Menu;
