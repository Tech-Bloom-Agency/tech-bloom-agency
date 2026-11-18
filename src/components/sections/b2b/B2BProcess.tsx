"use client";

import { ClipboardCheck, Code2, Compass, FileText, Handshake, Lock, RefreshCw, Target } from "lucide-react";

export default function B2BProcess() {
    const steps = [
        {
            number: "01",
            title: "Cadrage",
            description: "On lit votre cahier des charges et on vous rend ce qu’on en a compris, points ouverts compris.",
            icon: Compass
        },
        {
            number: "02",
            title: "Devis",
            description: "Périmètre écrit, délai, et surtout ce qui est hors périmètre. Rien ne commence sans votre accord.",
            icon: FileText
        },
        {
            number: "03",
            title: "Développement",
            description: "Commits sur votre dépôt, point hebdomadaire. Vous suivez l’avancement sans avoir à le demander.",
            icon: Code2
        },
        {
            number: "04",
            title: "Recette",
            description: "Une liste de vérifications cochée ligne par ligne avant de vous rendre la main.",
            icon: ClipboardCheck
        },
        {
            number: "05",
            title: "Suivi",
            description: "On reste joignable après la livraison. Un correctif sur notre travail ne se renégocie pas.",
            icon: Handshake
        }
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-dark mb-6">
                        Une méthode lisible, du devis à la recette.
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Vous engagez votre nom sur notre travail. Vous devez donc savoir à tout moment où il en est.
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
                                        <step.icon className="mb-4 h-8 w-8 text-brand-blue" strokeWidth={1.75} aria-hidden="true" />
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
                                <Lock className="mx-auto mb-2 h-7 w-7 text-brand-blue" strokeWidth={1.75} aria-hidden="true" />
                                <h4 className="font-bold text-gray-800 mb-2">Confiance</h4>
                                <p className="text-gray-600 text-sm">Une relation claire, directe et respectueuse</p>
                            </div>
                            <div className="text-center">
                                <Target className="mx-auto mb-2 h-7 w-7 text-brand-blue" strokeWidth={1.75} aria-hidden="true" />
                                <h4 className="font-bold text-gray-800 mb-2">Objectif</h4>
                                <p className="text-gray-600 text-sm">Des décisions guidées par les résultats</p>
                            </div>
                            <div className="text-center">
                                <RefreshCw className="mx-auto mb-2 h-7 w-7 text-brand-blue" strokeWidth={1.75} aria-hidden="true" />
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
