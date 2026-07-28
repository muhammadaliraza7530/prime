import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Mail, Truck } from "lucide-react";
import {
  waLink,
  DEFAULT_WA_MESSAGE,
  WHATSAPP_DISPLAY,
  EMAIL,
  HEAD_OFFICE,
  BRANCH_OFFICE,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="inline-flex items-center rounded-2xl bg-white/95 px-4 py-3 shadow-lg">
              <img
                src="/prime-logo.png"
                alt="Prime Services logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-dark-muted">
              Turning your visions into reality with our reliable construction services since 2005.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-primary">
              Useful Links
            </h3>
            <nav className="mt-4 grid gap-2.5 text-sm">
              <Link to="/" className="text-dark-muted transition-colors hover:text-dark-foreground">
                Home
              </Link>
              <Link
                to="/about"
                className="text-dark-muted transition-colors hover:text-dark-foreground"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-dark-muted transition-colors hover:text-dark-foreground"
              >
                Services
              </Link>
              <Link
                to="/projects"
                className="text-dark-muted transition-colors hover:text-dark-foreground"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-dark-muted transition-colors hover:text-dark-foreground"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Contact</h3>
            <ul className="mt-4 grid gap-3 text-sm text-dark-muted">
              <li className="flex flex-col gap-2.5">
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                  <span>
                    <strong>Head Office:</strong> {HEAD_OFFICE}
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                  <span>
                    <strong>Branch Office:</strong> {BRANCH_OFFICE}
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle size={16} className="shrink-0 text-whatsapp" />
                <a
                  href={waLink(DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-dark-foreground"
                >
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-primary" />
                <a href={`mailto:${EMAIL}`} className="hover:text-dark-foreground">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Truck size={16} className="mt-0.5 shrink-0 text-whatsapp" />
                Serving major cities across Punjab &amp; Pakistan including: Lahore, Gujranwala,
                Rawalpindi, Islamabad, Bahawalpur, Peshawar, Karachi, Hyderabad, Kashmir.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-dark-border pt-6 text-center text-xs text-dark-muted">
          © 2026 Prime Services. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
