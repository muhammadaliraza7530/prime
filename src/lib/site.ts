export const WHATSAPP_NUMBER = "923125438005";
export const WHATSAPP_DISPLAY = "03125438005";
export const EMAIL = "info@primeservices.pk";
export const HEAD_OFFICE = "530 M-Block, LDA Avenue 1, Lahore, Pakistan";
export const BRANCH_OFFICE = "Fatima Complex, Yazmaan Road, Bahawalpur, Pakistan";

export const waLink = (message: string) => {
  const phone = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const DEFAULT_WA_MESSAGE =
  "Hello Prime Services! I would like a free site visit and quotation for my project.";
