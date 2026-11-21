"use client";
import { Target, Users, Lightbulb } from "lucide-react";
import CTASection from "@/components/sections/shared/CTASection";
import { SITE_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";

export default function About() {
    return (
        <>
            <section className="pt-40 pb-20 bg-white">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto px-6 lg:px-8"
                    >
                        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-serif font-bold text-brand-primary mb-8 text-center leading-[1.05] tracking-[-0.02em]">
                            À propos de <br /> <span className="text-brand-dark-blue">Tech Bloom.</span>
                        </h2>
                        <p className="text-xl lg:text-2xl text-brand-gray font-medium text-center mb-8 uppercase tracking-widest">
                            {SITE_CONFIG.taglineFr}
                        </p>
                    </motion.div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="prose prose-lg max-w-none"
                        >
                            <h2 className="text-3xl font-serif font-bold text-brand-primary mb-6 uppercase tracking-wider">
                                Notre Histoire
                            </h2>
                            <p className="text-brand-gray font-medium leading-relaxed mb-6 uppercase tracking-wide">
                                Tech Bloom Agency est née d&apos;une vision simple : rendre le digital accessible
                                aux PME et entrepreneurs d&apos;Antananarivo, de Madagascar et d&apos;Afrique francophone. Notre nom évoque
                                la floraison des idées grâce à la technologie, symbolisant la croissance et le
                                développement de nos clients.
                            </p>
...
                            <h2 className="text-3xl font-serif font-bold text-brand-primary mb-6 uppercase tracking-wider">
                                Notre Mission
                            </h2>
                            <p className="text-brand-gray font-medium leading-relaxed mb-12 uppercase tracking-wide">
                                Faire fleurir les idées de nos clients grâce à la technologie, en offrant des
                                solutions modernes, accessibles et adaptées. Nous accompagnons les PME et
                                entrepreneurs dans leur transformation digitale avec des outils concrets et
                                mesurables.
                            </p>

                            <h2 className="text-3xl font-serif font-bold text-brand-primary mb-6 uppercase tracking-wider">
                                Notre Vision
                            </h2>
                            <p className="text-brand-gray font-medium leading-relaxed mb-12 uppercase tracking-wide">
                                Devenir une référence en solutions digitales pour les PME à Madagascar et en
                                Afrique francophone, en utilisant l&apos;IA et les technologies modernes comme leviers
                                de croissance. Nous voulons être le partenaire de confiance qui propulse votre
                                entreprise vers le succès digital.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-32 bg-brand-bg-soft">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-6xl font-serif font-bold text-brand-primary mb-16 text-center"
                        >
                            Nos <span className="text-brand-dark-blue opacity-50">valeurs.</span>
                        </motion.h2>
                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                { title: "Innovation", desc: "Utilisation des technologies modernes et de l'IA pour créer des solutions performantes et adaptées.", icon: Lightbulb, color: "from-brand-primary to-brand-dark-blue" },
                                { title: "Performance", desc: "Orientation résultats et croissance tangible pour tous nos projets. Nous mesurons notre succès au vôtre.", icon: Target, color: "from-brand-red-rose to-brand-burgundy" },
                                { title: "Accompagnement", desc: "Support personnalisé et à l'écoute pour réussir votre transformation digitale à chaque étape.", icon: Users, color: "from-brand-purple to-brand-burgundy" }
                            ].map((value, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, duration: 0.8 }}
                                    whileHover={{ y: -10 }}
                                    className="bg-white rounded-agency-md p-10 shadow-sm border border-brand-light-gray hover:shadow-2xl hover:border-brand-primary/20 transition-all duration-500"
                                >
                                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-agency-sm flex items-center justify-center mb-8 shadow-lg`}>
                                        <value.icon size={28} className="text-white" />
                                    </div>
                                    <h3 className="font-serif font-bold text-2xl text-brand-primary mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="text-brand-gray font-medium leading-relaxed text-sm uppercase tracking-wider">
                                        {value.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
            </section>
                <CTASection />
        </>
    );
}