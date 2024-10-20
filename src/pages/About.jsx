import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
          <div className='w-full h-5/6 flex flex-col items-center'>
            <div>
              <h1 className='text-5xl'>About Me</h1>
            </div>

            <div className='mt-10'>
              <div className="about-title text-2xl">
                <p>Hello and welcome to my portfolio!</p>
              </div>
              <br />
              <div className="about-content">
                <h2 className='text-xl'>
                I'm Het Shukla, a passionate software developer from India. I earned my Bachelor's in Information Technology with distinction from <a href="www.charusat.ac.in">Charusat University</a>, where I also spent 1.5 years as a Research Fellow. Currently, I'm pursuing my Master’s in Computer Applications at the same university.

                  <br /><br />

                  Why do I code? Because I love it! Over the years, I’ve built numerous projects across various frameworks and technologies, always eager to learn something new. When I'm not coding, you'll probably find me gaming or enjoying outdoor sports (because even developers need some fresh air, right?).

                  <br /><br />

                  If you share my love for programming, or if you have a challenge you'd like me to tackle, feel free to 
                  <a to="/connect" > <strong>connect with me here. </strong></a>

                  <br /><br />

                  Thanks for stopping by, hope to code with you soon!
                </h2>

                <br />
              </div>
            </div>
          </div>
        </>
    );
}

export default About;
