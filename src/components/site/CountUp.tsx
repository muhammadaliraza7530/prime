import { useEffect, useMemo, useState } from "react";
import { useInView } from "@/hooks/useInView";

type Props = {
  value: string;
  duration?: number;
  className?: string;
};

/**
 * Animates the numeric portion of a string (e.g. "350+", "100%", "A+")
 * by counting up when the element scrolls into view. Non-numeric prefixes /
 * suffixes are preserved. The counter also has a subtle 3D flip-in.
 */
export function CountUp({ value, duration = 1600, className }: Props) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.15 });
  const { prefix, target, suffix, hasNumber } = useMemo(() => {
    const m = value.match(/^(\D*)(\d+)(\D*)$/);
    return {
      prefix: m?.[1] ?? "",
      target: m ? parseInt(m[2], 10) : 0,
      suffix: m?.[3] ?? "",
      hasNumber: !!m,
    };
  }, [value]);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || !hasNumber) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, hasNumber]);

  return (
    <span
      ref={ref}
      className={className}
      style={{
        display: "inline-block",
        transform: inView ? "rotateX(0deg)" : "rotateX(90deg)",
        opacity: inView ? 1 : 0,
        transition: "transform 700ms cubic-bezier(.2,.9,.3,1.2), opacity 500ms ease",
        transformOrigin: "50% 50%",
      }}
    >
      {hasNumber ? `${prefix}${n}${suffix}` : value}
    </span>
  );
}
