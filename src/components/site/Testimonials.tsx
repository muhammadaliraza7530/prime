import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

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
      { threshold: 0.15 }
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

const testimonials = [
  {
    quote:
      "Prime Services delivered our dream home on time with transparent pricing and excellent communication. Every detail was handled professionally.",
    author: "Ayesha Khan",
    role: "Homeowner, DHA Lahore",
    image: "https://i.pravatar.cc/150?img=47", // Replace with /users/ayesha.jpg
  },
  {
    quote:
      "The team managed the entire renovation and handed over a fully finished villa exactly as promised. We highly recommend their workmanship.",
    author: "Faisal Ahmed",
    role: "Investor, Bahria Town",
    image: "https://i.pravatar.cc/150?img=12", // Replace with /users/faisal.jpg
  },
  {
    quote:
      "From site survey to interior finishes, Prime Services supported us at every step. The project felt stress-free and the result is outstanding.",
    author: "Sara Malik",
    role: "Client, Islamabad",
    image: "https://i.pravatar.cc/150?img=45", // Replace with /users/sara.jpg
  },
  {
    quote:
      "We hired Prime Services for our commercial plaza project. Their structural expertise and adherence to safety standards were truly impressive.",
    author: "Hassan Raza",
    role: "Business Owner, Gulberg",
    image: "https://i.pravatar.cc/150?img=33", // Replace with /users/hassan.jpg
  },
  {
    quote:
      "As an architect, I value precise execution. Prime Services brought my designs to life flawlessly, maintaining the highest quality of materials.",
    author: "Nadia Jamil",
    role: "Architect, Lahore",
    image: "https://i.pravatar.cc/150?img=49", // Replace with /users/nadia.jpg
  },
  {
    quote:
      "Their real estate advisory helped us make a smart investment. The team is honest, knowledgeable, and always available to answer questions.",
    author: "Bilal Sheikh",
    role: "Investor, Rawalpindi",
    image: "https://i.pravatar.cc/150?img=68", // Replace with /users/bilal.jpg
  },
  {
    quote:
      "The grey structure work for our family home was completed remarkably fast without compromising an ounce of strength. Highly recommended!",
    author: "Maria Yousaf",
    role: "Homeowner, Multan",
    image: "https://i.pravatar.cc/150?img=44", // Replace with /users/maria.jpg
  },
  {
    quote:
      "Professionalism at its peak. The site was kept clean, labor was well-coordinated, and the final handover was completely hassle-free.",
    author: "Usman Tariq",
    role: "Developer, Faisalabad",
    image: "https://i.pravatar.cc/150?img=51", // Replace with /users/usman.jpg
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 7000);

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex]);

  const handlePrevious = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 md:py-24">
      {/* Background Glows */}
      <div className="pointer-events-none absolute top-1/4 left-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10 sm:mb-12">
            <div className="max-w-2xl">
              <p className="section-label">Testimonials</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground leading-tight">
                Trusted by clients across Punjab & Pakistan.
              </h2>
              <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
                Hear from homeowners, investors and developers who chose Prime Services for reliable
                construction and real estate support.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrevious}
                aria-label="Previous testimonial"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-dark p-6 shadow-2xl shadow-black/20 sm:p-10 md:p-12">
            {/* Background Pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)",
                backgroundSize: "30px 30px",
              }}
            />
            
            {/* Grid Stacking for Slides (prevents content cut-off) */}
            <div className="relative grid">
              {testimonials.map((testimonial, index) => (
                <article
                  key={testimonial.author}
                  className={`group col-start-1 row-start-1 transition-all duration-700 ease-out ${
                    activeIndex === index 
                      ? "opacity-100 translate-x-0 blur-none" 
                      : "opacity-0 translate-x-12 blur-sm pointer-events-none"
                  }`}
                  aria-hidden={activeIndex !== index}
                >
                  <div className="flex h-full flex-col justify-between gap-8 sm:gap-12">
                    <div className="relative">
                      {/* Giant Ghost Quote Icon */}
                      <Quote className="absolute -top-4 -left-2 text-primary/10 transition-all duration-500 group-hover:text-primary/20 group-hover:scale-110" size={64} fill="currentColor" />
                      
                      <p className="relative z-10 text-lg sm:text-xl md:text-2xl leading-relaxed sm:leading-relaxed text-white font-medium">
                        “{testimonial.quote}”
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* User Image with Glowing Ring */}
                      <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0">
                        <div className="absolute inset-0 rounded-full bg-primary/30 blur-md transition-all duration-500 group-hover:bg-primary/50"></div>
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="relative h-full w-full rounded-full border-2 border-primary/40 object-cover shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:border-primary"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p className="text-base sm:text-lg font-bold text-white">{testimonial.author}</p>
                        <p className="mt-1 text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-slate-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              {/* Expanding Pagination Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "w-8 bg-primary" : "w-2.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}