import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

/**
 * Logo officiel Tech Bloom Agency — charte graphique v2.0 (kit TBA-kit-logo-v2).
 * Les fichiers sources sont dans `public/logo/`. Ne jamais recolorer, pivoter,
 * déformer ni ajouter d'ombre/glow : choisir la déclinaison adaptée au fond.
 */
export type LogoVariant =
    // Horizontal : version principale (icône + TECH BLOOM AGENCY)
    | "horizontal"
    | "horizontal-blanc"
    | "horizontal-degrade"
    // Vertical : icône + nom + baseline
    | "vertical"
    | "vertical-fr"
    | "vertical-blanc"
    // Icône seule
    | "icone"
    | "icone-blanc"
    | "icone-degrade"
    | "icone-cerise"
    | "icone-noir"
    // Avatars 1080 px (réseaux sociaux)
    | "avatar"
    | "avatar-degrade"
    | "avatar-beige";

type LogoAsset = {
    src: string;
    /** Dimensions intrinsèques du SVG. */
    width: number;
    height: number;
    /** Largeur de rendu par défaut, en px. */
    defaultWidth: number;
    /** Largeur minimale autorisée par la charte, en px (0 = non spécifiée). */
    minWidth: number;
    /** Hauteur du losange rapportée à la hauteur du fichier (zone de protection). */
    markRatio: number;
};

const HORIZONTAL = { width: 1058, height: 240, defaultWidth: 180, minWidth: 120, markRatio: 1 };
const VERTICAL = { width: 803, height: 788, defaultWidth: 200, minWidth: 0, markRatio: 0.53 };
const ICONE = { width: 2535, height: 2542, defaultWidth: 40, minWidth: 24, markRatio: 1 };
const AVATAR = { width: 1080, height: 1080, defaultWidth: 96, minWidth: 0, markRatio: 0 };

const LOGO_ASSETS: Record<LogoVariant, LogoAsset> = {
    "horizontal": { src: "/logo/TBA-logo-horizontal.svg", ...HORIZONTAL },
    "horizontal-blanc": { src: "/logo/TBA-logo-horizontal-blanc.svg", ...HORIZONTAL },
    "horizontal-degrade": { src: "/logo/TBA-logo-horizontal-degrade.svg", ...HORIZONTAL },
    "vertical": { src: "/logo/TBA-logo-vertical.svg", ...VERTICAL },
    "vertical-fr": { src: "/logo/TBA-logo-vertical-FR.svg", ...VERTICAL },
    "vertical-blanc": { src: "/logo/TBA-logo-vertical-blanc.svg", ...VERTICAL },
    "icone": { src: "/logo/TBA-icone-marine.svg", ...ICONE },
    "icone-blanc": { src: "/logo/TBA-icone-blanc.svg", ...ICONE },
    "icone-degrade": { src: "/logo/TBA-icone-degrade.svg", ...ICONE },
    "icone-cerise": { src: "/logo/TBA-icone-cerise.svg", ...ICONE },
    "icone-noir": { src: "/logo/TBA-icone-noir.svg", ...ICONE },
    "avatar": { src: "/logo/TBA-avatar-marine.svg", ...AVATAR },
    "avatar-degrade": { src: "/logo/TBA-avatar-degrade.svg", ...AVATAR },
    "avatar-beige": { src: "/logo/TBA-avatar-beige.svg", ...AVATAR },
};

interface LogoProps {
    variant?: LogoVariant;
    /** Largeur de rendu en px (la hauteur suit le ratio du fichier). */
    width?: number;
    /** Ajoute la zone de protection : ¼ de la hauteur du losange sur les 4 côtés. */
    clearSpace?: boolean;
    /** Texte alternatif ; `""` pour un logo purement décoratif (à côté d'un texte). */
    alt?: string;
    priority?: boolean;
    className?: string;
}

export default function Logo({
    variant = "horizontal",
    width,
    clearSpace = false,
    alt = SITE_CONFIG.name,
    priority = false,
    className = "",
}: LogoProps) {
    const asset = LOGO_ASSETS[variant];
    const renderedWidth = width ?? asset.defaultWidth;
    const renderedHeight = Math.round((renderedWidth * asset.height) / asset.width);

    if (process.env.NODE_ENV !== "production" && asset.minWidth && renderedWidth < asset.minWidth) {
        console.warn(
            `[Logo] "${variant}" rendu à ${renderedWidth}px : la charte impose ${asset.minWidth}px minimum.`
        );
    }

    const padding = clearSpace ? Math.round(renderedHeight * asset.markRatio * 0.25) : 0;

    return (
        <Image
            src={asset.src}
            alt={alt}
            width={renderedWidth}
            height={renderedHeight}
            priority={priority}
            style={padding ? { padding } : undefined}
            className={className}
        />
    );
}
