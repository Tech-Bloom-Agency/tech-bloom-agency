interface PageHeroProps {
    title: string;
    description?: string;
}

/**
 * En-tête des pages secondaires. Composant serveur, comme le Hero de
 * l'accueil : lisible immédiatement, sans JavaScript.
 *
 * Partis avec la refonte : le kicker (interdit, et son rouge sur marine
 * plafonnait à 2,1:1), le grain feTurbulence, deux formes en rotation
 * infinie, le fondu au défilement, et la seconde ligne display qui
 * concurrençait le titre au lieu de le prolonger — les deux moitiés de phrase
 * sont désormais un seul titre, coupé par `text-balance`.
 */
export default function PageHero({ title, description }: PageHeroProps) {
    return (
        <section className="surface-navy-mesh pb-24 pt-36 lg:pb-32 lg:pt-44">
            <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
                <h1 className="max-w-4xl text-balance font-heading text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white">
                    {title}
                </h1>

                {description && (
                    <p className="mt-8 max-w-2xl text-pretty font-body text-lg leading-relaxed text-beige/70 lg:text-xl">
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
}
