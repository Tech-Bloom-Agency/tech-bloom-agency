"use client";

export default function B2BPricing() {
    const packages = [
        {
            name: "Positionnement",
            description: "Pour clarifier votre marque",
            features: [
                "Audit de votre présence",
                "Message plus fort",
                "Direction stratégique",
                "Image plus cohérente",
                "Premiers leviers"
            ],
            bestValue: false
        },
        {
            name: "Visibilité",
            description: "Pour être vu et mémorisé",
            features: [
                "Gestion CM / SMM",
                "Contenus premium",
                "Planning éditorial",
                "Pilotage des réseaux",
                "Suivi et optimisation"
            ],
            bestValue: true
        },
        {
            name: "Accompagnement",
            description: "Pour avancer sans hésitation",
            features: [
                "Conseil digital",
                "Diagnostic clair",
                "Plan d’action sur mesure",
                "Refonte de la communication",
                "Suivi stratégique"
            ],
            bestValue: false
        }
    ];

    const additionalServices = [
        { name: "Création de contenus" },
        { name: "Refonte de site" },
        { name: "Prise de photos / vidéos" },
        { name: "Conseil digital" }
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-accent/5 to-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block bg-brand-blue text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                        AU BON NIVEAU
                    </div>
                    <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-dark mb-6">
                        Le bon accompagnement pour votre niveau.
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        On choisit l’option qui correspond réellement à votre situation, votre image et votre croissance.
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
                            On adapte le niveau. Pas le message.
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Le bon accompagnement dépend de votre réalité. Pas d’un schéma figé.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                                <span className="font-bold text-brand-blue">Lancer</span>
                                <span className="text-gray-600 ml-2">sans confusion</span>
                            </div>
                            <div>
                                <span className="font-bold text-brand-blue">Renforcer</span>
                                <span className="text-gray-600 ml-2">sa présence</span>
                            </div>
                            <div>
                                <span className="font-bold text-brand-blue">Croître</span>
                                <span className="text-gray-600 ml-2">avec vision</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}