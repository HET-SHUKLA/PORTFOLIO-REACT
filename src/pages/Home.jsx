import React, { useState, useEffect } from 'react';

import '../animations.css';

import home from '/home.gif';
import arrow from '/explore.gif';

const Home = ({textColor='white', wh='w-11/12'}) => {


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

        <div className={`${wh} flex justify-between p-6 mb-10 border border-white`}>
            <div className='flex flex-col'>
                <div>
                    <p className={`text-5xl text-${textColor}`}>Good {greeting},</p>
                    <h1 className={`text-8xl text-${textColor}`}>I am HET SHUKLA</h1>
                </div>
                <br />
                <div className=''>
                    <h2 className={`text-5xl text-${textColor}`}>{skill} <span className={`blinking ${index === skills.length-1 && 'hidden'}`}>_</span></h2>
                </div>
                <br />
                <div className=''>
                    <h2 className={`text-4xl text-${textColor}`}>I welcome you to My <strong>Portfolio</strong></h2>
                </div>

                <br />
                <br />
                {/* #FF5733 */}
                <div className="flex justify-center">
                    <img src={arrow} alt="" />
                </div>
            </div>

            <div className='ml-2'>
                <img src={home} alt=""/>
            </div>
        </div>

        
    );
}

export default Home;
