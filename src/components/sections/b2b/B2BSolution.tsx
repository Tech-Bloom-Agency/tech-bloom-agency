"use client";

import { Check, Layout, LayoutDashboard, ShoppingBag } from "lucide-react";

export default function B2BSolution() {
    const solutions = [
        {
            title: "Sites et refontes",
            description: "De vos maquettes au déploiement, livré sous votre marque. Vous gardez la main sur le client et sur le discours.",
            features: [
                "Intégration depuis vos maquettes",
                "Next.js, React, Node",
                "Responsive vérifié",
                "Déploiement Vercel"
            ],
            icon: Layout
        },
        {
            title: "E-commerce",
            description: "Boutiques en ligne complètes : catalogue, paiement, commandes. Y compris la reprise d’un existant.",
            features: [
                "Catalogue et paiement",
                "Reprise de données",
                "Espace client",
                "Suivi des commandes"
            ],
            icon: ShoppingBag
        },
        {
            title: "Applications métier",
            description: "Outils sur mesure quand le site ne suffit plus : espaces clients, tableaux de bord, intégrations.",
            features: [
                "Supabase et PostgreSQL",
                "Authentification et rôles",
                "Tableaux de bord",
                "API et intégrations"
            ],
            icon: LayoutDashboard
        }
    ];

    return (
        <section className="py-20 px-6 bg-beige">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block bg-brand-blue text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                        NOTRE APPROCHE
                    </div>
                    <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-dark mb-6">
                        Ce qu’on prend en charge.
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Trois familles de travail, toutes livrées sous votre marque. Votre client ne nous voit jamais.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-agency border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <solution.icon className="mb-6 h-9 w-9 text-brand-blue" strokeWidth={1.75} aria-hidden="true" />
                            <h3 className="text-2xl font-sans font-bold text-brand-dark mb-4">
                                {solution.title}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {solution.description}
                            </p>
                            <ul className="space-y-2">
                                {solution.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check className="mt-1 h-4 w-4 flex-shrink-0 text-brand-blue" strokeWidth={2.5} aria-hidden="true" />
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
