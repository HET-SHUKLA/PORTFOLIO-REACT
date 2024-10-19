import React, { useState, useEffect } from 'react';

import '../animations.css';

const Home = () => {

    const skills = ['Web Application Developer...', 'Android Developer...', 'A Software Developer!']
    
    const [skill, setSkill] = useState(skills[0]);
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(20);

    const currTime = new Date().getHours();
    let greeting;

    if(currTime < 12)
        greeting = 'Morning';
    else
        greeting = 'Evening';

        useEffect(() => {
            const typingTimeout = setTimeout(() => {
                if (isDeleting) {
                    setSubIndex(prev => prev - 1);
                } else {
                    setSubIndex(prev => prev + 1);
                }
    
                if (!isDeleting && subIndex === skills[index].length) {
                    if(index === skills.length-1) return;
                    setTimeout(() => setIsDeleting(true), 1000); 
                } else if (isDeleting && subIndex === 0) {
                    setIsDeleting(false);
                    setIndex((prev) => {
                        if(prev < skills.length - 1){
                            return prev+1;
                        } else{
                            return prev;
                        }
                    });
                }
    
                setSpeed(isDeleting ? 10 : 50);
            }, speed);
    
            return () => clearTimeout(typingTimeout);


        }, [subIndex, isDeleting, index]);
    
        useEffect(() => {
            setSkill(skills[index].substring(0, subIndex));
        }, [subIndex, index]);
    
    return (
        <div className='w-5/6 h-3/4 flex flex-col rounded-lg bg-white/30 backdrop-blur-md py-6'>
            <div>
                <p className='text-5xl text-center'>Good {greeting},</p>
                <br />
                <h1 className='text-7xl text-center'>I am HET SHUKLA</h1>
            </div>
            <br />
            <div className='mt-10'>
                <h2 className='text-5xl text-center'>{skill} <span className={`blinking ${index === skills.length-1 && 'hidden'}`}>_</span></h2>
            </div>
            <div className='mt-16'>
                <h2 className='text-3xl text-center'>I welcome you to My <strong>Portfolio</strong></h2>
            </div>
            
        </div>
        
    );
}

export default Home;
