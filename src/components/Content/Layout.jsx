import React, {useState, useEffect} from 'react';
import '../../index.css';
import {Home, About, Projects, Contact, TechStack} from '../../pages';
import Menu from '../Top/Menu';
import Footer from '../Bottom/Footer';


const Layout = () => {

    let sc = 0;

    const wh = 'w-11/12';

    const [isVisible, setIsVisible] = useState(false);
    const [isAbout, setIsAbout] = useState(false);
    const [isTech, setIsTech] = useState(false);
    const [isProject, setIsProject] = useState(false);
    const [isContact, setIsContact] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500); // Wait 100ms before showing content

        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    const handleScroll = (e) => {
        sc++;

        if(sc > 5){
            setIsAbout(true);
        }
        if(sc > 25){
            setIsProject(true);
        }
        if(sc > 15){
            setIsTech(true);
        }
        if(sc > 35){
            setIsContact(true);
        }
    }

    return (
        <>
            <div className={`flex flex-col h-screen w-screen overflow-auto hide-scroll app ${isVisible ? 'visible' : ''}`}  onScroll={handleScroll}>
                <div className='flex flex-col w-full'>
                    <div className={`w-full flex justify-center fixed z-10 `}>
                        <Menu />
                    </div>
                    <div className={`flex-col w-full flex items-center mt-20 control ${isVisible ? 'visible' : ''}`}>
                        <section className={`${wh} control flex flex-col justify-between p-6 mb-10 `} id='home'>
                            <Home textColor={'white'} />
                        </section>

                        <section className={`${wh} control my-10 p-5 flex flex-col items-center `} id='about'>
                            <About textColor={'white'} />
                        </section>

                        <section className={`${wh} control my-10 py-5 text-center`} id='techstack'>
                            <TechStack textColor={'white'} />
                        </section>

                        <section className={`${wh} control my-10 py-5 flex items-center flex-col`} id='projects'>
                            <Projects textColor={'white'} />
                        </section>

                        <section className={`${wh} control flex items-center flex-col my-10 py-5`} id='contact'>
                            <Contact  textColor={'white'} />
                        </section>
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
