import React from 'react';

const ProjectCard = ({projectImg, projectTitle, projectDesc, projectTech, projectLink=null}) => {
    return (
        <div className='flex border rounded-md w-full h-full'>
            <div className="pr-card-left">
                <img src={projectImg} alt="Project Image" className='h-full p-2' />
            </div>

            <div className="pr-card-right flex flex-col w-full">
                <div className="pr-title text-center">
                    <h2 className='text-3xl'>{projectTitle}</h2>
                </div>
                <div className="pr-tech">
                    <strong>Techstack : </strong>
                    {projectTech}
                </div>
                <div className="pr-desc">
                    <strong>Description : </strong>
                    <pre>
                        {projectDesc}
                    </pre>
                </div>
                <div className="pr-link cursor-pointer">
                    <a href={projectLink} target='_blank'>Link of the Projects</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
