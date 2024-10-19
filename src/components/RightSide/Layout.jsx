import React, { Fragment } from 'react';
import {Outlet} from 'react-router-dom';
import Wave from 'react-wavify'
import Menu from '../LeftSide/Menu';

const Layout = () => {
    return (
        <>
            <div className='flex flex-col h-full w-screen'>
                <div className='flex flex-col h-screen w-full justify-center items-center'>
                    <div className='w-full flex justify-center'>
                        <Menu />
                    </div>
                    <div className='flex-col h-screen w-full flex items-center overflow-auto hide-scroll'>
                        <Outlet />
                    </div>
                </div>

                <Wave fill='blue'
                    paused={false}
                    style={{ display: 'flex' }}
                    options={{
                        height: 10,
                        amplitude: 20,
                        speed: 0.15,
                        points: 4
                    }}

                    className=''
                />
            </div>
        </>
    );
}

export default Layout;
