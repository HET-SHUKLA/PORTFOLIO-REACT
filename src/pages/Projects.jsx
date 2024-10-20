import React, { Fragment } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../index.css';

const Projects = ({textColor='white', wh='w-11/12'}) => {
    return (
        <div className={`${wh} my-10 py-5 flex items-center flex-col`}>

            <div>
                <h2 className={`text-${textColor} text-5xl`}>Projects</h2>
            </div>

            <div className='flex flex-wrap h-full w-full overflow-scroll hide-scroll'>
                <ProjectCard projectDesc={'Project Description     Will Come     HERe \n Ok?'} projectTech={'REACT, TAILWIND'} projectImg={'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} projectTitle={'DEMO PROJECT'} projectLink={'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3'} />

                
            </div>
        </div>
    );
}

export default Projects;
