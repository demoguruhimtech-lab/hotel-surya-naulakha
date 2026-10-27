import { Star } from "lucide-react";

export default function RatingSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-8 text-center shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Guest rating
        </p>
        <p className="mt-3 font-display text-4xl font-semibold text-foreground">
          3.6<span className="text-xl text-muted-foreground">/5</span>
        </p>
        <div
          className="mt-3 inline-flex gap-1"
          role="img"
          aria-label="Rated 3.6 out of 5 stars"
        >
          {[0, 1, 2, 3, 4].map((i) => {
            const fill = Math.min(Math.max(3.6 - i, 0), 1) * 100;
            return (
              <span key={i} className="relative inline-block h-6 w-6">
                <Star size={24} className="absolute inset-0 text-border" aria-hidden />
                <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
                  <Star size={24} className="text-gold fill-gold" aria-hidden />
                </span>
              </span>
            );
          })}
        </div>
        <p className="mt-3 text-sm font-medium text-foreground">
          Based on over 150 community reviews
        </p>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          This rating comes from the property's public listing information and is shown here as
          reported. It is not a live score and has not been independently verified by this website.
        </p>
      </div>
    </section>
  );
}
