import React from 'react';
import SectionWrapper from '../components/SectionWrapper';

const About = () => {
    return (
        <SectionWrapper id="about" className="bg-black">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-black mb-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-600">
                        About Me
                    </span>
                </h2>

                <h3 className="text-2xl md:text-3xl font-bold text-violet-400 mb-12">
                    Who I Am
                </h3>

                <div className="space-y-8 text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                    <p>
                        I am <span className="text-white font-bold">Marwan Shafi</span>, a Pre-Final Year Computer Science student at
                        <span className="text-white font-bold"> Indian Institute of Information Technology Sonepat</span>.
                        My journey in tech is defined by a relentless curiosity and a drive to build scalable,
                        high-performance web applications.
                    </p>

                    <p>
                        As a passionate self-taught developer, I have deep expertise in the <span className="text-white font-bold">MERN Stack</span>.
                        Beyond web development, I actively explore <span className="text-white font-bold">Cybersecurity</span> and <span className="text-white font-bold">Machine Learning</span>,
                        believing in the power of continuous learning to build secure and intelligent systems.
                    </p>

                    <p>
                        When I'm not coding, you can find me solving complex problems on <span className="text-white font-bold">LeetCode</span>,
                        exploring new tech trends, or working on innovative personal projects.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
