import React, { Fragment } from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    return (
        <div className='h-full w-full flex justify-start items-center'>
            <div className="scroll h-5/6 border-2 p-1">
                .
            </div>

            <div className="projects-box ml-5 w-4/5 h-1/2">
                <ProjectCard projectDesc={'Project Description     Will Come     HERe \n Ok?'} projectTech={'REACT, TAILWIND'} projectImg={'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} projectTitle={'DEMO PROJECT'} projectLink={'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3'} />
            </div>
        </div>
    );
}

export default Projects;
