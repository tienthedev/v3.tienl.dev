import React from 'react';
import { League_Spartan } from 'next/font/google';
import { SiSouthwestairlines, SiGeneralmotors } from 'react-icons/si';
import { MdSchool } from "react-icons/md";
import { PiCity } from "react-icons/pi";

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

const Experience: React.FC = () => {
    return (
        <div

            className={`h-fit pb-20 flex flex-col justify-center items-center text-left -tracking-wide px-10 lg:px-56 ${leagueSpartan.className} z-0`}
        >
            <div className="div flex flex-col">
                <p id="experience"  className="pb-2 lg:text-6xl font-extrabold tracking-tight text-4xl  text-secondary ">
                    Experience
                </p>
                <ol className="relative border-l mx-5 border-white ">
                    <li className="mb-10 ml-10">
                        <span
                            className="absolute flex items-center justify-center w-6 h-6 bg-white text-blue-600 rounded-full -left-3 ring-8 ring-white">
                            <MdSchool/>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-medium text-white">
                            Data Analyst @ Dallas College

                        </h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-tertiary">
                            Internship, January 2026 - May 2026
                        </time>
                        <ul className="mb-4 text-base font-normal text-gray-300 list-disc dark:text-gray-200">
                            <li>
                                Engineered SAS programs to process 50K+ student enrollment records per quarter, improving data accuracy by
                                25% and reducing scheduling conflicts by 15%.
                            </li>
                            <li>
                                Built automated data validation routines identifying 2,000+ discrepancies in scheduling datasets, ensuring
                                FERPA compliance and achieving 98% data quality for institutional reporting.
                            </li>
                            <li>
                                Developed a production Power BI dashboard using SQL, Python, and Azure to track 3 KPIs (productivity,
                                accuracy, performance) across 200K+ work requests, enabling managers to make data-driven staffing decisions.
                            </li>
                            <li>
                                Migrated legacy SAS scripts to Python, streamlining end-to-end data pipelines and ensuring full
                                compatibility with Microsoft Fabric Lakehouse for scalable, cloud-native analytics.
                            </li>
                        </ul>
                    </li>
                    
                    <li className="mb-10 ml-10">
                        <span
                            className="absolute flex items-center justify-center w-6 h-6 bg-white text-blue-600 rounded-full -left-3 ring-8 ring-white">
                            <SiSouthwestairlines/>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-medium text-white">
                            Automation Technology Analyst @ Southwest Airlines

                        </h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-tertiary">
                            Internship, January 2024 - May 2024
                        </time>
                        <ul className="mb-4 text-base font-normal text-gray-300 list-disc dark:text-gray-200">
                            <li>
                                Authored 100+ automated test scripts using Cucumber Gherkin and Java, deployed via Docker Compose
                                for end-to-end certification testing, ensuring 100% requirement coverage before production release.
                            </li>
                            <li>
                                Integrated FICO Blaze Advisor business rules into thousands of user stories for the Crew Scheduling
                                System, driving consistent and accurate test outcomes across all scenarios.
                            </li>
                            <li>
                                Led full framework migration to a modernized testing platform, streamlining QA workflows and boosting
                                team efficiency by 40%.
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
                        <ul className="mb-4 text-base font-normal text-gray-300 list-disc dark:text-gray-200">
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
