import React from "react";
import { League_Spartan } from "next/font/google";

interface Project {
    title: string;
    date: string;
    tags: string[];
    img: string;
    description: string;
}

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

const projects: Project[] = [
    {
        title: "Eigenface and Computer Vision",
        date: "September 2022",
        tags: ["OpenCV", "Python"],
        img: "/assets/eigenface.png",
        description: "Implemented Eigenface algorithm for facial recognition using OpenCV and Python.",
    },
    {
        title: "Full-Stack Hotel Booking App",
        date: "March 2023",
        tags: ["React", "Node.js", "Tailwind CSS"],
        img: "/assets/tdhotel.png",
        description: "Developed a responsive hotel booking platform with animated UI elements.",
    },
    {
        title: "Iris Decision Tree Classification",
        date: "June 2023",
        tags: ["TensorFlow", "Python", "DecisionTree", "Machine Learning", "Matplotlib"],
        img: "/assets/irismlmodel.png",
        description: "Build, train, and evaluate a Decision Tree classifier with the Iris dataset. Visualize decision boundaries and make predictions on new data.",
    },
];

const Projects: React.FC = () => {
    return (
        <div
            id="project"
            className={`h-fit pb-20 flex flex-col justify-center items-center text-left px-10 lg:px-56 ${leagueSpartan.className} z-0`}
        >
            <div className="flex flex-col">
                <p className="pb-2 lg:text-6xl font-extrabold tracking-tighter text-4xl text-secondary animate-fadeUp delay-600">
                    Projects
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                    {projects.map((project, index) => (
                        <article
                            key={index}
                            className="group hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] flex flex-col h-full"
                        >
                            <div className="rounded-[10px] bg-white p-4 sm:p-6 flex flex-col h-full">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="rounded-lg mb-4 w-full h-40 object-cover"
                                />
                                <time
                                    dateTime={project.date}
                                    className="text-sm block text-gray-500"
                                >
                                    {project.date}
                                </time>
                                <a href="#">
                                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                        {project.title}
                                    </h3>
                                </a>
                                <p className="mt-2 text-sm text-gray-600 flex-grow">{project.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                                        >
          {tag}
        </span>
                                    ))}
                                </div>
                            </div>
                        </article>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
