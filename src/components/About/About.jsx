import React from "react";
import Skills from "../Skills/Skills";

function About() {
    return (
        <>
            <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 pt-6 p-5">

                {/* Introduction */}
                <div className="flex flex-col-reverse sm:flex-row items-start">

                    <div className="flex flex-col pr-8">

                        <h1 className="font-extrabold text-3xl md:text-4xl mb-1 text-black dark:text-white">
                            Zahid Ahmed
                        </h1>

                        <h2 className="tracking-wide text-gray-700 dark:text-gray-200 mb-4">
                            MERN Stack Developer
                        </h2>

                        <p className="tracking-wide text-gray-600 dark:text-gray-400 mb-16">
                            I'm a MERN Stack Developer focused on building
                            responsive, practical, and user-friendly web
                            applications. I enjoy solving problems through
                            code and turning ideas into working projects.
                        </p>

                    </div>

                    <div className="w-[80px] sm:w-[206px] relative mb-8 sm:mb-0 mr-auto">
                        <img
                            src="/images/IMG_0203.jpg"
                            alt="Zahid Ahmed"
                            title="Zahid Ahmed"
                            className="rounded-full grayscale hover:grayscale-0"
                        />
                    </div>

                </div>

                {/* About Me */}
                <div>

                    <h1 className="font-bold text-2xl md:text-2xl mb-4 text-black dark:text-white">
                        About Me
                    </h1>

                    <p className="tracking-wide text-gray-600 dark:text-gray-400 mb-16">
                        I'm a developer who was drawn to programming because
                        of its logical and problem-solving nature. I enjoy
                        understanding how things work and building solutions
                        once I understand the underlying concepts.
                        <br />
                        <br />
                        I've worked with JavaScript, React, Node.js,
                        Express.js, and MongoDB while building projects and
                        strengthening my understanding of full-stack
                        development.
                        <br />
                        <br />
                        I'm currently looking for an entry-level developer
                        role or internship where I can contribute to real
                        projects, continue learning, and grow as a developer.
                    </p>

                </div>

                <Skills />

            </div>
        </>
    );
}

export default About;