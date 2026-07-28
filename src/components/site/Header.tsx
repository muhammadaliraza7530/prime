import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { waLink, DEFAULT_WA_MESSAGE } from "@/lib/site";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src="/prime-logo.png"
            alt="Prime Services logo"
            className="h-20 w-auto object-contain"
          />
          <span className="leading-tight hidden sm:block">
            <span className="block font-display text-base font-black tracking-tight text-dark">
              PRIME SERVICES
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Construction Company
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-foreground/80 hover:text-foreground" }}
              className="text-sm font-semibold transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noreferrer" className="btn-whatsapp !px-5 !py-2.5 !text-sm">
            <MessageCircle size={16} /> WhatsApp
          </a>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 pb-6 pt-2 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="block border-b border-border py-3.5 text-base font-semibold"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp mt-4 w-full"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}