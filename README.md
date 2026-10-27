# Hotel Surya Naulakha

# Build a Premium Single-Page Hotel Website for Hotel Surya, Naulakha, Himachal Pradesh

Act as an expert React developer and premium hotel website designer. Build a beautiful, modern, responsive **single-page homepage only** for Hotel Surya, a budget-friendly highway hotel and restaurant in Naulakha, Sundernagar, Mandi district, Himachal Pradesh.

Keep everything on one long, well-designed homepage. Do not create separate pages or unnecessary features. The website should look professional, visually attractive, content-rich, and easy to use on mobile and desktop.

## 1. MANDATORY IMAGE RULE — NO JSON IMAGES

**Do not use JSON images under any circumstances.**

- Do not create `images.json`, `image.json`, `gallery.json`, or any JSON image mapping.
- Do not store image paths or image URLs in JSON arrays or objects.
- Do not use Base64 images.
- Do not use Unsplash, Pexels, stock photos, random internet images, or external image URLs.
- Do not automatically fetch or generate images.
- Use only the actual hotel photographs that I provide.
- Import every provided image directly from `src/assets/` using normal ES module imports.
- Use the imported image variables directly in JSX.
- Use the exact filenames that actually exist. Never invent filenames or import nonexistent files.
- If I have not provided images yet, create a beautiful CSS-based design with neutral placeholders and elegant colors. Do not insert any photos until I provide them.

Example of the required approach:

```jsx
import hotelExterior from "../assets/hotel-exterior.webp";
import hotelRoom from "../assets/hotel-room.webp";
import restaurantImage from "../assets/restaurant.webp";

function HotelImages() {
  return (
    <section>
      <img src={hotelExterior} alt="Hotel Surya exterior" />
      <img src={hotelRoom} alt="Hotel Surya guest room" />
      <img src={restaurantImage} alt="Hotel Surya restaurant" />
    </section>
  );
}

export default HotelImages;
```

The filenames above are examples only. Use them only if those exact files are supplied and exist in `src/assets/`.

**Before finishing, check the complete project to confirm that no JSON image files, image mappings, random images, or fabricated image paths exist.**

## 2. Hotel Information

Use these details throughout the homepage.

- **Hotel Name:** Hotel Surya
- **Address:** HW94+XG4, National Highway 154, Naulakha, Sundernagar, Mandi District, Himachal Pradesh 175019, India
- **Phone:** +91 98822 57454
- **Property Type:** Budget hotel and restaurant
- **Location Advantage:** Situated alongside National Highway 154, convenient for travelers heading toward Mandi, Kullu, and Manali.
- **Reported Guest Rating:** 3.6/5 based on over 150 community reviews, according to the supplied information.
- **Accommodation Types:** Standard Rooms, Deluxe Rooms, Super Deluxe Rooms, and Four-Bed/Family Rooms.
- **Dining:** Attached multi-cuisine restaurant, reported to serve local and North Indian meals.
- **Reported Facilities:** On-site vehicle parking, hot and cold water, television, room service, and housekeeping.

Do not invent an email address, social media links, exact room count, room dimensions, check-in/check-out times, or guaranteed room prices.

## 3. Technology and Implementation

Use:
- React with Vite.
- JavaScript and JSX.
- Tailwind CSS or clean custom CSS.
- React Icons or Lucide React for icons.
- Reusable components where helpful.

Keep the implementation simple and clean. The final result should be one homepage, not a multi-page website.

Suggested files:

```text
src/
  assets/
    [only actual images supplied by the owner]
  components/
    Navbar.jsx
    Hero.jsx
    BookingEnquiry.jsx
    RoomSection.jsx
    RestaurantSection.jsx
    AmenitiesSection.jsx
    LocationSection.jsx
    Footer.jsx
  App.jsx
  main.jsx
  index.css
```

Do not create unnecessary files or a JSON-based image system.

## 4. Visual Design

Create a warm, welcoming Himachali highway-hotel design.

### Color palette
- Deep forest green.
- Warm cream.
- White.
- Charcoal.
- Subtle muted-gold accents.

Use elegant headings, generous spacing, attractive cards, smooth scrolling, tasteful shadows, and subtle hover effects. Avoid an overly flashy or generic template look.

The homepage should feel trustworthy, comfortable, and welcoming to families, couples, road-trip travelers, and guests stopping during a journey through Himachal Pradesh.

Use actual supplied hotel photographs only. If there are no photographs, use a stylish CSS-based hero and decorative design elements instead.

## 5. Homepage Sections

### A. Sticky Navigation Bar

Create a professional navigation bar with:
- Hotel Surya wordmark.
- Home.
- Rooms.
- Restaurant.
- Amenities.
- About.
- Location.
- Contact.

These links should smoothly scroll to the corresponding sections on the same page.

Include a prominent "Enquire Now" button and a click-to-call phone button. On mobile, use a clean responsive menu.

### B. Hero Section

Create a visually impressive hero section with a strong heading:

**"A Comfortable Stop on Your Himachal Journey"**

Supporting text:

"Welcome to Hotel Surya, Naulakha — a convenient highway hotel and restaurant for travelers exploring Sundernagar, Mandi, Kullu, and the beautiful valleys of Himachal Pradesh."

Add three clear buttons:
- **Enquire About Rooms**
- **Explore Restaurant**
- **Call Hotel Surya**

Show compact highlights:
- Highway-side location.
- Multiple room categories.
- On-site dining.
- Vehicle parking.

If an owner-provided hotel exterior photograph exists, import it directly from `src/assets/`. Otherwise, use a rich forest-green CSS background, subtle shapes, elegant typography, and a clean layout. Never use random images.

### C. Quick Booking Enquiry

Place a compact enquiry form below the hero or integrate it beautifully into the hero section.

Fields:
- Guest name.
- Phone number.
- Check-in date.
- Check-out date.
- Number of guests.
- Preferred room category.
- Optional message.

Buttons:
- **Send Enquiry on WhatsApp**
- **Call for Room Availability**

Validate required fields and ensure the check-out date is later than the check-in date. Do not invent room availability or guaranteed prices.

### D. About Hotel Surya

Write engaging, natural content explaining that Hotel Surya is a budget-friendly hotel and restaurant in Naulakha, near Sundernagar.

Highlight its practical location along National Highway 154 and its suitability for travelers who need accommodation and food while traveling through the Mandi district.

Mention that the property offers different reported room categories and an attached restaurant. Avoid exaggerated luxury claims or unsupported promises.

Use a balanced two-column layout with a hotel photograph only if supplied. Otherwise, use an attractive text layout with a decorative CSS panel.

### E. Rooms and Accommodation

Create a large, attractive room section with four room cards.

**1. Standard Room**

A practical accommodation option for guests looking for a straightforward stay while traveling through the area.

**2. Deluxe Room**

An accommodation category for guests seeking an alternative to the standard room.

**3. Super Deluxe Room**

A higher room category listed in the supplied property information. Confirm the exact features and inclusions with the hotel.

**4. Four-Bed / Family Room**

A larger room option reported for families and groups traveling together. Confirm the actual occupancy and configuration before booking.

Each card should include:
- Room category.
- Concise description.
- A real room photograph only if supplied by the owner.
- "Enquire About This Room" button.
- WhatsApp enquiry option.

Do not invent room sizes, bed configurations, occupancy limits, bathroom features, room rates, or additional amenities.

If no room photographs are available, use visually attractive CSS placeholders with a room icon and room category label. Do not use stock photos.

### F. Restaurant Section

Create a visually appealing section for the attached Hotel Surya restaurant.

Heading:

**"Good Food Along the Way"**

Suggested content:

"Take a break from the road and enjoy a meal at Hotel Surya. The property is reported to offer a multi-cuisine restaurant serving local and North Indian food, making it a convenient stop for travelers passing through Naulakha."

Include:
- Restaurant introduction.
- Food-related icons.
- A clear enquiry CTA.
- A call button for restaurant-related questions.

Do not invent a complete menu, exact prices, opening hours, room-service dining hours, or specific signature dishes.

If restaurant photos are provided, import them directly from `src/assets/`. Otherwise, create a beautiful image-free layout using typography and CSS.

### G. Amenities and Facilities

Create an attractive grid of cards with icons and concise descriptions for the facilities listed in the supplied information:

- **On-Site Parking:** Parking is reported to be available for guests traveling by car or bike.
- **Hot and Cold Water:** Basic water facilities are reported.
- **Television:** Television is listed among the basic room amenities.
- **Room Service:** Room service is reported to be available.
- **Housekeeping:** Housekeeping is listed among the property facilities.
- **Highway Access:** A practical location alongside National Highway 154.

Use icons rather than photographs for these cards. Do not add Wi-Fi, air conditioning, laundry, power backup, 24-hour reception, or other amenities unless the hotel owner confirms them.

### H. Why Choose Hotel Surya?

Create a well-designed section featuring four reasons to consider the property:

- Convenient location on National Highway 154.
- Multiple room categories for different travel needs.
- An attached restaurant for dining during the journey.
- A practical stop for trips through Sundernagar and the Mandi district.

Keep the wording informative and honest. Do not promise guaranteed cleanliness, security, or service quality.

### I. Nearby Travel and Location

Explain that Hotel Surya is located in Naulakha, near Sundernagar, in the Mandi district of Himachal Pradesh.

Mention its highway-side location as a useful starting point for travelers continuing toward Mandi, Kullu, and Manali.

Do not invent exact distances or travel times to nearby destinations.

Include:
- Complete hotel address.
- Google Maps embed.
- "Get Directions" button.
- "Call Hotel" button.
- "Enquire on WhatsApp" button.

Use this exact Google Maps embed URL:

```text
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.3340715992117!2d76.90376241123303!3d31.56988557408372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390519434a28c86b%3A0xf62194d7c0878be6!2sHotel%20Surya!5e0!3m2!1sen!2sin!4v1793069608600!5m2!1sen!2sin
```

Render the map in a responsive iframe with `loading="lazy"`, a descriptive title, and appropriate accessibility attributes.

### J. Guest Rating

Display the supplied reported rating:

**3.6/5 — Based on over 150 community reviews**

Clearly treat this as information from the supplied listing. Do not invent testimonials, review quotations, reviewer names, or guest photographs. Do not claim that the rating is live or independently verified.

### K. Frequently Asked Questions

Add a visually attractive FAQ accordion on the same homepage.

Include these questions:

1. **Where is Hotel Surya located?**
   Hotel Surya is located at HW94+XG4, National Highway 154, Naulakha, Sundernagar, Mandi district, Himachal Pradesh 175019.

2. **How can I enquire about room availability?**
   Call +91 98822 57454 or send an enquiry through WhatsApp using the website's booking form.

3. **What types of rooms are listed?**
   The supplied information lists Standard, Deluxe, Super Deluxe, and Four-Bed/Family Rooms. Contact the hotel to confirm which categories are currently available.

4. **Does the property have a restaurant?**
   The supplied information describes an attached multi-cuisine restaurant. Contact the hotel to confirm current dining options and timings.

5. **Is parking available?**
   On-site vehicle parking is reported in the supplied information. Contact the property to confirm current arrangements.

6. **What are the check-in and check-out times?**
   Please contact the hotel directly to confirm the current timings.

### L. Final Booking Call to Action

Create a strong final section with a contrasting background.

Heading:

**"Planning Your Next Journey Through Himachal?"**

Supporting text:

"Contact Hotel Surya to enquire about room options, dining, and current availability before you arrive."

Buttons:
- Call +91 98822 57454.
- Send Booking Enquiry on WhatsApp.
- Get Directions.

### M. Footer

Include:
- Hotel Surya name.
- Full address.
- Click-to-call phone number.
- Quick section links.
- Restaurant and room enquiry links.
- Copyright notice with the current year.

Do not invent an email address, website domain, or social media links.

## 6. Functional WhatsApp Enquiry

Use the hotel number in international format:

`919882257454`

Create a reusable JavaScript function that creates a prefilled WhatsApp enquiry using the guest's form details.

Example:

```jsx
const HOTEL_PHONE = "919882257454";

function createWhatsAppEnquiry(form) {
  const message = [
    "Hello Hotel Surya,",
    "I would like to enquire about a stay.",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Check-in: ${form.checkIn || "Not selected"}`,
    `Check-out: ${form.checkOut || "Not selected"}`,
    `Guests: ${form.guests || "Please advise"}`,
    `Room preference: ${form.roomType || "Please share available options"}`,
    `Message: ${form.message || "Please share current rates and availability."}`
  ].join("\n");

  return `https://wa.me/${HOTEL_PHONE}?text=${encodeURIComponent(message)}`;
}
```

Adapt the function to the actual form state. Validate the guest's details and avoid inserting undefined values.

The website must open WhatsApp with the enquiry message ready for the guest to send. Do not falsely claim that the message was automatically sent or that the booking is confirmed.

Use this telephone link for all call buttons:

`tel:+919882257454`

Use this directions link:

`https://www.google.com/maps/dir/?api=1&destination=Hotel%20Surya%2C%20HW94%2BXG4%2C%20National%20Highway%20154%2C%20Naulakha%2C%20Sundernagar%2C%20Himachal%20Pradesh%20175019`

## 7. SEO Requirements

Optimize the homepage naturally for:
- Hotel Surya Naulakha.
- Hotel in Sundernagar.
- Highway hotel in Mandi district.
- Hotel and restaurant in Naulakha.
- Budget hotel near National Highway 154.
- Hotel near Sundernagar, Himachal Pradesh.

Implement:
- A descriptive page title.
- A natural meta description.
- One clear H1 heading.
- Proper H2 and H3 hierarchy.
- Mobile-friendly metadata.
- Open Graph metadata.
- Descriptive alt text for actual supplied images.
- Local business or lodging structured data using only verified information.
- A `robots.txt` and `sitemap.xml` if appropriate for the deployed website.

Do not invent a domain name, email address, or unverified business information. Do not promise guaranteed Google rankings.

## 8. Final Quality Requirements

- Build only one long homepage.
- All navigation links should scroll to the correct sections.
- Make the layout fully responsive.
- Ensure the booking form validates its fields.
- Test the call, WhatsApp, and directions links.
- Use the exact Google Maps location supplied above.
- Keep room details and facilities limited to verified information.
- Do not create a fake online payment or reservation confirmation system.
- Keep the UI content-rich but readable.
- Use only actual owner-provided images imported directly from `src/assets/`.
- If no images are provided, use CSS-based placeholders and icons.

**NON-NEGOTIABLE: DO NOT USE JSON IMAGES. DO NOT USE RANDOM OR EXTERNAL PHOTOS. DO NOT CREATE ANY JSON IMAGE FILE. IMPORT ONLY THE ACTUAL IMAGES I PROVIDE FROM `src/assets/`. IF I HAVE NOT PROVIDED IMAGES, BUILD THE WEBSITE WITHOUT PHOTOGRAPHS.**

Deliver a complete, polished, working React homepage with all sections, responsive styling, WhatsApp enquiries, phone calls, directions, and the Google Maps embed.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/693cf8a6-48f3-4a27-8536-7888284676ee).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
