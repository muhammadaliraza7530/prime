import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
};

export function Reveal({ children, delay = 0, y = 24, x = 0, className, as = "div" }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });
  const style: CSSProperties = {
    opacity: inView ? 1 : 0,
    transform: inView ? "translate3d(0,0,0)" : `translate3d(${x}px, ${y}px, 0)`,
    transition: `opacity 700ms ease ${delay}ms, transform 800ms cubic-bezier(.2,.7,.2,1) ${delay}ms`,
    willChange: "transform, opacity",
  };
  const Tag = as as "div";
  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
