import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { Calendar, MapPin, Award } from 'lucide-react';

const EventCard = ({ title, date, location, description, role }) => (
    <div className="bg-black p-6 rounded-xl border border-slate-800 hover:border-violet-500/50 transition-all hover:-translate-y-1 group relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Award className="w-24 h-24 text-violet-500" />
        </div>

        <div className="relative z-10">
            <div className="flex flex-wrap gap-4 text-sm text-violet-400 mb-3 font-medium">
                <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {date}
                </span>
                <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {location}
                </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <span className="inline-block px-3 py-1 bg-zinc-900 rounded-full text-xs text-slate-300 border border-slate-800 mb-4">
                {role}
            </span>

            <p className="text-slate-400 leading-relaxed">
                {description}
            </p>
        </div>
    </div>
);

const Events = () => {
    const events = [
        {
            title: "Smart India Hackathon 2024",
            date: "Dec 2024",
            location: "New Delhi, India",
            role: "Team Lead",
            description: "Led a team of 6 to develop an AI-driven solution for disaster management. Reached the Grand Finale among top 50 teams nationwide."
        },
        {
            title: "Cybersecurity Workshop",
            date: "Oct 2024",
            location: "IIIT Sonepat",
            role: "Organizer & Speaker",
            description: "Conducted a hands-on workshop on 'Ethical Hacking & Network Security' for over 100+ students, demonstrating live vulnerabilities."
        },
        {
            title: "Google Cloud Study Jam",
            date: "Aug 2024",
            location: "Remote",
            role: "Participant",
            description: "Completed the GenAI track, gaining practical experience in deploying LLMs and using Vertex AI on Google Cloud Platform."
        }
    ];

    return (
        <SectionWrapper id="events" className="bg-black">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Events & <span className="text-violet-400">Community</span>
                </h2>
                <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                    Active participation in hackathons, workshops, and tech communities.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event, index) => (
                        <EventCard key={index} {...event} />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Events;
