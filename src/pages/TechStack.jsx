import React from 'react';

const TechStack = ({textColor='white', wh='w-11/12 h-3/4'}) => {
    return (
        <>
            <div className={`${wh} my-10 py-5 border border-white text-center`}>
                <div>
                    <h2 className={`text-5xl text-${textColor}`}>Technologies and Tools</h2>
                </div>

                <br />
                <br />

                <div>
                    <p className={`text-${textColor} text-3xl `}><strong>Frontend : </strong> React js, XML, HTML, CSS, JS</p>
                </div>
                <br />
                <div>
                    <p className={`text-${textColor} text-3xl`}><strong>Backend : </strong> Node js, Express js, ASP.NET, PHP</p>
                </div>
                <br />
                <div>
                    <p className={`text-${textColor} text-3xl`}><strong>Database : </strong> MongoDB, Postgres, Oracle</p>
                </div>
            </div>
        </>
    );
}

export default TechStack;
