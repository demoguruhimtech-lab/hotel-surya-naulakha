import { describe, expect, it } from "vitest";
import {
  GOOGLE_MAPS_DIRECTIONS_URL,
  HOTEL_TEL_LINK,
  HOTEL_WHATSAPP_NUMBER,
  createQuickWhatsAppEnquiry,
  createWhatsAppEnquiry,
} from "@/lib/hotel";

describe("hotel contact links", () => {
  it("targets the hotel's WhatsApp number", () => {
    const url = createWhatsAppEnquiry({
      name: "Ravi Kumar",
      phone: "9876543210",
      checkIn: "2026-06-10",
      checkOut: "2026-06-11",
      guests: "2",
      roomType: "Deluxe Room",
      message: "Late arrival",
    });
    expect(url).toContain(`https://wa.me/${HOTEL_WHATSAPP_NUMBER}?text=`);
  });

  it("includes the filled enquiry details in the WhatsApp message", () => {
    const url = createWhatsAppEnquiry({
      name: "Ravi Kumar",
      phone: "9876543210",
      checkIn: "2026-06-10",
      checkOut: "2026-06-11",
      guests: "2",
      roomType: "Deluxe Room",
      message: "Late arrival",
    });
    const text = decodeURIComponent(url.split("text=")[1] ?? "");
    expect(text).toContain("Ravi Kumar");
    expect(text).toContain("Deluxe Room");
    expect(text).toContain("2026-06-10");
    expect(text).toContain("Late arrival");
  });

  it("fills fallbacks for an empty enquiry instead of blank fields", () => {
    const url = createWhatsAppEnquiry({});
    const text = decodeURIComponent(url.split("text=")[1] ?? "");
    expect(text).toContain("Please share current rates and availability.");
    expect(text).not.toContain("undefined");
    expect(text).not.toContain("null");
  });

  it("builds a room enquiry from the room cards", () => {
    const url = createQuickWhatsAppEnquiry(
      "I would like to enquire about the Four-Bed / Family Room.",
    );
    const text = decodeURIComponent(url.split("text=")[1] ?? "");
    expect(text).toContain("Four-Bed / Family Room");
  });

  it("uses the verified phone and directions URLs", () => {
    expect(HOTEL_TEL_LINK).toBe("tel:+919882257454");
    expect(GOOGLE_MAPS_DIRECTIONS_URL).toBe(
      "https://www.google.com/maps/dir/?api=1&destination=Hotel%20Surya%2C%20HW94%2BXG4%2C%20National%20Highway%20154%2C%20Naulakha%2C%20Sundernagar%2C%20Himachal%20Pradesh%20175019",
    );
  });
});
