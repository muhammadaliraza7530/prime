export const WHATSAPP_NUMBER = "923335430155";
export const WHATSAPP_DISPLAY = "0333 5430155";
export const EMAIL = "info@primeservices.pk";
export const ADDRESS = "530 M-Block, LDA Avenue 1, Lahore, Pakistan";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const DEFAULT_WA_MESSAGE =
  "Hello Prime Services! I would like a free site visit and quotation for my project.";