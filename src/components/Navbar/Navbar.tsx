'use client';

import { League_Spartan } from 'next/font/google';
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

const Navbar: React.FC = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const handleToggle = () => setToggle(!toggle);
    const handleLinkClick = () => setToggle(false);

    return (
        <div
            className={` ${leagueSpartan.className} h-auto bg-primary flex justify-between px-5 py-5 text-white fixed w-full z-10`}>
            <a
                href="/"
                className={`hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-300 ease-in-out font-extrabold text-5xl text-secondary tracking-tighter animate-fadeUp`}
            >
                tienthedev.
            </a>

            {/* Desktop Nav */}
            <nav className="desktop-nav pt-5 right-20 w-fit hidden md:block">
                <ol className="flex list-decimal">
                    <li className="hidden-initially animate-fadeUp delay-0 scroll-smooth">
                        <a href="/#about" onClick={handleLinkClick}>
                            About
                        </a>
                    </li>
                    <li className="hidden-initially animate-fadeUp delay-200">
                        <a href="/#experience" onClick={handleLinkClick}>
                            Experience
                        </a>
                    </li>
                    <li className="hidden-initially animate-fadeUp delay-400">
                        <a href="/" onClick={handleLinkClick}>
                            Projects
                        </a>
                    </li>
                    <li className="hidden-initially animate-fadeUp delay-600">
                        <a href="/#footer" onClick={handleLinkClick}>
                            Contact
                        </a>
                    </li>
                    <li className="hidden-initially animate-fadeUp delay-800">
                        <a href="/assets/resume.v2.pdf" target="_blank" rel="noopener noreferrer"
                           onClick={handleLinkClick}>
                            Résume
                        </a>
                    </li>
                </ol>
            </nav>

            <button onClick={handleToggle} className="block md:hidden z-10">
                {!toggle ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/>}
            </button>

            <nav className={!toggle ? "mobile-nav right-[-100%]" : "mobile-nav right-0"}>
                <ol className="flex flex-col list-decimal list-inside">
                    <li>
                        <a href="/#about" onClick={handleLinkClick}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/#experience" onClick={handleLinkClick}>
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="/#project" onClick={handleLinkClick}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="/#footer" onClick={handleLinkClick}>
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="/assets/resume.v2.pdf" target="_blank" rel="noopener noreferrer"
                           onClick={handleLinkClick}>
                            Résume
                        </a>
                    </li>
                </ol>
            </nav>


        </div>



    );
};

export default Navbar;
