import React from "react";

function Footer() {
    return (
        <>
            <div className="px-8 lg:px-8">
                <footer className="flex flex-col sm:flex-row items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 text-gray-900 dark:bg-gray-900 dark:text-gray-100">

                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            © 2026 Zahid Ahmed. All rights reserved.
                        </p>
                    </div>

                    <div className="mt-4 sm:mt-0">
                        <ul className="flex items-center gap-4">

                            {/* GitHub */}
                            <li title="GitHub">
                                <a
                                    href="#"
                                    className="transition-all hover:opacity-70"
                                    aria-label="GitHub"
                                >
                                    <box-icon
                                        name="github"
                                        type="logo"
                                        color="#8e8e8e"
                                    ></box-icon>
                                </a>
                            </li>

                            {/* LinkedIn */}
                            <li title="LinkedIn">
                                <a
                                    href="#"
                                    className="transition-all hover:opacity-70"
                                    aria-label="LinkedIn"
                                >
                                    <box-icon
                                        type="logo"
                                        name="linkedin"
                                        color="#8e8e8e"
                                    ></box-icon>
                                </a>
                            </li>

                        </ul>
                    </div>

                </footer>
            </div>
        </>
    );
}

export default Footer;