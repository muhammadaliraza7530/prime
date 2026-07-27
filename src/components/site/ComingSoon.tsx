import { Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Hammer } from "lucide-react";
import { waLink, DEFAULT_WA_MESSAGE, WHATSAPP_DISPLAY } from "@/lib/site";

type Props = {
  label: string;
  title: string;
  description?: string;
};

export function ComingSoon({ label, title, description }: Props) {
  return (
    <main className="relative overflow-hidden bg-dark text-dark-foreground">
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <section className="relative mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-4 py-24 text-center">
        <p className="section-label">{label}</p>

        <div className="mt-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/15 ring-1 ring-primary/40 kb-float">
          <Hammer className="text-primary" size={36} />
        </div>

        <h1 className="mt-8 font-display text-4xl font-black leading-tight md:text-6xl">
          {title} <span className="text-primary">Coming Soon</span>
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-dark-muted">
          {description ??
            "We are putting the final touches on this page. For any queries or a free quotation, reach out to us on WhatsApp — we are always available."}
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle size={18} /> WhatsApp {WHATSAPP_DISPLAY}
          </a>
          <Link to="/" className="btn-outline-light">
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}