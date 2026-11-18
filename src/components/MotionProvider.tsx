"use client";

import { MotionConfig } from "framer-motion";

/**
 * Pourquoi : 17 fichiers animent avec framer-motion, qui ignore par défaut le
 * réglage système « réduire les animations ». `reducedMotion="user"` le fait
 * respecter partout d'un seul endroit : les déplacements et changements de
 * taille sont neutralisés, les variations d'opacité restent, donc les
 * changements d'état continuent d'être perceptibles.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
