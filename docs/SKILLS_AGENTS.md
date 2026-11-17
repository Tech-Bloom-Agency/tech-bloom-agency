# Skills d'agents — outillage design

Skills installés localement pour le travail de design et d'animation sur le
site. Ils ne sont **pas versionnés** (`.agents/`, `.claude/skills/` et
`skills-lock.json` sont dans `.gitignore`) : `impeccable` seul pèse environ
4 800 fichiers, et deux d'entre eux ont été installés depuis un clone local,
donc le fichier de verrouillage n'est pas reproductible tel quel.

Pour les réinstaller sur un autre poste :

```bash
# 13 skills de design-engineering et d'animation (Emil Kowalski)
npx skills@latest add emilkowalski/skills

# tasteskill — construction de pages pro, garde-fou anti-template
npx skills@latest add Leonxlnx/taste-skill

# impeccable — direction artistique, audit et polish d'interface
npx skills@latest add pbakaus/impeccable
```

Si un `git clone` coupe en route (dépôts volumineux), cloner à la main puis
installer depuis le chemin local :

```bash
git clone --depth 1 --filter=blob:none https://github.com/Leonxlnx/taste-skill.git
npx skills@latest add ./taste-skill --yes
```

## Ce que chacun apporte

| Skill | Usage |
|---|---|
| `impeccable` | audit et critique d'interface, hiérarchie, typographie, couleur, accessibilité, états limites |
| `design-taste-frontend` | construction de pages au niveau d'une vraie page d'entreprise, vérificateur dans un navigateur réel |
| `animate`, `choreograph`, `gestures` | construction d'animations et d'interactions au doigt |
| `review-animations`, `improve-animations`, `remove-animations` | critique, plan d'amélioration, retrait du mouvement inutile |
| `animation-performance` | mouvement dans le budget d'une frame |
| `mobile-native`, `apple-design` | sensation native sur téléphone — critique pour Madagascar (mobile d'abord) |
| `break-ui` | passage de l'interface au pire des jeux de données |
| `emil-design-eng` | détails de finition : états de survol, origine des popovers, timing des tooltips |

## Point de vigilance

`design-taste-frontend` déclare un **hook `Stop`** dans son `SKILL.md` : un
script (`scripts/gate.mjs`) s'exécute à la fin de chaque tour d'agent pour
contrôler le rendu. C'est volontaire de la part de ses auteurs, mais cela
signifie qu'un script tiers tourne automatiquement dans la session. À
désinstaller (`.agents/skills/design-taste-frontend`) si ce comportement n'est
pas souhaité.
