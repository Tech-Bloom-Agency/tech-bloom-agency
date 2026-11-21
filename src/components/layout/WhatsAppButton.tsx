import { WHATSAPP_LINK } from "@/lib/constants";

/**
 * Bouton WhatsApp flottant, présent sur toutes les pages via le layout racine.
 *
 * Composant serveur volontairement : un lien n'a pas besoin de JavaScript.
 * L'ancienne version était un composant client qui n'apparaissait qu'après
 * 1 s (`setTimeout`), donc absent du HTML servi — invisible sur connexion
 * lente et inexistant si le JS échouait. Le libellé était en `group-hover`,
 * donc jamais affiché sur mobile, et l'icône était un combiné téléphone et
 * non le glyphe WhatsApp. Un gérant de restaurant doit comprendre où il
 * clique sans survoler et sans attendre.
 */
export default function WhatsAppButton() {
    return (
        <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nous écrire sur WhatsApp"
            className="group fixed bottom-4 right-4 z-[9999] flex min-h-[56px] items-center gap-3 rounded-full bg-[#25D366] pl-4 pr-5 text-white shadow-[0_6px_24px_rgba(0,0,0,0.28)] transition-colors hover:bg-[#1DA851] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] active:scale-95 sm:bottom-6 sm:right-6"
        >
            {/* Glyphe officiel WhatsApp : reconnaissable sans libellé. */}
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-7 w-7 shrink-0"
            >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.347-.347.52-.52.174-.174.232-.298.347-.497.115-.198.057-.371-.058-.52-.115-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.172-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>

            {/* Libellé permanent, y compris sur mobile. */}
            <span className="font-body text-sm font-bold leading-none">
                Écrivez-nous
            </span>
        </a>
    );
}
