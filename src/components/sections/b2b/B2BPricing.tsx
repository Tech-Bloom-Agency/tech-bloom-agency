"use client";

export default function B2BPricing() {
    const packages = [
        {
            name: "Starter",
            description: "Par projet web",
            features: [
                "Site vitrine responsive",
                "Jusqu'à 5 pages",
                "Intégration CMS basique",
                "Optimisation SEO de base",
                "Hébergement 1 an inclus",
                "Support 2 semaines"
            ],
            bestValue: false
        },
        {
            name: "Business",
            description: "Par projet web",
            features: [
                "Site e-commerce complet",
                "Jusqu'à 20 pages",
                "Fonctionnalités avancées",
                "Intégration paiements",
                "Optimisation SEO complète",
                "Support 1 mois"
            ],
            bestValue: true
        },
        {
            name: "Enterprise",
            description: "Solutions complexes",
            features: [
                "Applications web sur mesure",
                "Intégrations API complexes",
                "Solutions multi-plateformes",
                "Déploiement automatisé",
                "Monitoring & analytics",
                "Support illimité"
            ],
            bestValue: false
        }
    ];

    const additionalServices = [
        { name: "Maintenance mensuelle" },
        { name: "Refonte complète" },
        { name: "Développement spécifique" },
        { name: "Formation technique" }
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-accent/5 to-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block bg-brand-blue text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                        COLLABORATION SUR MESURE
                    </div>
                    <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-dark mb-6">
                        Un cadre clair, adapté à votre projet
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Chaque projet est cadré selon son périmètre, ses livrables et ses contraintes réelles.
                    </p>
                </div>

                {/* Packages */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {packages.map((pkg, index) => (
                        <div 
                            key={index}
                            className={`relative bg-white rounded-agency border-2 p-8 hover:shadow-xl transition-all duration-300 ${
                                pkg.bestValue 
                                    ? 'border-brand-blue shadow-lg scale-105' 
                                    : 'border-gray-200'
                            }`}
                        >
                            {pkg.bestValue && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-blue text-white px-6 py-1 rounded-full text-sm font-bold">
                                    LE PLUS POPULAIRE
                                </div>
                            )}
                            
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-sans font-bold text-brand-dark mb-2">
                                    {pkg.name}
                                </h3>
                                <p className="text-gray-600">{pkg.description}</p>
                            </div>
                            
                            <ul className="space-y-4 mb-8">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="text-brand-blue mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <button className={`w-full py-3 rounded-full font-medium transition-all duration-300 ${
                                pkg.bestValue
                                    ? 'bg-brand-blue text-white hover:opacity-90'
                                    : 'border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white'
                            }`}>
                                Parler de votre projet
                            </button>
                        </div>
                    ))}
                </div>

                {/* Services additionnels */}
                <div className="bg-white rounded-agency p-8 border border-gray-200">
                    <h3 className="text-2xl font-sans font-bold text-brand-dark mb-6 text-center">
                        Services complémentaires
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {additionalServices.map((service, index) => (
                            <div key={index} className="text-center p-4 bg-brand-light rounded-agency">
                                <h4 className="font-bold text-gray-800 mb-2">{service.name}</h4>
                                <p className="text-gray-600 text-sm">Selon le périmètre</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <div className="bg-brand-dark/5 rounded-agency p-8 border border-brand-dark/10">
                        <h3 className="text-xl font-sans font-bold text-brand-dark mb-4">
                            Une collaboration qui évolue avec vos besoins
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Le périmètre et le rythme de collaboration sont définis ensemble après l’appel découverte.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                                <span className="font-bold text-brand-blue">Rythme ponctuel</span>
                                <span className="text-gray-600 ml-2">À définir ensemble</span>
                            </div>
                            <div>
                                <span className="font-bold text-brand-blue">Rythme régulier</span>
                                <span className="text-gray-600 ml-2">À définir ensemble</span>
                            </div>
                            <div>
                                <span className="font-bold text-brand-blue">Partenariat continu</span>
                                <span className="text-gray-600 ml-2">À définir ensemble</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}