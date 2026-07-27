import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Slide = { img: string; title: string; tag: string };

type Props = {
  slides: Slide[];
};

export function ShowcaseCarousel({ slides }: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el || paused) return;
    const id = window.setInterval(() => {
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const next = el.scrollLeft + el.clientWidth * 0.85;
      if (next >= maxScroll - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollTo({ left: next, behavior: "smooth" });
      }
    }, 2000);
    return () => window.clearInterval(id);
  }, [paused]);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((s, i) => (
          <article
            key={i}
            className="group relative aspect-[4/5] w-[78%] shrink-0 snap-center overflow-hidden rounded-3xl border border-border shadow-lg md:aspect-[16/10] md:w-[62%] lg:w-[46%]"
          >
            <img
              src={s.img}
              alt={s.title}
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-dark-foreground md:p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary">
                {s.tag}
              </p>
              <h3 className="mt-2 font-display text-xl font-black md:text-3xl">{s.title}</h3>
            </div>
          </article>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between px-2 md:flex">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Previous"
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg backdrop-blur transition-transform hover:-translate-x-0.5"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Next"
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:translate-x-0.5"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}