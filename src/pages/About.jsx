import React from 'react';
import { Link } from 'react-router-dom';

const About = ({textColor='white', wh='w-11/12'}) => {
    return (
        <>
          <div className={`${wh} my-10 p-5 flex flex-col items-center`} id='about'>
            <div>
              <h1 className={`text-5xl text-${textColor}`}>About Me</h1>
            </div>
            <br />
            <div className='p-5 bg-gray-900 rounded-lg'>
              <div className="about-title text-2xl">
                <h2 className={`text-2xl text-${textColor}`}>Hello and welcome to my portfolio!</h2>
              </div>
              <br />
              <div className="about-content">
                <h2 className={`text-xl text-${textColor}`}>
                I'm Het Shukla, a passionate software developer from India. I earned my Bachelor's in Information Technology with distinction from <a href="www.charusat.ac.in">Charusat University</a>, where I also spent 1.5 years as a Research Fellow. Currently, I'm pursuing my Master’s in Computer Applications at the same university.

                  <br /><br />

                  Why do I code? Because I love it! Over the years, I’ve built numerous projects across various frameworks and technologies, always eager to learn something new. When I'm not coding, you'll probably find me gaming or enjoying outdoor sports (because even developers need some fresh air, right?).

                  <br /><br />

                  If you share my love for programming, or if you have a challenge you'd like me to tackle, feel free to 
                  <a href="#connect" > <strong>connect with me here. </strong></a>

                  <br /><br />

                  Thanks for stopping by, hope to code with you soon!
                </h2>
              </div>
            </div>
          </div>
        </>
    );
}

export default About;
