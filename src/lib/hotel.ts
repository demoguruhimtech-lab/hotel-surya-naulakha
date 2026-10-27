export const HOTEL_NAME = "Hotel Surya";

export const HOTEL_PHONE_DISPLAY = "+91 98822 57454";
export const HOTEL_TEL_LINK = "tel:+919882257454";
export const HOTEL_WHATSAPP_NUMBER = "919882257454";

export const HOTEL_ADDRESS =
  "HW94+XG4, National Highway 154, Naulakha, Sundernagar, Mandi District, Himachal Pradesh 175019, India";

export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.3340715992117!2d76.90376241123303!3d31.56988557408372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390519434a28c86b%3A0xf62194d7c0878be6!2sHotel%20Surya!5e0!3m2!1sen!2sin!4v1793069608600!5m2!1sen!2sin";

export const GOOGLE_MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Hotel%20Surya%2C%20HW94%2BXG4%2C%20National%20Highway%20154%2C%20Naulakha%2C%20Sundernagar%2C%20Himachal%20Pradesh%20175019";

export interface EnquiryForm {
  name: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
  message: string;
}

export function createWhatsAppEnquiry(form: Partial<EnquiryForm>): string {
  const message = [
    "Hello Hotel Surya,",
    "I would like to enquire about a stay.",
    `Name: ${form.name?.trim() || "—"}`,
    `Phone: ${form.phone?.trim() || "—"}`,
    `Check-in: ${form.checkIn || "Not selected"}`,
    `Check-out: ${form.checkOut || "Not selected"}`,
    `Guests: ${form.guests?.trim() || "Please advise"}`,
    `Room preference: ${form.roomType?.trim() || "Please share available options"}`,
    `Message: ${form.message?.trim() || "Please share current rates and availability."}`,
  ].join("\n");

  return `https://wa.me/${HOTEL_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function createQuickWhatsAppEnquiry(topic: string): string {
  const message = `Hello Hotel Surya, ${topic}`;
  return `https://wa.me/${HOTEL_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Rooms", href: "#rooms" },
  { label: "Restaurant", href: "#restaurant" },
  { label: "Amenities", href: "#amenities" },
  { label: "About", href: "#about" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
] as const;
