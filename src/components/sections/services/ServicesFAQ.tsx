"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQS = [
    {
        question: "Quels types de sites web développez-vous ?",
        answer: "Nous créons tout, des sites vitrine pour PME aux plateformes e-commerce robustes et applications SaaS sur mesure. Chaque projet est responsive et optimisé pour le référencement."
    },
    {
        question: "Combien de temps faut-il pour lancer un projet ?",
        answer: "Le délai varie selon la complexité. Un site vitrine prend généralement 3 à 5 semaines, tandis qu'un projet B2B plus complexe peut demander 8 à 12 semaines."
    },
    {
        question: "Proposez-vous un accompagnement marketing continu ?",
        answer: "Oui, notre service de Community Management et de Marketing Digital inclut un suivi mensuel, la création de contenu et l'analyse régulière des performances."
    },
    {
        question: "Est-ce que vous intervenez sur des projets B2B ?",
        answer: "Absolument. Nous avons une offre spécifique 'Tech Bloom B2B' dédiée aux collaborations entre entreprises et à l'automatisation des processus internes."
    },
    {
        question: "Comment se déroule l'appel découverte ?",
        answer: "Chaque projet e-commerce est différent : catalogue, paiements, parcours client, gestion des commandes, automatisations et niveau d’administration. Après un appel découverte, nous proposons un périmètre clair, des livrables définis et un devis adapté au besoin réel."
    }
];

export default function ServicesFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-sans font-bold text-brand-dark mb-6">FAQ</h2>
                    <p className="text-lg text-brand-gray mx-auto">
                        Réponses aux questions les plus fréquentes sur nos services et notre collaboration.
                    </p>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div key={index} className="border border-gray-100 bg-brand-light rounded-agency overflow-hidden hover:border-brand-blue/20 transition-all duration-300 shadow-sm">
                            <button 
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 lg:p-8 text-left focus:outline-none group"
                            >
                                <span className="text-lg lg:text-xl font-sans font-bold text-brand-dark group-hover:text-brand-blue transition-colors">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp size={24} className="text-brand-blue flex-shrink-0" />
                                ) : (
                                    <ChevronDown size={24} className="text-brand-dark flex-shrink-0" />
                                )}
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                <div className="p-6 lg:p-8 pt-0 text-gray-700 leading-relaxed lg:text-lg border-t border-gray-50/50">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
