import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-black">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] opacity-20 animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 text-left"
                    >
                        <span className="text-violet-400 font-bold tracking-widest uppercase text-sm mb-4 block">
                            Hello, I'm
                        </span>

                        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-2 leading-tight">
                            Marwan
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-500 to-blue-500">
                                Shafi
                            </span>
                        </h1>

                        <h2 className="text-2xl md:text-3xl font-bold text-slate-300 mb-6">
                            Full Stack Developer & <br className="hidden md:block" />
                            <span className="text-slate-400">Cybersecurity Enthusiast</span>
                        </h2>

                        <p className="text-slate-400 text-lg max-w-xl mb-8 leading-relaxed">
                            Expertise in MERN Stack, Machine Learning & Cybersecurity. Transforming ideas into secure, high-quality digital reality.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 mb-10">
                            <a href="https://github.com/marwaaann" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-full text-slate-300 hover:text-white hover:bg-zinc-800 transition-all border border-slate-800 hover:border-violet-500/50">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/marwan-shafi-167701291/" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-full text-slate-300 hover:text-white hover:bg-zinc-800 transition-all border border-slate-800 hover:border-violet-500/50">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="mailto:marwanshafibcs22311002@iiitsonepat.ac.in" className="p-3 bg-zinc-900 rounded-full text-slate-300 hover:text-white hover:bg-zinc-800 transition-all border border-slate-800 hover:border-violet-500/50">
                                <Mail className="w-6 h-6" />
                            </a>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-bold rounded-full shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all transform hover:-translate-y-1"
                            >
                                View My Work
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-transparent border border-slate-600 text-white font-bold rounded-full hover:bg-slate-800 hover:border-slate-500 transition-all"
                            >
                                Contact Me
                            </a>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 relative max-w-md mx-auto md:max-w-none"
                    >
                        <div className="relative z-10 w-full aspect-square max-w-[400px] mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-blue-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                            <img
                                src="/images/profile.jpg"
                                alt="Marwan Shafi"
                                className="w-full h-full object-cover rounded-full border-4 border-slate-800/50 shadow-2xl relative z-10"
                            />
                            {/* Decorative ring */}
                            <div className="absolute -inset-4 border border-slate-700/50 rounded-full z-0"></div>
                            <div className="absolute -inset-8 border border-slate-800/30 rounded-full z-0"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
