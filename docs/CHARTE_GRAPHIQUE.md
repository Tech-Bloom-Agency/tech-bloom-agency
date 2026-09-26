# Charte graphique — Tech Bloom Agency

**Version 2.0 (septembre 2026)** — remplace la section logo de la v1.0 (octobre 2025).
Couleurs, typographies, grille, baselines et ton restent ceux de la v1.0.

---

## 1. Logo (unique)

Losange aux angles arrondis tracé en contour + pousse à trois feuilles (nervures évidées),
tige ancrée dans la pointe basse. Plat, sans effet.

**Symbolique** : losange = cadre / méthode ; 3 feuilles = Stratégie · Création · Croissance ;
tige dans la pointe = croissance partie des fondations.

Les logos V1 (cercle-circuit) et V2 (losange dégradé glow) ne sont plus utilisés.
**L'effet glow est supprimé.**

### Versions

| Version | Usage |
| --- | --- |
| Horizontal | Version principale : icône + « TECH BLOOM » (Bitter Bold) + « AGENCY » (Montserrat SemiBold, espacé 42 %), en pétrole |
| Vertical + baseline | EN ou FR, baseline en cerise |
| Icône seule | Favicon, avatars, usages compacts |
| Avatars 1080 px | Réseaux sociaux (marine, dégradé, beige) |

### Couleurs du logo

- **Marine `#0D2A40`** — déclinaison principale, sur fonds clairs
- **Blanc** — fonds sombres, dégradés, photos
- **Dégradé `#507687` → `#384B70` → `#C94A6B` à 135°** — digital premium, sur fond clair
- **Cerise `#B8001F`** — accent ponctuel
- **Noir** — usages N&B

### Règles

- **Zone de protection** : x = ¼ de la hauteur du losange, sur les 4 côtés.
- **Tailles minimales** : icône 16 px (favicon uniquement), 24 px ailleurs, 8 mm en impression ;
  horizontal 120 px / 30 mm.
- **Interdits** : déformer, pivoter, recolorer hors palette, ombre / glow / contour, faible
  contraste, fond chargé, réorganiser ou changer la police du nom, transparence
  (sauf filigrane à 12 %).

---

## 2. Palette (inchangée depuis la v1.0)

| Couleur | Hex | Token Tailwind |
| --- | --- | --- |
| Marine | `#0D2A40` | `navy` |
| Bleu profond | `#384B70` | `blue` |
| Pétrole | `#507687` | `teal` |
| Beige | `#FCFAEE` | `beige` |
| Cerise (hover `#960019`) | `#B8001F` | `red` / `red-hover` |
| Rouge-rosé | `#C94A6B` | `brand-red-rose` |
| Blanc | `#FFFFFF` | `white` |
| Noir | `#000000` | — |
| Gris | `#6B7280` | `gray` |

**Proportions** : beige/blanc 60 %, marine + bleu profond 25 %, pétrole 10 %, cerise 5 %.

---

## 3. Typographie (inchangée depuis la v1.0)

- **Titres** : Bitter 700 / 600 → variable CSS `--font-heading`, classes `font-serif` / `font-heading`
- **Textes** : Montserrat 400 / 500 / 600 → variable CSS `--font-body`, classes `font-sans` / `font-body`

Les deux familles sont chargées via `next/font/google` dans [src/app/layout.tsx](../src/app/layout.tsx).

---

## 4. Fichiers du kit

Kit `TBA-kit-logo-v2.zip`, dézippé dans [public/logo/](../public/logo) (SVG avec noms
vectorisés + PNG HD) :

```
public/logo/
├── TBA-logo-horizontal.svg|.png            (marine)
├── TBA-logo-horizontal-blanc.svg|.png
├── TBA-logo-horizontal-degrade.svg|.png
├── TBA-logo-vertical.svg|.png              (baseline EN)
├── TBA-logo-vertical-FR.svg|.png
├── TBA-logo-vertical-blanc.svg|.png
├── TBA-icone-marine|blanc|degrade|cerise|noir.svg|.png
└── TBA-avatar-marine|degrade|beige.svg|.png   (1080 px)
```

---

## 5. Utilisation dans le site

Toujours passer par le composant [src/components/ui/Logo.tsx](../src/components/ui/Logo.tsx),
qui encapsule les chemins, les ratios, les tailles minimales et la zone de protection :

```tsx
import Logo from "@/components/ui/Logo";

// Version horizontale marine, 180 px de large, en priorité de chargement
<Logo variant="horizontal" width={180} priority className="h-10 w-auto" />

// Sur fond sombre ou dégradé
<Logo variant="horizontal-blanc" width={160} />

// Icône seule avec zone de protection
<Logo variant="icone" width={40} clearSpace />
```

En développement, le composant avertit dans la console si le logo est rendu sous la taille
minimale de la charte (120 px pour l'horizontal, 24 px pour l'icône).

### Points d'intégration actuels

| Emplacement | Déclinaison |
| --- | --- |
| Navbar (desktop + overlay mobile) | `horizontal` (marine) |
| Footer | `horizontal` (marine, sur fond beige) |
| Favicon `src/app/favicon.ico` + `src/app/icon.svg` | icône marine / avatar marine |
| `src/app/apple-icon.png` | avatar marine 180 px |
| Images Open Graph `public/og/` | horizontal marine sur beige, blanc sur marine et sur dégradé |
| Schema.org (`src/lib/schema-org.ts`) | `TBA-logo-horizontal.png` |
