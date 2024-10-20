import React from 'react';
import Wave from 'react-wavify'

const Footer = () => {
    return (
        <div className='w-full'>
            <Wave fill='#111827'
                paused={false}
                options={{
                    height: 20,
                    amplitude: 20,
                    speed: 0.15,
                    points: 5
                }}
            />

            <h1 className='text-xl text-white text-center -mt-20'>Design and Developed by <strong>HET SHUKLA</strong> </h1>
        </div>
    );
}

export default Footer;
