import { BedDouble, MessageCircle, Users } from "lucide-react";
import guestRoom from "@/assets/guest-room.jpg";
import { createQuickWhatsAppEnquiry } from "@/lib/hotel";

const rooms = [
  {
    name: "Standard Room",
    icon: BedDouble,
    description:
      "A practical accommodation option for guests looking for a straightforward stay while traveling through the area.",
  },
  {
    name: "Deluxe Room",
    icon: BedDouble,
    description:
      "An accommodation category for guests seeking an alternative to the standard room. Ask the hotel what this category includes.",
  },
  {
    name: "Super Deluxe Room",
    icon: BedDouble,
    description:
      "A higher room category listed in the property's information. Confirm the exact features and inclusions with the hotel.",
  },
  {
    name: "Four-Bed / Family Room",
    icon: Users,
    description:
      "A larger room option reported for families and groups traveling together. Confirm the actual occupancy and configuration before booking.",
  },
];

export default function RoomsSection() {
  return (
    <section id="rooms" className="bg-secondary/70 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <BedDouble size={14} aria-hidden />
              Rooms &amp; Accommodation
            </p>
            <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Simple, Comfortable Rooms for Every Kind of Traveler
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              From a solo highway stop to a family trip through the Mandi district, Hotel Surya
              lists four room categories. Rates and current availability are shared directly by the
              hotel when you enquire — so you always hear it from the source.
            </p>
            <img
              src={guestRoom}
              alt="A guest room at Hotel Surya with a double bed, television, and balcony opening to greenery"
              className="mt-6 h-64 w-full rounded-3xl object-cover shadow-lg sm:h-80"
              loading="lazy"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {rooms.map((room) => (
              <article
                key={room.name}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-32 items-center justify-center bg-gradient-to-br from-forest to-forest-deep">
                  <room.icon size={40} className="text-gold" aria-hidden />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground">{room.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {room.description}
                  </p>
                  <a
                    href={createQuickWhatsAppEnquiry(
                      `I would like to enquire about the ${room.name}. Could you share current availability and rates?`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition hover:bg-primary/90"
                  >
                    <MessageCircle size={14} aria-hidden />
                    Enquire About This Room
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
