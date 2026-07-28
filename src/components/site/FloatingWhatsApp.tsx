import { waLink, DEFAULT_WA_MESSAGE } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink(DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp: 03125438005"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center rounded-full bg-whatsapp px-5 py-3 font-bold text-whatsapp-foreground shadow-[0_10px_30px_-6px_color-mix(in_oklab,var(--whatsapp)_70%,transparent)] transition-transform hover:scale-105"
    >
      WhatsApp
    </a>
  );
}