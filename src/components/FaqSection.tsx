import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Where is Hotel Surya located?",
    answer:
      "Hotel Surya is located at HW94+XG4, National Highway 154, Naulakha, near Sundernagar, Mandi district, Himachal Pradesh 175019.",
  },
  {
    question: "How can I enquire about room availability?",
    answer:
      "Call +91 98822 57454 or send an enquiry through WhatsApp using the website's booking form.",
  },
  {
    question: "What types of rooms are listed?",
    answer:
      "The supplied information lists Standard, Deluxe, Super Deluxe, and Four-Bed/Family Rooms. Contact the hotel to confirm which categories are currently available.",
  },
  {
    question: "Does the property have a restaurant?",
    answer:
      "The supplied information describes an attached multi-cuisine restaurant. Contact the hotel to confirm current dining options and timings.",
  },
  {
    question: "Is parking available?",
    answer:
      "On-site vehicle parking is reported in the supplied information. Contact the property to confirm current arrangements.",
  },
  {
    question: "What are the check-in and check-out times?",
    answer: "Please contact the hotel directly to confirm the current timings.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-secondary/70 py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <HelpCircle size={14} aria-hidden />
            FAQ
          </p>
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span className="text-sm font-semibold text-foreground sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      "shrink-0 text-primary transition-transform duration-200",
                      open && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
                {open && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
