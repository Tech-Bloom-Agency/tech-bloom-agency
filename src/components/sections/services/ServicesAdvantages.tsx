import { Zap, ShieldCheck, HeartHandshake } from "lucide-react";

const ADVANTAGES = [
    {
        title: "Croissance Accélérée",
        description: "Nos solutions sont conçues pour générer des résultats rapides et mesurables, boostant votre CA.",
        icon: Zap,
        color: "text-brand-blue bg-brand-blue/10"
    },
    {
        title: "Expertise Premium",
        description: "Accédez aux dernières technologies (IA, Cloud) et aux meilleures pratiques de l'industrie digitale.",
        icon: ShieldCheck,
        color: "text-brand-blue bg-brand-blue/10"
    },
    {
        title: "Accompagnement Personnalisé",
        description: "Nous ne sommes pas juste un prestataire, mais un partenaire dédié à la réussite de votre vision.",
        icon: HeartHandshake,
        color: "text-brand-blue bg-brand-blue/10"
    }
];

export default function ServicesAdvantages() {
    return (
        <section className="py-24 bg-brand-light">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-sans font-bold text-brand-dark mb-6">Pourquoi choisir Tech Bloom Agency ?</h2>
                    <p className="text-lg text-brand-gray max-w-2xl mx-auto">
                        Les bénéfices concrets d&apos;une collaboration avec une agence digitale moderne et humaine.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {ADVANTAGES.map((adv, index) => (
                        <div key={index} className="bg-white p-10 rounded-agency shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                            <div className={`w-16 h-16 rounded-agency flex items-center justify-center mb-6 ${adv.color}`}>
                                <adv.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-sans font-bold text-brand-dark mb-4">{adv.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">{adv.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
