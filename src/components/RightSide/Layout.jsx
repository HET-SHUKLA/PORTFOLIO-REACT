import React from 'react';
import {Outlet} from 'react-router-dom';
import Menu from '../LeftSide/Menu';

const Layout = () => {
    return (
        <>
            <Menu />
            <div className='h-screen w-full flex justify-center items-center overflow-auto hide-scroll'>
                <Outlet />
            </div>
        </>
    );
}

export default Layout;
