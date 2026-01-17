import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { Code, Shield, Brain, Database, Globe, Server } from 'lucide-react';

const SkillCard = ({ title, icon: Icon, skills }) => (
    <div className="bg-black p-6 rounded-xl border border-slate-800 hover:border-violet-500/50 transition-colors group">
        <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-violet-500/10 transition-colors">
                <Icon className="w-6 h-6 text-violet-400" />
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-3 py-1 bg-zinc-900 rounded-full text-sm text-slate-300 border border-slate-800"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Skills = () => {
    const skillCategories = [
        {
            title: "Full Stack Development",
            icon: Globe,
            skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3"]
        },
        {
            title: "Cybersecurity",
            icon: Shield,
            skills: ["Network Security", "Firewall Configuration", "Penetration Testing", "Cryptography", "Security Protocols"]
        },
        {
            title: "Machine Learning",
            icon: Brain,
            skills: ["Python", "TensorFlow", "YOLOv8", "Data Analysis", "NumPy", "Pandas", "Computer Vision"]
        },
        {
            title: "Tools & DevOps",
            icon: Server,
            skills: ["Git & GitHub", "VS Code", "Postman", "Linux", "Vite", "NPM"]
        }
    ];

    return (
        <SectionWrapper id="skills" className="bg-black">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Skills & <span className="text-violet-400">Expertise</span>
                </h2>
                <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                    A diverse set of technical skills ranging from web development to security and AI.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {skillCategories.map((category, index) => (
                        <SkillCard key={index} {...category} />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Skills;
