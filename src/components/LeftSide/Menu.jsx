import React from 'react';
import profileImage from '/profile.png';
import aboutImage from '/about.png';
import '../../animations.css';
import MenuItem from './MenuItem';
import { useState } from 'react';

const Menu = () => {

    const [hovers, setHovers] = useState(false);

    const handleMouseEnter = () => {
        setHovers(true);
    }

    const handleMouseLeave = () => {
        setHovers(false);
    }

    return (
        <div className='h-screen flex items-center mx-10'>

            <div className='flex flex-col justify-evenly items-center h-3/4 rounded-md p-2 border border-purple-500' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            
                <MenuItem image={profileImage} text={"Profile"} hovers={hovers} />
                <MenuItem image={aboutImage} text={"About"} to={"about"} hovers={hovers} />

            </div>

        </div>
    );
}

export default Menu;
