import React, { Fragment } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Projects = ({textColor='white', wh='w-11/12'}) => {
    return (
        <div className={`${wh} my-10 py-5 flex items-center flex-col`}>

            <div>
                <h2 className={`text-${textColor} text-5xl`}>Projects</h2>
            </div>

            <Swiper 
                className={`${wh} h-full mt-10`}
                spaceBetween={30}
                slidesPerView={3} // Number of items per view
                navigation={true} // Enables arrows for navigation
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                640: { slidesPerView: 1 },
                }}
            >
                <SwiperSlide className='h-full'>
                    <div className='h-full'>
                        <ProjectCard projectImg={'https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} projectDesc={'Bets Project'} projectTech={'REACT, REACT, REACT'} projectTitle={'REACT'}  />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <ProjectCard projectImg={'https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} projectDesc={'Bets Project'} projectTech={'REACT, REACT, REACT'} projectTitle={'REACT'}  />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <ProjectCard projectImg={'https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} projectDesc={'Bets Project'} projectTech={'REACT, REACT, REACT'} projectTitle={'AAA'}  />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <ProjectCard projectImg={'https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} projectDesc={'Bets Project'} projectTech={'REACT, REACT, REACT'} projectTitle={'VVV'}  />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <ProjectCard projectImg={'https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} projectDesc={'Bets Project'} projectTech={'REACT, REACT, REACT'} projectTitle={'RRR'}  />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <ProjectCard projectImg={'https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} projectDesc={'Bets Project'} projectTech={'REACT, REACT, REACT'} projectTitle={'REACT'}  />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Projects;
