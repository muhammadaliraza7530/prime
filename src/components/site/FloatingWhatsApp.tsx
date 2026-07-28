import { MessageCircle } from "lucide-react";
import { waLink, DEFAULT_WA_MESSAGE } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink(DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp: 03125438005"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-[0_10px_30px_-6px_color-mix(in_oklab,var(--whatsapp)_70%,transparent)] transition-transform hover:scale-110"
    >
      <MessageCircle size={26} />
    </a>
  );
}
