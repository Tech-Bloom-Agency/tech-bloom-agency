import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

/** @type {import("eslint").Linter.Config[]} */
const config = [
    {
        ignores: [
            ".next/**",
            "out/**",
            "build/**",
            "node_modules/**",
            "public/**",
            "next-env.d.ts",
            // Skills d'agents installés en local (voir docs/SKILLS_AGENTS.md) :
            // code tiers, non versionné, hors périmètre du lint du projet
            ".agents/**",
            ".claude/**",
            ".impeccable/**",
            ".taste-skill/**",
        ],
    },
    ...nextCoreWebVitals,
    ...nextTypeScript,
    {
        rules: {
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                    ignoreRestSiblings: true,
                },
            ],
        },
    },
];

export default config;
