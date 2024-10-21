import React from 'react';
import '../index.css';

const ProjectCard = ({projectImg, projectTitle, projectDesc, projectTech, live, github}) => {
    return (
        <>
        
            <div className='h-full p-5 mx-2 bg-gray-900 rounded-lg'>

                <div className='flex w-full justify-center'>
                    <img src={projectImg} alt='Project Image' className='h-40 rounded-lg' />
                </div>

                <div className='mt-2'>
                    <h3 className='text-white text-center text-2xl'>{projectTitle}</h3>
                </div>

                <div className='flex mt-2'>
                    <h3 className='text-white'>
                    <strong className='mr-2'>Tech stack : </strong>
                        {projectTech}
                        </h3>
                </div>

                <div className='flex mt-2 h-52 overflow-scroll hide-scroll'>
                    <p className='text-white'>
                    <strong className='mr-2'>Description : </strong>
                        {projectDesc}
                    </p>
                </div>

                <div className="grid grid-cols-2 mt-5 ">
                    <a href={live} target='_blank' className='bg-gray-950 hover:bg-black p-2 rounded-lg text-white text-center cursor-pointer'>
                        Link
                    </a>

                    <a href={github} target='_blank' className='bg-gray-950 hover:bg-black p-2 rounded-lg text-white ms-3 text-center cursor-pointer'>
                        Github
                    </a>
                </div>

            </div>

        </>
    );
}

export default ProjectCard;
