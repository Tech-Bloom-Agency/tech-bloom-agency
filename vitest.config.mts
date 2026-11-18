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
        environment: "node",
        globals: true,
        include: ["src/**/*.{test,spec}.{ts,tsx}"],
    },
});
