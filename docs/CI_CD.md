# CI / CD — Tech Bloom Agency

## Vue d'ensemble

| Étage | Outil | Déclencheur |
|---|---|---|
| **CI** (qualité) | GitHub Actions — `.github/workflows/ci.yml` | PR vers `preprod`/`prod`, push sur `preprod`/`prod` |
| **CD** (déploiement) | Intégration Git Vercel (déjà en place) | push sur n'importe quelle branche |
| **Veille dépendances** | Dependabot — `.github/dependabot.yml` | hebdo (npm), mensuel (actions) |

Le déploiement n'est **pas** fait par GitHub Actions : Vercel est déjà connecté au
repo (projet `tech-bloom-agency`, team `sullivan1301s-projects`). Dupliquer le
déploiement dans Actions créerait deux pipelines concurrents. GitHub Actions sert
de garde-fou qualité, Vercel de moteur de déploiement.

## Flux de branches

```
feature/*  ──PR──►  preprod  ──PR──►  prod
   │                   │                │
   │                   │                └─► Vercel Production (tech-bloom-agency.vercel.app)
   │                   └─► Vercel Preview (preprod)
   └─► Vercel Preview (par branche)
```

## Ce que vérifie le CI

Job **`quality`** (bloquant) :

1. `npm ci` — installation reproductible depuis `package-lock.json`
2. `npm run lint -- --max-warnings=0` — ESLint 9 (flat config, `eslint.config.mjs`)
3. `npm run typecheck` — `tsc --noEmit`
4. `npm test` — Vitest (`vitest.config.mts`)
5. `npm run build` — build Next.js + génération sitemap (`postbuild`)

Job **`audit`** (non bloquant) : `npm audit --audit-level=high`. Non bloquant car
l'endpoint npm audit est régulièrement indisponible — il sert d'alerte, pas de gate.

La version de Node vient de `.nvmrc` (24), alignée sur le runtime Vercel du projet.

## Activer le gate (à faire une fois sur GitHub)

Sans protection de branche, Vercel déploie même si le CI est rouge. Pour fermer
la boucle, dans **Settings → Branches → Add branch ruleset** :

Pour `prod` **et** `preprod` :
- ✅ Require a pull request before merging
- ✅ Require status checks to pass → sélectionner **`Lint · Typecheck · Tests · Build`**
- ✅ Require branches to be up to date before merging
- ✅ Block force pushes

En ligne de commande (nécessite `gh` authentifié avec les droits admin du repo) :

```bash
gh api -X PUT repos/Tech-Bloom-Agency/tech-bloom-agency/branches/prod/protection \
  -H "Accept: application/vnd.github+json" \
  -f "required_status_checks[strict]=true" \
  -f "required_status_checks[contexts][]=Lint · Typecheck · Tests · Build" \
  -F "enforce_admins=false" \
  -F "required_pull_request_reviews[required_approving_review_count]=0" \
  -F "restrictions=null"
```

(Répéter pour `preprod`.)

## Commandes locales équivalentes

```bash
npm run lint          # ESLint
npm run lint:fix      # ESLint + corrections automatiques
npm run typecheck     # TypeScript
npm test              # Vitest (une passe)
npm run test:watch    # Vitest en mode watch
npm run build         # Build de production + sitemap
```

Lancer les quatre premières avant d'ouvrir une PR évite un aller-retour avec le CI.

## Variables d'environnement

Aucune variable n'est requise pour que le build passe : tout `process.env.*` du
code a une valeur de repli (voir `src/lib/constants.ts`). Le CI construit donc
sans secret. Les valeurs réelles (`N8N_WEBHOOK_URL`, `RESEND_API_KEY`,
`NEXT_PUBLIC_GA_ID`, …) sont configurées côté Vercel, par environnement.

Si un jour le build dépend d'une variable, l'ajouter en secret GitHub puis
l'injecter dans le step `Build` du workflow.

## Tests

Vitest + React Testing Library, configurés dans `vitest.config.mts` :

- environnement `node` par défaut (routes API, utilitaires) ;
- un test de composant ou de hook déclare `// @vitest-environment jsdom` en
  première ligne du fichier ;
- l'alias `@/` est résolu comme dans Next (`tsconfig.json`) ;
- les tests vivent à côté du code (`src/**/*.test.ts(x)`).

Couverture actuelle :

| Fichier testé | Ce qui est vérifié |
|---|---|
| `src/app/api/contact/route.ts` | validation Zod, honeypot, livraison n8n, fallback Resend, échappement HTML, rate limit |
| `src/lib/calendly.ts` | construction de l'URL Calendly personnalisée |
| `src/hooks/useScrollHeader.ts` | seuil de scroll, seuil personnalisé, nettoyage de l'écouteur |

## Évolutions possibles

- **Lighthouse CI** sur les previews, pour verrouiller les budgets de performance
  décrits dans `docs/CHECKLIST_PERFORMANCE.md`.
- **Ignored Build Step** Vercel, pour ne pas déployer les commits qui ne touchent
  que la documentation.
