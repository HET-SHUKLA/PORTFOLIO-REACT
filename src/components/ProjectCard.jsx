import React from 'react';

const ProjectCard = ({projectImg, projectTitle, projectDesc, projectTech, projectLink=null}) => {
    return (
        <>
        
            <div className='h-full p-5 mx-2 bg-gray-900 rounded-lg'>

                <div className='flex w-full justify-center'>
                    <img src={projectImg} alt='Project Image' className='h-40 rounded-lg' />
                </div>

                <div>
                    <h3 className='text-white'><a href={projectLink}>{projectTitle}</a></h3>
                </div>

                <div>
                    <h3 className='text-white'>{projectTech}</h3>
                </div>

                <div>
                    <p className='text-white'>
                        {projectDesc}
                    </p>
                </div>

            </div>

        </>
    );
}

export default ProjectCard;
