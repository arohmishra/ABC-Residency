# ABC Residency PG — Landing Page

A production-quality, frontend-only landing page for a PG (Paying Guest) accommodation, built with vanilla **HTML5, CSS3 and JavaScript (ES6+)**. No frameworks, no backend, no build step.

This is a **demo built with placeholder content**. Every piece of client-specific information (name variations aside, address, phone, pricing, images, etc.) is clearly marked with bracketed placeholders like `[City Name]` or `+91 XXXXX XXXXX` and is safe to find-and-replace once the real client details are available.

## Project structure

```text
abc-residency-pg/
│
├── index.html          Page markup (semantic HTML, all sections)
├── css/
│   └── style.css        Design tokens + all styling, mobile-first
├── js/
│   └── script.js         Centralized content data + all interactivity
├── assets/
│   ├── images/           (empty — for locally hosted client photos)
│   ├── icons/             (empty — for a custom icon set, if desired)
│   └── logo/               (empty — for the client's real logo files)
└── README.md
```

Currently, gallery and room images are pulled from Unsplash placeholder URLs so the page looks complete out of the box. Swap these for real, locally hosted photos in `assets/images/` when available (update the `image` / `img` fields in `pgData`, see below).

## How to view it

This is a static site — no installation or server required.

- Open `index.html` directly in a browser, **or**
- Serve the folder locally, e.g. `npx serve .` or `python3 -m http.server`, then visit the printed URL.

## Replacing placeholder content

Almost all editable business content lives in one place: the `pgData` object at the top of `js/script.js`. Update it and the page re-renders itself automatically — rooms, amenities, gallery, testimonials, FAQs and contact details are all generated from this object.

```js
const pgData = {
  name: "ABC Residency PG",
  city: "[City Name]",
  phone: "+91 XXXXX XXXXX",
  phoneHref: "+91XXXXXXXXXX",   // digits-only version used in tel: / wa.me links
  whatsapp: "+91 XXXXX XXXXX",
  whatsappHref: "91XXXXXXXXXX",
  email: "hello@abcregency.example",
  rooms: [ /* ... */ ],
  amenities: [ /* ... */ ],
  gallery: [ /* ... */ ],
  nearby: [ /* ... */ ],
  testimonials: [ /* ... */ ],
  faqs: [ /* ... */ ]
};
```

A handful of hero/about copy blocks and SEO meta tags live directly in `index.html` (search for `[City Name]`, `[Area Name]`, `[State Name]`, `[Complete Address]` to find every remaining placeholder).

Colors, fonts and spacing are controlled by CSS custom properties at the top of `css/style.css`:

```css
:root {
  --primary: #16233F;   /* deep navy */
  --accent: #D98C3D;    /* warm amber */
  --background: #FBF6EE;
  --surface: #FFFFFF;
  --text-primary: #22252B;
  --text-secondary: #676B76;
}
```

## Features implemented

- Sticky, responsive navbar with smooth-scroll links, active-section highlighting and an accessible mobile hamburger menu
- Animated hero with trust indicators and a floating rating card
- Quick-stats strip, About section, Rooms & Pricing cards (with a highlighted "Most Popular" option), Amenities grid, "Why Choose Us" blocks
- Filterable, lazy-loaded image gallery with a fully keyboard-accessible lightbox (arrow keys, Escape, focus return)
- Location section with a dependency-free map placeholder and a real "Get Directions" link generated from the address in `pgData`
- Testimonials (clearly marked as placeholder reviews) and an accessible FAQ accordion (ARIA `aria-expanded` / `aria-controls`)
- Enquiry form with client-side validation, inline error messages and a simulated success state (no backend — see below)
- Scroll-reveal animations, back-to-top button, and `prefers-reduced-motion` support throughout

## Notes

- **No backend.** The enquiry form validates input and simulates a submission entirely in the browser (`js/script.js`, `initForm()`). Wire it up to a real endpoint or form service when ready.
- **No real Maps API key required.** The Location section uses a stylized placeholder map; the "Get Directions" button links out to Google Maps using the address text.
- Built mobile-first and tested down to 320px; verify final breakpoints again once real photography and copy are in place, as image aspect ratios may shift layout slightly.
