import React from 'react';

const TechSkill = ({icon, title}) => {    
    return (
        <>
            <div className='bg-gray-900 flex py-2 px-4 mx-2 mt-6 rounded-lg items-center hover:scale-110 cursor-pointer'>
                <div>
                    <img src={icon} alt="Icon" className='w-10' />
                </div>

                <div className='mx-5 text-center'>
                    <h4 className={`text-white text-md`}>{title}</h4>
                </div>
            </div>
        </>
    );
}

export default TechSkill;
