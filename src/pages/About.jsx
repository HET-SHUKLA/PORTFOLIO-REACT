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
                <p>Hello, I once again welcome you to my Portfolio.</p>
              </div>
              <br />
              <div className="about-content">
                <h2 className='text-xl'>
                  I am HET SHUKLA. A Passionate Software Developer from India. I have completed my bachelors in Bachelor's of Science In Information Technology with Distinction at <a href="www.charusat.ac.in">CHARUSAT UNIVERSITY</a>. I worked as a Research Fellow at my University for 1.5 years, and right now I am persuing my Masters in Computer Applications at the same University.

                  <br /><br />

                  I love Developing, I have created many Projects in multiple Frameworks with multiple Technology. Apart from programming, I also love Gaming and outdoor sport.

                  <br /><br />

                  If you also love programming, or you have some task for me then you can connect with me 
                  <Link> Here</Link>

                  <br /><br />

                  Thank You for visiting.

                </h2>
              </div>
            </div>
          </div>
        </>
    );
}

export default About;
