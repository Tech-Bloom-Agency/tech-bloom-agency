import Link from "next/link";
import { SITE_CONFIG, WHATSAPP_LINK } from "@/lib/constants";

/**
 * Clôture de la page offre : les trois façons de nous joindre, dans l'ordre
 * d'effort croissant pour le prospect. WhatsApp d'abord, parce que c'est ce
 * qu'un gérant utilise déjà toute la journée.
 */
export default function SecteurCTA() {
    return (
        <section className="bg-navy px-6 py-24 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-[1200px]">
                <h2 className="max-w-3xl text-balance font-heading text-4xl font-bold leading-tight tracking-[-0.02em] text-white md:text-5xl">
                    Parlons de votre établissement.
                </h2>
                <p className="mt-6 max-w-2xl text-pretty font-body text-lg leading-relaxed text-beige/70">
                    Dites-nous votre activité et ce que vous perdez aujourd&apos;hui.
                    Nous vous répondons avec la formule qui correspond, ou nous vous
                    disons franchement qu&apos;aucune ne correspond.
                </p>

                <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[56px] items-center justify-center gap-3 bg-[#25D366] px-8 text-sm font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#1DA851] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-beige"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.347-.347.52-.52.174-.174.232-.298.347-.497.115-.198.057-.371-.058-.52-.115-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.172-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                        </svg>
                        Écrire sur WhatsApp
                    </a>

                    <a
                        href={`tel:${SITE_CONFIG.phoneE164}`}
                        className="inline-flex min-h-[56px] items-center justify-center border-2 border-beige/40 px-8 text-sm font-bold uppercase tracking-[0.15em] text-beige transition-colors hover:border-beige hover:bg-beige hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-beige"
                    >
                        Appeler le {SITE_CONFIG.phone}
                    </a>

                    <Link
                        href="/contact"
                        className="inline-flex min-h-[56px] items-center justify-center px-8 text-sm font-bold uppercase tracking-[0.15em] text-beige underline underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-beige"
                    >
                        Remplir le formulaire
                    </Link>
                </div>

                <p className="mt-10 font-body text-sm text-beige/55">
                    Par email :{" "}
                    <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="font-semibold text-beige underline underline-offset-4 hover:text-white"
                    >
                        {SITE_CONFIG.email}
                    </a>{" "}
                    — basés à {SITE_CONFIG.city}, nous nous déplaçons sur place.
                </p>
            </div>
        </section>
    );
}
