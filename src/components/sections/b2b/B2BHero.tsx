import Link from "next/link";

/**
 * En-tête de la page partenaires. Composant serveur, aligné sur le Hero de
 * l'accueil et sur PageHero : lisible sans JavaScript.
 *
 * Deux bugs corrigés au passage : les deux appels à l'action étaient des
 * <button> sans onClick ni lien — ils ne faisaient rien — et le kicker
 * affichait du rouge sur marine, soit 2,1:1 de contraste.
 */
export default function B2BHero() {
    return (
        <section className="surface-navy-mesh pb-24 pt-36 lg:pb-32 lg:pt-44">
            <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
                <h1 className="max-w-4xl text-balance font-heading text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white">
                    Votre image. Votre voix. Votre croissance.
                </h1>

                <p className="mt-8 max-w-2xl text-pretty font-body text-lg leading-relaxed text-beige/70 lg:text-xl">
                    On clarifie votre message. On structure votre présence. On donne à
                    votre marque le niveau qu&rsquo;elle mérite.
                </p>

                <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <Link
                        href="/contact"
                        className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-red px-8 py-4 font-heading text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-red-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-beige"
                    >
                        Parler de votre projet
                    </Link>

                    <Link
                        href="/portfolio"
                        className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-beige/40 px-8 py-4 font-heading text-sm font-semibold uppercase tracking-[0.12em] text-beige transition-colors hover:border-beige hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-beige"
                    >
                        Nos réalisations
                    </Link>
                </div>
            </div>
        </section>
    );
}
