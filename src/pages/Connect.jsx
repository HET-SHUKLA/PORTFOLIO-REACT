import React from 'react';
import linkedinIcon from '/Linkedin.png';
import xImage from '/x.png';
import emailImage from '/email.png';
import webImage from '/website.png';
import githubImage from '/github.png';
import mediumImage from '/medium.png';
import stackImage from '/stack.png';
import ConnectCard from '../components/ConnectCard';

const Contact = ({textColor='white', wh='w-11/12'}) => {
    return (
        <>
            <div className={`${wh} flex items-center flex-col my-10 py-5 border border-white`}>
                <div>
                    <h2 className={`text-5xl text-${textColor}`}>Connect with me</h2>
                </div>
                <br />
                <div className={`${wh} flex items-start flex-wrap`}>
                    <ConnectCard icon={linkedinIcon} link={'https://linkedin.com/in/het--shukla'} title={'Linkedin'} />

                    <ConnectCard icon={xImage} link={'https://x.com/het_shukla66566'} title={'X'} />

                    <ConnectCard icon={emailImage} link={'mailto:shuklahet2704@gmail.com'} title={'Email'} />

                    <ConnectCard icon={webImage} link={''} title={'Webapp'} />

                    <ConnectCard icon={githubImage} link={'https://github.com/HET-SHUKLA'} title={'Github'} />

                    <ConnectCard icon={mediumImage} link={'https://medium.com/@shuklahet2704'} title={'Medium'} />

                    <ConnectCard icon={stackImage} link={'https://stackoverflow.com/users/18322169/het-shukla'} title={'Stack overflow'} />

                </div>
            </div>
        </>
    );
}

export default Contact;
