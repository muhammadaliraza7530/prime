import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  HardHat,
  ShieldCheck,
  Award,
  Phone,
  MessageCircle,
  ArrowLeft,
  Quote,
} from "lucide-react";
import { Testimonials } from "@/components/site/Testimonials";
import { waLink, DEFAULT_WA_MESSAGE, WHATSAPP_DISPLAY } from "@/lib/site";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Prime Services Lahore" },
      {
        name: "description",
        content:
          "Prime Services is a Lahore-based construction company delivering premium homes, grey structure work and turnkey finishes with over 20 years of trusted experience.",
      },
      {
        property: "og:title",
        content: "About Us — Prime Services Lahore",
      },
      {
        property: "og:description",
        content:
          "Discover Prime Services’ expertise, team values and commitment to quality construction across Lahore.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

// Lightweight Scroll Reveal Component using IntersectionObserver
function Reveal({ children, delay = 0, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Animate only once
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
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 sm:translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function AboutPage() {
  return (
    <main className="bg-background text-dark-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-dark text-dark-foreground">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary/20 to-transparent" />
        <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse" />

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:gap-12 md:px-6 md:py-24">
          <div className="flex flex-col justify-center max-w-2xl">
            <Reveal>
              <p className="section-label">About Us</p>
              <h1 className="mt-4 md:mt-6 font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight sm:leading-[1.1] tracking-tight text-white">
                Building most trusted residential and commercial spaces.
              </h1>
              <p className="mt-4 md:mt-6 text-base sm:text-lg  leading-relaxed text-slate-200">
                Since 2005, Prime Services has delivered high-quality construction, grey structure, interior finishes and real estate advisory across the country.
              </p>

              <div className="mt-8 md:mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={waLink(DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-hero group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
                >
                  <MessageCircle
                    size={18}
                    className="transition-transform duration-300 group-hover:rotate-12"
                  />{" "}
                  Chat on WhatsApp
                </a>
                <Link
                  to="/"
                  className="group inline-flex items-center gap-2 font-bold text-white/90 transition hover:text-white"
                >
                  <ArrowLeft
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />{" "}
                  Back to Home
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4">
            <Reveal delay={200}>
              <div className="group relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-primary/20">
                <img
                  src="/showcase-modern-villa.jpg"
                  alt="Prime Services construction showcase"
                  className="h-56 w-full object-cover sm:h-full md:transition-transform md:duration-[1.2s] md:group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </Reveal>

            {/* Stats Cards */}
            <Reveal delay={400}>
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {[
                  { val: "20+", label: "Years" },
                  { val: "350+", label: "Projects" },
                  { val: "100%", label: "On-time" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="group rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 p-3 sm:p-5 text-center text-white shadow-xl shadow-black/10 transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 cursor-default"
                  >
                    <p className="text-xl sm:text-2xl md:text-3xl font-black text-white transition-colors duration-300 group-hover:text-primary">
                      {stat.val}
                    </p>
                    <p className="mt-1 sm:mt-2 text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-slate-300 transition-all duration-300 group-hover:tracking-[0.3em]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="group rounded-2xl md:rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/20">
                  <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-muted-foreground">
                    Premium
                  </p>
                  <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    Quality Craftsmanship
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Every project is built with the best materials and rigorous quality checks.
                  </p>
                </div>
                <div className="group rounded-2xl md:rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/20">
                  <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-muted-foreground">
                    Trusted
                  </p>
                  <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    Client-first Service
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Transparent communication and responsive support from planning to handover.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="relative overflow-hidden bg-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <Reveal>
            <div className="group relative rounded-[1.5rem] md:rounded-[2rem] bg-dark p-6 md:p-12 shadow-2xl shadow-black/20 overflow-hidden transition-all duration-500 hover:shadow-primary/10">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:scale-150"></div>
              <Quote
                className="absolute top-6 right-6 sm:top-8 sm:right-8 text-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:text-primary/20"
                size={50}
                md:size={80}
              />

              <div className="relative z-10 max-w-3xl">
                <p className="section-label text-primary">Message from the CEO</p>
                <h2 className="mt-3 md:mt-4 text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-white">
                  “We build every project as if it were our own home.”
                </h2>
                <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-slate-300">
                  At Prime Services, our success is measured by the trust we earn from clients and
                  the strength of the communities we create. We lead every project with honesty,
                  quality-driven workmanship and a commitment to delivering on time.
                </p>
                <p className="mt-6 md:mt-8 border-t border-white/10 pt-4 md:pt-6 text-[0.65rem] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-slate-400">
                  Built on trust, quality and timely delivery.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20 md:px-6">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div>
              <p className="section-label">Our Experience</p>
              <h2 className="mt-3 md:mt-4 font-display text-2xl sm:text-3xl md:text-4xl font-black text-foreground leading-tight">
               Trusted construction leadership for over two decades.
              </h2>
              <p className="mt-4 md:mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
                We began with residential builds and grew into full turnkey services including
                architecture, grey structure, interior finishing and property support. Our clients
                choose us for quality workmanship, reliable schedules and long-term peace of mind.
              </p>
              <div className="mt-6 md:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="group rounded-xl md:rounded-2xl border border-border bg-card p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/5">
                  <p className="text-xl sm:text-2xl md:text-3xl font-black text-foreground transition-colors duration-300 group-hover:text-primary">
                    15+
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground">Expert Engineers</p>
                </div>
                <div className="group rounded-xl md:rounded-2xl border border-border bg-card p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/5">
                  <p className="text-xl sm:text-2xl md:text-3xl font-black text-foreground transition-colors duration-300 group-hover:text-primary">
                    A+
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground">Material Grade</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
            {[
              {
                Icon: BadgeCheck,
                title: "Certified Team",
                desc: "PEC-certified engineers and experienced site crews deliver every project.",
              },
              {
                Icon: ShieldCheck,
                title: "Lifetime Support",
                desc: "We stand by our structural work and finishing with ongoing care and support.",
              },
              {
                Icon: HardHat,
                title: "Safety & Quality",
                desc: "Every site follows safety protocols and uses A+ materials for lasting results.",
              },
              {
                Icon: Award,
                title: "On-Time Delivery",
                desc: "Clear timelines, regular updates and a commitment to completing work on schedule.",
              },
            ].map((feature, i) => (
              <Reveal key={i} delay={i * 150}>
                <div className="group h-full rounded-[1.5rem] md:rounded-[2rem] border border-border bg-card p-6 sm:p-8 shadow-lg shadow-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/20">
                  <span className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl md:rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-6">
                    <feature.Icon size={20} />
                  </span>
                  <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="bg-dark text-dark-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 md:px-6">
          <div className="grid gap-10 md:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal>
              <div>
                <p className="section-label">How We Work</p>
                <h2 className="mt-3 md:mt-4 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                  A simple process from site visit to final finish.
                </h2>
                <p className="mt-4 md:mt-6 max-w-xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-300">
                  We begin with a full site review and proposal, then manage design, permits,
                  construction and finishes with transparent pricing and daily oversight.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4">
              {[
                {
                  num: "01",
                  title: "Consultation",
                  desc: "We review your goals, budget and site to recommend the best build plan.",
                },
                {
                  num: "02",
                  title: "Construction",
                  desc: "Full grey structure work, electrical, plumbing and masonry are managed on-site.",
                },
                {
                  num: "03",
                  title: "Finishing",
                  desc: "Premium interior finishes, tiling, painting and fixtures complete the build.",
                },
              ].map((step, i) => (
                <Reveal key={i} delay={i * 150}>
                  <div className="group relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8 shadow-xl shadow-black/10 transition-all duration-500 hover:bg-white/10 hover:border-primary/20 hover:pl-8 sm:hover:pl-12">
                    <span className="absolute right-4 top-4 sm:right-6 sm:top-6 text-3xl sm:text-4xl md:text-5xl font-black text-white/5 transition-all duration-500 group-hover:text-primary/20 group-hover:scale-110">
                      {step.num}
                    </span>
                    <h3 className="mt-1 sm:mt-2 text-xl sm:text-2xl font-black text-white transition-colors duration-300 group-hover:text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Bottom CTA Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20 md:px-6">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
          {[
            {
              label: "Our Promise",
              title: "Quality without compromise",
              content:
                "We deliver projects built to last, with materials you can trust and workmanship that reflects our reputation.",
            },
            {
              label: "Services",
              list: [
                "Grey structure and steel work",
                "Architecture and interior design",
                "Turnkey finishing and fixtures",
                "Real estate consultation",
              ],
            },
            {
              label: "Get in Touch",
              content: "Contact us on WhatsApp for a free site visit, quote or project discussion.",
              cta: true,
            },
          ].map((card, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="group relative h-full overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-border bg-card p-6 sm:p-8 shadow-lg shadow-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:from-primary/5 group-hover:to-transparent group-hover:opacity-100"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <p className="text-[0.65rem] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground">
                    {card.label}
                  </p>

                  {card.title && (
                    <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-black text-foreground leading-tight">
                      {card.title}
                    </h3>
                  )}

                  {card.content && (
                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {card.content}
                    </p>
                  )}

                  {card.list && (
                    <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
                      {card.list.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 transition-colors duration-300 group-hover:text-foreground"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150"></span>{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {card.cta && (
                    <a
                      href={waLink(DEFAULT_WA_MESSAGE)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto pt-6 sm:pt-8"
                    >
                      <span className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-whatsapp/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-whatsapp/40">
                        <Phone
                          size={16}
                          className="transition-transform duration-300 group-hover:rotate-12"
                        />{" "}
                        WhatsApp {WHATSAPP_DISPLAY}
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
