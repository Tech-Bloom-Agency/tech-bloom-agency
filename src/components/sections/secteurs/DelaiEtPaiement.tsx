import { DELAI_LIVRAISON, ECHEANCIER } from "@/data/secteurs";

/**
 * Délai d'exécution et échéancier 40 / 40 / 20.
 *
 * Les deux objections d'un gérant qui n'a jamais commandé de site : combien de
 * temps, et quand est-ce que je paie. Elles méritent leur propre section.
 */
export default function DelaiEtPaiement() {
    return (
        <section id="delai-et-paiement" className="bg-navy px-6 py-24 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-[1200px]">
                <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
                    <div>
                        <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.3em] text-teal">
                            Délai et paiement
                        </span>
                        <h2 className="text-balance font-heading text-4xl font-bold leading-tight tracking-[-0.02em] text-white md:text-5xl">
                            En ligne en {DELAI_LIVRAISON}.
                        </h2>
                        <p className="mt-6 text-pretty font-body text-lg leading-relaxed text-beige/70">
                            Le compte à rebours démarre le jour où nous avons vos
                            contenus : vos photos, votre carte ou vos chambres, vos
                            horaires. C&apos;est la seule chose que nous attendons de vous.
                        </p>
                        <p className="mt-6 text-pretty font-body text-base leading-relaxed text-beige/60">
                            Si nous dépassons ce délai pour une raison qui nous
                            appartient, vous ne payez pas la dernière échéance.
                        </p>
                    </div>

                    <ol className="space-y-px">
                        {ECHEANCIER.map((etape, index) => (
                            <li
                                key={etape.quand}
                                className="flex flex-col gap-4 border-l-2 border-teal bg-white/[0.04] p-6 sm:flex-row sm:items-baseline sm:gap-8 lg:p-8"
                            >
                                <div className="flex shrink-0 items-baseline gap-3 sm:w-28 sm:flex-col sm:gap-1">
                                    <span className="font-heading text-3xl font-bold leading-none text-white">
                                        {etape.part}
                                    </span>
                                    <span className="font-body text-[10px] uppercase tracking-[0.2em] text-teal">
                                        Étape {index + 1}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-heading text-lg font-bold leading-snug text-white">
                                        {etape.quand}
                                    </h3>
                                    <p className="mt-2 text-pretty font-body text-sm leading-relaxed text-beige/70">
                                        {etape.detail}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
