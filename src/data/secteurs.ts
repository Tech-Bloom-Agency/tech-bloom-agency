/**
 * Offre restaurants & hôtels.
 *
 * Les trois formules, le délai et l'échéancier sont des engagements
 * commerciaux : ils vivent ici, en un seul endroit, pour qu'un changement de
 * tarif ne demande pas de retoucher le JSX.
 */

export interface Formule {
    id: string;
    nom: string;
    prixAriary: number;
    prixAffiche: string;
    promesse: string;
    pourQui: string;
    inclus: string[];
    /** Mise en avant visuelle : la formule du milieu, la plus choisie. */
    miseEnAvant: boolean;
}

/** Délai d'exécution annoncé, identique pour les trois formules. */
export const DELAI_LIVRAISON = "14 jours ouvrés";

/** Échéancier de paiement 40 / 40 / 20. */
export const ECHEANCIER = [
    {
        part: "40 %",
        quand: "À la commande",
        detail: "Nous bloquons vos 14 jours ouvrés dans le planning et démarrons la collecte de vos contenus.",
    },
    {
        part: "40 %",
        quand: "À la validation de la maquette",
        detail: "Vous voyez votre site sur votre propre téléphone avant qu'il soit en ligne. Rien n'avance sans votre accord.",
    },
    {
        part: "20 %",
        quand: "À la mise en ligne",
        detail: "Le solde une fois le site public, joignable et vérifié avec vous.",
    },
] as const;

export const FORMULES: Formule[] = [
    {
        id: "carte-de-visite-web",
        nom: "Carte de Visite Web",
        prixAriary: 1_750_000,
        prixAffiche: "1 750 000 Ar",
        promesse: "Exister sur le téléphone de vos clients.",
        pourQui: "Vous n'avez pas de site, ou vous n'avez qu'une page Facebook.",
        inclus: [
            "Site d'une page, conçu d'abord pour le téléphone",
            "Bouton WhatsApp visible en permanence, sur chaque écran",
            "Appel en un seul geste depuis le téléphone",
            "Votre adresse sur Google Maps, avec itinéraire",
            "Horaires, photos et présentation de votre établissement",
            "Votre fiche Google créée ou reprise en main",
            "Nom de domaine et hébergement la première année",
        ],
        miseEnAvant: false,
    },
    {
        id: "visible-et-joignable",
        nom: "Visible & Joignable",
        prixAriary: 3_150_000,
        prixAffiche: "3 150 000 Ar",
        promesse: "Être trouvé sur Google, puis joignable en un geste.",
        pourQui: "Vous existez en ligne, mais personne ne vous trouve en cherchant votre activité.",
        inclus: [
            "Tout ce que contient la Carte de Visite Web",
            "Plusieurs pages : carte complète, ou chambres et tarifs",
            "Référencement local sur votre ville et votre activité",
            "Fiche Google optimisée, photos et publications",
            "Vos avis clients collectés et affichés sur le site",
            "Formulaire de demande relié à votre boîte mail",
            "Galerie photo de votre établissement",
            "Statistiques simples : combien de visites, combien d'appels",
        ],
        miseEnAvant: true,
    },
    {
        id: "reservation-directe",
        nom: "Réservation Directe",
        prixAriary: 4_500_000,
        prixAffiche: "4 500 000 Ar",
        promesse: "Recevoir des réservations sans commission et sans téléphone qui sonne.",
        pourQui: "Vous perdez des réservations faute de réponse, ou vous laissez une commission aux plateformes.",
        inclus: [
            "Tout ce que contient Visible & Joignable",
            "Réservation en ligne : date, heure, nombre de couverts ou de nuits",
            "La demande vous arrive aussitôt par email et par WhatsApp",
            "Vous confirmez ou refusez en un clic, depuis votre téléphone",
            "Vos créneaux, votre capacité et vos jours de fermeture paramétrables",
            "Aucune commission prélevée sur vos réservations",
            "Récapitulatif de vos réservations de la semaine",
        ],
        miseEnAvant: false,
    },
];

export interface Secteur {
    id: string;
    ancre: string;
    titre: string;
    accroche: string;
    /** Situations concrètes, formulées du point de vue du gérant. */
    constats: { probleme: string; consequence: string }[];
}

export const SECTEURS: Secteur[] = [
    {
        id: "restaurants",
        ancre: "restaurants",
        titre: "Restaurants",
        accroche:
            "Vos clients cherchent votre carte sur leur téléphone, à 19 h, avant de choisir où dîner. Ce qu'ils trouvent décide de leur soirée.",
        constats: [
            {
                probleme: "Votre carte n'est pas consultable sur un téléphone",
                consequence:
                    "Un client qui ne trouve pas vos plats et vos prix en vingt secondes passe au restaurant suivant.",
            },
            {
                probleme: "Pour réserver, il faut appeler",
                consequence:
                    "En plein service, personne ne décroche. La réservation est perdue, et elle ne rappelle pas.",
            },
            {
                probleme: "Vos informations dorment sur une page Facebook",
                consequence:
                    "Horaires dépassés, menu en photo illisible : le doute suffit à faire changer d'avis.",
            },
        ],
    },
    {
        id: "hotels",
        ancre: "hotels",
        titre: "Hôtels",
        accroche:
            "Un voyageur qui vous a déjà trouvés n'a aucune raison de passer par une plateforme — à condition de pouvoir réserver chez vous.",
        constats: [
            {
                probleme: "Vos réservations passent par les plateformes",
                consequence:
                    "Vous payez une commission sur des clients qui vous connaissaient déjà et vous cherchaient par votre nom.",
            },
            {
                probleme: "Aucun moyen de réserver en direct chez vous",
                consequence:
                    "Le voyageur qui arrive sur votre site doit écrire, attendre, relancer. Beaucoup abandonnent avant.",
            },
            {
                probleme: "Vos chambres et vos tarifs ne sont pas lisibles au téléphone",
                consequence:
                    "La majorité des recherches de séjour se font sur mobile. Un site illisible écarte la demande.",
            },
        ],
    },
];
