import React from 'react';
import TechSkill from '../components/TechSkill';

const TechStack = ({textColor='white', wh='w-11/12'}) => {
    return (
        <>
            <div className={`${wh} my-10 py-5 text-center border border-white`}>
                <div>
                    <h2 className={`text-5xl text-${textColor}`}>Tools and Technologies</h2>
                </div>
                <br />
                <div className='px-5 flex flex-wrap'>
                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'} title={'REACT'} />

                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg'} title={'Redux'} />

                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg'} title={'Android Development'} />

                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg'} title={'Node JS'} />

                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'} title={'Express JS'} />

                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'} title={'GIT'} />

                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'} title={'Github'} />

                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg'} title={'ASP.NET'} />

                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'} title={'HTML'} />

                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'} title={'CSS'} />

                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'} title={'Tailwind'} />
                    
                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg'} title={'Sass'} />

                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg'} title={'Firebase'} />
                    
                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg'} title={'Appwrite'} />

                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg'} title={'Oracle'} />

                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'} title={'Postgres'} />

                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg'} title={'SQL'} />

                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'} title={'Mongo'} />

                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg'} title={'PHP'} />

                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'} title={'Java'} />

                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'} title={'JS'} />

                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'} title={'TS'} />

                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg'} title={'C'} />

                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg'} title={'C++'} />

                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg'} title={'Kotlin'} />

                    <TechSkill icon={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg'} title={'C#'} />

                </div>
            </div>
        </>
    );
}

export default TechStack;
