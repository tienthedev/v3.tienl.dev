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
        <div className="h-auto bg-primary flex justify-between px-5 py-5 text-white fixed w-full">
            <a href={"/"}
               className={`animate-fadeUp font-extrabold text-7xl text-secondary tracking-tighter ${leagueSpartan.className}`}>
                tienthedev.
            </a>

            {/* Desktop Nav */}
            <nav className=" hidden md:block">
                <ul className="flex">
                    <li>
                        <a href="/" onClick={handleLinkClick}>
                            I. About
                        </a>
                    </li>
                    <li>
                        <a href="/" onClick={handleLinkClick}>
                            II. Experience
                        </a>
                    </li>
                    <li>
                        <a href="/" onClick={handleLinkClick}>
                            III. Projects
                        </a>
                    </li>
                    <li>
                        <a href="/" onClick={handleLinkClick}>
                            IV. Contact
                        </a>
                    </li>
                </ul>
            </nav>


            <button onClick={handleToggle} className="block md:hidden z-10">
                {!toggle ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/>}
            </button>
            <nav className={!toggle ? "mobile-nav right-[-100%]" : "mobile-nav right-0"}>
                <ul className="flex flex-col">
                    <li>
                        <a href="/#about" onClick={handleLinkClick}>
                            I. About
                        </a>
                    </li>
                    <li>
                        <a href="/#projects" onClick={handleLinkClick}>
                            II. Experience
                        </a>
                    </li>
                    <li>
                        <a href="/#experience" onClick={handleLinkClick}>
                            III. Projects
                        </a>
                    </li>
                    <li>
                        <a href="/#contact" onClick={handleLinkClick}>
                            IV. Contact
                        </a>
                    </li>

                </ul>
            </nav>


        </div>
    );
};

export default Navbar;
