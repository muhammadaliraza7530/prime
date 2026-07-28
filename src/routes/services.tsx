import { createFileRoute } from "@tanstack/react-router";
import {
  Home,
  Landmark,
  Sofa,
  Layers,
  Paintbrush,
  ClipboardList,
  ShieldCheck,
  Clock,
  MessageCircle,
} from "lucide-react";
import { waLink, DEFAULT_WA_MESSAGE, WHATSAPP_DISPLAY } from "@/lib/site";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    Icon: Landmark,
    title: "Architecture & Design",
    description:
      "Custom residential and commercial architecture blending modern functionality with timeless luxury designs across Pakistan.",
  },
  {
    Icon: Layers,
    title: "Grey Structure",
    description:
      "A-grade foundations, reinforced steel, block work and structural concrete built for strength and longevity.",
  },
  {
    Icon: Paintbrush,
    title: "Finishing & Interiors",
    description:
      "Turnkey finishes including tiles, paint, flooring and fixtures for polished, ready-to-move spaces.",
  },
  {
    Icon: Sofa,
    title: "Interior Design",
    description:
      "Stylish interiors, furniture planning and layout guidance that create comfortable, elegant living spaces.",
  },
  {
    Icon: Home,
    title: "Real Estate Services",
    description:
      "Property advisory, buying, selling and investment support for prime residential and commercial plots across Pakistan.",
  },
  {
    Icon: ClipboardList,
    title: "Project Management",
    description:
      "End-to-end management with permits, material sourcing, labor coordination and schedule control.",
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Prime Services Construction & Real Estate" },
      {
        name: "description",
        content:
          "Prime Services delivers architecture, grey structure, interior design, finishing and project management across Pakistan.",
      },
      { property: "og:title", content: "Services — Prime Services Construction & Real Estate" },
      {
        property: "og:description",
        content:
          "Discover Prime Services’ full construction services across Pakistan, from grey structure to turnkey interiors and real estate support.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

// Lightweight Scroll Reveal Component
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[600ms] sm:duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 sm:translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function ServicesPage() {
  return (
    <main className="bg-background text-dark-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-dark text-dark-foreground">
        {/* Background Textures & Glows */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-primary/25 to-transparent" />
        <div className="pointer-events-none absolute -top-28 -right-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-pulse" />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20 md:py-24 md:px-6">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal>
              <div>
                <p className="section-label">Our Services</p>
                <h1 className="mt-4 sm:mt-5 font-display text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight sm:leading-[1.1] tracking-tight text-white">
                  Construction, interiors and real estate services for Pakistan.
                </h1>
                <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-md leading-relaxed text-slate-300">
                  Prime Services delivers complete building solutions with trusted workmanship,
                  premium materials and transparent project delivery. Whether you need grey
                  structure work, finishing, architecture or property advisory, our team handles
                  every phase with care.
                </p>
                <div className="mt-8 sm:mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
                  <a
                    href={waLink(DEFAULT_WA_MESSAGE)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-hero group inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
                  >
                    <MessageCircle
                      size={18}
                      className="transition-transform duration-300 group-hover:rotate-12"
                    />{" "}
                    WhatsApp {WHATSAPP_DISPLAY}
                  </a>
                  <p className="max-w-xs text-xs sm:text-sm leading-relaxed text-slate-400">
                    Fast response for quotes, site visits and detailed service guidance across
                    Pakistan.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              {/* Modern Glassmorphism Card */}
              <div className="group relative rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 bg-white/5 p-5 sm:p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-500 hover:border-primary/30 md:p-8">
                <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-primary/20 blur-2xl transition-all duration-500 group-hover:scale-150"></div>

                <div className="relative z-10 grid gap-5 sm:gap-6 sm:grid-cols-2">
                  <div className="flex flex-col justify-center">
                    <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-primary">
                      Service Promise
                    </p>
                    <h2 className="mt-2 sm:mt-3 text-xl sm:text-2xl font-black text-white leading-tight">
                      Quality, schedule and satisfaction first.
                    </h2>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-300">
                      Backed by certified workmanship and a commitment to on-time delivery.
                    </p>
                  </div>

                  <div className="grid grid-rows-2 gap-3 sm:gap-4">
                    <div className="group/stat rounded-xl sm:rounded-2xl border border-white/10 bg-dark/40 p-4 sm:p-5 transition-all duration-300 hover:bg-primary/10 hover:scale-[1.02]">
                      <p className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-slate-400">
                        Trusted Since
                      </p>
                      <p className="mt-1 text-2xl sm:text-3xl font-black text-white transition-colors duration-300 group-hover/stat:text-primary">
                        2005
                      </p>
                    </div>
                    <div className="group/stat rounded-xl sm:rounded-2xl border border-white/10 bg-dark/40 p-4 sm:p-5 transition-all duration-300 hover:bg-primary/10 hover:scale-[1.02]">
                      <p className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-slate-400">
                        Projects Delivered
                      </p>
                      <p className="mt-1 text-2xl sm:text-3xl font-black text-white transition-colors duration-300 group-hover/stat:text-primary">
                        350+
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20 md:px-6">
        <Reveal>
          <div className="mb-8 sm:mb-12 text-center">
            <p className="section-label">What We Offer</p>
            <h2 className="mt-3 sm:mt-4 font-display text-2xl sm:text-3xl md:text-4xl font-black text-foreground">
              Comprehensive solutions under one roof
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-border bg-card p-6 sm:p-8 shadow-lg shadow-black/5 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:from-primary/5 group-hover:to-transparent group-hover:opacity-100"></div>

                <div className="relative z-10 flex h-full flex-col">
                  <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                    <service.Icon size={22} />
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-3 sm:mt-4 flex-grow text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process / Timeline Section */}
      <section className="relative overflow-hidden bg-dark text-dark-foreground">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20 md:px-6">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <Reveal className="lg:sticky lg:top-24">
              <div>
                <p className="section-label">How We Work</p>
                <h2 className="mt-3 sm:mt-4 font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight sm:leading-[1.1]">
                  A smooth process from initial consultation to finished handover.
                </h2>
                <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-300">
                  We manage every step of your build with clear communication, precise scheduling
                  and full coordination of design, materials and installation.
                </p>
              </div>
            </Reveal>

            {/* Vertical Timeline Layout */}
            <div className="relative pl-6 sm:pl-8">
              <div className="absolute left-0 top-2 bottom-2 w-px bg-white/10"></div>
              <div className="absolute left-0 top-2 h-24 sm:h-32 w-px bg-gradient-to-b from-primary to-transparent"></div>

              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    num: "01",
                    title: "Site Survey & Proposal",
                    desc: "We assess the site, understand your goals and prepare a clear proposal for the best solution.",
                    Icon: Clock,
                  },
                  {
                    num: "02",
                    title: "Design & Planning",
                    desc: "Our architects and engineers produce plans that balance aesthetics, function and budget.",
                    Icon: ClipboardList,
                  },
                  {
                    num: "03",
                    title: "Construction & Quality",
                    desc: "Field supervision, quality control and premium materials ensure a strong, reliable build.",
                    Icon: ShieldCheck,
                  },
                  {
                    num: "04",
                    title: "Finishing & Delivery",
                    desc: "Final interiors, fixtures and handover are completed with care so your space is ready to enjoy.",
                    Icon: Layers,
                  },
                ].map((item, i) => (
                  <Reveal key={item.title} delay={i * 150}>
                    <div className="group relative">
                      <div className="absolute -left-6 sm:-left-8 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-dark ring-1 ring-white/20 transition-all duration-500 group-hover:ring-primary group-hover:ring-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-white/50 transition-all duration-500 group-hover:bg-primary"></div>
                      </div>

                      <div className="rounded-[1.25rem] sm:rounded-[1.5rem] border border-white/10 bg-white/5 p-5 sm:p-6 shadow-lg shadow-black/10 transition-all duration-500 hover:bg-white/10 hover:border-primary/20 hover:pl-6 sm:hover:pl-8">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                            <item.Icon size={18} />
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-white transition-colors duration-300 group-hover:text-primary">
                            {item.title}
                          </h3>
                        </div>
                        <p className="mt-3 sm:mt-4 pl-12 sm:pl-14 text-xs sm:text-sm leading-relaxed text-slate-300">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:px-6">
        <Reveal>
          <div className="group relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-border bg-foreground p-6 sm:p-10 shadow-2xl shadow-black/10 transition-all duration-500 hover:border-primary/30">
            <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl transition-transform duration-700 group-hover:scale-150"></div>

            <div className="relative z-10 grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="section-label">Ready to start?</p>
                <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-black text-background leading-tight">
                  Talk to our team for a free site visit and personalized service plan.
                </h2>
                <p className="mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Prime Services is available across Pakistan for consultations, estimates and
                  project guidance. Reach out on WhatsApp to explore your next build.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href={waLink(DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-hero group/btn text-sm inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
                >
                  <MessageCircle
                    size={18}
                    className="transition-transform duration-300 group-hover/btn:rotate-12"
                  />{" "}
                  Chat on WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
