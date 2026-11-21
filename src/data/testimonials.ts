export interface Testimonial {
  name: string;
  company: string;
  role: string;
  quote: string;
  /**
   * Optionnel, et laissé vide volontairement : les trois fichiers référencés
   * auparavant (/avatars/longin.jpg, erica.jpg, marc.jpg) n'existaient pas et
   * renvoyaient 404 en production — dont un nom de fichier qui ne
   * correspondait même pas à la personne citée. Sans avatar, le composant
   * affiche les initiales du nom, ce qui n'invente aucun visage.
   */
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sylvania",
    company: "Runrobe",
    role: "Direction",
    // Mission réelle : stratégie marketing et community management pour une
    // boutique de robes à Tamatave. L'ancienne version parlait d'une
    // « plateforme e-commerce », ce que la fiche projet du même site
    // contredisait.
    quote:
      "Tech Bloom Agency pilote notre stratégie marketing et nos réseaux sociaux. Notre communauté s'est étoffée et nos clientes nous trouvent plus facilement.",
  },
  {
    name: "Erica",
    company: "Girl's Touch",
    role: "Direction",
    quote:
      "Un accompagnement à l'écoute sur nos réseaux. Nos publications sont régulières, cohérentes, et notre audience réagit beaucoup plus qu'avant.",
  },
  {
    name: "Coach Ando",
    company: "L'Homme Imparfait",
    role: "Coach",
    quote:
      "La gestion de mes réseaux ne me prend plus mon temps, et ma page touche désormais des personnes que je n'atteignais pas seul.",
  },
];
