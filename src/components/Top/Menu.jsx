import React from 'react';
import '../../animations.css';
import MenuItem from './MenuItem';
import { useState } from 'react';

const Menu = () => {

    const [hovers, setHovers] = useState(false);

    const handleMouseEnter = () => {
       // setTimeout(function() {
            setHovers(true);
       // }, 1000);
    }

    const handleMouseLeave = () => {
        //setTimeout(function() {
            setHovers(false);
        //}, 1000);
    }
    // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    return (
        <div className={`w-full flex justify-center`}>

            <div className='w-full flex justify-evenly items-center p-2 rounded-lg bg-transparent backdrop-blur-sm'>
            
                <MenuItem text={"Home"} hovers={hovers} to={'#home'}  />
                <MenuItem text={"About"} to={"#about"} hovers={hovers} />
                <MenuItem text={"Technical Skills"} to={"#techstack"} hovers={hovers} />
                <MenuItem text={"Projects"} to={"#projects"} hovers={hovers} />
                <MenuItem text={"Contact"} to={"#contact"} hovers={hovers} />
                
            </div>

        </div>
    );
}

export default Menu;
