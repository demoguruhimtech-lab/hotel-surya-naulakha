import { Car, Droplets, Route, Sparkles, Tv, type LucideIcon } from "lucide-react";
import { ConciergeBell } from "lucide-react";

interface Amenity {
  icon: LucideIcon;
  title: string;
  description: string;
}

const amenities: Amenity[] = [
  {
    icon: Car,
    title: "On-Site Parking",
    description: "Parking is reported to be available for guests traveling by car or bike.",
  },
  {
    icon: Droplets,
    title: "Hot and Cold Water",
    description: "Basic water facilities are reported in the rooms.",
  },
  {
    icon: Tv,
    title: "Television",
    description: "Television is listed among the basic room amenities.",
  },
  {
    icon: ConciergeBell,
    title: "Room Service",
    description: "Room service is reported to be available at the property.",
  },
  {
    icon: Sparkles,
    title: "Housekeeping",
    description: "Housekeeping is listed among the property's facilities.",
  },
  {
    icon: Route,
    title: "Highway Access",
    description: "A practical location alongside National Highway 154.",
  },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="bg-forest-deep py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Amenities &amp; facilities
          </p>
          <h2 className="font-display text-3xl font-semibold text-primary-foreground sm:text-4xl">
            Everything You Need After a Long Drive
          </h2>
          <p className="mt-3 text-sm text-primary-foreground/80 sm:text-base">
            Facilities as reported in the property's listing. Please confirm current arrangements
            with the hotel when you enquire.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-gold/40 hover:bg-white/10"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/20 text-gold">
                <Icon size={20} aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-primary-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
