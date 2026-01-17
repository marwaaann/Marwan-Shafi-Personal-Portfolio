import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Events from './sections/Events';
import Blog from './sections/Blog';
import Contact from './sections/Contact';

const App = () => {
    return (
        <div className="bg-black min-h-screen text-slate-200 selection:bg-violet-500/30 selection:text-violet-200">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Events />
                <Blog />
                <Contact />
            </main>

            <footer className="bg-black border-t border-slate-900 py-8 text-center text-slate-500 text-sm">
                <p>© {new Date().getFullYear()} Marwan Shafi. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;
