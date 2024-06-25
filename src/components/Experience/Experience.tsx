import React from 'react';
import {League_Spartan} from "next/font/google";

const league_spartan = League_Spartan({subsets: ['latin']})

const Experience: React.FC = () => {
    return (
        <div id={"experience"}
             className={`h-screen w-screen flex flex-col justify-center items-center text-left -tracking-wide px-10 lg:px-56 ${league_spartan.className} z-0`}>
            <div className="flex flex-col">


            </div>
        </div>
    );
};

export default Experience;