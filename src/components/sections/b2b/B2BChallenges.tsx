"use client";

export default function B2BChallenges() {
    const challenges = [
        {
            title: "On ne vous voit pas assez",
            description: "Votre marque a du potentiel, mais elle passe inaperçue dans un environnement trop bruyant.",
            icon: "🧭"
        },
        {
            title: "Le message manque de punch",
            description: "Le public ne comprend pas vite votre valeur. Et sans clarté, il ne prend pas action.",
            icon: "💬"
        },
        {
            title: "Les réseaux ne servent pas votre image",
            description: "Du contenu existe, mais il n’aide ni votre crédibilité ni votre croissance. Il manque de cohérence.",
            icon: "📲"
        },
        {
            title: "Le site n’aide pas",
            description: "Le site donne une impression trop faible pour le niveau réel de votre entreprise.",
            icon: "🏢"
        }
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-dark mb-6">
                        Le problème n’est pas votre ambition.
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        C’est le manque de clarté. Et sans clarté, la croissance s’arrête.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {challenges.map((challenge, index) => (
                        <div 
                            key={index}
                            className="bg-brand-light p-8 rounded-agency border border-gray-100 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="text-4xl mb-4">{challenge.icon}</div>
                            <h3 className="text-2xl font-sans font-bold text-brand-dark mb-4">
                                {challenge.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {challenge.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-red-50 border border-red-200 rounded-agency p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-sans font-bold text-red-800 mb-4">
                            Résultat : du potentiel perdu.
                        </h3>
                        <p className="text-red-700 text-lg">
                            Les bonnes idées existent. Le problème, c’est qu’elles ne se voient pas assez. Et quand on ne se voit pas, on ne se choisit pas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}