import { Coffee, MessageCircle, Phone, Soup, UtensilsCrossed } from "lucide-react";
import restaurantFront from "@/assets/restaurant-front.jpg";
import restaurantFood from "@/assets/restaurant-food.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import { HOTEL_PHONE_DISPLAY, HOTEL_TEL_LINK, createQuickWhatsAppEnquiry } from "@/lib/hotel";

const foodPoints = [
  { icon: UtensilsCrossed, label: "Multi-cuisine menu" },
  { icon: Soup, label: "Local & North Indian meals" },
  { icon: Coffee, label: "Quick bites for the road" },
];

export default function RestaurantSection() {
  return (
    <section id="restaurant" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <UtensilsCrossed size={14} aria-hidden />
            The restaurant
          </p>
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Good Food Along the Way
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Take a break from the road and enjoy a meal at Hotel Surya. The property is reported to
            offer a multi-cuisine restaurant serving local and North Indian food, making it a
            convenient stop for travelers passing through Naulakha.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            There is also a fast food corner at the front of the building for a quick chai and
            snack before you continue your journey. Ask the restaurant about what is being served
            when you visit — menus change with the day and the season.
          </p>

          <ul className="mt-6 flex flex-wrap gap-3">
            {foodPoints.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground"
              >
                <Icon size={15} className="text-primary" aria-hidden />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={createQuickWhatsAppEnquiry(
                "I have a question about dining at your restaurant.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              <MessageCircle size={16} aria-hidden />
              Ask About Dining
            </a>
            <a
              href={HOTEL_TEL_LINK}
              className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-secondary"
            >
              <Phone size={16} aria-hidden />
              Call About the Restaurant
            </a>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Restaurant questions are answered by the hotel directly at {HOTEL_PHONE_DISPLAY}.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src={restaurantFront}
            alt="The Surya Family Restaurant entrance at the front of Hotel Surya"
            className="col-span-2 h-56 w-full rounded-3xl object-cover shadow-lg sm:h-64"
            loading="lazy"
          />
          <img
            src={restaurantInterior}
            alt="Inside the Hotel Surya restaurant with seated dining tables"
            className="h-44 w-full rounded-2xl object-cover shadow-md sm:h-52"
            loading="lazy"
          />
          <img
            src={restaurantFood}
            alt="A freshly served meal with curries, rice, parathas, curd, and tea"
            className="h-44 w-full rounded-2xl object-cover shadow-md sm:h-52"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
