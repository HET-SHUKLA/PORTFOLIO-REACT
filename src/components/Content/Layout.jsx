import React, { Fragment } from 'react';
import {Outlet} from 'react-router-dom';
import Menu from '../Top/Menu';
import Footer from '../Bottom/Footer';

const Layout = () => {
    return (
        <>
            <div className='flex flex-col h-full w-screen overflow-auto hide-scroll'>
                <div className='flex flex-col h-screen w-full'>
                    <div className='w-full flex justify-center fixed z-10'>
                        <Menu />
                    </div>
                    <div className='flex-col h-screen w-full flex items-center mt-20'>
                        <div className='h-screen w-full flex justify-center'>
                            <Outlet />
                        </div>
                        <div className='h-full w-full'>
                            <Footer />
                        </div>
                    </div>
                </div>

                
            </div>
        </>
    );
}

export default Layout;
