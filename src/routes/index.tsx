import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingEnquiry from "@/components/BookingEnquiry";
import AboutSection from "@/components/AboutSection";
import RoomsSection from "@/components/RoomsSection";
import RestaurantSection from "@/components/RestaurantSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import LocationSection from "@/components/LocationSection";
import RatingSection from "@/components/RatingSection";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Hotel Surya",
  telephone: "+919882257454",
  address: {
    "@type": "PostalAddress",
    streetAddress: "HW94+XG4, National Highway 154, Naulakha",
    addressLocality: "Sundernagar",
    addressRegion: "Himachal Pradesh",
    postalCode: "175019",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.56988557408372,
    longitude: 76.90376241123303,
  },
  description:
    "Budget hotel and multi-cuisine restaurant on National Highway 154 in Naulakha, Sundernagar, Mandi district, Himachal Pradesh. Rooms include Standard, Deluxe, Super Deluxe, and Four-Bed/Family categories, with on-site parking, hot and cold water, television, room service, and housekeeping reported among the facilities.",
  amenityFeature: ["On-site parking", "Hot and cold water", "Television", "Room service", "Housekeeping"].map(
    (name) => ({ "@type": "LocationFeatureSpecification", name, value: true }),
  ),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "3.6",
    bestRating: "5",
    reviewCount: "150",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Hotel Surya Naulakha | Budget Hotel & Restaurant near Sundernagar, Mandi District, HP",
      },
      {
        name: "description",
        content:
          "Hotel Surya in Naulakha, Sundernagar (Mandi district, Himachal Pradesh) is a budget hotel and multi-cuisine restaurant on National Highway 154 — with Standard to Family rooms, parking, and on-site dining for travelers heading toward Mandi, Kullu, and Manali. Call +91 98822 57454.",
      },
      {
        property: "og:title",
        content: "Hotel Surya — Highway Hotel & Restaurant, Naulakha, Sundernagar",
      },
      {
        property: "og:description",
        content:
          "Budget hotel and multi-cuisine restaurant on NH-154 in Naulakha, near Sundernagar, Mandi district, Himachal Pradesh. Multiple room categories, parking, and on-site dining.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <BookingEnquiry />
        <AboutSection />
        <RoomsSection />
        <RestaurantSection />
        <AmenitiesSection />
        <WhyChooseSection />
        <LocationSection />
        <RatingSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
