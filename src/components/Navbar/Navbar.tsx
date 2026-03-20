'use client';

import Link from 'next/link'
import { League_Spartan } from 'next/font/google';
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, Variants } from 'framer-motion';
import { SectionKey } from '@/types/sections';

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

type NavbarProps = {
    onNavigate: (section: SectionKey) => void;
    activeSection: SectionKey;
};

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
    const [toggle, setToggle] = useState<boolean>(false);
    const handleToggle = () => setToggle(!toggle);
    const handleLinkClick = () => setToggle(false);
    const handleNavigate = (section: SectionKey) => {
        onNavigate(section);
        setToggle(false);
    };

    const navItemClass = (section: SectionKey) =>
        `text-white underline-offset-4 transition-all duration-200 ${activeSection === section ? 'underline' : 'no-underline hover:underline'}`;

    return (

        <div className={` ${leagueSpartan.className}   text-white  `}>
            <div
                className={` h-auto bg-primary flex justify-between px-5 py-5  fixed w-full z-10`}>
                <Link
                    href="/"
                    className={`hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-300 ease-in-out font-extrabold text-5xl text-secondary tracking-tighter animate-fadeUp`}
                >
                    TD.
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
                            <button type="button" className={navItemClass('hero')} onClick={() => handleNavigate('hero')}>
                                About
                            </button>
                        </li>
                        <li className=" animate-fadeUp delay-200">
                            <button type="button" className={navItemClass('experience')} onClick={() => handleNavigate('experience')}>
                                Experience
                            </button>
                        </li>
                        <li className=" animate-fadeUp delay-400">
                            <button type="button" className={navItemClass('projects')} onClick={() => handleNavigate('projects')}>
                                Projects
                            </button>
                        </li>
                        <li className=" animate-fadeUp delay-600">
                            <button type="button" className={navItemClass('contact')} onClick={() => handleNavigate('contact')}>
                                Contact
                            </button>
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
                            <button type="button" className={navItemClass('hero')} onClick={() => handleNavigate('hero')}>
                                About
                            </button>
                        </li>
                        <li>
                            <button type="button" className={navItemClass('experience')} onClick={() => handleNavigate('experience')}>
                                Experience
                            </button>
                        </li>
                        <li>
                            <button type="button" className={navItemClass('projects')} onClick={() => handleNavigate('projects')}>
                                Projects
                            </button>
                        </li>
                        <li>
                            <button type="button" className={navItemClass('contact')} onClick={() => handleNavigate('contact')}>
                                Contact
                            </button>
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
