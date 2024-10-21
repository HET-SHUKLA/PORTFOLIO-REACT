import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import news from '/projects/news.png';
import whisper from '/projects/whisper.png';
import portfolio from '/projects/portfolio.png';
import blog from '/projects/blog.png';
import '../index.css';


const Projects = ({textColor='white', wh='w-11/12'}) => {
    return (
        <div className={`${wh} control my-10 py-5 flex items-center flex-col`} id='projects'>

            <div>
                <h2 className={`text-${textColor} text-5xl`}>Projects</h2>
            </div>

            <Swiper 
                className={`w-full h-full mt-10`}
                spaceBetween={30}
                slidesPerView={3} // Number of items per view
                navigation={true} // Enables arrows for navigation
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                scrollbar={{ draggable: true }}
                breakpoints={{
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                640: { slidesPerView: 1 },
                }}
            >
                <SwiperSlide className=''>
                    <div className=''>
                        <ProjectCard 
                        projectImg={whisper} 
                        projectTitle={'Whisper'} 
                        projectTech={'Kolin, XML, Firebase, FCM'}
                        projectDesc={'Whisper is a E2EE(Using Deffie Hellman Algo) private social media application with video call, voice call and Reat time chat functionality. Other than that it also include functionalities like Follow, Unfollow, Post, Upvote, Downvote, Dynamic app theme, Location sharing, Contact Sharing, Gemini AI, can have Multiple accounts from single email, search user, Give Alias to the follower for notification.'}   
                        live={'https://drive.google.com/file/d/1cJdGB4zTX88li6ND9aCXjhRY4BHeRHf2/view'} 
                        github={'https://github.com/HET-SHUKLA/Whisper'}  />
                    </div>
                </SwiperSlide>

                <SwiperSlide className=''>
                    <div className=''>
                        <ProjectCard 
                        projectImg={news} 
                        projectTitle={'News Teller'} 
                        projectTech={'Node JS, Express JS, EJS, REST API, HTML, CSS'}
                        projectDesc={'News Teller is a web app that allows user to see news from all over the world. User can filter the news based on category as well as region. Also user can search perticular news. This web app is created using NEWS API and in free version it can only handle 50 requests per day.'}   
                        live={'https://newsteller-9rfw.onrender.com/'} 
                        github={'https://github.com/HET-SHUKLA/NewsTeller'}  />
                    </div>
                </SwiperSlide>

                <SwiperSlide className=''>
                    <div className=''>
                        <ProjectCard 
                        projectImg={portfolio} 
                        projectTitle={'Portfolio website'}  
                        projectTech={'React, Tailwind'}
                        projectDesc={'Personal portfolio website, I have created using REACT, this was my 2nd React projects.'}   
                        live={'#'} 
                        github={'https://github.com/HET-SHUKLA/PORTFOLIO-REACT'}  />
                    </div>
                </SwiperSlide>

                <SwiperSlide className=''>
                    <div className=''>
                        <ProjectCard 
                        projectImg={blog} 
                        projectTitle={'Blog App'} 
                        projectTech={'React, Tailwind, TinyMCE, AppWrite'}
                        projectDesc={'It is just a simple blog app, I have created by watching tutorial, Also this was my first ever React app.'}   
                        live={'https://github.com/HET-SHUKLA/React-Blog-Webapp'} 
                        github={'https://github.com/HET-SHUKLA/React-Blog-Webapp'}  />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Projects;
