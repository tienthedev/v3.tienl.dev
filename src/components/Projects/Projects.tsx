import React from 'react';
import {League_Spartan} from "next/font/google";

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

const Projects: React.FC = () => {
    return (
        <div id={"project"}
             className={`h-fit  flex flex-col justify-center items-center text-left -tracking-wide px-10 lg:px-56 ${leagueSpartan.className} z-0`}
        >
            <div className="div flex flex-col">
                <p className="pb-2 lg:text-6xl font-extrabold tracking-tighter text-md  text-secondary animate-fadeUp delay-600 hidden-initially">
                    Projects
                </p>

            </div>
        </div>
    );
};

export default Projects;