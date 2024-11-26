import React from 'react';
import {League_Spartan} from "next/font/google";

const league_spartan = League_Spartan({subsets: ['latin']})
//
const About: React.FC = () => {
    return (
        <div id={"about"}
             className={`h-screen  flex flex-col justify-center items-center text-left -tracking-wide px-10 lg:px-56 ${league_spartan.className} z-0`}>
            <div className="flex flex-col">
                <p className="lg:text-6xl font-extrabold tracking-tighter text-md  text-secondary animate-fadeUp delay-600 hidden-initially">
                    About me
                </p>
                <p className="lg:text-2xl text-md text-tertiary  animate-fadeUp delay-600 hidden-initially">
                    During my academic career, I&apos;ve seen many significant effects and usages of <span
                    className="text-white"> Artificial Intelligent </span>in our daily lives.
                    This observation led me to focus in the <span className="text-white"> research and development of AI, Machine Learning, and Deep Learning,</span> here
                    at the <span className="text-white"> University of Texas in Arlington,</span> where I&apos;m
                    currently pursing a <span className="text-white"> Bachelor of Science in Computer Science. </span>
                    As of now, I&apos;m a third-year student, with two technology internship experiences in both the
                    fields of
                    <span className="text-white"> automotive, airlines, and finance.</span>
                </p>
            </div>
        </div>
    );
};

export default About;
