"use client";

import { CalendarX, Globe, UserPlus, UserX } from "lucide-react";

export default function B2BChallenges() {
    const challenges = [
        {
            title: "Vous refusez des projets",
            description: "Une demande arrive, l’équipe est déjà pleine, et le projet part chez un concurrent. La charge varie plus vite que vos effectifs.",
            icon: CalendarX
        },
        {
            title: "Recruter engage trop loin",
            description: "Un développeur se recrute en plusieurs mois et s’engage sur plusieurs années, pour une charge qui change d’un trimestre à l’autre.",
            icon: UserPlus
        },
        {
            title: "Le prestataire disparaît en route",
            description: "Un freelance injoignable au milieu d’un projet, c’est votre nom qui le porte devant le client. Le risque ne se sous-traite pas.",
            icon: UserX
        },
        {
            title: "La distance se paie en coordination",
            description: "Décalage horaire, échanges en anglais, spécifications mal comprises : ce qu’on gagne sur le taux journalier se reperd en allers-retours.",
            icon: Globe
        }
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-dark mb-6">
                        Votre problème n’est pas le talent. C’est la capacité.
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Une agence qui refuse du travail ne manque pas de clients. Elle manque de mains disponibles au bon moment.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {challenges.map((challenge, index) => (
                        <div
                            key={index}
                            className="bg-brand-light p-8 rounded-agency border border-gray-100 hover:shadow-lg transition-all duration-300"
                        >
                            <challenge.icon className="mb-4 h-8 w-8 text-brand-blue" strokeWidth={1.75} aria-hidden="true" />
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
