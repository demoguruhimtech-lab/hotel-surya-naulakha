import { BedDouble, Car, MapPin, Phone, UtensilsCrossed } from "lucide-react";
import hotelExterior from "@/assets/hotel-exterior.jpg";
import { HOTEL_PHONE_DISPLAY, HOTEL_TEL_LINK } from "@/lib/hotel";

const highlights = [
  { icon: MapPin, label: "Highway-side location on NH-154" },
  { icon: BedDouble, label: "Multiple room categories" },
  { icon: UtensilsCrossed, label: "On-site dining" },
  { icon: Car, label: "Vehicle parking" },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[92vh] items-center overflow-hidden pt-16">
      <img
        src={hotelExterior}
        alt="Hotel Surya building with its restaurant signboard by the highway at Naulakha, Sundernagar"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/95 via-forest-deep/80 to-forest-deep/30" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-forest-deep/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          <MapPin size={13} aria-hidden />
          National Highway 154 · Naulakha, Sundernagar
        </p>

        <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
          A Comfortable Stop on Your Himachal Journey
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
          Welcome to Hotel Surya, Naulakha — a convenient highway hotel and restaurant for
          travelers exploring Sundernagar, Mandi, Kullu, and the beautiful valleys of Himachal
          Pradesh.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#enquiry"
            className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest-deep shadow-lg transition hover:-translate-y-0.5 hover:bg-gold/90"
          >
            Enquire About Rooms
          </a>
          <a
            href="#restaurant"
            className="rounded-full border border-primary-foreground/50 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:border-gold hover:text-gold"
          >
            Explore Restaurant
          </a>
          <a
            href={HOTEL_TEL_LINK}
            className="flex items-center gap-2 rounded-full border border-primary-foreground/50 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:border-gold hover:text-gold"
          >
            <Phone size={16} aria-hidden />
            Call Hotel Surya
          </a>
        </div>

        <ul className="mt-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
          {highlights.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Icon size={16} aria-hidden />
              </span>
              <span className="text-xs font-medium leading-snug text-primary-foreground/90">
                {label}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-xs text-primary-foreground/70">
          For enquiries and current availability, call {HOTEL_PHONE_DISPLAY}.
        </p>
      </div>
    </section>
  );
}
