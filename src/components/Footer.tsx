import { MapPin, Phone } from "lucide-react";
import { HOTEL_ADDRESS, HOTEL_PHONE_DISPLAY, HOTEL_TEL_LINK, NAV_LINKS } from "@/lib/hotel";

const enquiryLinks = [
  { label: "Room enquiry", href: "#enquiry" },
  { label: "Restaurant enquiry", href: "#restaurant" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-forest-deep/95 pb-8 pt-12 text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold">Hotel Surya</p>
          <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-primary-foreground/75">
            <MapPin size={15} className="mt-0.5 shrink-0 text-gold" aria-hidden />
            {HOTEL_ADDRESS}
          </p>
          <a
            href={HOTEL_TEL_LINK}
            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline"
          >
            <Phone size={15} aria-hidden />
            {HOTEL_PHONE_DISPLAY}
          </a>
        </div>

        <nav aria-label="Footer quick links">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Quick links</p>
          <ul className="mt-3 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-primary-foreground/75 transition hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer enquiry links">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Enquiries</p>
          <ul className="mt-3 space-y-2">
            {enquiryLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-primary-foreground/75 transition hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-primary-foreground/60">
            Room rates, availability, and dining timings are confirmed directly by the hotel.
          </p>
        </nav>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-4 pt-6 text-center text-xs text-primary-foreground/60 sm:px-6">
        © {new Date().getFullYear()} Hotel Surya, Naulakha, Sundernagar. All rights reserved.
      </div>
    </footer>
  );
}
