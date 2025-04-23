import React from 'react';
import { League_Spartan } from 'next/font/google';
import { SiSouthwestairlines, SiGeneralmotors } from 'react-icons/si';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

const Experience: React.FC = () => {
    return (
        <div
            id="experience"
            className={`h-fit pb-20 flex flex-col justify-center items-center text-left -tracking-wide px-10 lg:px-56 ${leagueSpartan.className} z-0`}
        >
            <div className="div flex flex-col">
                <p className="pb-2 lg:text-6xl font-extrabold tracking-tighter text-4xl  text-secondary ">
                    Experience
                </p>
                <ol className="relative border-l mx-5 border-white ">
                    <li className="mb-10 ml-10">
                        <span
                            className="absolute flex items-center justify-center w-6 h-6 bg-white text-blue-600 rounded-full -left-3 ring-8 ring-white">
                            <SiSouthwestairlines/>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-medium text-white">
                            Automation Technology Analyst @ Southwest Airlines
                            <span
                                className="bg-blue-100 text-blue-800 text-sm font-medium  px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ml-3">
                                Recent
                            </span>
                        </h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-tertiary">
                            Internship, January 2024 - May 2024
                        </time>
                        <ul className="mb-4 text-base font-normal text-gray-500 list-disc dark:text-gray-400">
                            <li>
                                Conducted comprehensive automation testing on incoming in-flight functionalities for
                                Crew Scheduling System.
                            </li>
                            <li>
                                Collaborated closely with business partners to define and incorporate requirements with
                                FICO Blaze Advisor rulings into thousands of user stories, allowing consistent and
                                accurate test results.
                            </li>
                            <li>
                                Facilitated seamless migration to a new testing framework, streamlining testing
                                processes and improving the team’s overall efficiency by 40%.
                            </li>
                            <li>
                                Architected and implemented detailed user stories using Cucumber Gherkin and deployed
                                automation test scripts to Docker Compose for certification testing, ensuring all
                                requirements are met and ready for production.
                            </li>
                        </ul>
                    </li>
                    <li className="mb-10 ml-10">
                        <span
                            className="absolute flex items-center justify-center w-6 h-6 bg-white text-blue-600 rounded-full -left-3 ring-8 ring-white">
                            <SiGeneralmotors/>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-medium text-white">
                            Software Development Engineer @ General Motors Financial
                        </h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-tertiary">
                            Internship, October 2021 - August 2022
                        </time>
                        <ul className="mb-4 text-base font-normal text-gray-500 list-disc dark:text-gray-400">
                            <li>
                                Conducted front-end unit testing for Mode by GM Financial, using Angular, C#,
                                TypeScript, and .NET Maui, ensuring optimal performance with a high-volume cloud
                                database and user base.
                            </li>
                            <li>
                                Led a team of talented developers to build a cutting-edge, secured banking system,
                                recognized as the winning application in an engineering department-hosted Hackathon.
                            </li>
                            <li>
                                Collaborated closely with senior engineers and architects to learn and contribute ideas
                                for implementations.
                            </li>
                        </ul>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Experience;
