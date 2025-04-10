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
            <div className={`w-full flex items-start flex-wrap mt-10`}>
                <h1 className='text-white text-3xl'>Connect with me</h1>

                <div className='w-full flex items-start flex-wrap'>
                    <ConnectCard icon={linkedinIcon} link={'https://linkedin.com/in/het--shukla'} title={'Linkedin'} />

                    <ConnectCard icon={xImage} link={'https://x.com/het_shukla66566'} title={'X'} />

                    <ConnectCard icon={emailImage} link={'mailto:contact@hetshukla.com'} title={'Email'} />

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
