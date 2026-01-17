import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { Github, ExternalLink, Folder } from 'lucide-react';

const ProjectCard = ({ title, description, tags, link }) => (
    <div className="bg-black rounded-xl overflow-hidden border border-slate-800 hover:border-violet-500/50 transition-all hover:-translate-y-1 group">
        <div className="p-6">
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-zinc-900 rounded-lg text-violet-400 group-hover:text-white group-hover:bg-violet-600 transition-colors">
                    <Folder className="w-6 h-6" />
                </div>
                <div className="flex gap-3">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    {/* <ExternalLink className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" /> */}
                </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
            </h3>
            <p className="text-slate-400 mb-4 line-clamp-3">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-900 text-violet-300 border border-slate-800">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const Projects = () => {
    const projects = [
        {
            title: "Brain Tumor Detection YOLO",
            description: "A high-performance YOLOv8 model designed to accurately detect and classify brain tumors from MRI scan images, aiding in early diagnosis.",
            tags: ["Python", "YOLOv8", "Computer Vision", "Deep Learning"],
            link: "https://github.com/marwaaann/brain-tumor-detection-yolo"
        },
        {
            title: "Fintech Data API",
            description: "A robust API service for retrieving and processing financial technology data, built with Python for scalability and performance.",
            tags: ["Python", "API Development", "Fintech", "Backend"],
            link: "https://github.com/marwaaann/Fintech-Data-API-"
        },
        {
            title: "MovieOn",
            description: "A dynamic web application for browsing movies, featuring a responsive UI and real-time data integration.",
            tags: ["JavaScript", "Web Development", "UI/UX"],
            link: "https://github.com/marwaaann/MovieOn"
        },
        {
            title: "Firewall Configuration",
            description: "A comprehensive guide and script set for building and configuring secure firewalls to protect network infrastructure.",
            tags: ["Cybersecurity", "Network Security", "Firewalls", "System Admin"],
            link: "https://github.com/marwaaann/Build-and-Configure-a-Firewall"
        }
    ];

    return (
        <SectionWrapper id="projects" className="bg-black">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Featured <span className="text-violet-400">Projects</span>
                </h2>
                <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                    A selection of my recent work in Software Development and Cybersecurity.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/marwaaann"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors"
                    >
                        View all projects on GitHub <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Projects;
