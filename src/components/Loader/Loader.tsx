import React, { useEffect, useState } from 'react';
import { League_Spartan } from 'next/font/google';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

const Loader: React.FC = () => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
        }, 4000); // 4 seconds delay before fade out

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`flex justify-center items-center h-screen bg-quaternary ${fadeOut ? 'animate-fadeOut' : 'animate-fadeUp'}`}>
            <p className={`text-center font-extrabold text-secondary text-7xl lg:text-9xl tracking-tighter ${leagueSpartan.className}`}>
                tienthedev.
            </p>
        </div>
    );
};

export default Loader;
