import React, { useEffect, useMemo, useState } from 'react';
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

type Countdown = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isComplete: boolean;
};

const getTimeLeft = (targetDate: Date): Countdown => {
    const diff = targetDate.getTime() - Date.now();

    if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds, isComplete: false };
};

const Hero: React.FC = () => {
    // May 3rd, 2026 at 2:00 PM Central Daylight Time (UTC-05:00)
    const graduationDate = useMemo(() => new Date('2026-05-03T14:00:00-05:00'), []);
    const [timeLeft, setTimeLeft] = useState<Countdown>(() => getTimeLeft(graduationDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft(graduationDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [graduationDate]);

    return (
        <motion.section
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
        >
            <div id={"hero"}
                 className={`h-screen  flex flex-col justify-center items-center text-left -tracking-wide px-10 lg:px-56 ${league_spartan.className} z-0`}>
                <div className="flex flex-col">
                    <h1 className={`lg:text-2xl text-xl text-white font-thin  ${jetbrains_mono.className}`}>
                        Hi, my name is
                    </h1>
                    <h1 className={`lg:text-9xl text-7xl font-extrabold tracking-tight text-secondary  `}>
                        Tien Le.
                    </h1>
                    <h1 className={`lg:text-7xl text-3xl font-bold tracking-tight text-tertiary  `}>
                        I study and research AI, Machine & Deep Learning, Computer Vision topics. While crafting beautiful things for the web.
                    </h1>
                    <h1 className={`lg:text-2xl text-xl text-white font-thin  ${jetbrains_mono.className}`}>
                        Email: tienthedev@icloud.com
                    </h1>
                    <h1 className={`lg:text-2xl text-xl text-white font-thin  ${jetbrains_mono.className}`}>
                        GitHub: @tienthedev
                    </h1>

                    <div className={`lg:text-2xl mt-6 text-xl text-white font-thin  ${jetbrains_mono.className}`}>
                        <p className={`lg:text-2xl text-xl text-white font-thin  `}>I&#39;m graduating in</p>
                        {timeLeft.isComplete ? (
                            <p className={`lg:text-2xl text-xl text-white font-thin  `}>I just graduated!</p>
                        ) : (
                            <p className={`lg:text-2xl text-xl text-white font-thin  `}>
                                <span className=" text-secondary">{timeLeft.days}</span>d{' '}
                                <span className=" text-secondary">{timeLeft.hours}</span>h{' '}
                                <span className=" text-secondary">{timeLeft.minutes}</span>m{' '}
                                <span className=" text-secondary">{timeLeft.seconds}</span>s
                            </p>
                        )}
                    </div>

                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
