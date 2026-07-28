import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
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
            className="relative inline-block max-w-[90vw] overflow-hidden rounded-[2rem] border border-white/20 bg-black/20 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-2 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white shadow-lg backdrop-blur-sm transition-transform hover:scale-105 sm:right-3 sm:top-3 sm:h-10 sm:w-10"
              aria-label="Close promo modal"
            >
              <X className="h-5 w-5" />
            </button>

            <img
              src="/pop/pop.jpeg"
              alt="Promo"
              className="block h-auto max-h-[85vh] w-auto max-w-[90vw] object-contain rounded-[2rem] sm:max-w-[500px]"
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
