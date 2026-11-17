# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Deux publics, à égalité (décision de Sullivan, 17 novembre 2026) : le site doit
poser deux entrées assumées dès le premier écran, qui orientent vers deux
parcours distincts.

**PME et entrepreneurs malgaches.** Cherchent une présence en ligne — site
vitrine, boutique, identité visuelle. Arrivent souvent depuis le téléphone, sur
une connexion variable. Jugent sur la proximité, le prix en ariary et la
capacité à être joints vite (WhatsApp, téléphone +261).

**Agences web françaises.** Cherchent un partenaire technique en marque
blanche, pour absorber de la charge de développement. Le formulaire /b2b
qualifie sur la taille de l'agence, le nombre de projets par mois et les
services recherchés : sites vitrine, e-commerce, applications web, refonte,
maintenance, développement spécifique. Panier moyen et récurrence plus élevés
que le premier public.

## Product Purpose

Vitrine commerciale de Tech Bloom Agency, agence digitale basée à Madagascar.
Le site vend des prestations — stratégie, création, développement, croissance —
et son travail est de transformer une visite en prise de contact qualifiée :
formulaire, appel découverte Calendly, ou WhatsApp.

Le site est lui-même la démonstration du savoir-faire vendu. Un défaut de
finition y coûte plus cher que sur la vitrine d'un autre métier.

## Positioning

Agence malgache qui sert deux marchés avec la même équipe : les PME locales en
direct, et les agences françaises en sous-traitance francophone.

**P1 — différenciation à confirmer.** Ce que la concurrence ne pourrait pas
copier honnêtement n'est pas encore écrit. Les candidats présents dans le code
(délai, prix, francophonie, fuseau proche de la France) ne sont pas étayés par
des chiffres. À trancher avant d'écrire une promesse en page d'accueil.

## Operating Context

- **Mobile d'abord, connexion variable.** Le premier écran doit être utile avant
  que tout soit chargé.
- **Repères locaux** : prix en ariary, téléphones `+261`, fuseau
  `Indian/Antananarivo`.
- **Langue** : français, vouvoiement. Pas d'emoji, pas de tiret cadratin dans
  les contenus publics.
- **Chaîne de contact** : formulaire → webhook n8n (notification, Telegram,
  Google Sheets) → repli courriel Resend si n8n ne répond pas. La notification
  part vers l'agence, jamais vers l'adresse saisie par le visiteur.
- **Rendez-vous** : page de réservation Google Agenda
  (`calendar.app.google/CNDmBAwBJGos824k6`), appel découverte. Calendly n'est
  plus utilisé.
- **Adresse publiée** : « Madagascar », sans ville. Décision de Sullivan du
  17 novembre 2026 : aucune adresse postale précise n'est affichée.
- **Hébergement** : Vercel, intégration Git, branches `preprod` puis `prod`.

## Capabilities and Constraints

- Next.js 16 (App Router), TypeScript, Tailwind CSS 3, déploiement Vercel.
- 9 pages : accueil, services, portfolio, fiche projet, b2b, à propos, blog,
  contact, mentions légales.
- **Pas de CMS.** Le contenu vit dans des fichiers TypeScript (`src/data/`).
  Ajouter un projet ou un article demande un commit. Le contenu des articles de
  blog est une chaîne de caractères en dur, il n'y a pas de rendu markdown.
- **Pas de mode sombre**, et aucune décision prise à ce sujet.
- Deux catalogues de projets coexistent (`data/projects.ts` pour l'aperçu
  d'accueil, `data/portfolio.ts` pour la page portfolio et les fiches). Ils
  décrivent le même travail avec des titres différents et doivent être tenus à
  jour à la main. **P2 — à fusionner.**
- CI GitHub Actions bloquant (lint, typecheck, tests Vitest, build) ; `prod` et
  `preprod` protégées, le déploiement ne part pas sur un CI rouge.

**Technologies et outils réellement utilisés par l'agence** (liste fournie par
Sullivan le 17 novembre 2026, c'est elle qui fait foi sur le site) : Next.js,
React, Node.js, Supabase, PostgreSQL, Docker, Vercel, Claude Code, Codex,
Google, Meta Business Suite, Canva, CapCut.

TypeScript et Tailwind CSS sont également utilisés — le dépôt en est la preuve —
mais ne figurent pas dans la liste de Sullivan et ne sont donc pas affichés.
WordPress, Figma et « IA » étaient annoncés sur le site sans être étayés : ils
sont retirés.

## Brand Commitments

**Charte graphique v2.0, septembre 2026** (`docs/CHARTE_GRAPHIQUE.md`) — liante.
La refonte travaille dedans, elle ne la remplace pas (décision de Sullivan,
17 novembre 2026).

- **Logo** : losange aux angles arrondis en contour, pousse à trois feuilles,
  tige ancrée dans la pointe basse. Plat. Losange = cadre et méthode ;
  3 feuilles = Stratégie, Création, Croissance.
- **Palette** : marine `#0D2A40`, bleu profond `#384B70`, pétrole `#507687`,
  beige `#FCFAEE`, cerise `#B8001F` (survol `#960019`), rouge-rosé `#C94A6B`,
  gris `#6B7280`, blanc, noir.
- **Typographies** : Bitter (titres), Montserrat (textes).
- **Interdits explicites** : déformer, pivoter ou recolorer le logo hors
  palette ; ombre, glow ou contour ; faible contraste ; fond chargé ; changer
  la police du nom ; transparence au-delà d'un filigrane à 12 %.
- **Tailles minimales du logo** : icône 24 px (16 px réservé au favicon),
  version horizontale 120 px.
- **Crédit agence** : « Site conçu et développé par Tech Bloom Agency » sous le
  copyright du client, 10 à 12 px, sur les sites livrés aux clients. Ne
  s'applique pas à ce site.

## Evidence on Hand

Affichables, confirmés par Sullivan le 17 novembre 2026 :

- **Chiffres vérifiables** — nombre de projets livrés, années d'activité, délai
  moyen. **P3 : les valeurs exactes restent à fournir.** Le code affiche
  aujourd'hui 20+ projets, 10+ clients, 2+ années ; un fichier mort
  (`data/stats.ts`, supprimé) annonçait 90 % de clients satisfaits et 1 an
  d'expérience. Rien ne doit être affiché avant que Sullivan tranche.
- **Témoignages nominatifs** — Runrobe (Sylvania, fondateur), Girl's Touch
  (Erica, CEO), L'Homme Imparfait (Coach Ando, directeur marketing), dans
  `src/data/testimonials.ts`. **P4 : l'accord écrit doit être confirmé dossier
  par dossier** ; la signature TBA interdit tout nom de client dans un contenu
  public sans accord.

**Ancienneté, confirmée par Sullivan le 17 novembre 2026** : Tech Bloom Agency
a plus d'un an ; les activités entrent dans leur troisième année. Les deux faits
sont distincts et doivent rester distincts. Le site annonçait « plus de 3 ans »,
c'était faux.

**P5 — la fiche Google est au nom de Sullivan, pas de Tech Bloom Agency.**
Aucune fiche d'établissement vérifiée n'existe donc pour TBA. Conséquences déjà
tirées : le type `LocalBusiness` a été ramené à `Organization`, et
l'`aggregateRating` de l'accueil (4,6 sur 3 avis) a été retiré sur décision de
Sullivan — aucune source vérifiable ne pouvait l'étayer. Reste ouvert : créer ou
non une fiche au nom de l'agence.

Absences que le travail futur ne doit pas combler par invention :

- **Aucune capture de projet réel.** Les images du portfolio et du blog sont des
  photographies de stock Pexels. Elles ne doivent jamais être présentées comme
  du travail livré à un client.
- **« 97 % Engagement » est retiré** : la mesure n'existe pas et n'est pas
  défendable devant un prospect.
- **Aucune note moyenne.** Quatre jeux de chiffres contradictoires ont été
  trouvés et supprimés dans le code (`data/stats.ts`, `StatsSection`,
  `constants.ts`, et l'`aggregateRating` JSON-LD), annonçant selon les cas 20+
  projets, 90 % ou 97 % de satisfaction, 1, 2 ou 3 ans d'ancienneté. Les seuls
  chiffres affichables sont ceux listés ci-dessus.
- Pas de prix publics, pas de références presse, pas de benchmark.

## Product Principles

1. **Deux entrées, deux parcours.** PME malgaches et agences françaises pèsent
   autant. Le premier écran doit laisser chacun se reconnaître en une seconde,
   sans message moyen qui ne convainc personne.
2. **La preuve avant la promesse.** Un chiffre affiché doit pouvoir être défendu
   dans un rendez-vous. Mieux vaut trois faits tenables qu'une quatrième tuile
   inventée.
3. **Le site est le portfolio.** Sur la vitrine d'une agence web, un défaut de
   finition est un argument contre l'offre. Rien de décoratif qui ne porte une
   information.
4. **Utile avant d'être complet.** Mobile d'abord, connexion variable : le
   premier écran sert son visiteur avant que le reste soit arrivé. Rien ne
   s'interpose entre le visiteur et le contenu.
5. **Joignable en un geste.** Formulaire, Calendly et WhatsApp sont le produit,
   pas des pieds de page.

## Accessibility & Inclusion

- Cible **WCAG 2.1 AA**. La palette v2.0 passe l'AA pour du texte courant sur
  blanc et sur beige, contrastes vérifiés le 17 novembre 2026.
- Le réglage système « réduire les animations » est respecté sur tout le site
  (`MotionProvider` pour framer-motion, requête média pour le CSS).
- Site en français, lu depuis Madagascar et depuis la France.
