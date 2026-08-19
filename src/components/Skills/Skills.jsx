import React from 'react'

function Skills() {
    const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB'
];

    const devtools = [
    'Git',
    'GitHub',
    'VS Code',
    'Postman',
    'Tailwind CSS',
    'Vite',
    'MongoDB Compass'
];
    
    return (
        <>
            <div>
                <h1 className="font-bold text-2xl md:text-2xl  mb-1 text-black dark:text-white">
                    Skills
                </h1>
                <p className="tracking-wide text-gray-600 dark:text-gray-400 mb-16">
                    Technologies and tools I've worked with while building web applications and developing my full-stack skills.
                </p>
                <div className='mt'>
                    <p>Here are a few technologies i work with:
                        <ul className="skills-list">
                            {skills.map((skill, i) => <li key={i} className="relative mb-5 pl-6">{skill}</li>)}
                        </ul>
                    </p><br />
                    <p>Here are few of my Dev tools:
                        <ul className="skills-list">
                            {devtools.map((tools, i) => <li key={i} className="relative mb-5 pl-6">{tools}</li>)}
                        </ul>
                    </p>
                </div>

            </div>
        </>
    )
}

export default Skills