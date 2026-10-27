import { MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import highwayApproach from "@/assets/highway-approach.jpg";
import {
  GOOGLE_MAPS_DIRECTIONS_URL,
  GOOGLE_MAPS_EMBED_URL,
  HOTEL_ADDRESS,
  HOTEL_PHONE_DISPLAY,
  HOTEL_TEL_LINK,
  createQuickWhatsAppEnquiry,
} from "@/lib/hotel";

export default function LocationSection() {
  return (
    <section id="location" className="bg-secondary/70 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <MapPin size={14} aria-hidden />
            Location &amp; directions
          </p>
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Find Us on the Highway
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Hotel Surya is located in Naulakha, near Sundernagar, in the Mandi district of Himachal
            Pradesh. Its highway-side position makes it a useful starting point for travelers
            continuing toward Mandi, Kullu, and Manali. Watch for the hotel signboards along
            National Highway 154 as you approach Naulakha.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <img
              src={highwayApproach}
              alt="The approach to Hotel Surya from the highway, with Hotel Surya signboards visible"
              className="h-56 w-full rounded-3xl object-cover shadow-lg sm:h-64"
              loading="lazy"
            />
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-display text-lg font-semibold text-foreground">Hotel address</h3>
              <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden />
                {HOTEL_ADDRESS}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  <Navigation size={15} aria-hidden />
                  Get Directions
                </a>
                <a
                  href={HOTEL_TEL_LINK}
                  className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-secondary"
                >
                  <Phone size={15} aria-hidden />
                  Call Hotel
                </a>
                <a
                  href={createQuickWhatsAppEnquiry(
                    "I need help reaching your hotel. Could you guide me from the highway?",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-secondary"
                >
                  <MessageCircle size={15} aria-hidden />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              title="Google Maps location of Hotel Surya on National Highway 154, Naulakha, Sundernagar, Himachal Pradesh"
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
