"use client";

export default function B2BSolution() {
    const solutions = [
        {
            title: "Positionnement",
            description: "On clarifie votre message. On met en avant ce qui compte. On donne à votre marque une vraie présence.",
            features: [
                "Message plus fort",
                "Image plus claire",
                "Valeur plus visible",
                "Confiance renforcée"
            ],
            icon: "🎯"
        },
        {
            title: "Réseaux sociaux",
            description: "On pilote votre présence avec un ton juste, cohérent et crédible. Sans bruit. Juste ce qui aide à grandir.",
            features: [
                "Contenus alignés",
                "Audience engagée",
                "Visibilité durable",
                "Réseaux maîtrisés"
            ],
            icon: "📱"
        },
        {
            title: "Site web",
            description: "Un site qui rassure, capte l’attention et guide le bon prospect vers le bon prochain pas.",
            features: [
                "Design premium",
                "Parcours clair",
                "Action plus simple",
                "Présence crédible"
            ],
            icon: "✨"
        }
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-accent/5 to-primary/5">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block bg-brand-blue text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                        NOTRE APPROCHE
                    </div>
                    <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-dark mb-6">
                        Une présence forte. Un message clair.
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        On structure la communication. On nettoie le message. On donne à votre marque l’impact qu’elle mérite.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-agency border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="text-5xl mb-6">{solution.icon}</div>
                            <h3 className="text-2xl font-sans font-bold text-brand-dark mb-4">
                                {solution.title}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {solution.description}
                            </p>
                            <ul className="space-y-2">
                                {solution.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="text-brand-blue mt-1">✓</span>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-agency p-8 border border-gray-200">
                    <div className="text-center">
                        <h3 className="text-2xl font-sans font-bold text-brand-dark mb-4">
                            Le résultat : de la clarté.
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8 mt-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-brand-blue mb-2">Plus</div>
                                <p className="text-gray-600">de visibilité</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-brand-blue mb-2">Plus</div>
                                <p className="text-gray-600">de confiance</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-brand-blue mb-2">Moins</div>
                                <p className="text-gray-600">de confusion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
