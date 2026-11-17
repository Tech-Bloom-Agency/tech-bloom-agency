import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Premier écran : composant serveur, sans JavaScript ni animation.
 * Le public est mobile d'abord sur connexion variable (PRODUCT.md) : le titre,
 * les deux entrées et les preuves doivent être lisibles avant que quoi que ce
 * soit d'autre arrive. L'ancienne version masquait son appel à l'action
 * pendant deux secondes, le temps d'une animation lettre par lettre.
 */

const DOORS = [
    {
        href: "/services",
        title: "Vous êtes une PME ou un entrepreneur",
        text: "Site vitrine, boutique en ligne, community management, identité visuelle. Nous construisons votre présence en ligne, puis nous la faisons vivre.",
        cta: "Voir les services",
        surface: "bg-beige",
        heading: "text-navy",
        body: "text-navy/70",
        link: "text-red hover:text-red-hover focus-visible:outline-red",
    },
    {
        href: "/b2b",
        title: "Vous êtes une agence web",
        text: "Vous déléguez le développement, nous livrons sous votre marque. Sites, e-commerce, applications, refonte et maintenance, en français.",
        cta: "Travailler avec nous",
        surface: "bg-blue",
        heading: "text-white",
        body: "text-beige/75",
        link: "text-beige hover:text-white focus-visible:outline-beige",
    },
] as const;

export default function Hero() {
    return (
        <section className="bg-navy">
            <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-36 lg:px-12 lg:pb-24 lg:pt-44">
                <h1 className="max-w-4xl text-balance font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
                    Sites web, réseaux sociaux et marques, construits depuis Madagascar.
                </h1>

                <p className="mt-8 max-w-2xl text-pretty font-body text-lg leading-relaxed text-beige/70 lg:text-xl">
                    Tech Bloom Agency travaille pour deux publics : les PME qui veulent
                    exister en ligne, et les agences qui cherchent une équipe technique de
                    confiance.
                </p>

                {/* Preuves : uniquement des faits défendables en rendez-vous (PRODUCT.md) */}
                <p className="mt-10 max-w-2xl text-pretty font-body text-sm leading-relaxed text-beige/60">
                    <span className="font-semibold text-white">13 projets livrés</span> en
                    création de sites, community management et identité de marque.{" "}
                    <span className="font-semibold text-white">7 clients</span> travaillent
                    encore avec nous aujourd&apos;hui.
                </p>

                <p className="mt-8 font-body text-sm text-beige/60">
                    Un projet en tête ?{" "}
                    <Link
                        href="/contact"
                        className="font-semibold text-beige underline underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-beige"
                    >
                        Réservez un appel découverte
                    </Link>
                </p>
            </div>

            {/* Deux entrées à égalité : chacun doit se reconnaître en une seconde */}
            <div className="grid lg:grid-cols-2">
                {DOORS.map((door) => (
                    <div
                        key={door.href}
                        className={`${door.surface} px-6 py-14 lg:px-12 lg:py-20`}
                    >
                        <div className="mx-auto max-w-[600px] lg:mx-0">
                            <h2
                                className={`text-balance font-heading text-2xl font-bold leading-tight tracking-[-0.01em] lg:text-3xl ${door.heading}`}
                            >
                                {door.title}
                            </h2>

                            <p
                                className={`mt-5 text-pretty font-body leading-relaxed ${door.body}`}
                            >
                                {door.text}
                            </p>

                            <Link
                                href={door.href}
                                className={`group mt-8 inline-flex min-h-[44px] items-center gap-2 font-heading text-sm font-bold uppercase tracking-[0.12em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${door.link}`}
                            >
                                {door.cta}
                                <ArrowRight
                                    className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
                                    aria-hidden="true"
                                />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
