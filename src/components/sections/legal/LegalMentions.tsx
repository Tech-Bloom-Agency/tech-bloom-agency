import { SITE_CONFIG } from "@/lib/constants";

export default function LegalMentions() {
    return (
        <div className="bg-brand-light">
            {/* Header */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-light to-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-5xl lg:text-7xl font-sans font-bold text-brand-dark mb-8 leading-tight">
                        Mentions Légales
                    </h1>
                    <p className="text-xl lg:text-2xl text-brand-gray max-w-4xl mx-auto leading-relaxed">
                        Informations juridiques et politique de confidentialité de Tech Bloom Agency.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 bg-white p-12 lg:p-16 rounded-agency shadow-xl border border-gray-100">
                    <div className="prose prose-lg prose-primary max-w-none space-y-12">
                        
                        <div>
                            <h2 className="text-3xl font-sans font-bold text-brand-dark mb-6">1. Éditeur du site</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Le site <strong>tech-bloom-agency.com</strong> est édité par :<br />
                                <strong>Tech Bloom Agency</strong><br />
                                Responsable : {SITE_CONFIG.founder}<br />
                                Adresse : {SITE_CONFIG.address}<br />
                                Téléphone : {SITE_CONFIG.phone}<br />
                                Email : {SITE_CONFIG.email}<br />
                                Statut : Agence Digitale
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-sans font-bold text-brand-dark mb-6">2. Directeur de la publication</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Le directeur de la publication est {SITE_CONFIG.founder}, en sa qualité de fondateur de Tech Bloom Agency.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-sans font-bold text-brand-dark mb-6">3. Hébergement</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Le site est hébergé par :<br />
                                <strong>Vercel Inc.</strong><br />
                                440 N Barranca Ave #4133<br />
                                Covina, CA 91723, USA<br />
                                Site web : https://vercel.com
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-sans font-bold text-brand-dark mb-6">4. Propriété intellectuelle</h2>
                            <p className="text-gray-700 leading-relaxed">
                                L&apos;ensemble des contenus présents sur ce site (textes, images, logos, vidéos) est la propriété exclusive de Tech Bloom Agency, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-sans font-bold text-brand-dark mb-6">5. Protection des données (RGPD)</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Les données collectées via le formulaire de contact (nom, email, téléphone) sont utilisées exclusivement pour répondre à vos demandes de devis ou d&apos;informations. Elles ne sont jamais transmises à des tiers sans votre consentement. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données en nous contactant par email.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-sans font-bold text-brand-dark mb-6">6. Cookies</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Ce site peut utiliser des cookies pour améliorer l&apos;expérience utilisateur et analyser le trafic via Google Analytics. Vous pouvez désactiver les cookies dans les réglages de votre navigateur.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-sans font-bold text-brand-dark mb-6">7. Responsabilité</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Tech Bloom Agency s&apos;efforce de fournir des informations précises, mais ne saurait être tenue responsable d&apos;éventuelles erreurs ou omissions dans le contenu du site. L&apos;utilisation des informations fournies se fait sous votre propre responsabilité.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
