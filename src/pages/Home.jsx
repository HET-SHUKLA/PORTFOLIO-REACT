import React, { useState, useEffect } from 'react';

import '../animations.css';
import linkedinIcon from '/Linkedin.png';
import xImage from '/x.png';
import githubImage from '/github.png';
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

        <div className={`${wh} flex flex-col justify-between p-6 mb-10 `}>
            <div className={`w-full flex justify-between bg-gray-900 rounded-lg`}>
                <div className='flex flex-col bg-gray-900 p-5 rounded-lg'>
                    <div>
                        <p className={`text-3xl text-${textColor}`}>Good {greeting},</p>
                        <h1 className={`text-4xl text-${textColor}`}>I am HET SHUKLA</h1>
                    </div>
                    <br />
                    <div className=''>
                        <h2 className={`text-3xl text-${textColor}`}>{skill} <span className={`blinking ${index === skills.length-1 && 'hidden'}`}>_</span></h2>
                    </div>
                    <br />
                    <div className=''>
                        <h2 className={`text-2xl text-${textColor}`}>I welcome you to My <strong>Portfolio</strong></h2>
                    </div>

                    <div className='flex mt-10'>
                        <a href="https://linkedin.com/in/het--shukla" target='_blank'><img src={linkedinIcon} alt="Icon" className='w-8' /></a>
                        <a href="https://x.com/het_shukla66566" target='_blank'><img src={xImage} alt="Icon" className='w-8 mx-5' /></a>
                        <a href="https://github.com/HET-SHUKLA" target='_blank'><img src={githubImage} alt="Icon" className='w-8' /></a>
                    </div>
                </div>

                <div className='ml-2'>
                    <img src={home} alt=""/>
                </div>
            </div>

            
            <div className="flex justify-center">
                <img src={arrow} alt="" />
            </div>

        </div>

        
    );
}

export default Home;
