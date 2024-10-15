import React from 'react';
import profileImage from '/profile.png';
import aboutImage from '/about.png';
import '../../animations.css';
import MenuItem from './MenuItem';

const Menu = () => {
    return (
        <div className='animation-strech h-screen flex items-center mx-10'>

            <div className='flex flex-col justify-evenly items-center h-3/4 rounded-md p-2 border border-purple-500'>
            
                <MenuItem image={profileImage} text={"Profile"} />
                <MenuItem image={aboutImage} text={"About"} to={"about"} />

            </div>

        </div>
    );
}

export default Menu;
