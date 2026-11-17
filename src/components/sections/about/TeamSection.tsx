import { SITE_CONFIG } from "@/lib/constants";
import { Award, Briefcase, Zap, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const TEAM = [
    {
        name: SITE_CONFIG.founder,
        role: "Fondateur & Expert Digital",
        expertise: "Stratégie, Web Dev, IA",
        experience: "5+ ans",
        tools: ["Next.js", "Claude/GPT", "Tailwind", "Figma"],
        image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800", // Image de placeholder
    },
    {
        name: "Liana R.",
        role: "Social Media Manager",
        expertise: "Content Strategy, Branding",
        experience: "3+ ans",
        tools: ["Canva", "Meta Business Suite", "Capcut"],
        image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=800", // Image de placeholder
    }
];

export default function TeamSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-sans font-bold text-brand-dark mb-6">L&apos;Équipe Tech Bloom</h2>
                    <p className="text-lg text-brand-gray max-w-2xl mx-auto">
                        Des experts passionnés par l&apos;innovation et la réussite de vos projets digitaux.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {TEAM.map((member, index) => (
                        <div key={index} className="group bg-brand-light rounded-agency p-8 border border-gray-100 hover:border-brand-blue/20 transition-all duration-500 hover:shadow-2xl">
                            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                                <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-agency overflow-hidden shadow-lg flex-shrink-0">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="space-y-4 text-center md:text-left">
                                    <div>
                                        <h3 className="text-2xl font-sans font-bold text-brand-dark">{member.name}</h3>
                                        <p className="text-brand-blue font-semibold">{member.role}</p>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm text-gray-600 justify-center md:justify-start">
                                            <Award size={16} className="text-brand-blue" />
                                            <span>Expertise : {member.expertise}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600 justify-center md:justify-start">
                                            <Briefcase size={16} className="text-brand-blue" />
                                            <span>Expérience : {member.experience}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600 justify-center md:justify-start">
                                            <Zap size={16} className="text-brand-blue" />
                                            <span>Outils : {member.tools.join(', ')}</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-center md:justify-start gap-4 pt-2">
                                        <Linkedin size={20} className="text-gray-400 hover:text-brand-blue cursor-pointer" />
                                        <Github size={20} className="text-gray-400 hover:text-brand-blue cursor-pointer" />
                                        <Mail size={20} className="text-gray-400 hover:text-brand-blue cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
