import { AnimatePresence, motion } from "framer-motion";
import { X, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";

interface PromoModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function PromoModal({ isOpen, onClose }: PromoModalProps) {
  const [isVisible, setIsVisible] = useState(isOpen ?? true);

  useEffect(() => {
    if (typeof isOpen === "boolean") {
      setIsVisible(isOpen);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="relative w-full max-w-[420px] overflow-hidden rounded-[2rem] border border-white/20 bg-[#0B1528] shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/50 text-white shadow-lg backdrop-blur-sm transition-transform hover:scale-105 sm:h-10 sm:w-10"
              aria-label="Close promo modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Promo Image */}
            <div className="relative w-full overflow-hidden rounded-t-[2rem]">
              <img
                src="/pop/pop.jpeg"
                alt="Promo"
                className="block h-auto max-h-[70vh] w-full object-cover"
              />
            </div>

            {/* Nuventure Style Bottom Call Card */}
            <div className="bg-[#0B1528] px-5 py-1 text-center text-white">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
                CONTACT NOW
              </p>
              <p className="mt-0.5 text-lg font-black tracking-wide text-white">
                Call: 0312-5438005
              </p>

              {/* Gold Call Now Button */}
              <a
                href="tel:03125438005"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#E5A338] px-6 py-3 text-sm font-black text-slate-950 uppercase tracking-wider shadow-lg transition-transform duration-200 hover:bg-[#d4932a] active:scale-95"
              >
                <PhoneCall className="h-4 w-4 fill-slate-950" />
                CALL NOW
              </a>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
