import { SECTEURS } from "@/data/secteurs";

/**
 * Un bloc par secteur, avec son ancre : /restaurants-hotels#restaurants et
 * #hotels. Les emails de prospection pointent directement sur l'ancre du
 * secteur du destinataire, qui atterrit donc sur son activité et non sur une
 * page générique.
 */
export default function SecteurConstats() {
    return (
        <>
            {SECTEURS.map((secteur, index) => (
                <section
                    key={secteur.id}
                    id={secteur.ancre}
                    className={`scroll-mt-24 px-6 py-24 lg:px-12 lg:py-32 ${
                        index % 2 === 0 ? "bg-white" : "bg-beige"
                    }`}
                >
                    <div className="mx-auto max-w-[1200px]">
                        <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.3em] text-teal">
                            {secteur.titre}
                        </span>
                        <h2 className="max-w-3xl text-balance font-heading text-4xl font-bold leading-tight tracking-[-0.02em] text-navy md:text-5xl">
                            {secteur.accroche}
                        </h2>

                        <div className="mt-14 grid gap-px border border-navy/10 md:grid-cols-3">
                            {secteur.constats.map((constat) => (
                                <div
                                    key={constat.probleme}
                                    className="bg-white p-8 outline outline-1 outline-navy/10"
                                >
                                    <h3 className="font-heading text-lg font-bold leading-snug text-navy">
                                        {constat.probleme}
                                    </h3>
                                    <p className="mt-4 text-pretty font-body text-sm leading-relaxed text-navy/70">
                                        {constat.consequence}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}
