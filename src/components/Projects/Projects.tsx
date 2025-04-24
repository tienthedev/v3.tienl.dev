import React, {useState, useMemo} from "react";
import {League_Spartan} from "next/font/google";
import Image from "next/image"

interface Project {
    title: string;
    date: string;
    tags: string[];
    img: string;
    description: string;
    link: string;
}

const leagueSpartan = League_Spartan({subsets: ["latin"]});

const projects: Project[] = [
    {
        title: "Eigenface and Computer Vision",
        date: "April 2024",
        tags: ["OpenCV", "Python"],
        img: "/assets/eigenface.png",
        description: "Implemented Eigenface algorithm for facial recognition using OpenCV and Python.",
        link: "https://github.com/tienthedev/IrisDecisionTreeModel"
    },
    {
        title: "Full-Stack Hotel Booking App",
        date: "March 2023",
        tags: ["React", "NextJS", "Tailwind CSS", "OpenAuth", "MongoDB", "SanityIO"],
        img: "/assets/tdhotel.png",
        description: "Developed a responsive hotel booking platform with animated UI elements.",
        link: "https://github.com/tienthedev/IrisDecisionTreeModel"

    },
    {
        title: "Iris Decision Tree Classification",
        date: "June 2024",
        tags: ["TensorFlow", "Python", "DecisionTree", "Machine Learning", "Matplotlib"],
        img: "/assets/irismlmodel.png",
        description: "Build, train, and evaluate a Decision Tree classifier with the Iris dataset. Visualize decision boundaries and make predictions on new data.",
        link: "https://github.com/tienthedev/IrisDecisionTreeModel"

    },
    {
        title: "Gradient Descent in Perceptrons and Neural Network Training",
        date: "Jan 2025",
        tags: ["Linear Algebra", "Python", "Gradient Descent", "NumPy"],
        img: "/assets/gradient.png",
        description: "Computing the output of perceptrons and neural networks using gradient descent. Implemented in Python with NumPy.",
        link: "https://github.com/tienthedev/IrisDecisionTreeModel"

    },
    {
        title: "Backpropagation in Neural Network Training",
        date: "Jan 2025",
        tags: ["Linear Algebra", "Python", "Backpropagation", "NumPy"],
        img: "/assets/backpropagation.png",
        description: "Implemented backpropagation algorithm for training neural networks. Utilized NumPy for matrix operations.",
        link: "https://github.com/tienthedev/IrisDecisionTreeModel"

    },
    {
        title: "Keras and Convolutional Neural Network Training",
        date: "Feb 2025",
        tags: ["Linear Algebra", "Python", "Backpropagation", "Gradient Descent", "TensorFlow", "Keras", "NumPy"],
        img: "/assets/keras.png",
        description: "Trained a neural network using Keras with TensorFlow backend. Implemented backpropagation and gradient descent for optimization.",
        link: "https://github.com/tienthedev/IrisDecisionTreeModel"

    },

];


type SortOption = "date_desc" | "date_asc" | "title_asc" | "title_desc";

const Projects: React.FC = () => {
        const [sortOption, setSortOption] = useState<SortOption>("date_desc");
        const [filterTag, setFilterTag] = useState<string>("All")
        const allTags = useMemo(() => {
            const tags = projects.flatMap((p) => p.tags);
            return ["All", ...Array.from(new Set(tags))];
        }, []);


        const displayProjects = useMemo(() => {
            let arr = filterTag === "All" ? [...projects] : projects.filter((p) => p.tags.includes(filterTag));

            if (sortOption === "date_desc" || sortOption === "date_asc") {
                arr.sort((a, b) => {
                    const da = new Date(a.date);
                    const db = new Date(b.date);
                    return sortOption === "date_desc"
                        ? db.getTime() - da.getTime()
                        : da.getTime() - db.getTime();
                });
            } else if (sortOption === "title_asc") {
                arr.sort((a, b) => a.title.localeCompare(b.title));
            } else if (sortOption === "title_desc") {
                arr.sort((a, b) => b.title.localeCompare(a.title))
            }
            return arr;

        }, [filterTag, sortOption]);


        return (
            <div
                id="project"
                className={`h-fit pb-20 flex flex-col justify-center items-center text-left px-10 lg:px-56 ${leagueSpartan.className} z-0`}
            >
                <div className="flex flex-col">
                    <p className="pb-2 lg:text-6xl font-extrabold tracking-tight text-4xl text-secondary animate-fadeUp delay-600">
                        Featured Projects
                    </p>

                    <div className="flex flex-wrap items-center gap-4 my-6">
                        <div className="flex items-center">
                            <label className="mr-2 text-sm font-medium">Filter: </label>
                            <select
                                value={filterTag}
                                onChange={(e) => setFilterTag(e.target.value)}
                                className="rounded-md border px-3 py-1 text-sm "
                            >
                                {allTags.map((tag) => (
                                    <option key={tag} value={tag}>
                                        {tag}
                                    </option>
                                ))}
                            </select>

                        </div>
                        <div className="my-6 self-end">
                            <label className="mr-2 text-sm font-medium">Sort by:</label>
                            <select
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value as SortOption)}
                                className=" border rounded-md px-3 py-1  text-sm"
                            >
                                <option value="date_desc">Newest → Oldest</option>
                                <option value="date_asc">Oldest → Newest</option>
                                <option value="title_asc">Title A → Z</option>
                                <option value="title_desc">Title Z → A</option>

                            </select>
                        </div>
                    </div>


                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                        {displayProjects.map((project, index) => (
                            <article
                                key={index}
                                className="group hover:-translate-y-3 rounded-xl bg-linear-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-xs hover:[animation-duration:_4s] flex flex-col h-full"
                            >
                                <a href={project.link} target="_blank">
                                    <div className="rounded-[10px] bg-white p-4 sm:p-6 flex flex-col h-full">
                                        <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                                            <Image
                                                src={project.img}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <time
                                            dateTime={project.date}
                                            className="text-sm block text-gray-500"
                                        >
                                            {project.date}
                                        </time>
                                        <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                            {project.title}
                                        </h3>

                                        <p className="mt-2 text-sm text-gray-600 grow">{project.description}</p>
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
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
;

export default Projects;
