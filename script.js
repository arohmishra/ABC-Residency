/* =========================================================
   ABC RESIDENCY — SCRIPT
   0. Preloader
   1. Centralized property configuration (EDIT THIS FIRST)
   2. WhatsApp helpers
   3. Render functions (rooms, amenities, gallery, testimonials, FAQ, rules)
   4. Contact details + structured data + footer social
   5. Navigation (mobile menu, smooth scroll, active link, sticky navbar)
   6. Scroll reveal
   7. Stats count-up
   8. Gallery filtering + lightbox
   9. FAQ accordion
   10. Enquiry form (validation + submission)
   11. Back to top / floating WhatsApp button
   ========================================================= */

/* ---------------------------------------------------------
   0. PRELOADER
--------------------------------------------------------- */
const pageLoadStart = performance.now();

function initPreloader() {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;
  const MIN_DISPLAY_MS = 550;

  function hidePreloader() {
    const elapsed = performance.now() - pageLoadStart;
    const remaining = Math.max(MIN_DISPLAY_MS - elapsed, 0);
    setTimeout(() => {
      preloader.classList.add("is-hidden");
      document.body.classList.remove("is-loading");
      setTimeout(() => preloader.remove(), 600);
    }, remaining);
  }

  if (document.readyState === "complete") hidePreloader();
  else window.addEventListener("load", hidePreloader, { once: true });
}
initPreloader();

/* ---------------------------------------------------------
   1. CENTRALIZED PROPERTY CONFIGURATION
   ---------------------------------------------------------
   This is the ONLY place that should need editing when the
   client provides real information. Every value below marked
   with [BRACKETS] is a placeholder — replace it with the
   confirmed, client-provided value. Do not guess or invent
   any of these (see the accompanying report for the full list).
--------------------------------------------------------- */
const propertyData = {
  name: "ABC Residency",
  legalName: "ABC Residency PG",
  tagline: "Comfortable, Safe & Convenient PG Living",

  // --- Location ---
  city: "[City Name]",
  state: "[State Name]",
  locality: "[Locality / Area Name]",
  address: "[Full Address], [Locality / Area Name], [City Name], [State Name] - [PIN Code]",

  // --- Contact ---
  // phoneHref / whatsappHref must be plain digits with country code (e.g. 91XXXXXXXXXX)
  // for the tel: and wa.me links to actually work. Leave the bracketed
  // placeholder in place until the real number is confirmed.
  phone: "[Phone Number]",
  phoneHref: "[PhoneNumber]",
  whatsapp: "[WhatsApp Number]",
  whatsappHref: "[WhatsAppNumber]",
  email: "[email address]",

  // --- Map ---
  // Paste a Google Maps "Embed a map" <iframe> src URL here to show a real,
  // interactive map in the Location section. Until then, the site shows a
  // clearly-labelled placeholder map instead of a fake/generic embed.
  mapEmbedUrl: "",

  // --- Form submission (see FORM SUBMISSION section for details) ---
  // Get a free access key at https://web3forms.com and paste it below.
  // While this still starts with "[", the enquiry form will NOT claim a
  // fake success — it falls back to opening a pre-filled WhatsApp message
  // instead, so no enquiry is ever silently lost.
  formAccessKey: "[WEB3FORMS_ACCESS_KEY]",

  // --- Social (leave blank to hide from the footer entirely) ---
  social: {
    instagram: "",
    facebook: "",
    youtube: ""
  },

  // --- Testimonials ---
  // Flip to true only once propertyData.testimonials below contains real,
  // client-provided reviews. Until then the whole section stays hidden
  // rather than showing invented reviews.
  testimonialsEnabled: false,

  rooms: [
    {
      id: "single",
      name: "Single Sharing",
      image: "assets/images/rooms/single-sharing.jpg",
      price: "[Price]",
      priceSuffix: "/ month",
      occupancy: "1 Person",
      popular: false,
      features: ["Private Room", "Wardrobe", "Study Table", "Wi-Fi", "Attached Bathroom"]
    },
    {
      id: "double",
      name: "Double Sharing",
      image: "assets/images/rooms/double-sharing.jpg",
      price: "[Price]",
      priceSuffix: "/ person / month",
      occupancy: "2 People",
      popular: true,
      features: ["Comfortable Bed", "Wardrobe", "Study Table", "Wi-Fi", "Attached Bathroom"]
    },
    {
      id: "triple",
      name: "Triple Sharing",
      image: "assets/images/rooms/triple-sharing.jpg",
      price: "[Price]",
      priceSuffix: "/ person / month",
      occupancy: "3 People",
      popular: false,
      features: ["Comfortable Bed", "Wardrobe", "Study Table", "Wi-Fi", "Attached Bathroom"]
    }
  ],

  // Only list amenities the client has actually confirmed are available.
  amenities: [
    { icon: "📶", name: "High-Speed Wi-Fi", desc: "Stay connected for study, work and entertainment." },
    { icon: "🛡️", name: "24/7 Security", desc: "Round-the-clock security personnel on the premises." },
    { icon: "📹", name: "CCTV Surveillance", desc: "Monitored common areas and entry points for safety." },
    { icon: "🔋", name: "Power Backup", desc: "Uninterrupted power supply, even during outages." },
    { icon: "🍽️", name: "Food / Mess", desc: "Wholesome home-style meals served daily." },
    { icon: "🧺", name: "Laundry", desc: "Regular laundry service so you never fall behind." },
    { icon: "🧹", name: "Housekeeping", desc: "Routine cleaning to keep shared spaces spotless." },
    { icon: "🚿", name: "Hot Water", desc: "Round-the-clock hot water in every bathroom." },
    { icon: "🚗", name: "Parking", desc: "Secure parking space for bikes and vehicles." },
    { icon: "📚", name: "Study Area", desc: "A quiet, dedicated space to focus and work." }
  ],

  // Filenames are meaningful on purpose so real client photos can drop
  // straight into assets/images/gallery/ with the same names.
  gallery: [
    { category: "rooms", img: "assets/images/gallery/single-room.jpg", caption: "Single Room" },
    { category: "rooms", img: "assets/images/gallery/double-room.jpg", caption: "Double Room" },
    { category: "rooms", img: "assets/images/gallery/triple-room.jpg", caption: "Triple Room" },
    { category: "exterior", img: "assets/images/gallery/building-exterior.jpg", caption: "Building Exterior" },
    { category: "exterior", img: "assets/images/gallery/building-entrance.jpg", caption: "Building Entrance" },
    { category: "common", img: "assets/images/gallery/common-area.jpg", caption: "Common Area" },
    { category: "common", img: "assets/images/gallery/lounge.jpg", caption: "Lounge" },
    { category: "dining", img: "assets/images/gallery/dining-area.jpg", caption: "Dining Area" },
    { category: "dining", img: "assets/images/gallery/kitchen.jpg", caption: "Kitchen" },
    { category: "facilities", img: "assets/images/gallery/study-area.jpg", caption: "Study Area" },
    { category: "facilities", img: "assets/images/gallery/laundry-facility.jpg", caption: "Laundry Facility" },
    { category: "facilities", img: "assets/images/gallery/parking-area.jpg", caption: "Parking Area" }
  ],

  // Do not invent distances/times — confirm with the client before publishing.
  nearby: [
    { name: "[College / University Name]", distance: "[X] mins" },
    { name: "[Office Hub / IT Park]", distance: "[X] mins" },
    { name: "[Market / Shopping Area]", distance: "[X] mins" },
    { name: "[Hospital Name]", distance: "[X] mins" },
    { name: "[Railway / Metro Station]", distance: "[X] mins" }
  ],

  // Real, client-provided testimonials only. This array is ignored on the
  // live site until testimonialsEnabled above is set to true.
  testimonials: [
    { quote: "[Client testimonial will be added here]", name: "[Resident Name]", role: "[Student / Working Professional]", rating: "5.0" }
  ],

  faqs: [
    { q: "What room types are available?", a: "We offer Single Sharing, Double Sharing and Triple Sharing rooms — see the Rooms &amp; Pricing section above for what's included with each." },
    { q: "What is included in the rent?", a: "[To be confirmed by property management — e.g. which utilities, food plan and services are bundled into the monthly rent.]" },
    { q: "Is food included?", a: "[To be confirmed by property management — specify meal plan, timings and any extra charges, if applicable.]" },
    { q: "Is Wi-Fi available?", a: "[To be confirmed by property management — confirm availability, speed and whether it's included in the rent.]" },
    { q: "Is there a security deposit?", a: "[To be confirmed by property management — specify the deposit amount and refund policy.]" },
    { q: "What is the notice period?", a: "[To be confirmed by property management — specify the notice period required before vacating.]" },
    { q: "What are the visitor rules?", a: "[To be confirmed by property management — specify visiting hours and any restrictions.]" },
    { q: "Can I visit the property before booking?", a: "Yes — we encourage a visit before you decide. Contact us to schedule a convenient time." },
    { q: "How can I enquire about a room?", a: "You can message us on WhatsApp, call us directly, or fill out the enquiry form on this page and our team will get back to you." }
  ],

  // Rules & Policies — confirm every value with the client before publishing.
  // Nothing here should be presented to a visitor as final until it's verified.
  rules: [
    { label: "Curfew", detail: "[To be confirmed by property management]" },
    { label: "Visitor Policy", detail: "[To be confirmed by property management]" },
    { label: "Food Timings", detail: "[To be confirmed by property management]" },
    { label: "Security Deposit", detail: "[To be confirmed by property management]" },
    { label: "Notice Period", detail: "[To be confirmed by property management]" },
    { label: "Smoking / Alcohol Policy", detail: "[To be confirmed by property management]" },
    { label: "Noise Policy", detail: "[To be confirmed by property management]" },
    { label: "Maintenance Requests", detail: "[To be confirmed by property management]" }
  ]
};

/* ---------------------------------------------------------
   2. WHATSAPP HELPERS
--------------------------------------------------------- */
function buildWhatsAppUrl(message) {
  return `https://wa.me/${encodeURIComponent(propertyData.whatsappHref)}?text=${encodeURIComponent(message)}`;
}

function defaultWhatsAppMessage() {
  return `Hello, I am interested in staying at ${propertyData.name}. I would like to know about room availability and pricing.`;
}

function roomWhatsAppMessage(roomName) {
  return `Hello, I am interested in the ${roomName} room at ${propertyData.name}. Please share availability and pricing details.`;
}

/* ---------------------------------------------------------
   3. RENDER FUNCTIONS
--------------------------------------------------------- */
function renderRooms() {
  const grid = document.getElementById("roomGrid");
  if (!grid) return;
  grid.innerHTML = propertyData.rooms.map((room, i) => `
    <article class="room-card card-reveal${room.popular ? " is-popular" : ""}" style="--reveal-delay:${i * 100}ms">
      <div class="room-media">
        <img src="${room.image}" alt="${room.name} at ${propertyData.name}" loading="lazy" width="500" height="375">
        ${room.popular ? `<span class="badge badge-accent room-badge">Most Popular</span>` : ""}
      </div>
      <div class="room-body">
        <h3>${room.name}</h3>
        <div class="room-price">${room.price} <small>${room.priceSuffix}</small></div>
        <span class="room-occupancy">${room.occupancy}</span>
        <ul class="room-features">
          ${room.features.map(f => `<li>${f}</li>`).join("")}
        </ul>
        <a href="${buildWhatsAppUrl(roomWhatsAppMessage(room.name))}" target="_blank" rel="noopener" class="btn btn-primary btn-full">
          Enquire on WhatsApp
        </a>
        <button type="button" class="room-form-link room-enquire" data-room="${room.name}">Or fill the enquiry form instead</button>
      </div>
    </article>
  `).join("");
}

function renderAmenities() {
  const grid = document.getElementById("amenitiesGrid");
  if (!grid) return;
  grid.innerHTML = propertyData.amenities.map((a, i) => `
    <div class="amenity-card card-reveal" style="--reveal-delay:${(i % 5) * 70}ms">
      <span class="amenity-icon" aria-hidden="true">${a.icon}</span>
      <h3>${a.name}</h3>
      <p>${a.desc}</p>
    </div>
  `).join("");
}

let currentGalleryFilter = "all";

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;
  grid.innerHTML = propertyData.gallery.map((item, i) => `
    <figure class="gallery-item card-reveal" data-category="${item.category}" data-index="${i}" style="--reveal-delay:${(i % 4) * 70}ms">
      <img src="${item.img}" alt="${item.caption} — ${propertyData.name}" loading="lazy" width="400" height="400">
      <div class="gallery-item-overlay"><span>${item.caption}</span></div>
      <button type="button" aria-label="View larger image: ${item.caption}" data-lightbox-open="${i}"></button>
    </figure>
  `).join("");
}

function renderTestimonials() {
  const section = document.getElementById("testimonials");
  const grid = document.getElementById("testimonialGrid");
  if (!section || !grid) return;

  // Hidden entirely until the client provides real testimonials — see
  // propertyData.testimonialsEnabled.
  if (!propertyData.testimonialsEnabled) {
    section.hidden = true;
    return;
  }
  section.hidden = false;
  grid.innerHTML = propertyData.testimonials.map((t, i) => `
    <article class="testimonial-card card-reveal" style="--reveal-delay:${i * 100}ms">
      <span class="testimonial-stars" aria-hidden="true">${"⭐".repeat(Math.round(parseFloat(t.rating)))} ${t.rating}</span>
      <p class="testimonial-quote">&ldquo;${t.quote}&rdquo;</p>
      <div class="testimonial-author">
        <span class="author-avatar" aria-hidden="true">${t.name.charAt(0)}</span>
        <div>
          <div class="author-name">${t.name}</div>
          <div class="author-role">${t.role}</div>
        </div>
      </div>
    </article>
  `).join("");
}

function renderFaq() {
  const wrap = document.getElementById("accordion");
  if (!wrap) return;
  wrap.innerHTML = propertyData.faqs.map((item, i) => `
    <div class="accordion-item">
      <h3>
        <button class="accordion-trigger" id="acc-trigger-${i}" aria-expanded="false" aria-controls="acc-panel-${i}">
          <span>${item.q}</span>
          <span class="accordion-icon" aria-hidden="true">+</span>
        </button>
      </h3>
      <div class="accordion-panel" id="acc-panel-${i}" role="region" aria-labelledby="acc-trigger-${i}">
        <div class="accordion-panel-inner"><p>${item.a}</p></div>
      </div>
    </div>
  `).join("");
}

function renderRules() {
  const grid = document.getElementById("rulesGrid");
  if (!grid) return;
  grid.innerHTML = propertyData.rules.map((r, i) => `
    <div class="rule-item card-reveal" style="--reveal-delay:${(i % 4) * 60}ms">
      <span class="rule-label">${r.label}</span>
      <span class="rule-detail">${r.detail}</span>
    </div>
  `).join("");
}

function renderNearby() {
  const list = document.getElementById("nearbyList");
  if (!list) return;
  list.innerHTML = propertyData.nearby.map(n => `
    <li><span>${n.name}</span><em>${n.distance}</em></li>
  `).join("");
}

/* ---------------------------------------------------------
   4. CONTACT DETAILS + STRUCTURED DATA + FOOTER SOCIAL
--------------------------------------------------------- */
function renderContactDetails() {
  document.querySelectorAll("[data-tel-text]").forEach(el => el.textContent = propertyData.phone);
  document.querySelectorAll("[data-tel-link]").forEach(a => a.href = `tel:${propertyData.phoneHref}`);

  document.querySelectorAll("[data-whatsapp-text]").forEach(el => el.textContent = propertyData.whatsapp);
  document.querySelectorAll("[data-whatsapp-link]").forEach(a => {
    const message = a.dataset.whatsappMessage || defaultWhatsAppMessage();
    a.href = buildWhatsAppUrl(message);
  });

  document.querySelectorAll("[data-email-text]").forEach(el => el.textContent = propertyData.email);
  document.querySelectorAll("[data-email-link]").forEach(a => a.href = `mailto:${propertyData.email}`);

  document.querySelectorAll("[data-address-text]").forEach(el => el.textContent = propertyData.address);

  const directionsBtn = document.getElementById("directionsBtn");
  if (directionsBtn) {
    directionsBtn.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(propertyData.address)}`;
    directionsBtn.target = "_blank";
    directionsBtn.rel = "noopener";
  }

  // Real Google Maps embed, only if the client has provided one.
  const mapFrameWrap = document.getElementById("mapEmbedWrap");
  const mapPlaceholder = document.getElementById("mapPlaceholder");
  if (propertyData.mapEmbedUrl && mapFrameWrap) {
    mapFrameWrap.innerHTML = `<iframe src="${propertyData.mapEmbedUrl}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="${propertyData.name} location map"></iframe>`;
    mapFrameWrap.hidden = false;
    if (mapPlaceholder) mapPlaceholder.hidden = true;
  }
}

function renderFooterSocial() {
  const wrap = document.getElementById("footerSocial");
  if (!wrap) return;
  const entries = Object.entries(propertyData.social).filter(([, url]) => url && url.trim() !== "");

  // Don't show a "Follow Us" column with dead links if no accounts were provided.
  if (entries.length === 0) {
    const col = wrap.closest(".footer-col");
    col.hidden = true;
    // The grid has an explicit 4-column template, so simply hiding this
    // column would leave a blank gutter where it used to be. Collapse the
    // template to 3 columns instead.
    document.querySelector(".footer-grid")?.classList.add("footer-grid--no-social");
    return;
  }
  wrap.innerHTML = entries.map(([platform, url]) => {
    const label = platform.charAt(0).toUpperCase() + platform.slice(1);
    return `<li><a href="${url}" target="_blank" rel="noopener">${label}</a></li>`;
  }).join("");
}

function injectStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": propertyData.name,
    "description": propertyData.tagline,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": propertyData.address,
      "addressLocality": propertyData.city,
      "addressRegion": propertyData.state,
      "addressCountry": "IN"
    },
    "telephone": propertyData.phone,
    "email": propertyData.email
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = "structured-data";
  script.textContent = JSON.stringify(data, null, 2);
  document.head.appendChild(script);
}

/* ---------------------------------------------------------
   5. NAVIGATION
--------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const onScroll = () => navbar.classList.toggle("is-scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const scrim = document.getElementById("navScrim");

  function openMenu() {
    navLinks.classList.add("is-open");
    scrim.classList.add("is-active");
    hamburger.setAttribute("aria-expanded", "true");
    hamburger.setAttribute("aria-label", "Close menu");
    document.body.style.overflow = "hidden";
  }
  function closeMenu() {
    navLinks.classList.remove("is-open");
    scrim.classList.remove("is-active");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Open menu");
    document.body.style.overflow = "";
  }
  hamburger.addEventListener("click", () => {
    hamburger.getAttribute("aria-expanded") === "true" ? closeMenu() : openMenu();
  });
  scrim.addEventListener("click", closeMenu);
  navLinks.querySelectorAll(".nav-link, .nav-cta").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeMenu();
  });

  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const navAnchors = Array.from(navLinks.querySelectorAll(".nav-link"));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
  sections.forEach(s => observer.observe(s));
}

/* ---------------------------------------------------------
   6. SCROLL REVEAL
--------------------------------------------------------- */
function initScrollReveal() {
  const items = document.querySelectorAll(".reveal, .card-reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el => observer.observe(el));
}

/* ---------------------------------------------------------
   7. STATS COUNT-UP
--------------------------------------------------------- */
function initStatsCounter() {
  const numbers = document.querySelectorAll(".stat-number");
  if (!numbers.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function animateCount(el) {
    const raw = el.textContent.trim();
    const match = raw.match(/^(\d+(\.\d+)?)/);
    if (!match || reduceMotion) return;

    const target = parseFloat(match[1]);
    const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
    const suffix = raw.slice(match[1].length);
    const duration = 1100;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = (target * eased).toFixed(decimals);
      el.textContent = `${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = raw;
    }
    requestAnimationFrame(tick);
  }

  if (!("IntersectionObserver" in window)) {
    numbers.forEach(animateCount);
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  numbers.forEach(el => observer.observe(el));
}

/* ---------------------------------------------------------
   8. GALLERY FILTERING + LIGHTBOX
--------------------------------------------------------- */
function initGallery() {
  const filterBar = document.getElementById("galleryFilters");
  const grid = document.getElementById("galleryGrid");
  if (!filterBar || !grid) return;

  filterBar.addEventListener("click", e => {
    const chip = e.target.closest(".filter-chip");
    if (!chip) return;
    filterBar.querySelectorAll(".filter-chip").forEach(c => {
      c.classList.remove("is-active");
      c.setAttribute("aria-selected", "false");
    });
    chip.classList.add("is-active");
    chip.setAttribute("aria-selected", "true");
    currentGalleryFilter = chip.dataset.filter;
    applyGalleryFilter();
  });

  function applyGalleryFilter() {
    grid.querySelectorAll(".gallery-item").forEach(item => {
      const match = currentGalleryFilter === "all" || item.dataset.category === currentGalleryFilter;
      item.classList.toggle("is-hidden", !match);
    });
  }

  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");
  let activeIndex = 0;
  let lastFocused = null;

  function visibleIndices() {
    return propertyData.gallery
      .map((item, i) => ({ item, i }))
      .filter(({ item }) => currentGalleryFilter === "all" || item.category === currentGalleryFilter)
      .map(({ i }) => i);
  }

  function openLightbox(index) {
    activeIndex = index;
    const data = propertyData.gallery[index];
    lastFocused = document.activeElement;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";

    lightboxImage.classList.add("is-fading");
    setTimeout(() => {
      lightboxImage.src = data.img;
      lightboxImage.alt = data.caption;
      lightboxCaption.textContent = data.caption;
      lightboxImage.classList.remove("is-fading");
    }, 160);

    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  function step(delta) {
    const indices = visibleIndices();
    const pos = indices.indexOf(activeIndex);
    const nextPos = (pos + delta + indices.length) % indices.length;
    openLightbox(indices[nextPos]);
  }

  grid.addEventListener("click", e => {
    const trigger = e.target.closest("[data-lightbox-open]");
    if (!trigger) return;
    openLightbox(parseInt(trigger.dataset.lightboxOpen, 10));
  });

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", () => step(-1));
  nextBtn.addEventListener("click", () => step(1));
  lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener("keydown", e => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });
}

/* ---------------------------------------------------------
   9. FAQ ACCORDION
--------------------------------------------------------- */
function initAccordion() {
  const wrap = document.getElementById("accordion");
  if (!wrap) return;
  wrap.addEventListener("click", e => {
    const trigger = e.target.closest(".accordion-trigger");
    if (!trigger) return;
    const panel = document.getElementById(trigger.getAttribute("aria-controls"));
    const isOpen = trigger.getAttribute("aria-expanded") === "true";

    wrap.querySelectorAll(".accordion-trigger").forEach(t => {
      t.setAttribute("aria-expanded", "false");
      document.getElementById(t.getAttribute("aria-controls")).style.maxHeight = null;
    });

    if (!isOpen) {
      trigger.setAttribute("aria-expanded", "true");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/* ---------------------------------------------------------
   10. ENQUIRY FORM (validation + submission)
   ---------------------------------------------------------
   Submission behaviour:
   - If propertyData.formAccessKey is still a "[bracketed]" placeholder,
     the form is NOT wired to a backend yet. Rather than faking a success
     message, it opens a pre-filled WhatsApp message with the visitor's
     details so no enquiry is ever lost.
   - Once a real Web3Forms access key is set, submissions POST there
     directly (a free service suited to static sites — see
     https://web3forms.com). No server or private key exposure required;
     Web3Forms access keys are meant to be used client-side.
   - A hidden honeypot field provides basic spam protection: bots that
     fill in every field will trip it, and the submission is silently
     dropped without bothering a real visitor.
--------------------------------------------------------- */
function initForm() {
  const form = document.getElementById("enquiryForm");
  if (!form) return;
  const successMsg = document.getElementById("formSuccess");
  const fallbackMsg = document.getElementById("formFallbackNotice");

  const validators = {
    fullName: value => value.trim().length >= 2 ? "" : "Please enter your name.",
    phone: value => /^[6-9]\d{9}$/.test(value.trim().replace(/\s+/g, "")) ? "" : "Please enter a valid 10-digit Indian phone number.",
    email: value => value.trim() === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? "" : "Please enter a valid email address.",
  };

  function showError(fieldName, message) {
    const input = form.elements[fieldName];
    const errorEl = document.getElementById(`err-${fieldName}`);
    const row = input.closest(".form-row");
    if (errorEl) errorEl.textContent = message;
    if (row) row.classList.toggle("has-error", Boolean(message));

    if (message) {
      row.classList.remove("shake");
      row.offsetWidth; // force reflow so the animation can retrigger
      row.classList.add("shake");
      row.addEventListener("animationend", () => row.classList.remove("shake"), { once: true });
    }
  }

  function validateField(fieldName) {
    const input = form.elements[fieldName];
    const validator = validators[fieldName];
    if (!validator) return true;
    const message = validator(input.value);
    showError(fieldName, message);
    return !message;
  }

  ["fullName", "phone", "email"].forEach(name => {
    form.elements[name].addEventListener("blur", () => validateField(name));
  });

  // "Or fill the enquiry form instead" on room cards
  document.addEventListener("click", e => {
    const roomBtn = e.target.closest(".room-enquire");
    if (!roomBtn) return;
    const select = document.getElementById("roomType");
    if (select) select.value = roomBtn.dataset.room;
    form.scrollIntoView({ behavior: "smooth", block: "start" });
    form.elements.fullName.focus();
  });

  function isFormConfigured() {
    return Boolean(propertyData.formAccessKey) && !propertyData.formAccessKey.startsWith("[");
  }

  function buildEnquirySummary() {
    const values = {
      fullName: form.elements.fullName.value.trim(),
      phone: form.elements.phone.value.trim(),
      email: form.elements.email.value.trim(),
      roomType: form.elements.roomType.value,
      message: form.elements.message.value.trim()
    };
    let msg = `Hello, I would like to enquire about ${propertyData.name}.\n\n`;
    msg += `Name: ${values.fullName}\nPhone: ${values.phone}\n`;
    if (values.email) msg += `Email: ${values.email}\n`;
    if (values.roomType) msg += `Room Type: ${values.roomType}\n`;
    if (values.message) msg += `Message: ${values.message}\n`;
    return { values, message: msg };
  }

  form.addEventListener("submit", async e => {
    e.preventDefault();
    successMsg.hidden = true;
    if (fallbackMsg) fallbackMsg.hidden = true;

    // Honeypot: if this hidden field has been filled in, it's a bot —
    // silently drop the submission without alerting the visitor.
    const honeypot = form.elements.company;
    if (honeypot && honeypot.value.trim() !== "") return;

    const fields = ["fullName", "phone", "email"];
    const results = fields.map(validateField);
    const isValid = results.every(Boolean);

    if (!isValid) {
      const firstInvalid = fields.find((name, i) => !results[i]);
      form.elements[firstInvalid].focus();
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    const { values, message } = buildEnquirySummary();

    if (!isFormConfigured()) {
      // No form backend configured yet — open WhatsApp with the enquiry
      // pre-filled instead of pretending the form was submitted.
      window.open(buildWhatsAppUrl(message), "_blank", "noopener");
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Enquiry";
      if (fallbackMsg) fallbackMsg.hidden = false;
      form.reset();
      fields.forEach(name => showError(name, ""));
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: propertyData.formAccessKey,
          subject: `New enquiry — ${propertyData.name}`,
          from_name: values.fullName,
          name: values.fullName,
          phone: values.phone,
          email: values.email || "Not provided",
          room_type: values.roomType || "Not specified",
          message: values.message || "No additional message"
        })
      });
      const result = await response.json();

      if (result.success) {
        successMsg.hidden = false;
        form.reset();
        fields.forEach(name => showError(name, ""));
        successMsg.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (err) {
      // Network/service failure — fall back to WhatsApp so the enquiry
      // still reaches the property instead of silently disappearing.
      window.open(buildWhatsAppUrl(message), "_blank", "noopener");
      if (fallbackMsg) fallbackMsg.hidden = false;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Enquiry";
    }
  });
}

/* ---------------------------------------------------------
   11. BACK TO TOP / FLOATING WHATSAPP BUTTON
--------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.hidden = window.scrollY < 480;
  }, { passive: true });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initFloatingWhatsApp() {
  const btn = document.getElementById("floatingWhatsapp");
  if (!btn) return;
  const heroHeight = document.getElementById("home")?.offsetHeight || 500;
  function toggle() {
    btn.classList.toggle("is-visible", window.scrollY > heroHeight * 0.6);
  }
  toggle();
  window.addEventListener("scroll", toggle, { passive: true });
}

/* ---------------------------------------------------------
   INIT
--------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderRooms();
  renderAmenities();
  renderGallery();
  renderTestimonials();
  renderFaq();
  renderRules();
  renderNearby();
  renderContactDetails();
  renderFooterSocial();
  injectStructuredData();

  initNavbar();
  initScrollReveal();
  initStatsCounter();
  initGallery();
  initAccordion();
  initForm();
  initBackToTop();
  initFloatingWhatsApp();
});
