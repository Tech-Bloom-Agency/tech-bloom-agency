import { Briefcase, Share2, Layers } from "lucide-react";
import CTASection from "@/components/sections/shared/CTASection";

const PILLARS = [
    {
        title: "Entrepreneurs & PME",
        description: "Accompagnement complet de A à Z : stratégie, identité de marque et site web performant pour lancer ou propulser votre activité.",
        icon: Briefcase,
        features: ["Site vitrine & E-commerce", "Branding & Logo", "SEO & Visibilité locale", "Stratégie Social Media"]
    },
    {
        title: "Collaboration B2B",
        description: "Partenariat technique pour agences et entreprises étrangères. Déléguez votre production sans sacrifier la qualité.",
        icon: Share2,
        features: ["Développement Marque Blanche", "Extension d'équipe agile", "Code clean & documenté", "Confidentialité (NDA)"]
    },
    {
        title: "Produits Digitaux",
        description: "Conception et développement d'applications web et mobiles sur-mesure pour résoudre vos défis business complexes.",
        icon: Layers,
        features: ["Next.js & React Apps", "SaaS & Dashboards", "Systèmes sur-mesure", "Audit & Performance Web"]
    }
];

export default function Services() {
    return (
        <div className="bg-white">
            <section className="pt-40 pb-24 border-b border-brand-light-gray bg-white">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-red-rose mb-6 block">
                        Expertises
                    </span>
                    <h1 className="text-[clamp(3rem,10vw,6rem)] font-serif font-bold text-brand-primary leading-[0.9] tracking-tighter mb-12">
                        Nos piliers <br />
                        <span className="text-brand-dark-blue opacity-50">d&apos;excellence.</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-brand-gray max-w-3xl font-medium leading-relaxed uppercase tracking-wide">
                        De la vision à l&apos;exécution technique, nous activons les leviers 
                        digitaux pour transformer vos idées en produits performants.
                    </p>
                </div>
            </section>

            <section className="py-32">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-3 gap-16">
                        {PILLARS.map((pillar, index) => (
                            <div key={index} className="space-y-10 group">
                                <div className="w-20 h-20 bg-brand-bg-soft rounded-agency-md flex items-center justify-center transition-colors group-hover:bg-brand-pale-pink">
                                    <pillar.icon size={36} className="text-brand-primary" />
                                </div>
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-serif font-bold text-brand-primary">
                                        {pillar.title}
                                    </h2>
                                    <p className="text-brand-gray font-medium leading-relaxed text-sm uppercase tracking-wide">
                                        {pillar.description}
                                    </p>
                                    <ul className="space-y-4 pt-4">
                                        {pillar.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest text-brand-dark-blue">
                                                <div className="w-1.5 h-1.5 bg-brand-red-rose rounded-full" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}