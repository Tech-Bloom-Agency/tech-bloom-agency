"use client";

export default function B2BProcess() {
    const steps = [
        {
            number: "01",
            title: "Audit",
            description: "On regarde ce qui fonctionne, ce qui bloque et ce qui mérite d’être renforcé.",
            icon: "🧭"
        },
        {
            number: "02",
            title: "Direction",
            description: "On pose la bonne direction. Le bon message. Le bon angle pour parler à la bonne audience.",
            icon: "📊"
        },
        {
            number: "03",
            title: "Création",
            description: "On construit les éléments concrets qui donnent vie à votre présence digitale.",
            icon: "💻"
        },
        {
            number: "04",
            title: "Lancement",
            description: "On met tout en place pour que votre marque inspire confiance dès le premier contact.",
            icon: "🚀"
        },
        {
            number: "05",
            title: "Suivi",
            description: "On ajuste, on améliore, on fait grandir la présence de votre marque dans le temps.",
            icon: "🤝"
        }
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-dark mb-6">
                        On va droit au but.
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Clarté. Priorités. Exécution. C’est la manière dont on avance.
                    </p>
                </div>

                <div className="relative">
                    {/* Ligne de progression */}
                    <div className="absolute left-8 top-16 bottom-16 w-1 bg-gray-200 md:left-1/2 md:-translate-x-1/2"></div>
                    
                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div 
                                key={index}
                                className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Numéro */}
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl font-bold z-10">
                                    {step.number}
                                </div>
                                
                                {/* Contenu */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                                    <div className="bg-brand-light p-8 rounded-agency border border-gray-200 hover:shadow-lg transition-all duration-300">
                                        <div className="text-4xl mb-4">{step.icon}</div>
                                        <h3 className="text-2xl font-sans font-bold text-brand-dark mb-4">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-brand-dark/5 rounded-agency p-8 border border-brand-dark/10">
                        <h3 className="text-2xl font-sans font-bold text-brand-dark mb-4">
                            Notre engagement
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6 mt-6">
                            <div className="text-center">
                                <div className="text-3xl mb-2">🔒</div>
                                <h4 className="font-bold text-gray-800 mb-2">Confiance</h4>
                                <p className="text-gray-600 text-sm">Une relation claire, directe et respectueuse</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-2">🎯</div>
                                <h4 className="font-bold text-gray-800 mb-2">Objectif</h4>
                                <p className="text-gray-600 text-sm">Des décisions guidées par les résultats</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-2">🔄</div>
                                <h4 className="font-bold text-gray-800 mb-2">Adaptation</h4>
                                <p className="text-gray-600 text-sm">L’accompagnement évolue avec votre croissance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}