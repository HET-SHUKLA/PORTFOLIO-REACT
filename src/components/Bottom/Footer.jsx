import React from 'react';
import Wave from 'react-wavify'

const Footer = () => {
    return (
        <Wave fill='blue'
            paused={false}
            style={{ display: 'flex' }}
            options={{
                height: 30,
                amplitude: 20,
                speed: 0.15,
                points: 4
            }}

            className=''
        />
    );
}

export default Footer;
