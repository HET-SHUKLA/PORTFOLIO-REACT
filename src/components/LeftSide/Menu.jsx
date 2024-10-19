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

    return (
        <div className={`${hovers && "scale-left"} w-full flex justify-center`}>

            <div className='w-5/6 flex justify-evenly items-center p-2 rounded-lg bg-white/30 backdrop-blur-md' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            
                <MenuItem image={profileImage} text={"Profile"} hovers={hovers} />
                <MenuItem image={projectsImage} text={"Technical Skills"} to={"techstack"} hovers={hovers} />
                <MenuItem image={projectsImage} text={"Projects"} to={"projects"} hovers={hovers} />
                <MenuItem image={aboutImage} text={"About"} to={"about"} hovers={hovers} />
                <MenuItem image={aboutImage} text={"Connect"} to={"connect"} hovers={hovers} />
                
            </div>

        </div>
    );
}

export default Menu;
