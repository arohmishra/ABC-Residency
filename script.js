/* =========================================================
   ABC RESIDENCY PG — SCRIPT
   1. Centralized content data (edit this to rebrand the site)
   2. Render functions (rooms, amenities, gallery, testimonials, FAQ)
   3. Navigation (mobile menu, smooth scroll, active link, sticky navbar)
   4. Scroll reveal
   5. Gallery filtering + lightbox
   6. FAQ accordion
   7. Enquiry form validation
   8. Back to top
   ========================================================= */

/* ---------------------------------------------------------
   1. CENTRALIZED CONTENT DATA
   Replace every placeholder value below with the client's
   real information. Nothing elsewhere in the file needs to
   change when this object is updated.
--------------------------------------------------------- */
const pgData = {
  name: "ABC Residency PG",
  tagline: "Your Comfortable Home Away From Home",
  city: "[City Name]",
  state: "[State Name]",
  area: "[Area Name]",
  address: "[Complete Address], [Area Name], [City Name], [State Name]",
  phone: "+91 XXXXX XXXXX",
  phoneHref: "+91XXXXXXXXXX",
  whatsapp: "+91 XXXXX XXXXX",
  whatsappHref: "91XXXXXXXXXX",
  email: "hello@abcregency.example",

  rooms: [
    {
      id: "single",
      name: "Single Sharing",
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=700&q=80",
      price: "₹XX,XXX",
      priceSuffix: "/ month",
      occupancy: "1 Person",
      popular: false,
      features: ["Single Bed", "Wardrobe", "Study Table", "Wi-Fi", "Attached Bathroom"]
    },
    {
      id: "double",
      name: "Double Sharing",
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=700&q=80",
      price: "₹X,XXX",
      priceSuffix: "/ person / month",
      occupancy: "2 People",
      popular: true,
      features: ["Comfortable Bed", "Wardrobe", "Study Table", "Wi-Fi", "Attached Bathroom"]
    },
    {
      id: "triple",
      name: "Triple Sharing",
      image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=700&q=80",
      price: "₹X,XXX",
      priceSuffix: "/ person / month",
      occupancy: "3 People",
      popular: false,
      features: ["Comfortable Bed", "Wardrobe", "Study Table", "Wi-Fi", "Attached Bathroom"]
    }
  ],

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

  gallery: [
    { category: "rooms", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80", caption: "[Property Image] — Furnished bedroom" },
    { category: "rooms", img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80", caption: "[Property Image] — Single sharing room" },
    { category: "exterior", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", caption: "[Property Image] — Building exterior" },
    { category: "exterior", img: "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=800&q=80", caption: "[Property Image] — Entrance view" },
    { category: "common", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80", caption: "[Property Image] — Common lounge" },
    { category: "common", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80", caption: "[Property Image] — Shared living space" },
    { category: "dining", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80", caption: "[Property Image] — Dining area" },
    { category: "dining", img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80", caption: "[Property Image] — Mess / kitchen" },
    { category: "facilities", img: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80", caption: "[Property Image] — Study area" },
    { category: "facilities", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80", caption: "[Property Image] — Laundry facility" },
    { category: "rooms", img: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=800&q=80", caption: "[Property Image] — Triple sharing room" },
    { category: "facilities", img: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80", caption: "[Property Image] — Parking area" }
  ],

  nearby: [
    { name: "[University Name]", distance: "1.2 km" },
    { name: "[Office Area]", distance: "2.0 km" },
    { name: "[Market Name]", distance: "0.8 km" },
    { name: "[Railway Station]", distance: "3.5 km" },
    { name: "[Bus Stand]", distance: "1.5 km" }
  ],

  testimonials: [
    { quote: "The rooms are comfortable, the location is convenient and the overall environment is really good.", name: "Rahul Sharma", role: "Student", rating: "5.0" },
    { quote: "The PG has all the basic facilities I need and the staff is helpful.", name: "Priya Singh", role: "Working Professional", rating: "4.8" },
    { quote: "A convenient accommodation option for students and working professionals.", name: "Aman Kumar", role: "Student", rating: "4.9" }
  ],

  faqs: [
    { q: "What room types are available?", a: "We offer Single Sharing, Double Sharing and Triple Sharing rooms, each fully furnished with a bed, wardrobe, study table, Wi-Fi and an attached bathroom." },
    { q: "What is the monthly rent?", a: "Rent varies by room type, starting from ₹X,XXX per person per month for shared rooms. Contact us for the current rate card." },
    { q: "Is Wi-Fi available?", a: "Yes, high-speed Wi-Fi is available throughout the property, including in every room and common area." },
    { q: "Is food included?", a: "Yes, a food / mess facility is available. Please ask our team about current meal plans and timings." },
    { q: "Can I visit the PG before booking?", a: "Absolutely — we encourage a property visit before you decide. Contact us to schedule a convenient time." },
    { q: "What documents are required?", a: "A valid government ID proof and a recent passport-size photograph are typically required. Our team will confirm the full list at the time of booking." },
    { q: "How can I enquire about a room?", a: "You can call us, message us on WhatsApp, or fill out the enquiry form on this page and our team will get back to you shortly." }
  ]
};

/* ---------------------------------------------------------
   2. RENDER FUNCTIONS
--------------------------------------------------------- */
function renderRooms() {
  const grid = document.getElementById("roomGrid");
  if (!grid) return;
  grid.innerHTML = pgData.rooms.map((room, i) => `
    <article class="room-card card-reveal${room.popular ? " is-popular" : ""}" style="--reveal-delay:${i * 100}ms">
      <div class="room-media">
        <img src="${room.image}" alt="Placeholder image of a ${room.name.toLowerCase()} room at ABC Residency PG" loading="lazy" width="500" height="375">
        ${room.popular ? `<span class="badge badge-accent room-badge">Most Popular</span>` : ""}
      </div>
      <div class="room-body">
        <h3>${room.name}</h3>
        <div class="room-price">${room.price} <small>${room.priceSuffix}</small></div>
        <span class="room-occupancy">${room.occupancy}</span>
        <ul class="room-features">
          ${room.features.map(f => `<li>${f}</li>`).join("")}
        </ul>
        <a href="#contact" class="btn btn-primary btn-full room-enquire" data-room="${room.name}">Enquire Now</a>
      </div>
    </article>
  `).join("");
}

function renderAmenities() {
  const grid = document.getElementById("amenitiesGrid");
  if (!grid) return;
  grid.innerHTML = pgData.amenities.map((a, i) => `
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
  grid.innerHTML = pgData.gallery.map((item, i) => `
    <figure class="gallery-item card-reveal" data-category="${item.category}" data-index="${i}" style="--reveal-delay:${(i % 4) * 70}ms">
      <img src="${item.img}" alt="${item.caption}" loading="lazy" width="400" height="400">
      <div class="gallery-item-overlay"><span>${item.caption}</span></div>
      <button type="button" aria-label="View larger image: ${item.caption}" data-lightbox-open="${i}"></button>
    </figure>
  `).join("");
}

function renderTestimonials() {
  const grid = document.getElementById("testimonialGrid");
  if (!grid) return;
  grid.innerHTML = pgData.testimonials.map((t, i) => `
    <article class="testimonial-card card-reveal" style="--reveal-delay:${i * 100}ms">
      <span class="testimonial-note">Placeholder testimonial</span>
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
  wrap.innerHTML = pgData.faqs.map((item, i) => `
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

function renderContactDetails() {
  const phoneLink = document.getElementById("phoneLink");
  const whatsappLink = document.getElementById("whatsappLink");
  const emailLink = document.getElementById("emailLink");
  const addressText = document.getElementById("addressText");
  const directionsBtn = document.getElementById("directionsBtn");

  if (phoneLink) { phoneLink.textContent = pgData.phone; phoneLink.href = `tel:${pgData.phoneHref}`; }
  if (whatsappLink) { whatsappLink.textContent = pgData.whatsapp; whatsappLink.href = `https://wa.me/${pgData.whatsappHref}`; }
  if (emailLink) { emailLink.textContent = pgData.email; emailLink.href = `mailto:${pgData.email}`; }
  if (addressText) { addressText.textContent = `${pgData.address}`; }
  if (directionsBtn) {
    directionsBtn.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pgData.address)}`;
    directionsBtn.target = "_blank";
    directionsBtn.rel = "noopener";
  }

  document.querySelectorAll('a[href^="tel:+91XXXXXXXXXX"]').forEach(a => a.href = `tel:${pgData.phoneHref}`);
  document.querySelectorAll('a[href^="https://wa.me/91XXXXXXXXXX"]').forEach(a => a.href = `https://wa.me/${pgData.whatsappHref}`);
  document.querySelectorAll('a[href^="mailto:hello@abcregency.example"]').forEach(a => a.href = `mailto:${pgData.email}`);
}

/* ---------------------------------------------------------
   3. NAVIGATION
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

  // Active link on scroll
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
   4. SCROLL REVEAL
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
   5. GALLERY FILTERING + LIGHTBOX
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

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");
  let activeIndex = 0;
  let lastFocused = null;

  function visibleIndices() {
    return pgData.gallery
      .map((item, i) => ({ item, i }))
      .filter(({ item }) => currentGalleryFilter === "all" || item.category === currentGalleryFilter)
      .map(({ i }) => i);
  }

  function openLightbox(index) {
    activeIndex = index;
    const data = pgData.gallery[index];
    lightboxImage.src = data.img;
    lightboxImage.alt = data.caption;
    lightboxCaption.textContent = data.caption;
    lastFocused = document.activeElement;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
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
   6. FAQ ACCORDION
--------------------------------------------------------- */
function initAccordion() {
  const wrap = document.getElementById("accordion");
  if (!wrap) return;
  wrap.addEventListener("click", e => {
    const trigger = e.target.closest(".accordion-trigger");
    if (!trigger) return;
    const panel = document.getElementById(trigger.getAttribute("aria-controls"));
    const isOpen = trigger.getAttribute("aria-expanded") === "true";

    // Close all
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
   7. ENQUIRY FORM VALIDATION
--------------------------------------------------------- */
function initForm() {
  const form = document.getElementById("enquiryForm");
  if (!form) return;
  const successMsg = document.getElementById("formSuccess");

  const validators = {
    fullName: value => value.trim().length >= 2 ? "" : "Please enter your name.",
    phone: value => /^[6-9]\d{9}$/.test(value.trim().replace(/\s+/g, "")) ? "" : "Please enter a valid phone number.",
    email: value => value.trim() === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? "" : "Please enter a valid email address.",
    roomType: value => value ? "" : "Please select a room type.",
    moveInDate: () => ""
  };

  function showError(fieldName, message) {
    const input = form.elements[fieldName];
    const errorEl = document.getElementById(`err-${fieldName}`);
    const row = input.closest(".form-row");
    if (errorEl) errorEl.textContent = message;
    if (row) row.classList.toggle("has-error", Boolean(message));
  }

  function validateField(fieldName) {
    const input = form.elements[fieldName];
    const validator = validators[fieldName];
    if (!validator) return true;
    const message = validator(input.value);
    showError(fieldName, message);
    return !message;
  }

  ["fullName", "phone", "email", "roomType"].forEach(name => {
    form.elements[name].addEventListener("blur", () => validateField(name));
  });

  // Pre-fill room type when "Enquire Now" is clicked on a room card
  document.addEventListener("click", e => {
    const roomBtn = e.target.closest(".room-enquire");
    if (!roomBtn) return;
    const select = document.getElementById("roomType");
    if (select) select.value = roomBtn.dataset.room;
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    successMsg.hidden = true;

    const fields = ["fullName", "phone", "email", "roomType"];
    const results = fields.map(validateField);
    const isValid = results.every(Boolean);

    if (!isValid) {
      const firstInvalid = fields.find((name, i) => !results[i]);
      form.elements[firstInvalid].focus();
      return;
    }

    // Simulated submission (frontend-only demo, no backend)
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    setTimeout(() => {
      successMsg.hidden = false;
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Enquiry";
      form.reset();
      fields.forEach(name => showError(name, ""));
      successMsg.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 700);
  });
}

/* ---------------------------------------------------------
   8. BACK TO TOP
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

/* ---------------------------------------------------------
   INIT
--------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderRooms();
  renderAmenities();
  renderGallery();
  renderTestimonials();
  renderFaq();
  renderContactDetails();

  initNavbar();
  initScrollReveal();
  initGallery();
  initAccordion();
  initForm();
  initBackToTop();
});
