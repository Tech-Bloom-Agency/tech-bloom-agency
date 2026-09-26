import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full">
            {/* High-contrast Pre-footer CTA */}
            <div className="bg-brand-primary py-24 md:py-32 overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-5 -z-0" />
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                        <div className="space-y-8 max-w-2xl">
                            <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-red-rose">
                                Prêt à écolre ?
                            </span>
                            <h2 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-[0.95] tracking-tight">
                                Débutons votre <br />
                                <span className="text-brand-pale-pink">prochain projet.</span>
                            </h2>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-flex items-center group text-white border-b-2 border-brand-red-rose pb-2 text-xl font-serif font-bold hover:text-brand-pale-pink transition-colors"
                        >
                            <span>Contactez-nous</span>
                            <ArrowRight size={24} className="ml-4 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="bg-brand-bg-soft text-brand-gray border-t border-brand-light-gray">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                        <div className="space-y-8 col-span-1 md:col-span-1">
                             <Link
                                href="/"
                                className="flex items-center"
                                aria-label={`${SITE_CONFIG.name} — retour à l'accueil`}
                            >
                                {/* Logo officiel TBA — version horizontale marine sur fond clair */}
                                <Logo variant="horizontal" width={160} className="h-9 w-auto" />
                            </Link>
                            <p className="text-xs leading-relaxed max-w-xs font-medium uppercase tracking-wider">
                                Agence digitale haute-performance. <br />
                                Stratégie, Conception & Développement.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em]">Navigation</h3>
                            <ul className="space-y-4">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-xs font-bold uppercase tracking-widest hover:text-brand-red-rose transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em]">Expertises</h3>
                            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                                <li>Stratégie Digitale</li>
                                <li>Conception UX/UI</li>
                                <li>Développement Sur-mesure</li>
                                <li>SEO & Performance</li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em]">Contact</h3>
                            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                                <li className="hover:text-brand-red-rose transition-colors cursor-pointer">{SITE_CONFIG.email}</li>
                                <li className="hover:text-brand-red-rose transition-colors cursor-pointer">{SITE_CONFIG.phone}</li>
                                <li className="opacity-60">{SITE_CONFIG.address}</li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom line */}
                    <div className="pt-12 border-t border-brand-light-gray flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-[10px] font-bold uppercase tracking-[0.1em] opacity-60">
                            © {currentYear} {SITE_CONFIG.name}.
                        </p>
                        <div className="flex items-center space-x-8 text-[10px] font-bold uppercase tracking-[0.1em]">
                            <Link href="/mentions-legales" className="hover:text-brand-primary transition-colors">Confidentialité</Link>
                            <Link href="/mentions-legales" className="hover:text-brand-primary transition-colors">Mentions légales</Link>
                            <span className="opacity-40">Madagascar</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
