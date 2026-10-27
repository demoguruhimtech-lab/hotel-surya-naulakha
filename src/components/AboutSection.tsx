import { UtensilsCrossed } from "lucide-react";
import hotelLobby from "@/assets/hotel-lobby.jpg";
import parkingView from "@/assets/parking-view.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <img
            src={hotelLobby}
            alt="Hotel Surya's reception lobby with seating and a separate fast food corner"
            className="h-72 w-full rounded-3xl object-cover shadow-lg sm:h-96"
            loading="lazy"
          />
          <img
            src={parkingView}
            alt="View from the hotel balcony over the on-site parking area toward the highway"
            className="absolute -bottom-8 -right-2 hidden h-44 w-56 rounded-2xl border-4 border-card object-cover shadow-xl sm:block lg:-right-6"
            loading="lazy"
          />
        </div>

        <div>
          <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <UtensilsCrossed size={14} aria-hidden />
            About the hotel
          </p>
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            A Practical, Welcoming Base in Naulakha
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              Hotel Surya is a budget-friendly hotel and restaurant in Naulakha, near Sundernagar
              in the Mandi district of Himachal Pradesh. Sitting right alongside National Highway
              154, it is an easy stop for road-trippers driving toward Mandi, Kullu, and Manali —
              whether you need a room for the night or simply a proper meal mid-journey.
            </p>
            <p>
              The property offers several room categories — Standard, Deluxe, Super Deluxe, and
              Four-Bed/Family Rooms — so couples, families, and groups travelling together can pick
              what suits them. An attached multi-cuisine restaurant serves local and North Indian
              meals, with a fast food corner for quick bites on the go.
            </p>
            <p>
              With on-site parking, hot and cold water, television, room service, and housekeeping
              reported among its facilities, Hotel Surya keeps things simple and honest: a
              comfortable place to rest and eat well while you travel through Himachal.
            </p>
          </div>

          <dl className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { term: "Location", detail: "Along NH-154, Naulakha" },
              { term: "Stay", detail: "4 room categories" },
              { term: "Dining", detail: "Multi-cuisine restaurant" },
            ].map((item) => (
              <div key={item.term} className="rounded-xl border border-border bg-secondary/60 px-4 py-3">
                <dt className="text-xs font-semibold uppercase tracking-wider text-primary">{item.term}</dt>
                <dd className="mt-1 text-sm font-medium text-foreground">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
