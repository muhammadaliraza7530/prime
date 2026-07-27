import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Home,
  Landmark,
  Sofa,
  Layers,
  Paintbrush,
  ClipboardList,
  BadgeCheck,
  HardHat,
  Wallet,
  ShieldCheck,
  Wrench,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Award,
  ArrowRight,
  Sparkles,
} from "lucide-react";
const heroImg = "/hero-construction.jpg";
const heroSlide2 = "/showcase-luxury-home.jpg";
const heroSlide3 = "/showcase-modern-villa.jpg";
const projectModelTown = "/project-model-town.jpg";
const projectGrey = "/project-etihad-grey.jpg";
const projectSpanish = "/project-spanish-villa.jpg";
const showcaseSpanish = "/showcase-spanish.jpg";
const showcaseModernVilla = "/showcase-modern-villa.jpg";
const showcaseLuxuryHome = "/showcase-luxury-home.jpg";
const showcaseInterior = "/showcase-interior.jpg";
const showcaseGreyStructure = "/showcase-grey-structure.jpg";
import { waLink, DEFAULT_WA_MESSAGE, WHATSAPP_DISPLAY } from "@/lib/site";
import { CountUp } from "@/components/site/CountUp";
import { Reveal } from "@/components/site/Reveal";
import { ShowcaseCarousel } from "@/components/site/ShowcaseCarousel";
import { useInView } from "@/hooks/useInView";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { icon: Home, title: "Real Estate", desc: "Buy, sell & invest in prime Lahore properties." },
  { icon: Landmark, title: "Architecture Design", desc: "Modern layouts that maximize space & light." },
  { icon: Sofa, title: "Interior Design", desc: "Stylish, comfortable spaces with premium finishes." },
  { icon: Layers, title: "Grey Structure", desc: "A-grade steel, cement & bricks. Built to last." },
  { icon: Paintbrush, title: "Finishing Work", desc: "Flawless tiling, paint, flooring & fixtures." },
  { icon: ClipboardList, title: "Project Management", desc: "Permits, labor, material & timelines handled." },
] as const;

const whyUs = [
  { icon: BadgeCheck, title: "20+ Years Experience", desc: "Two decades of trusted construction excellence." },
  { icon: HardHat, title: "Certified Team", desc: "PEC certified engineers and skilled workers." },
  { icon: Wallet, title: "Competitive Pricing", desc: "Transparent rates with no hidden costs." },
  { icon: ShieldCheck, title: "Lifetime Guarantee", desc: "Lifetime structural guarantee on grey structure." },
  { icon: Wrench, title: "We Got The Tools", desc: "Latest machinery for faster and precise work." },
  { icon: Clock, title: "24/7 Support", desc: "Dedicated project manager for every project." },
] as const;

const projects = [
  { img: projectModelTown, title: "1 Kanal — Model Town K Block", type: "Luxury Residence" },
  { img: projectGrey, title: "10 Marla — Etihad Town", type: "Modern Grey Structure" },
  { img: projectSpanish, title: "1 Kanal — Etihad Town", type: "Spanish Villa Design" },
] as const;

const stats = [
  { value: "20+", label: "Years Experience", icon: Clock },
  { value: "350+", label: "Projects Done", icon: BadgeCheck },
  { value: "100%", label: "On-Time Delivery", icon: ShieldCheck },
  { value: "A+", label: "Grade Material", icon: Award },
] as const;

const showcaseSlides = [
  { img: showcaseSpanish, title: "1 Kanal Spanish Villa", tag: "Turnkey Home" },
  { img: showcaseModernVilla, title: "Contemporary Family Villa", tag: "Modern Design" },
  { img: showcaseLuxuryHome, title: "Classical Luxury Residence", tag: "Premium Build" },
  { img: showcaseInterior, title: "Signature Interior", tag: "Interior Design" },
  { img: showcaseGreyStructure, title: "A+ Grade Grey Structure", tag: "Structure" },
];

const whyBars = [
  { label: "On-Time Delivery", value: 98 },
  { label: "Client Satisfaction", value: 96 },
  { label: "Repeat Clients", value: 84 },
  { label: "A+ Material Usage", value: 100 },
];

function Index() {
  const bars = useInView<HTMLDivElement>({ threshold: 0.3 });
  const heroSlides = [heroImg, heroSlide2, heroSlide3];
  const [heroIdx, setHeroIdx] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const id = window.setInterval(
      () => setHeroIdx((i) => (i + 1) % heroSlides.length),
      5000,
    );
    return () => window.clearInterval(id);
  }, [heroSlides.length]);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const attemptPlay = async () => {
      videoEl.playsInline = true;

      try {
        videoEl.muted = false;
        await videoEl.play();
      } catch {
        videoEl.muted = true;
        try {
          await videoEl.play();
        } catch {
          // Some browsers still block autoplay until the user interacts.
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          void attemptPlay();
        } else {
          videoEl.pause();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(videoEl);

    const timer = window.setTimeout(() => {
      void attemptPlay();
    }, 250);

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-dark">
        {heroSlides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Prime Services construction and luxury home projects in Lahore"
            width={1920}
            height={1280}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
              i === heroIdx ? "opacity-60 scale-105" : "opacity-0"
            }`}
            style={{ transition: "opacity 1500ms ease-in-out, transform 8000ms ease-out" }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/40" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-24 text-center md:text-left">
          <p className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.35em] text-primary">
            <span className="h-px w-8 bg-primary" /> Welcome to
          </p>
          <h1 className="mt-5 font-display text-5xl font-black leading-[1.02] text-dark-foreground md:text-7xl">
            <span className="inline-block overflow-hidden pb-2 align-bottom">
              <span className="hero-word">Prime</span>
            </span>{" "}
            <span className="inline-block overflow-hidden pb-2 align-bottom">
              <span className="hero-word-accent text-primary">Services</span>
            </span>
          </h1>
          <p className="mt-6 font-display text-xl font-extrabold leading-snug text-dark-foreground md:text-3xl">
            Turning Your Visions Into Reality —
            <br className="hidden sm:block" />
            <span className="text-primary">Since 2005.</span>
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-dark-muted md:mx-0 md:text-base">
            Lahore's most trusted construction & real estate company. A+ material, certified
            engineers, on-time delivery and lifetime structural warranty.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noreferrer" className="btn-hero">
              <Phone size={18} /> Get Free Quote
            </a>
            <Link to="/projects" className="btn-outline-light">
              <Award size={18} /> View Our Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Stats — floating card that overlaps the hero */}
      <section className="relative bg-background">
        <div className="mx-auto max-w-6xl px-4">
          <div className="-mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 120}
                y={16}
                className="relative bg-card p-6 text-center md:p-8"
              >
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.icon size={20} />
                </span>
                <p className="font-display text-4xl font-black text-primary md:text-5xl">
                  <CountUp value={s.value} />
                </p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Design Showcase Video */}
      <section className="bg-background py-16 flex justify-center items-center">
        <div className="px-4 flex justify-center w-full">
          <div className="relative group max-w-[380px] w-full">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/50 to-primary/20 blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />
            
            {/* Main Video Frame */}
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-primary/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <video
                ref={videoRef}
                src="/video/mainSection.mp4"
                playsInline
                autoPlay
                loop
                controls={false}
                preload="auto"
                aria-hidden
                onLoadedData={() => {
                  void videoRef.current?.play().catch(() => undefined);
                }}
                onClick={() => {
                  if (!videoRef.current) return;
                  videoRef.current.muted = false;
                  void videoRef.current.play().catch(() => undefined);
                }}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Showcase Carousel */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="section-label">Design Showcase</p>
              <h2 className="mt-4 font-display text-3xl font-black md:text-5xl">
                Homes We <span className="text-primary">Bring to Life.</span>
              </h2>
              <p className="mt-3 max-w-lg text-sm text-muted-foreground md:text-base">
                Swipe through a preview of villas, Spanish designs and modern residences designed and
                built by Prime Services.
              </p>
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
              ← Swipe to explore →
            </p>
          </div>
          <div className="mt-10">
            <ShowcaseCarousel slides={showcaseSlides} />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-label">Our Main Services</p>
              <h2 className="mt-4 font-display text-3xl font-black md:text-5xl">
                We Build <span className="text-primary">Everything You Need</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-bold text-primary hover:underline"
            >
              Explore all services <ArrowRight size={18} />
            </Link>
          </div>

          <ul className="mt-12 divide-y divide-border border-y border-border">
            {services.map((s, i) => (
              <Reveal key={s.title} as="li" delay={i * 80} y={20}>
                <div className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-6 md:gap-8 md:py-8">
                  <span className="font-display text-2xl font-black text-primary/60 md:text-4xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-6">
                      <s.icon size={22} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-extrabold md:text-2xl">
                        {s.title}
                      </h3>
                      <p className="mt-1 max-w-xl text-sm text-muted-foreground md:text-base">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    size={22}
                    className="hidden text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary md:block"
                  />
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative overflow-hidden bg-dark py-20 text-dark-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl float-slow"
        />
        <div className="mx-auto grid max-w-6xl gap-14 px-4 md:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="section-label">Why Choose Prime Services</p>
            <h2 className="mt-4 font-display text-3xl font-black md:text-5xl">
              Built on Trust,
              <br />
              <span className="text-primary">Delivered on Time.</span>
            </h2>
            <p className="mt-5 max-w-lg text-dark-muted">
              Two decades in the field. Certified engineers, A+ materials and a workflow
              that respects your budget and your calendar.
            </p>

            <div ref={bars.ref} className="mt-10 space-y-6">
              {whyBars.map((b, i) => (
                <div key={b.label}>
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="font-bold uppercase tracking-wider">{b.label}</span>
                    <span className="font-display text-lg font-black text-primary">
                      {bars.inView ? <CountUp value={`${b.value}%`} /> : "0%"}
                    </span>
                  </div>
                  <div
                    className="bar-fill mt-2 h-2 rounded-full"
                    style={
                      {
                        "--bar": bars.inView ? b.value / 100 : 0,
                        transitionDelay: `${i * 120}ms`,
                      } as React.CSSProperties
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {whyUs.map((w, i) => (
              <Reveal
                key={w.title}
                as="li"
                delay={i * 90}
                y={30}
                className="group relative overflow-hidden rounded-2xl border border-dark-border bg-dark-card p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <span
                  aria-hidden
                  className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform duration-500 group-hover:rotate-[360deg]">
                  <w.icon size={22} />
                </span>
                <h3 className="mt-4 font-display text-base font-extrabold">{w.title}</h3>
                <p className="mt-1 text-sm text-dark-muted">{w.desc}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="section-label">Featured Projects</p>
          <h2 className="mt-4 font-display text-3xl font-black md:text-5xl">
            Real Work. <span className="text-primary">Real Results.</span>
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-12">
            {projects.map((p, i) => {
              const layout =
                i === 0
                  ? "md:col-span-7 md:row-span-2"
                  : i === 1
                    ? "md:col-span-5 md:mt-8"
                    : "md:col-span-5 md:col-start-8";
              return (
                <Reveal
                  key={p.title}
                  delay={i * 120}
                  y={40}
                  className={`group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm ${layout}`}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-dark-foreground transition-transform duration-500 group-hover:translate-y-0">
                    <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                      <Award size={14} /> {p.type}
                    </p>
                    <h3 className="mt-1.5 font-display text-lg font-extrabold md:text-xl">
                      {p.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      View project <ArrowRight size={14} />
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-bold text-primary hover:underline"
            >
              See all projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-20 text-dark-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="section-label justify-center">Ready to Start?</p>
          <h2 className="mt-4 font-display text-3xl font-black md:text-5xl">
            Ready to Start Your <span className="text-primary">Next Project?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-dark-muted">
            Contact Prime Services today for a free site visit and quotation.
          </p>
          <p className="mt-3 inline-flex items-center gap-2 font-bold text-whatsapp">
            <MessageCircle size={18} /> WhatsApp: {WHATSAPP_DISPLAY}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noreferrer" className="btn-hero">
              <Phone size={18} /> Get Free Quote
            </a>
            <Link to="/contact" className="btn-outline-light">
              <MapPin size={18} /> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}