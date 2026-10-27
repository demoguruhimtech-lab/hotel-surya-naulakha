import { useState, type FormEvent } from "react";
import { CalendarDays, CheckCircle2, MessageCircle, Phone, Send, Users } from "lucide-react";
import {
  HOTEL_PHONE_DISPLAY,
  HOTEL_TEL_LINK,
  createWhatsAppEnquiry,
  type EnquiryForm,
} from "@/lib/hotel";

const initialForm: EnquiryForm = {
  name: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  guests: "2",
  roomType: "",
  message: "",
};

const ROOM_OPTIONS = [
  "Standard Room",
  "Deluxe Room",
  "Super Deluxe Room",
  "Four-Bed / Family Room",
  "Not sure yet — please advise",
];

type Errors = Partial<Record<keyof EnquiryForm, string>>;

export default function BookingEnquiry() {
  const [form, setForm] = useState<EnquiryForm>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (field: keyof EnquiryForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.phone.trim()) {
      next.phone = "Please enter your phone number.";
    } else if (!/^[+\d][\d\s-]{7,14}$/.test(form.phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }
    if (form.checkIn && form.checkOut && form.checkOut <= form.checkIn) {
      next.checkOut = "Check-out must be after check-in.";
    }
    return next;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    window.open(createWhatsAppEnquiry(form), "_blank", "noopener");
    setSent(true);
  };

  const inputClass = (field: keyof EnquiryForm) =>
    `w-full rounded-lg border bg-background px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-ring/60 ${
      errors[field] ? "border-destructive" : "border-input"
    }`;

  return (
    <section id="enquiry" className="relative z-10 mx-auto -mt-14 max-w-5xl px-4 sm:px-6">
      <div className="rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Quick Booking Enquiry
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Share your travel dates and we will help you plan your stay.
            </p>
          </div>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays size={16} className="text-primary" aria-hidden />
            No online payment — enquiries go straight to the hotel on WhatsApp.
          </p>
        </div>

        {sent && (
          <p className="mb-5 flex items-start gap-2 rounded-lg bg-secondary px-4 py-3 text-sm text-secondary-foreground">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden />
            WhatsApp is opening with your enquiry ready to send. Your stay is confirmed only once
            the hotel responds to you.
          </p>
        )}

        <form onSubmit={onSubmit} noValidate>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <label htmlFor="guest-name" className="mb-1.5 block text-sm font-medium text-foreground">
                Guest name <span className="text-destructive">*</span>
              </label>
              <input
                id="guest-name"
                type="text"
                value={form.name}
                onChange={update("name")}
                placeholder="Your full name"
                className={inputClass("name")}
              />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="guest-phone" className="mb-1.5 block text-sm font-medium text-foreground">
                Phone number <span className="text-destructive">*</span>
              </label>
              <input
                id="guest-phone"
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="e.g. 98XXXXXXXX"
                className={inputClass("phone")}
              />
              {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="guests" className="mb-1.5 block text-sm font-medium text-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Users size={14} aria-hidden /> Number of guests
                </span>
              </label>
              <select id="guests" value={form.guests} onChange={update("guests")} className={inputClass("guests")}>
                {["1", "2", "3", "4", "5", "6", "7+"].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === "1" ? "guest" : "guests"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="check-in" className="mb-1.5 block text-sm font-medium text-foreground">
                Check-in date
              </label>
              <input id="check-in" type="date" value={form.checkIn} onChange={update("checkIn")} className={inputClass("checkIn")} />
            </div>

            <div>
              <label htmlFor="check-out" className="mb-1.5 block text-sm font-medium text-foreground">
                Check-out date
              </label>
              <input id="check-out" type="date" value={form.checkOut} onChange={update("checkOut")} className={inputClass("checkOut")} />
              {errors.checkOut && <p className="mt-1 text-xs text-destructive">{errors.checkOut}</p>}
            </div>

            <div>
              <label htmlFor="room-type" className="mb-1.5 block text-sm font-medium text-foreground">
                Preferred room category
              </label>
              <select id="room-type" value={form.roomType} onChange={update("roomType")} className={inputClass("roomType")}>
                <option value="">Any category</option>
                {ROOM_OPTIONS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                Message (optional)
              </label>
              <textarea
                id="message"
                rows={3}
                value={form.message}
                onChange={update("message")}
                placeholder="Anything the hotel should know — e.g. late arrival along NH-154"
                className={inputClass("message")}
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              <MessageCircle size={17} aria-hidden />
              Send Enquiry on WhatsApp
            </button>
            <a
              href={HOTEL_TEL_LINK}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-secondary"
            >
              <Phone size={16} aria-hidden />
              Call for Room Availability
            </a>
            <span className="inline-flex items-center gap-1.5 self-center text-xs text-muted-foreground">
              <Send size={12} aria-hidden />
              {HOTEL_PHONE_DISPLAY}
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
