// Adaptateur Cloudflare Workers pour Next.js.
// Pas de cache incrémental : le site n'utilise pas d'ISR, toutes les pages
// sont statiques sauf le route handler /api/contact.
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig();
