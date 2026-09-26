# Tech Bloom Agency - Site Web Officiel

Site web premium de l'agence digitale **Tech Bloom Agency**, basée à Madagascar.

**Tagline**: De la stratégie à l'éclosion digitale | From Strategy to Digital Growth

## Technologies utilisées

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Lucide React** (icônes)
- **React 19**

## Pages disponibles

1. **Accueil** (`/`) - Page d'accueil avec hero, services, valeurs, stats, portfolio preview
2. **Services** (`/services`) - Liste détaillée de tous les services
3. **À propos** (`/a-propos`) - Histoire, mission, vision et valeurs de l'agence
4. **Portfolio** (`/portfolio`) - Projets réalisés (data-driven)
5. **Blog** (`/blog`) - Articles et conseils (data-driven)
6. **Contact** (`/contact`) - Formulaire de contact et informations
7. **Mentions légales** (`/mentions-legales`) - Informations légales

## Installation & Développement

```bash
# Installation des dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

## Build & Production

```bash
# Créer un build de production
npm run build

# Démarrer le serveur de production
npm start
```

## Charte graphique

Charte complète (logo v2.0, palette, typographie, règles d'usage) : [docs/CHARTE_GRAPHIQUE.md](docs/CHARTE_GRAPHIQUE.md).

### Logo

Kit officiel v2.0 dans `public/logo/` (losange contour + pousse à trois feuilles). Toujours
l'afficher via le composant `src/components/ui/Logo.tsx` :

```tsx
import Logo from "@/components/ui/Logo";

<Logo variant="horizontal" width={180} />        // marine, fonds clairs
<Logo variant="horizontal-blanc" width={180} /> // fonds sombres ou dégradés
```

### Couleurs principales

- **Bleu Marine**: `#0D2A40` (logo principal, corporate)
- **Bleu Profond**: `#384B70` (Titres, structure)
- **Bleu Pétrole**: `#507687` (Accents, éléments secondaires)
- **Beige Clair**: `#FCFAEE` (Arrière-plans clairs)
- **Rouge Cerise**: `#B8001F` (CTA, accents)
- **Rouge Rosé**: `#C94A6B` (Dégradés modernes)

### Typographie

- **Headings**: Bitter 700/600 (serif)
- **Body**: Montserrat 400/500/600 (sans-serif)

## Ajouter du contenu

### Ajouter un projet au portfolio

Éditez `src/data/projects.ts` :

```typescript
{
  id: "nouveau-projet",
  title: "Titre du projet",
  description: "Description courte",
  category: "Catégorie",
  image: "URL de l'image",
  tags: ["tag1", "tag2"],
}
```

### Ajouter un article de blog

Éditez `src/data/blog.ts` :

```typescript
{
  id: "nouvel-article",
  title: "Titre de l'article",
  excerpt: "Résumé de l'article",
  author: "Tech Bloom Agency",
  date: "2025-01-07",
  readTime: "5 min",
  image: "URL de l'image",
  category: "Catégorie",
  tags: ["tag1", "tag2"],
}
```

## Services proposés

1. **Création de sites web** - Sites vitrine, e-commerce, applications web, landing pages
2. **Branding & Identité visuelle** - Logo, charte graphique, identité de marque
3. **Marketing digital** - SEO, publicité en ligne, stratégie de contenu
4. **Community management** - Gestion des réseaux sociaux, création de contenu
5. **Maintenance & Support** - Maintenance technique, mises à jour, support
6. **Audit & Accompagnement** - Audit digital, conseil stratégique, formation

## Contact

- **Email**: sullivanjoro3@gmail.com
- **Téléphone**: +261 34 10 608 02
- **Adresse**:  Madagascar
- **Fondateur**: Joro Sullivan RAKOTONIAINA

## Licence

© 2025 Tech Bloom Agency. Tous droits réservés.
