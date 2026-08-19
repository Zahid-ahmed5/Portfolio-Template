import React from "react";
import Portfolio from "./Portfolio";

function Projects() {
    return (
        <>
            <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 pt-6 p-5">
                <div>
                    <h1 className="font-extrabold text-2xl md:text-2xl mb-1 text-black dark:text-white">
                        Projects
                    </h1>
                    <p className="tracking-wide text-gray-600 dark:text-gray-400 mb-16">
    Here are some of the projects I've built while learning and working with
    JavaScript and the MERN stack, along with smaller projects that helped me
    strengthen my problem-solving and development skills.
</p>
                </div>
                <Portfolio/>
            </div>
        </>
    )
}

export default Projects;