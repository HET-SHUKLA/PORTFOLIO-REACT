import React from 'react';
import profileImage from '/profile.png';
import aboutImage from '/about.png';
import projectsImage from '/projects.png';
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

            <div className='w-5/6 flex justify-evenly items-center p-2 rounded-lg'>
            
                <MenuItem text={"Home"} hovers={hovers}  />
                <MenuItem text={"Technical Skills"} to={"techstack"} hovers={hovers} />
                <MenuItem text={"Projects"} to={"projects"} hovers={hovers} />
                <MenuItem text={"About"} to={"about"} hovers={hovers} />
                <MenuItem text={"Connect"} to={"connect"} hovers={hovers} />
                
            </div>

        </div>
    );
}

export default Menu;
