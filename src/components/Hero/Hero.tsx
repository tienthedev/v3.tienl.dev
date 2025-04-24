import React from 'react';
import {motion, Variants} from 'framer-motion';
import {JetBrains_Mono, League_Spartan} from "next/font/google";

const jetbrains_mono = JetBrains_Mono({subsets: ['latin']})
const league_spartan = League_Spartan({subsets: ['latin']})


const fadeUpVariants: Variants = {
    hidden: {opacity: 0, y: 10},
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
const Hero: React.FC = () => {
    return (
        <motion.section
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
        >
            <div id={"hero"}
                 className={`h-screen  flex flex-col justify-center items-center text-left -tracking-wide px-10 lg:px-56 ${league_spartan.className} z-0`}>
                <div className="flex flex-col">
                    <h1 className={`lg:text-lg text-md text-white font-thin  ${jetbrains_mono.className}`}>
                        Hi, my name is
                    </h1>
                    <h1 className={`lg:text-9xl text-7xl font-extrabold tracking-tight text-secondary  `}>
                        Tien Le.
                    </h1>
                    <h1 className={`lg:text-7xl text-3xl font-bold tracking-tight text-tertiary  `}>
                        I study and research AI, Machine & Deep Learning, Computer Vision topics. While crafting beautiful things for the web.
                    </h1>
                    <h1 className="lg:text-2xl text-md text-white  ">
                        Email: tienthedev@icloud.com
                    </h1>
                    <h1 className="lg:text-2xl text-md text-white  ">
                        GitHub: tienthedev
                    </h1>

                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
