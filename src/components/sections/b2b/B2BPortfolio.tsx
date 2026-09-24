"use client";

export default function B2BPortfolio() {
    const projects = [
        {
            title: "E-commerce mode",
            client: "Agence Créative Paris",
            description: "Plateforme e-commerce complète pour une marque de vêtements de luxe. 500+ produits, paiement sécurisé, espace client.",
            results: [
                "Livré en 6 semaines",
                "150% plus rapide que leurs estimations",
                "Zero bug post-livraison"
            ],
            tech: ["Next.js", "Stripe", "Prismic"],
            image: "🛍️"
        },
        {
            title: "Application SaaS",
            client: "Digital Studio Lyon",
            description: "Solution de gestion client white-label pour une agence spécialisée dans l'immobilier. Dashboard, CRM, reporting.",
            results: [
                "200 heures économisées",
                "Intégré à leur offre premium",
                "40% de marge supplémentaire"
            ],
            tech: ["React", "Node.js", "MongoDB"],
            image: "🏢"
        },
        {
            title: "Site vitrine premium",
            client: "Web Agency Marseille",
            description: "Refonte complète du site vitrine d'une agence de communication. Design sur mesure, animations, multilingue.",
            results: [
                "Positionné en 1ère page Google",
                "Taux de conversion +85%",
                "Livré sous 3 semaines"
            ],
            tech: ["Next.js", "Tailwind", "Framer Motion"],
            image: "🎨"
        },
        {
            title: "Dashboard analytics",
            client: "Tech Solutions Bordeaux",
            description: "Interface de reporting personnalisée pour suivre les performances des campagnes digitales de leurs clients.",
            results: [
                "Automatisation de 90% des rapports",
                "Temps de création divisé par 4",
                "Nouveau service lancé"
            ],
            tech: ["React", "Chart.js", "API REST"],
            image: "📊"
        }
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block bg-brand-blue text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                        NOS RÉALISATIONS
                    </div>
                    <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-dark mb-6">
                        Des projets qui parlent d'eux-mêmes
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Voici quelques exemples de collaborations réussies avec des agences partenaires. 
                        Ces projets ont été réalisés en sous-traitance tout en portant leur marque.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className="bg-brand-light rounded-agency border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            <div className="p-8">
                                <div className="text-6xl mb-6 text-center">{project.image}</div>
                                
                                <div className="mb-6">
                                    <span className="inline-block bg-brand-dark/10 text-brand-dark px-3 py-1 rounded-full text-sm font-medium mb-3">
                                        Pour {project.client}
                                    </span>
                                    <h3 className="text-2xl font-sans font-bold text-brand-dark mt-3 mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-bold text-gray-800 mb-3">Résultats obtenus :</h4>
                                    <ul className="space-y-2">
                                        {project.results.map((result, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="text-brand-blue">✓</span>
                                                <span className="text-gray-700">{result}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-gray-800 mb-3">Technologies utilisées :</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, idx) => (
                                            <span 
                                                key={idx}
                                                className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <div className="bg-gradient-to-r from-primary to-accent rounded-agency p-8 text-white">
                        <h3 className="text-2xl font-sans font-bold mb-4">
                            Prêt à démultiplier votre activité ?
                        </h3>
                        <p className="text-lg mb-6 opacity-90">
                            Rejoignez nos partenaires et transformez vos contraintes en opportunités de croissance.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold mb-2">50+</div>
                                <div className="text-sm opacity-80">Projets réalisés</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">25+</div>
                                <div className="text-sm opacity-80">Agences partenaires</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">98%</div>
                                <div className="text-sm opacity-80">Clients satisfaits</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}