"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function B2BContactForm() {
    const [formData, setFormData] = useState({
        company: "",
        name: "",
        email: "",
        phone: "",
        agencySize: "",
        projectsPerMonth: "",
        servicesNeeded: [] as string[],
        message: ""
    });

    const services = [
        "Sites vitrine",
        "E-commerce",
        "Applications web",
        "Refonte de sites",
        "Maintenance",
        "Développement spécifique"
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleServiceToggle = (service: string) => {
        setFormData(prev => ({
            ...prev,
            servicesNeeded: prev.servicesNeeded.includes(service)
                ? prev.servicesNeeded.filter(s => s !== service)
                : [...prev.servicesNeeded, service]
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.company || !formData.name || !formData.email || !formData.message) {
            alert("Veuillez remplir tous les champs obligatoires.");
            return;
        }

        if (formData.servicesNeeded.length === 0) {
            alert("Veuillez sélectionner au moins un service.");
            return;
        }

        try {
            const emailBody = `
Entreprise: ${formData.company}
Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone || "Non renseigné"}
Taille de l'agence: ${formData.agencySize || "Non renseignée"}
Projets par mois: ${formData.projectsPerMonth || "Non renseigné"}
Services recherchés: ${formData.servicesNeeded.join(', ')}

Message:
${formData.message}
            `;

            const mailtoLink = `mailto:${SITE_CONFIG.b2bEmail}?subject=${encodeURIComponent("Demande de partenariat B2B")}&body=${encodeURIComponent(emailBody)}`;
            window.location.href = mailtoLink;

            setFormData({
                company: "",
                name: "",
                email: "",
                phone: "",
                agencySize: "",
                projectsPerMonth: "",
                servicesNeeded: [],
                message: ""
            });

            alert("Votre client email s'ouvre avec votre demande prête à envoyer. Vérifiez le destinataire avant d'envoyer.");
        } catch (error) {
            console.error("Erreur lors de l'envoi:", error);
            alert("Une erreur est survenue lors de la préparation de votre demande.");
        }
    };

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block bg-brand-blue text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                        CONTACT
                    </div>
                    <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-dark mb-6">
                        Discutons de votre projet
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Remplissez ce formulaire pour recevoir un devis personnalisé 
                        et découvrir comment nous pouvons collaborer.
                    </p>
                </div>

                <div className="bg-white rounded-agency shadow-xl p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                    Nom de votre agence *
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    required
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                    placeholder="Nom de votre agence"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Votre nom *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                    placeholder="Votre prénom et nom"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email professionnel *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                    placeholder="contact@votre-agence.fr"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Téléphone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                    placeholder="+261 34 10 608 02"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="agencySize" className="block text-sm font-medium text-gray-700 mb-2">
                                    Taille de votre agence
                                </label>
                                <select
                                    id="agencySize"
                                    name="agencySize"
                                    value={formData.agencySize}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                >
                                    <option value="">Sélectionnez une option</option>
                                    <option value="1-2">1-2 personnes</option>
                                    <option value="3-5">3-5 personnes</option>
                                    <option value="6-10">6-10 personnes</option>
                                    <option value="10+">10+ personnes</option>
                                </select>
                            </div>
                            
                            <div>
                                <label htmlFor="projectsPerMonth" className="block text-sm font-medium text-gray-700 mb-2">
                                    Projets par mois
                                </label>
                                <select
                                    id="projectsPerMonth"
                                    name="projectsPerMonth"
                                    value={formData.projectsPerMonth}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                >
                                    <option value="">Sélectionnez une option</option>
                                    <option value="1-2">1-2 projets</option>
                                    <option value="3-5">3-5 projets</option>
                                    <option value="6-10">6-10 projets</option>
                                    <option value="10+">10+ projets</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Services recherchés *
                            </label>
                            <div className="grid md:grid-cols-2 gap-3">
                                {services.map((service) => (
                                    <label 
                                        key={service}
                                        className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg hover:bg-brand-light cursor-pointer transition-colors"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={formData.servicesNeeded.includes(service)}
                                            onChange={() => handleServiceToggle(service)}
                                            className="w-4 h-4 text-brand-blue focus:ring-accent"
                                        />
                                        <span className="text-gray-700">{service}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Votre projet en quelques mots *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                placeholder="Décrivez vos besoins, vos volumes, vos contraintes actuelles..."
                            />
                        </div>

                        <div className="pt-6">
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 px-8 rounded-full font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Envoyer ma demande de partenariat
                            </button>
                        </div>
                    </form>

                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <div className="text-center">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">
                                Vous préférez nous contacter directement ?
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <span>📧</span>
                                    <a href={`mailto:${SITE_CONFIG.b2bEmail}`} className="hover:text-brand-primary transition-colors">{SITE_CONFIG.b2bEmail}</a>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <span>📱</span>
                                    <span>{SITE_CONFIG.b2bPhone}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}