import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <SectionWrapper id="contact" className="bg-black">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In <span className="text-violet-400">Touch</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-zinc-900 rounded-lg text-violet-400">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                                <a href="mailto:marwanshafibcs22311002@iiitsonepat.ac.in" className="text-slate-400 hover:text-violet-400 transition-colors break-all">
                                    marwanshafibcs22311002@iiitsonepat.ac.in
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-zinc-900 rounded-lg text-violet-400">
                                <Linkedin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">LinkedIn</h3>
                                <a href="https://www.linkedin.com/in/marwan-shafi-167701291/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-violet-400 transition-colors">
                                    Connect on LinkedIn
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-zinc-900 rounded-lg text-violet-400">
                                <Github className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">GitHub</h3>
                                <a href="https://github.com/marwaaann" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-violet-400 transition-colors">
                                    Follow on GitHub
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-zinc-900 rounded-lg text-violet-400">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                                <p className="text-slate-400">
                                    IIIT Sonepat, India
                                </p>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 bg-black border border-slate-800 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none text-white transition-all"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 bg-black border border-slate-800 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none text-white transition-all"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full px-4 py-3 bg-black border border-slate-800 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none text-white transition-all resize-none"
                                placeholder="Your message..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white font-bold rounded-lg shadow-lg shadow-violet-500/25 transition-all transform hover:-translate-y-0.5"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
