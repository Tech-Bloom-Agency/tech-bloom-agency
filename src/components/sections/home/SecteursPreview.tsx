import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SECTEURS, FORMULES, DELAI_LIVRAISON } from "@/data/secteurs";
import { SITE_CONFIG } from "@/lib/constants";

/**
 * Bandeau d'entrée vers l'offre restaurants & hôtels, placé juste après le
 * hero de l'accueil : les campagnes de prospection pointent sur la racine du
 * site, et le destinataire doit reconnaître son activité sans défiler
 * longtemps. Chaque lien mène directement à l'ancre de son secteur.
 */
export default function SecteursPreview() {
    return (
        <section className="bg-beige px-6 py-20 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-[1200px]">
                <div className="lg:flex lg:items-end lg:justify-between lg:gap-12">
                    <div>
                        <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.3em] text-teal">
                            Offre dédiée · {SITE_CONFIG.city}
                        </span>
                        <h2 className="max-w-2xl text-balance font-heading text-3xl font-bold leading-tight tracking-[-0.02em] text-navy md:text-4xl">
                            Vous gérez un restaurant ou un hôtel ?
                        </h2>
                        <p className="mt-5 max-w-xl text-pretty font-body text-lg leading-relaxed text-navy/70">
                            Trois formules à prix affichés, livrées en {DELAI_LIVRAISON} :
                            bouton WhatsApp, visibilité sur Google et réservation en
                            direct sans commission.
                        </p>
                    </div>

                    <p className="mt-6 shrink-0 font-body text-sm text-navy/60 lg:mt-0 lg:text-right">
                        À partir de
                        <br className="hidden lg:block" />{" "}
                        <span className="font-heading text-2xl font-bold text-navy">
                            {FORMULES[0].prixAffiche}
                        </span>
                    </p>
                </div>

                <div className="mt-12 grid gap-px border border-navy/10 sm:grid-cols-2">
                    {SECTEURS.map((secteur) => (
                        <Link
                            key={secteur.id}
                            href={`/restaurants-hotels#${secteur.ancre}`}
                            className="group flex min-h-[132px] flex-col justify-between gap-6 bg-white p-8 outline outline-1 outline-navy/10 transition-colors hover:bg-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                        >
                            <h3 className="font-heading text-2xl font-bold leading-tight text-navy transition-colors group-hover:text-white">
                                {secteur.titre}
                            </h3>
                            <span className="inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-[0.12em] text-red transition-colors group-hover:text-beige">
                                Voir l&apos;offre
                                <ArrowRight
                                    size={16}
                                    aria-hidden="true"
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
