import Link from "next/link";
import { Check } from "lucide-react";
import { FORMULES, DELAI_LIVRAISON } from "@/data/secteurs";

/**
 * Les trois formules, avec leurs prix en ariary.
 *
 * Composant serveur : un prospect qui découvre le site depuis son téléphone
 * doit lire les tarifs avant que le JavaScript arrive.
 */
export default function FormulesTarifs() {
    return (
        <section id="formules" className="bg-beige px-6 py-24 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-[1200px]">
                <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.3em] text-teal">
                    Trois formules
                </span>
                <h2 className="max-w-3xl text-balance font-heading text-4xl font-bold leading-tight tracking-[-0.02em] text-navy md:text-5xl">
                    Des prix affichés, et un devis qui ne bouge pas.
                </h2>
                <p className="mt-6 max-w-2xl text-pretty font-body text-lg leading-relaxed text-navy/70">
                    Le même tarif pour un restaurant ou un hôtel. Chaque formule
                    contient la précédente. Livraison en {DELAI_LIVRAISON}, quelle que
                    soit la formule.
                </p>

                <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-start">
                    {FORMULES.map((formule) => (
                        <article
                            key={formule.id}
                            id={formule.id}
                            className={`flex h-full flex-col border p-8 ${
                                formule.miseEnAvant
                                    ? "border-navy bg-navy text-white lg:-mt-4 lg:pb-12 lg:pt-12"
                                    : "border-navy/15 bg-white text-navy"
                            }`}
                        >
                            {formule.miseEnAvant && (
                                <span className="mb-5 inline-block self-start bg-red px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                                    La plus demandée
                                </span>
                            )}

                            <h3
                                className={`font-heading text-2xl font-bold leading-tight ${
                                    formule.miseEnAvant ? "text-white" : "text-navy"
                                }`}
                            >
                                {formule.nom}
                            </h3>

                            <p
                                className={`mt-3 text-pretty font-body text-sm leading-relaxed ${
                                    formule.miseEnAvant ? "text-beige/80" : "text-navy/70"
                                }`}
                            >
                                {formule.promesse}
                            </p>

                            <p
                                className={`mt-8 font-heading text-[2rem] font-bold leading-none tracking-[-0.02em] ${
                                    formule.miseEnAvant ? "text-white" : "text-navy"
                                }`}
                            >
                                {formule.prixAffiche}
                            </p>
                            <p
                                className={`mt-2 font-body text-xs uppercase tracking-[0.15em] ${
                                    formule.miseEnAvant ? "text-beige/60" : "text-navy/50"
                                }`}
                            >
                                Tout compris, une seule fois
                            </p>

                            <p
                                className={`mt-8 border-t pt-6 text-pretty font-body text-sm leading-relaxed ${
                                    formule.miseEnAvant
                                        ? "border-white/15 text-beige/75"
                                        : "border-navy/10 text-navy/65"
                                }`}
                            >
                                <span className="font-semibold">Pour vous si : </span>
                                {formule.pourQui}
                            </p>

                            <ul className="mt-8 flex-1 space-y-3">
                                {formule.inclus.map((ligne) => (
                                    <li key={ligne} className="flex gap-3">
                                        <Check
                                            size={18}
                                            aria-hidden="true"
                                            className={`mt-0.5 shrink-0 ${
                                                formule.miseEnAvant ? "text-teal" : "text-teal"
                                            }`}
                                        />
                                        <span
                                            className={`font-body text-sm leading-relaxed ${
                                                formule.miseEnAvant
                                                    ? "text-beige/85"
                                                    : "text-navy/80"
                                            }`}
                                        >
                                            {ligne}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={`/contact?formule=${formule.id}`}
                                className={`mt-10 inline-flex min-h-[52px] items-center justify-center px-6 text-sm font-bold uppercase tracking-[0.15em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
                                    formule.miseEnAvant
                                        ? "bg-red text-white hover:bg-red-hover focus-visible:outline-beige"
                                        : "border-2 border-navy text-navy hover:bg-navy hover:text-white focus-visible:outline-navy"
                                }`}
                            >
                                Demander cette formule
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
