'use client';

import Link from 'next/link'
import { League_Spartan } from 'next/font/google';
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, Variants } from 'framer-motion';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });


const fadeDownVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            delay: 0,        // you can override this via props
        },
    },
}
const Navbar: React.FC = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const handleToggle = () => setToggle(!toggle);
    const handleLinkClick = () => setToggle(false);

    return (

        <div className={` ${leagueSpartan.className}   text-white  `}>
            <div
                className={` h-auto bg-primary flex justify-between px-5 py-5  fixed w-full z-10`}>
                <Link
                    href="/"
                    className={`hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-300 ease-in-out font-extrabold text-5xl text-secondary tracking-tighter animate-fadeUp`}
                >
                    tienthedev.
                </Link>
                <motion.section
                    variants={fadeDownVariants}
                    initial="hidden"
                    animate="visible"
                >
                {/* Desktop Nav */}
                <nav className="desktop-nav pt-5 right-20 w-fit hidden md:block">
                    <ol className="flex list-decimal">
                        <li className=" animate-fadeUp delay-0 scroll-smooth">
                            <Link href="/#about" onClick={handleLinkClick}>
                                About
                            </Link>
                        </li>
                        <li className=" animate-fadeUp delay-200">
                            <Link href="/#experience" onClick={handleLinkClick}>
                                Experience
                            </Link>
                        </li>
                        <li className=" animate-fadeUp delay-400">
                            <Link href="/#project" onClick={handleLinkClick}>
                                Projects
                            </Link>
                        </li>
                        <li className=" animate-fadeUp delay-600">
                            <Link href="/#footer" onClick={handleLinkClick}>
                                Contact
                            </Link>
                        </li>
                        <li className=" animate-fadeUp delay-800">
                            <Link href="/assets/TienDungLe_resume.pdf" target="_blank" rel="noopener noreferrer"
                               onClick={handleLinkClick}>
                                Résume
                            </Link>
                        </li>
                    </ol>
                </nav>
                </motion.section>


                <button onClick={handleToggle} className="block md:hidden z-10">
                    {!toggle ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/>}
                </button>

                <nav className={!toggle ? "mobile-nav right-[-100%]" : "mobile-nav right-0"}>
                    <ol className="flex flex-col list-decimal list-inside">
                        <li>
                            <Link href="/#about" onClick={handleLinkClick}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/#experience" onClick={handleLinkClick}>
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link href="/#project" onClick={handleLinkClick}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/#footer" onClick={handleLinkClick}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/assets/TienDungLe_resume.pdf" target="_blank" rel="noopener noreferrer"
                               onClick={handleLinkClick}>
                                Résume
                            </Link>
                        </li>
                    </ol>

                </nav>

            </div>
        </div>
    );
};

export default Navbar;
