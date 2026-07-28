import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ImageIcon, MessageCircle, ArrowUpRight, MapPin, PhoneCall } from "lucide-react";
import { waLink, DEFAULT_WA_MESSAGE, WHATSAPP_DISPLAY } from "@/lib/site";
import { useEffect, useRef, useState } from "react";

const projectImages = [
  { src: "/projectImages/img1.png", title: "Model Town Residence", location: "Lahore" },
  { src: "/projectImages/img2.png", title: "Spanish Villa Finish", location: "Faisalabad" },
  { src: "/projectImages/img3.png", title: "Luxury Family Home", location: "Rawalpindi" },
  { src: "/projectImages/img4.png", title: "Modern Office Plaza", location: "Gujranwala" },
  { src: "/projectImages/img5.png", title: "Grey Structure Mastery", location: "Multan" },
  { src: "/projectImages/img6.png", title: "Contemporary Villa", location: "Sialkot" },
  { src: "/projectImages/img7.png", title: "Turnkey Interior Suite", location: "Sargodha" },
  { src: "/projectImages/img8.png", title: "Premium Duplex Project", location: "Bahawalpur" },
  { src: "/projectImages/img9.png", title: "Commercial Fit-Out", location: "Sheikhupura" },
  { src: "/projectImages/img10.png", title: "Modern Bathroom Upgrade", location: "Kasur" },
  { src: "/projectImages/img11.png", title: "Elegant Living Area", location: "Rahim Yar Khan" },
  { src: "/projectImages/img12.png", title: "Park View Residence", location: "Dera Ghazi Khan" },
  { src: "/projectImages/img13.png", title: "Luxury Kitchen Remodel", location: "Muzaffargarh" },
  { src: "/projectImages/img14.png", title: "Contemporary Facade", location: "Jhelum" },
  { src: "/projectImages/img15.png", title: "Signature Family Home", location: "Mandi Bahauddin" },
];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Prime Services Punjab" },
      {
        name: "description",
        content:
          "View Prime Services’ Punjab construction portfolio with real project images, design work, and built structures.",
      },
      { property: "og:title", content: "Projects — Prime Services Punjab" },
      {
        property: "og:description",
        content:
          "Browse the Prime Services project gallery in Punjab, showing finished builds, structures, interiors and exterior work.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

// Lightweight Scroll Reveal Component
function Reveal({ children, delay = 0, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
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
      className={`transition-all duration-[600ms] sm:duration-[800ms] ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 sm:translate-y-16"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function ProjectsPage() {
  return (
    <main className="bg-background text-dark-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-dark text-dark-foreground">
        {/* Background Textures & Glows */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-primary/25 to-transparent" />
        <div className="pointer-events-none absolute -top-28 -right-24 h-96 w-96 rounded-full bg-primary/15 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20 md:py-28 md:px-6">
          <div className="grid gap-10 md:gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal>
              <div>
                <p className="section-label">Our Projects</p>
                <h1 className="mt-4 sm:mt-6 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] sm:leading-[1.1] tracking-tight text-white">
                  Built Punjab projects with real images, quality finishes and strong structure.
                </h1>
                <p className="mt-4 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-300">
                  Explore our gallery of completed and in-progress builds across Punjab. Each image highlights the strength, craftsmanship and finish quality you can expect from Prime Services.
                </p>
                <div className="mt-8 sm:mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
                  <a
                    href={waLink(DEFAULT_WA_MESSAGE)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-hero group inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
                  >
                    <MessageCircle size={18} className="transition-transform duration-300 group-hover:rotate-12" /> WhatsApp {WHATSAPP_DISPLAY}
                  </a>
                  <Link 
                    to="/" 
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-white"
                  >
                    <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" /> Back to Home
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Modern Bento-style Glassmorphism Card */}
            <Reveal delay={200}>
              <div className="relative grid grid-cols-2 gap-3 sm:gap-4 rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-3 sm:p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
                {/* Large Featured Block */}
                <div className="group relative col-span-2 flex flex-col justify-between overflow-hidden rounded-[1.25rem] sm:rounded-[2rem] border border-white/10 bg-gradient-to-br from-primary/20 to-dark p-5 sm:p-8 transition-all duration-500 hover:border-primary/40">
                  <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl transition-transform duration-700 group-hover:scale-125"></div>
                  <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-white/10 text-primary backdrop-blur-sm">
                      <ImageIcon size={20} />
                    </div>
                    <div>
                      <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-primary">Project Gallery</p>
                      <h2 className="mt-1 text-lg sm:text-2xl font-black text-white">Real builds. Real results.</h2>
                    </div>
                  </div>
                  <p className="relative z-10 mt-4 sm:mt-6 max-w-md text-xs sm:text-sm leading-relaxed text-slate-200">
                    Real project images from our completed and active builds in Punjab.
                  </p>
                </div>

                {/* Smaller Stats */}
                <div className="group relative overflow-hidden rounded-[1rem] sm:rounded-[1.5rem] border border-white/10 bg-dark/40 p-4 sm:p-6 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                  <p className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-slate-400">Trusted Since</p>
                  <p className="mt-2 text-2xl sm:text-4xl font-black text-white transition-colors duration-300 group-hover:text-primary">2005</p>
                  <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-primary/10 blur-xl transition-transform duration-500 group-hover:scale-150"></div>
                </div>
                <div className="group relative overflow-hidden rounded-[1rem] sm:rounded-[1.5rem] border border-white/10 bg-dark/40 p-4 sm:p-6 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                  <p className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-slate-400">Projects Shown</p>
                  <p className="mt-2 text-2xl sm:text-4xl font-black text-white transition-colors duration-300 group-hover:text-primary">15+</p>
                  <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-primary/10 blur-xl transition-transform duration-500 group-hover:scale-150"></div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 md:py-24 md:px-6">
        <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectImages.map((project, i) => (
            <Reveal key={project.src} delay={(i % 3) * 100}>
              <article className="group relative h-full overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-border bg-card shadow-lg shadow-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30">
                {/* Top Sliding Accent */}
                <div className="absolute inset-x-0 top-0 z-20 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-primary/50 transition-transform duration-500 group-hover:scale-x-100"></div>
                
                {/* Image Container with Aspect Ratio (prevents CLS for fast loading) */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.src}
                    alt={project.title}
                    // Fast load first 3 images, lazy load the rest
                    loading={i < 3 ? "eager" : "lazy"}
                    decoding="async"
                    fetchpriority={i < 3 ? "high" : "low"}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
                  
                  {/* Logo */}
                  <img
                    src="/prime-logo.png"
                    alt="Prime Services logo"
                    loading="lazy"
                    decoding="async"
                    className="absolute left-3 top-3 sm:left-4 sm:top-4 z-10 h-9 w-9 sm:h-12 sm:w-12 rounded-full border border-white/40 bg-white/90 p-1.5 sm:p-2 shadow-xl backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-primary"
                  />
                  
                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-4 pb-5 sm:p-6 sm:pb-6 text-white">
                    <div className="flex items-center gap-2 text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-primary transition-all duration-500 group-hover:tracking-[0.3em]">
                      <MapPin size={12} /> {project.location}
                    </div>
                    <h3 className="mt-1.5 sm:mt-2 text-base sm:text-lg md:text-xl font-bold text-white transition-transform duration-500 group-hover:translate-x-1">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16 md:py-24 md:px-6">
        <Reveal>
          <div className="group relative overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/10 bg-dark p-6 sm:p-10 text-center shadow-2xl shadow-black/20 md:p-16">
            {/* Mesh Gradient Background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl transition-transform duration-700 group-hover:scale-125"></div>
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl transition-transform duration-700 group-hover:scale-150"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-3xl">
              <p className="section-label text-primary">Need more?</p>
              <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 leading-tight">
                Message us on WhatsApp for the full portfolio and latest project photos.
              </h2>
              <p className="mt-4 sm:mt-6 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed text-slate-300">
                We send updated galleries and case details directly to clients. Let us know your project type and site location to receive a customized portfolio pack.
              </p>
              
              <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
                <a
                  href={waLink(DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-hero group/btn inline-flex w-full sm:w-auto items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
                >
                  <MessageCircle size={18} className="transition-transform duration-300 group-hover/btn:rotate-12" /> Chat on WhatsApp {WHATSAPP_DISPLAY}
                </a>
                <a
                  href="tel:03335430155"
                  className="group/tel inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105"
                >
                  <PhoneCall size={18} className="transition-transform duration-300 group-hover/tel:rotate-12" /> 0333 5430155
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}