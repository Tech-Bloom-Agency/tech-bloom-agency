"use client";
import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function B2BContactForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [error, setError] = useState<string | null>(null);
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
            setError("Veuillez remplir tous les champs obligatoires.");
            return;
        }

        if (formData.servicesNeeded.length === 0) {
            setError("Veuillez sélectionner au moins un service.");
            return;
        }

        setError(null);
        setStatus("sending");

        // Le champ `company` de /api/contact est un piège anti-robot : une
        // valeur non vide fait jeter la demande en silence, avec une réponse
        // de succès. Le nom de l'agence passe donc dans le message.
        const message = `Agence : ${formData.company}
Taille de l'agence : ${formData.agencySize || "non renseignée"}
Projets par mois : ${formData.projectsPerMonth || "non renseigné"}
Services recherchés : ${formData.servicesNeeded.join(", ")}

${formData.message}`;

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    // Le schéma de l'API plafonne `service` à 100 caractères.
                    service: `Partenariat B2B : ${formData.servicesNeeded.join(", ")}`.slice(0, 100),
                    message,
                }),
            });

            if (!response.ok) {
                throw new Error(`L'API a répondu ${response.status}`);
            }

            setStatus("sent");
            setFormData({
                company: "",
                name: "",
                email: "",
                phone: "",
                agencySize: "",
                projectsPerMonth: "",
                servicesNeeded: [],
                message: "",
            });
        } catch (sendError) {
            console.error("Envoi du formulaire B2B :", sendError);
            setStatus("error");
            setError(
                `L'envoi a échoué. Réessayez, ou écrivez-nous directement à ${SITE_CONFIG.b2bEmail}.`
            );
        }
    };

    return (
        <section className="py-20 px-6 bg-beige">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-dark mb-6">
                        Parlons de votre charge.
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Dites-nous votre volume et ce que vous cherchez à déléguer.
                        On répond avec un périmètre et un délai, pas avec une plaquette.
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red focus:border-transparent transition-all"
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red focus:border-transparent transition-all"
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red focus:border-transparent transition-all"
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red focus:border-transparent transition-all"
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red focus:border-transparent transition-all"
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red focus:border-transparent transition-all"
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
                                            className="w-4 h-4 text-brand-blue focus:ring-red"
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
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red focus:border-transparent transition-all"
                                placeholder="Décrivez vos besoins, vos volumes, vos contraintes actuelles..."
                            />
                        </div>

                        <div className="pt-6">
                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-red px-8 py-4 font-medium text-white transition-colors duration-300 hover:bg-red-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                <Send className="h-5 w-5" aria-hidden="true" />
                                {status === "sending"
                                    ? "Envoi en cours…"
                                    : "Envoyer ma demande de partenariat"}
                            </button>

                            <p aria-live="polite" className="mt-4 text-sm">
                                {status === "sent" && (
                                    <span className="font-medium text-brand-blue">
                                        Votre demande est partie. Nous revenons vers vous
                                        rapidement.
                                    </span>
                                )}
                                {error && <span className="font-medium text-red">{error}</span>}
                            </p>
                        </div>
                    </form>

                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <div className="text-center">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">
                                Vous préférez nous contacter directement ?
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                                    <a href={`mailto:${SITE_CONFIG.b2bEmail}`} className="hover:text-brand-primary transition-colors">{SITE_CONFIG.b2bEmail}</a>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Phone className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
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
