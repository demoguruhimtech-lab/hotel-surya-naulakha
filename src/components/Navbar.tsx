import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { HOTEL_PHONE_DISPLAY, HOTEL_TEL_LINK, NAV_LINKS } from "@/lib/hotel";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-forest-deep/95 shadow-lg backdrop-blur"
          : "bg-forest-deep/40 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold font-display text-lg font-bold text-forest-deep">
            S
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold tracking-wide text-primary-foreground">
              Hotel Surya
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-gold">
              Naulakha · Sundernagar
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/90 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#enquiry"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-forest-deep transition hover:bg-gold/85"
          >
            Enquire Now
          </a>
          <a
            href={HOTEL_TEL_LINK}
            className="flex items-center gap-2 rounded-full border border-primary-foreground/40 px-4 py-2 text-sm font-medium text-primary-foreground transition hover:border-gold hover:text-gold"
          >
            <Phone size={15} aria-hidden />
            {HOTEL_PHONE_DISPLAY}
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-primary-foreground lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-forest-deep px-4 pb-5 pt-3 lg:hidden" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-primary-foreground transition-colors hover:bg-white/10 hover:text-gold"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2">
            <a
              href="#enquiry"
              className="rounded-full bg-gold px-5 py-2.5 text-center text-sm font-semibold text-forest-deep"
              onClick={() => setOpen(false)}
            >
              Enquire Now
            </a>
            <a
              href={HOTEL_TEL_LINK}
              className="flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-5 py-2.5 text-sm font-medium text-primary-foreground"
            >
              <Phone size={15} aria-hidden />
              Call {HOTEL_PHONE_DISPLAY}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
