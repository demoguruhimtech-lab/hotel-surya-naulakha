import { MessageCircle, Navigation, Phone } from "lucide-react";
import {
  GOOGLE_MAPS_DIRECTIONS_URL,
  HOTEL_PHONE_DISPLAY,
  HOTEL_TEL_LINK,
  createQuickWhatsAppEnquiry,
} from "@/lib/hotel";

export default function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-forest-deep py-20 lg:py-24">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-white/5 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-primary-foreground sm:text-4xl">
          Planning Your Next Journey Through Himachal?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
          Contact Hotel Surya to enquire about room options, dining, and current availability
          before you arrive.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={HOTEL_TEL_LINK}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest-deep shadow-lg transition hover:-translate-y-0.5 hover:bg-gold/90"
          >
            <Phone size={16} aria-hidden />
            Call {HOTEL_PHONE_DISPLAY}
          </a>
          <a
            href={createQuickWhatsAppEnquiry(
              "I would like to send a booking enquiry about rooms and dining.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/50 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:border-gold hover:text-gold"
          >
            <MessageCircle size={16} aria-hidden />
            Send Booking Enquiry on WhatsApp
          </a>
          <a
            href={GOOGLE_MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/50 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:border-gold hover:text-gold"
          >
            <Navigation size={16} aria-hidden />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
