import CTASection from "@/components/sections/shared/CTASection";
import { projects } from "@/data/projects";
import Image from "next/image";
import { CheckCircle2, TrendingUp, Compass, Target } from "lucide-react";

export default function Portfolio() {
    return (
        <div className="bg-brand-light">
            {/* Header de la page Portfolio */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-light to-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-5xl lg:text-7xl font-sans font-bold text-brand-dark mb-8 leading-tight">
                        Nos Réalisations
                    </h1>
                    <p className="text-xl lg:text-2xl text-brand-gray max-w-4xl mx-auto leading-relaxed">
                        Découvrez comment Tech Bloom Agency transforme les visions de ses clients en 
                        succès digitaux concrets : sites web, branding, marketing et optimisation.
                    </p>
                </div>
            </section>

            {/* Liste de Portfolio détaillée */}
            <section className="py-24 space-y-32">
                {projects.map((project, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={project.id} className="max-w-7xl mx-auto px-6 lg:px-8">
                            {/* Section En-tête d'Élément de Portfolio */}
                            <div className={`grid lg:grid-cols-2 gap-12 items-center mb-16 ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                                <div className={isEven ? "" : "lg:order-2"}>
                                    <span className="inline-block text-sm font-bold text-brand-blue bg-brand-blue/5 px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                                        {project.sector}
                                    </span>
                                    <h2 className="text-4xl lg:text-5xl font-sans font-bold text-brand-dark mb-6">
                                        {project.title}
                                    </h2>
                                    <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                                        &quot;{project.summary}&quot;
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="bg-white border border-gray-200 px-4 py-2 rounded-agency text-sm font-semibold text-brand-gray shadow-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className={`relative h-[400px] lg:h-[500px] rounded-agency overflow-hidden shadow-2xl ${isEven ? "" : "lg:order-1"}`}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                                </div>
                            </div>

                            {/* Section Corps d'Élément de Portfolio */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="p-8 bg-white rounded-agency shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-agency flex items-center justify-center mb-6">
                                        <Compass size={24} />
                                    </div>
                                    <h4 className="font-sans font-bold text-brand-dark mb-3">Contexte</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{project.context}</p>
                                </div>
                                <div className="p-8 bg-white rounded-agency shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-agency flex items-center justify-center mb-6">
                                        <Target size={24} />
                                    </div>
                                    <h4 className="font-sans font-bold text-brand-dark mb-3">Approche</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{project.approach}</p>
                                </div>
                                <div className="p-8 bg-white rounded-agency shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-agency flex items-center justify-center mb-6">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <h4 className="font-sans font-bold text-brand-dark mb-3">Solutions</h4>
                                    <ul className="space-y-2">
                                        {project.solutions.map((sol, idx) => (
                                            <li key={idx} className="text-gray-600 text-sm flex items-center">
                                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                                                {sol}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-8 bg-white rounded-agency shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-brand-blue/5 text-brand-blue rounded-agency flex items-center justify-center mb-6">
                                        <TrendingUp size={24} />
                                    </div>
                                    <h4 className="font-sans font-bold text-brand-dark mb-3">Résultats</h4>
                                    <ul className="space-y-2">
                                        {project.results.map((res, idx) => (
                                            <li key={idx} className="text-gray-900 text-sm font-bold flex items-center">
                                                <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mr-2" />
                                                {res}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Section Témoignages (si dispo) */}
                            {project.testimonial && (
                                <div className="mt-12 p-8 bg-brand-dark rounded-agency text-white relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
                                    <p className="text-xl italic mb-4 leading-relaxed relative z-10">&quot;{project.testimonial.quote}&quot;</p>
                                    <p className="font-bold text-brand-blue relative z-10">— {project.testimonial.author}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </section>

            <CTASection />
        </div>
    );
}
