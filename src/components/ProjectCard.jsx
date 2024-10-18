import React from 'react';

const ProjectCard = ({projectImg, projectTitle, projectDesc, projectTech, projectLink=null}) => {
    return (
        <>
        
            <div className='w-3/12 h-5/6 border-red-50 border mx-2 p-2'>

                <div className='flex w-full justify-center'>
                    <img src={projectImg} alt='Project Image' className='h-40' />
                </div>

                <div>
                    <h3><a href={projectLink}>{projectTitle}</a></h3>
                </div>

                <div>
                    <h3>{projectTech}</h3>
                </div>

                <div>
                    <p>
                        {projectDesc}
                    </p>
                </div>

            </div>

        </>
    );
}

export default ProjectCard;
