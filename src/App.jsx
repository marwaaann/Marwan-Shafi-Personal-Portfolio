import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
    return (
        <div className="bg-slate-900 min-h-screen text-slate-100 selection:bg-cyan-500 selection:text-cyan-900 font-sans">
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}

export default App;
