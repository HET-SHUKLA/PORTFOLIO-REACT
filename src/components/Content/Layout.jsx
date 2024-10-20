import React from 'react';
import {Home, About, Projects, Contact, TechStack} from '../../pages';
import Menu from '../Top/Menu';
import Footer from '../Bottom/Footer';

const Layout = () => {
    return (
        <>
            <div className='flex flex-col h-screen w-screen overflow-auto hide-scroll'>
                <div className='flex flex-col w-full'>
                    <div className='w-full flex justify-center fixed z-10'>
                        <Menu />
                    </div>
                    <div className='flex-col w-full flex items-center mt-20'>
                        <Home textColor={'white'} />
                        <About textColor={'white'} />
                        <TechStack textColor={'white'} />
                        <Projects textColor={'white'} />
                        <Contact  textColor={'white'} />
                    </div>                    
                </div>

                <div className='flex-col w-full flex items-center mt-20'>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Layout;
