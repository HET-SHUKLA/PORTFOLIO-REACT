import React from 'react';
import linkedinIcon from '/Linkedin.png';
import xImage from '/x.png';
import emailImage from '/email.png';
import webImage from '/website.png';
import githubImage from '/github.png';
import mediumImage from '/medium.png';
import stackImage from '/stack.png';
import ConnectCard from '../components/ConnectCard';
import '../index.css';

const Contact = ({textColor='white', wh='w-11/12'}) => {

    return (
        <>
            <div>
                <h2 className={`text-5xl text-${textColor}`}>Connect with me</h2>
            </div>
            <br />

            <div className='w-full flex flex-col flex-wrap'>
                <h1 className='text-white text-3xl'>Contact me</h1>
                <form action="https://formspree.io/f/xrbgbbna" method="POST" className='w-full flex flex-wrap flex-col mt-5'>
                    <div className='grid grid-flow-col'>
                        <input type="text" required name="name" placeholder='Name*' className='bg-gray-900 rounded-lg px-2 py-2 text-white' />

                        <input type="text" required name="email" placeholder='Email*' className='bg-gray-900 rounded-lg px-2 py-2 text-white ml-3' />
                    </div>
                    <br />
                    <input type="text" required name="subject" placeholder='Subject*' className='bg-gray-900 rounded-lg px-2 py-2 text-white' />
                    <br />
                    <textarea required name="message" cols="30" rows="5" placeholder='Message*' className='bg-gray-900 rounded-lg px-2 py-2 text-white'></textarea>
                    <br />

                    <input type="hidden" name="_redirect" value="/" />

                    <input type="submit" value="Send" name='submit' className='bg-gray-950 hover:bg-gray-900 rounded-lg px-2 py-2 text-white cursor-pointer' />
                </form>
            </div>

            <div className={`w-full flex items-start flex-wrap mt-10`}>
                <h1 className='text-white text-3xl'>Connect with me</h1>

                <div className='w-full flex items-start flex-wrap'>
                    <ConnectCard icon={linkedinIcon} link={'https://linkedin.com/in/het--shukla'} title={'Linkedin'} />

                    <ConnectCard icon={xImage} link={'https://x.com/het_shukla66566'} title={'X'} />

                    <ConnectCard icon={emailImage} link={'mailto:shuklahet2704@gmail.com'} title={'Email'} />

                    <ConnectCard icon={webImage} link={''} title={'Website'} />

                    <ConnectCard icon={githubImage} link={'https://github.com/HET-SHUKLA'} title={'Github'} />

                    <ConnectCard icon={mediumImage} link={'https://medium.com/@shuklahet2704'} title={'Medium'} />

                    <ConnectCard icon={stackImage} link={'https://stackoverflow.com/users/18322169/het-shukla'} title={'Stack overflow'} />

                </div>

            </div>
        </>
    );
}

export default Contact;
