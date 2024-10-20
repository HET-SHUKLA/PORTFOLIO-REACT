import React from 'react';
import {Home, About, Projects, Contact, TechStack} from '../../pages';
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
                        <Home textColor={'white'} />
                        <TechStack textColor={'white'} />
                        <About textColor={'white'} />
                        <Projects textColor={'white'} />
                        <Contact  textColor={'white'} />
                    </div>
                    <div className='h-full w-full'>
                        {/* <Footer /> */}
                    </div>
                </div>

                
            </div>
        </>
    );
}

export default Layout;
