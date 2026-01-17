import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { ArrowUpRight, BookOpen } from 'lucide-react';

const BlogCard = ({ title, excerpt, date, readTime, link, tags }) => (
    <article className="bg-black rounded-xl border border-slate-800 hover:border-violet-500/50 transition-all hover:-translate-y-1 group flex flex-col h-full">
        <div className="p-6 flex-1 flex flex-col">
            <div className="flex justify-between items-center mb-4 text-sm text-slate-500">
                <span>{date}</span>
                <span>{readTime}</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
            </h3>

            <p className="text-slate-400 mb-6 line-clamp-3 flex-1">
                {excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-900 text-violet-300 border border-slate-800">
                        {tag}
                    </span>
                ))}
            </div>

            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-violet-400 font-medium hover:text-violet-300 transition-colors mt-auto"
            >
                Read Article <ArrowUpRight className="w-4 h-4" />
            </a>
        </div>
    </article>
);

const Blog = () => {
    const posts = [
        {
            title: "Understanding YOLOv8 for Object Detection",
            excerpt: "A deep dive into the architecture of YOLOv8 and how it improves upon previous versions for real-time object detection tasks.",
            date: "Jan 15, 2025",
            readTime: "5 min read",
            link: "#",
            tags: ["AI", "Computer Vision"]
        },
        {
            title: "Securing MERN Stack Applications",
            excerpt: "Best practices for implementing authentication, authorization, and data protection in MongoDB, Express, React, and Node.js apps.",
            date: "Dec 28, 2024",
            readTime: "8 min read",
            link: "#",
            tags: ["Cybersecurity", "Web Dev"]
        },
        {
            title: "Getting Started with Tailwind CSS v4",
            excerpt: "Exploring the new features in Tailwind CSS v4, including the new engine and how it simplifies build configurations.",
            date: "Dec 10, 2024",
            readTime: "4 min read",
            link: "#",
            tags: ["CSS", "Frontend"]
        }
    ];

    return (
        <SectionWrapper id="blog" className="bg-black">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="text-center md:text-left w-full md:w-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">
                            Latest <span className="text-violet-400">Articles</span>
                        </h2>
                        <p className="text-slate-400">
                            Thoughts on technology, security, and development.
                        </p>
                    </div>
                    <a
                        href="#"
                        className="hidden md:flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-lg text-slate-300 hover:text-white hover:bg-zinc-800 transition-all border border-slate-800"
                    >
                        <BookOpen className="w-4 h-4" /> View All Posts
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <BlogCard key={index} {...post} />
                    ))}
                </div>

                <div className="md:hidden mt-8 text-center">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-lg text-slate-300 hover:text-white hover:bg-zinc-800 transition-all border border-slate-800"
                    >
                        <BookOpen className="w-4 h-4" /> View All Posts
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Blog;
