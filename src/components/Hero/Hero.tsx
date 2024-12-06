import React from 'react';
import {JetBrains_Mono, League_Spartan} from "next/font/google";

const jetbrains_mono =  JetBrains_Mono({subsets: ['latin']})
const league_spartan = League_Spartan({subsets: ['latin']})

const Hero: React.FC = () => {
  return (
      <div id={"hero"}
          className={`h-screen  flex flex-col justify-center items-center text-left -tracking-wide px-10 lg:px-56 ${league_spartan.className} z-0`}>
          <div className="flex flex-col">
              <h1 className={`lg:text-lg text-md text-white font-thin animate-fadeUp delay-0 hidden-initially ${jetbrains_mono.className}`}>Hi, my name is</h1>
              <h1 className={`lg:text-9xl text-7xl font-extrabold tracking-tighter text-secondary animate-fadeUp delay-200 hidden-initially `}>Tien
                  Le.</h1>
              <h1 className={`lg:text-7xl text-5xl font-bold tracking-tighter text-tertiary animate-fadeUp delay-400 hidden-initially`}>I
                  design and craft beautiful things for the web</h1>
              <h1 className="lg:text-2xl text-md text-white  animate-fadeUp delay-600 hidden-initially">
                  {"I'm a software developer with a background in computer science. I often work on fullstack apps with well developed UI/UX components, as well as building Machine Learning models."}
              </h1>
          </div>
      </div>
  );
};

export default Hero;
