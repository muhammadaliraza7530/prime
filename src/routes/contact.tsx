import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef, type ChangeEvent, type FormEvent } from "react";
import { 
  ArrowLeft, 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2,
  User,
  PenLine
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { waLink, DEFAULT_WA_MESSAGE, WHATSAPP_DISPLAY, EMAIL, ADDRESS } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Prime Services Lahore" },
      {
        name: "description",
        content:
          "Get in touch with Prime Services Lahore for site visits, estimates, and construction support.",
      },
      { property: "og:title", content: "Contact Us — Prime Services Lahore" },
      {
        property: "og:description",
        content:
          "Contact Prime Services for Lahore construction, interior design and real estate project assistance.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
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
      className={`transition-all duration-[800ms] ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      } ${className}`}
    >
      {children}
    </div>
  );
}

// Animated Input Wrapper Component
function AnimatedInput({ icon: Icon, label, children }) {
  return (
    <div className="group relative">
      <label className="mb-2 block text-sm font-semibold text-foreground">
        {label}
      </label>
      <div className="relative transition-all duration-300 focus-within:scale-[1.01]">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-all duration-300 group-focus-within:text-primary group-focus-within:scale-110 z-10">
          <Icon size={18} />
        </div>
        {children}
      </div>
    </div>
  );
}

function ContactPage() {
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

        <div className="relative mx-auto max-w-7xl px-4 py-28 md:px-6">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal>
              <div>
                <p className="section-label">Contact Us</p>
                <h1 className="mt-6 font-display text-4xl font-black leading-[1.1] tracking-tight text-white md:text-6xl">
                  Speak with Prime Services Lahore today.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
                  Our team is available for consultations, site visits, quotations and project planning. Reach out via WhatsApp, phone, or email and we will respond quickly.
                </p>
                <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-center">
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
              <div className="relative grid grid-cols-2 gap-4 rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
                {/* Large Location Card */}
                <div className="group relative col-span-2 flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-primary/20 to-dark p-8 transition-all duration-500 hover:border-primary/40">
                  <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl transition-transform duration-700 group-hover:scale-125"></div>
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-primary backdrop-blur-sm">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-primary">Office Location</p>
                      <h2 className="mt-1 text-2xl font-black text-white">Prime Services Lahore</h2>
                    </div>
                  </div>
                  <p className="relative z-10 mt-6 max-w-md text-sm leading-relaxed text-slate-200">
                    {ADDRESS}
                  </p>
                </div>

                {/* Smaller Contact Cards */}
                <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-dark/40 p-6 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                  <Phone size={20} className="text-primary transition-transform duration-300 group-hover:scale-110" />
                  <p className="mt-3 text-[0.65rem] uppercase tracking-[0.25em] text-slate-400">Phone</p>
                  <p className="mt-1 text-lg font-black text-white transition-colors duration-300 group-hover:text-primary">{WHATSAPP_DISPLAY}</p>
                  <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-primary/10 blur-xl transition-transform duration-500 group-hover:scale-150"></div>
                </div>
                <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-dark/40 p-6 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                  <Mail size={20} className="text-primary transition-transform duration-300 group-hover:scale-110" />
                  <p className="mt-3 text-[0.65rem] uppercase tracking-[0.25em] text-slate-400">Email</p>
                  <p className="mt-1 text-sm font-black text-white transition-colors duration-300 group-hover:text-primary break-all">{EMAIL}</p>
                  <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-primary/10 blur-xl transition-transform duration-500 group-hover:scale-150"></div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Form & Info Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-24 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* Form Container */}
          <Reveal>
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-8 shadow-2xl shadow-black/5 transition-all duration-500 hover:border-primary/20 md:p-12">
              {/* Decorative Accent */}
              <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl transition-transform duration-700 group-hover:scale-125"></div>
              
              <div className="relative z-10">
                <p className="section-label">Send Us A Message</p>
                <h2 className="mt-4 font-display text-3xl font-black text-foreground md:text-4xl">
                  Fill out the form and we’ll get back to you fast.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  Use the form to share your project details, and we’ll reply through WhatsApp or email shortly.
                </p>

                <ContactForm />
              </div>
            </div>
          </Reveal>

          {/* Sticky Info Sidebar */}
          <Reveal delay={150}>
            <div className="lg:sticky lg:top-28 space-y-6 h-full">
              <div className="group relative overflow-hidden rounded-[2rem] border border-border bg-foreground p-8 shadow-lg shadow-black/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:from-primary/5 group-hover:to-transparent group-hover:opacity-100"></div>
                <div className="relative z-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                    <Clock size={22} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-background">Business Hours</h3>
                  <div className="mt-4 space-y-2 text-sm text-muted-foreground/80">
                    <div className="flex justify-between border-b border-border pb-2">
                      <span>Monday - Saturday</span>
                      <span className="font-semibold text-background">9:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span>Sunday</span>
                      <span className="font-semibold text-background">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative h-[240px] overflow-hidden rounded-[2rem] border border-border bg-dark shadow-lg shadow-black/5 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)", backgroundSize: "20px 20px" }} />
                <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center">
                  <MessageCircle size={32} className="text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
                  <h3 className="mt-4 text-xl font-bold text-white">Prefer chatting?</h3>
                  <p className="mt-2 text-sm text-slate-300">We are online on WhatsApp right now.</p>
                  <a 
                    href={waLink(DEFAULT_WA_MESSAGE)} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
                  >
                    Start Chat <Send size={14} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-6">
        <Reveal>
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-dark p-10 text-center shadow-2xl shadow-black/20 md:p-16">
            {/* Mesh Gradient Background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl transition-transform duration-700 group-hover:scale-125"></div>
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl transition-transform duration-700 group-hover:scale-150"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-3xl">
              <p className="section-label text-primary">Need immediate help?</p>
              <h2 className="mt-6 text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 md:text-5xl md:leading-tight">
                Reach out on WhatsApp or call us now for fast project support.
              </h2>
              <p className="mt-6 max-w-xl mx-auto text-sm leading-relaxed text-slate-300 md:text-base">
                Whether you’re planning a new build, renovation, or property purchase, Prime Services is ready to help with expert advice and a free first consultation.
              </p>
              
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={waLink(DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-hero group/btn inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
                >
                  <MessageCircle size={18} className="transition-transform duration-300 group-hover/btn:rotate-12" /> Chat on WhatsApp {WHATSAPP_DISPLAY}
                </a>
                <a
                  href="tel:03335430155"
                  className="group/tel inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105"
                >
                  <Phone size={18} className="transition-transform duration-300 group-hover/tel:rotate-12" /> 0333 5430155
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof typeof formState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setFormState({ name: "", email: "", phone: "", message: "" });
    
    // Hide success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <AnimatedInput icon={User} label="Name">
          <Input 
            value={formState.name} 
            onChange={handleChange("name")} 
            placeholder="Your name" 
            required 
            className="h-12 border-2 border-border bg-background pl-12 transition-all duration-300 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-0"
          />
        </AnimatedInput>
        <AnimatedInput icon={Mail} label="Email">
          <Input 
            type="email" 
            value={formState.email} 
            onChange={handleChange("email")} 
            placeholder="Your email" 
            required 
            className="h-12 border-2 border-border bg-background pl-12 transition-all duration-300 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-0"
          />
        </AnimatedInput>
      </div>
      
      <AnimatedInput icon={Phone} label="Phone">
        <Input 
          type="tel" 
          value={formState.phone} 
          onChange={handleChange("phone")} 
          placeholder="Mobile number" 
          required 
          className="h-12 border-2 border-border bg-background pl-12 transition-all duration-300 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-0"
        />
      </AnimatedInput>
      
      <div className="group relative">
        <label className="mb-2 block text-sm font-semibold text-foreground">
          Message
        </label>
        <div className="relative transition-all duration-300 focus-within:scale-[1.01]">
          <div className="absolute left-4 top-4 text-muted-foreground transition-all duration-300 group-focus-within:text-primary group-focus-within:scale-110 z-10">
            <PenLine size={18} />
          </div>
          <Textarea 
            value={formState.message} 
            onChange={handleChange("message")} 
            placeholder="Tell us about your project" 
            required 
            className="min-h-[140px] border-2 border-border bg-background pl-12 pt-3 transition-all duration-300 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-0"
          />
        </div>
      </div>

      <button 
        type="submit" 
        className="group/btn relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30 sm:w-auto"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100"></span>
        <Send size={18} className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
        <span className="relative z-10">Send Message</span>
      </button>

      {/* Animated Success Message */}
      <div className={`grid transition-all duration-500 ease-out ${submitted ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
        <div className="overflow-hidden">
          <div className="flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm text-primary">
            <CheckCircle2 size={18} className="flex-shrink-0" />
            <p>Thank you! Your message has been received. We’ll contact you shortly.</p>
          </div>
        </div>
      </div>
    </form>
  );
}