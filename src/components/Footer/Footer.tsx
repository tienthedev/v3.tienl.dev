import React from 'react';
import {JetBrains_Mono} from "next/font/google";

const jetbrains_mono =  JetBrains_Mono({subsets: ['latin']})

const Footer: React.FC = () => {
    return (
        <div  id={"footer"}
             className={` w-screen flex flex-col text-xs text-tertiary animate-fadeUp  justify-center  text-center px-10 lg:px-56 pb-10 ${jetbrains_mono.className} z-0`}>
            <h1>
                Designed & Built by Tien Dung Le.
            </h1>
            <h1>
                All Rights Reserved.
            </h1>
        </div>
    );
};

export default Footer;