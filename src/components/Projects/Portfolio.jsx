
import React from "react";

function Portfolio() {
    const projects = [
        {
            title: "My Cart — MERN E-commerce Application",
            description:
                "A full-stack e-commerce application built with React, Node.js, Express, and MongoDB. Includes product browsing, authentication, cart management, orders, reviews, and an admin workflow.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            demo: "https://my-cart-henna.vercel.app",
            github: "https://github.com/Zahid-ahmed5/My-Cart",
        },
        {
            title: "Amazon Clone",
            description:
                "A frontend Amazon-inspired webpage built with HTML and CSS, focused on recreating a real-world e-commerce layout, navigation, product sections, and responsive styling.",
            tech: ["HTML", "CSS"],
            demo: "https://amazon-clone-project-xi-nine.vercel.app",
            github: "https://github.com/Zahid-ahmed5/Amazon-clone-project",
        },
        {
            title: "Notes Application",
            description:
                "A browser-based notes application built with HTML, CSS, and JavaScript, featuring dynamic note creation, editing, deletion, and DOM manipulation.",
            tech: ["HTML", "CSS", "JavaScript"],
            demo: "https://notes-dla5ozog7-zahid23.vercel.app",
            github: "https://github.com/Zahid-ahmed5/notes-app",
        },
        {
            title: "Search & Filter",
            description:
                "A JavaScript project that lets users search and filter a collection of data dynamically, demonstrating DOM manipulation, event handling, and array methods.",
            tech: ["HTML", "CSS", "JavaScript"],
            demo: "https://search-filter-lake.vercel.app/",
            github: "https://github.com/Zahid-ahmed5/search-filter",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="relative overflow-hidden group rounded-xl bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300"
                >
                    {/* Project image */}
                    <img
                        className="w-full aspect-video object-cover transition duration-500 ease-in-out transform group-hover:scale-105"
                        src={`https://placehold.co/1280x720?text=${encodeURIComponent(
                            project.title
                        )}`}
                        alt={project.title}
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Project content */}
                    <div className="absolute inset-0 flex flex-col justify-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto">
                        <h2 className="text-white font-bold text-xl mb-2">
                            {project.title}
                        </h2>

                        <p className="text-gray-200 text-sm leading-relaxed mb-4">
                            {project.description}
                        </p>

                        {/* Technology badges */}
                        <div className="flex flex-wrap gap-2 mb-5">
                            {project.tech.map((technology) => (
                                <span
                                    key={technology}
                                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/15 text-white border border-white/20"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-2">
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block bg-white text-black py-2 px-4 rounded-md font-medium hover:bg-gray-200 transition duration-300"
                            >
                                Live Demo
                            </a>

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block bg-gray-800 text-white py-2 px-4 rounded-md font-medium hover:bg-gray-700 transition duration-300"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Portfolio;

