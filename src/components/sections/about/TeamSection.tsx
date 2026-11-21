import { SITE_CONFIG } from "@/lib/constants";
import { Award, Briefcase, Zap, Linkedin, Mail } from "lucide-react";

/**
 * Équipe.
 *
 * Les deux portraits étaient des photos Pexels, commentées « Image de
 * placeholder » dans le code et servies en production avec le nom du
 * fondateur en texte alternatif. Un monogramme ne prétend ressembler à
 * personne : il tient la place jusqu'à de vraies photos.
 *
 * Les icônes sociales étaient de simples pictogrammes avec un curseur
 * « main » et aucun lien — un appui sans effet sur mobile. Elles ne
 * s'affichent désormais que lorsqu'une adresse existe réellement.
 */
const TEAM = [
    {
        name: SITE_CONFIG.founder,
        role: "Fondateur & Expert Digital",
        expertise: "Stratégie, Web Dev, IA",
        experience: "5+ ans",
        tools: ["Next.js", "Claude/GPT", "Tailwind", "Figma"],
        links: [
            {
                label: "Écrire à Sullivan",
                href: `mailto:${SITE_CONFIG.email}`,
                icon: Mail,
            },
            {
                label: "Tech Bloom Agency sur LinkedIn",
                href: SITE_CONFIG.social.linkedin,
                icon: Linkedin,
            },
        ],
    },
    {
        name: "Liana R.",
        role: "Social Media Manager",
        expertise: "Content Strategy, Branding",
        experience: "3+ ans",
        tools: ["Canva", "Meta Business Suite", "Capcut"],
        links: [],
    },
];

/** « Sullivan Joro RAKOTONIAINA » → « SR ». */
function initiales(nom: string): string {
    const mots = nom.trim().split(/\s+/).filter(Boolean);
    if (mots.length === 0) return "?";
    const premier = mots[0][0];
    const dernier = mots.length > 1 ? mots[mots.length - 1][0] : "";
    return (premier + dernier).toUpperCase();
}

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
                    {TEAM.map((member) => (
                        <div key={member.name} className="group bg-brand-light rounded-agency p-8 border border-gray-100 hover:border-brand-blue/20 transition-all duration-500 hover:shadow-2xl">
                            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                                <div
                                    aria-hidden="true"
                                    className="flex w-32 h-32 md:w-48 md:h-48 shrink-0 items-center justify-center rounded-agency bg-navy font-heading text-4xl md:text-5xl font-bold tracking-wide text-beige shadow-lg"
                                >
                                    {initiales(member.name)}
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

                                    {member.links.length > 0 && (
                                        <div className="flex justify-center md:justify-start gap-4 pt-2">
                                            {member.links.map((lien) => {
                                                const Icone = lien.icon;
                                                return (
                                                    <a
                                                        key={lien.href}
                                                        href={lien.href}
                                                        aria-label={lien.label}
                                                        target={lien.href.startsWith("http") ? "_blank" : undefined}
                                                        rel={lien.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-gray-400 transition-colors hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                                                    >
                                                        <Icone size={20} aria-hidden="true" />
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
