import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { NavLink } from "react-router-dom";

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
        { name: "Home", to: "/" },
        { name: "Projects", to: "/projects" },
        { name: "Contact", to: "/contact" },
    ];

    return (
        <>
            <div className="isolate bg-white">
                <div className="px-6 lg:px-8">
                    <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 text-gray-900">

                        {/* Mobile menu button */}
                        <button
                            className="visible md:hidden text-gray-700"
                            aria-label="Open menu"
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            ☰
                        </button>

                        {/* Desktop navigation */}
                        <ul className="flex">
                            {navigation.map((item, i) => (
                                <li key={i}>
                                    <NavLink
                                        to={item.to}
                                        className="font-normal text-gray-600 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:underline transition-all"
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        {/* Initial / logo */}
                        <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center">
                            <span className="text-md font-bold">
                                ZA
                            </span>
                        </div>

                    </nav>

                    {/* Mobile menu */}
                    <Dialog
                        as="div"
                        open={mobileMenuOpen}
                        onClose={setMobileMenuOpen}
                    >
                        <Dialog.Panel className="fixed inset-0 z-20 overflow-y-auto bg-white px-6 py-6 lg:hidden">

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="text-gray-600 text-2xl"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    ×
                                </button>
                            </div>

                            <div className="mt-10">
                                <ul className="space-y-6 text-center">
                                    {navigation.map((item, i) => (
                                        <li key={i}>
                                            <NavLink
                                                to={item.to}
                                                className="text-lg font-medium text-gray-700 hover:underline"
                                                onClick={() =>
                                                    setMobileMenuOpen(false)
                                                }
                                            >
                                                {item.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </Dialog.Panel>
                    </Dialog>
                </div>
            </div>
        </>
    );
}

export default Header;