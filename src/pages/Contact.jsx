import React from 'react';
import linkedinIcon from '/Linkedin.png';
import xImage from '/x.png';
import emailImage from '/email.png';
import webImage from '/website.png';
import githubImage from '/github.png';
import mediumImage from '/medium.png';
import stackImage from '/stack.png';

const Contact = () => {
    return (
        <>
            <div className='w-full h-5/6 flex items-center flex-col'>
                <div>
                    <h2 className='text-5xl'>Connect with me</h2>
                </div>

                <div className='w-5/6 mt-28 flex items-start flex-wrap justify-between'>
                    <div className='h-16 w-16 m-2'>
                        <a href="https://linkedin.com/in/het--shukla" target='_blank'>
                            <img src={linkedinIcon} alt="Linkedin Icon" />
                        </a>
                    </div>

                    <div className='h-16 w-16 m-2'>
                        <a href="https://x.com/het_shukla66566" target='_blank'>
                            <img src={xImage} alt="X Icon" />
                        </a>
                    </div>

                    <div className='h-16 w-16 m-2'>
                        <a href="mailto:shuklahet2704@gmail.com" target='_blank'>
                            <img src={emailImage} alt="Email Icon" />
                        </a>
                    </div>

                    <div className='h-16 w-16 m-2'>
                        <a href="" target='_blank'>
                            <img src={webImage} alt="Webapp Icon" />
                        </a>
                    </div>

                    <div className='h-16 w-16 m-2'>
                        <a href="https://github.com/HET-SHUKLA" target='_blank'>
                            <img src={githubImage} alt="Github Icon" />
                        </a>
                    </div>

                    <div className='h-16 w-16 m-2'>
                        <a href="https://medium.com/@shuklahet2704" target='_blank'>
                            <img src={mediumImage} alt="Medium Icon" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
