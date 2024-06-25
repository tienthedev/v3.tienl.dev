import React from 'react';
import {League_Spartan} from "next/font/google";

const league_spartan = League_Spartan({subsets: ['latin']})

const Projects: React.FC = () => {
    return (
        <div id={"project"}
             className={`h-screen w-screen flex flex-col justify-center items-center text-left -tracking-wide px-10 lg:px-56 ${league_spartan.className} z-0`}>
            <div className="flex flex-col">

                <p className="lg:text-2xl text-md text-tertiary  animate-fadeUp delay-600 hidden-initially">
                    projects coming soon...
                </p>
            </div>
        </div>
    );
};

export default Projects;