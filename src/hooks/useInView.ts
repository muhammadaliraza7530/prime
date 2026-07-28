import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15 },
  once = true,
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setInView(true);
          if (once) io.unobserve(e.target);
        } else if (!once) {
          setInView(false);
        }
      });
    }, options);
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return { ref, inView };
}
