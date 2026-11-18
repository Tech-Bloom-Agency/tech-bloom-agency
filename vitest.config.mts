import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    test: {
        // Environnement par défaut : node (routes API, utilitaires).
        // Les tests de composants/hooks déclarent `@vitest-environment jsdom`.
        // Pool "threads" (défaut) casse sur Windows quand deux fichiers de tests
        // utilisent des environnements différents (node et jsdom) en parallèle :
        // les suites remontent "failed to find the runner". Les forks sont stables.
        pool: "forks",
        environment: "node",
        globals: true,
        include: ["src/**/*.{test,spec}.{ts,tsx}"],
    },
});
