import { BedDouble, MapPinned, Route, UtensilsCrossed } from "lucide-react";

const reasons = [
  {
    icon: MapPinned,
    title: "Right on National Highway 154",
    description:
      "An easy-to-find, highway-side location in Naulakha — you don't need to leave the route to find food and a room.",
  },
  {
    icon: BedDouble,
    title: "Multiple room categories",
    description:
      "Standard, Deluxe, Super Deluxe, and Four-Bed/Family room options for different travel needs and budgets.",
  },
  {
    icon: UtensilsCrossed,
    title: "Attached restaurant",
    description:
      "A multi-cuisine restaurant on the property for dining during the journey — no extra detour required.",
  },
  {
    icon: Route,
    title: "A practical stop for the region",
    description:
      "A sensible halt for trips through Sundernagar and the Mandi district, with onward roads toward Mandi, Kullu, and Manali.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Why choose us
        </p>
        <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
          Why Travelers Choose Hotel Surya
        </h2>
      </div>

      <ol className="grid gap-5 sm:grid-cols-2">
        {reasons.map(({ icon: Icon, title, description }, index) => (
          <li
            key={title}
            className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary font-display text-lg font-bold text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
                <Icon size={17} className="text-primary" aria-hidden />
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
