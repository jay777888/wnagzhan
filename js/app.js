/* ============================================================
   HUBTEK — rendering and interactions
   Depends only on data/products.js. No libraries, no build step.
   ============================================================ */

(function () {
  "use strict";

  // Top-level `const` lives in the global lexical scope, not on `window`.
  if (typeof SITE_DATA === "undefined") return;
  const D = SITE_DATA;

  const $ = (selector) => document.querySelector(selector);
  let artId = 0;

  /* ---------- inline icon set ---------- */
  const ICONS = {
    shield: '<path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5z"/><path d="m9 12 2 2 4-4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9S14.5 18.3 12 21c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"/>',
    tool: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.8-.6-.6-2.8z"/>',
    car: '<path d="M4 16h16l-1.5-5.3A2 2 0 0 0 16.6 9H7.4a2 2 0 0 0-1.9 1.7L4 16z"/><path d="M5 16v3h2v-3m10 0v3h2v-3M7 12.5h10"/>',
    suv: '<path d="M4 16h16l-1-5H5zM6.5 11 8.5 6h7l2 5M5 16v3h2v-3m10 0v3h2v-3"/>',
    truck: '<path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
    van: '<path d="M3 6h14v11H3zM17 9h3l1 3v5h-4z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
    bolt: '<path d="M13 2 5 13h6l-1 9 9-12h-6z"/>',
    axle: '<circle cx="4" cy="12" r="3"/><circle cx="20" cy="12" r="3"/><path d="M7 12h10M10 9.5h4v5h-4z"/>'
  };

  function icon(name) {
    return '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || ICONS.axle) + "</svg>";
  }

  /* ---------- technical wheel-hub illustration (pure SVG) ---------- */
  function hubSvg(accent, boltCount) {
    const id = "hub" + ++artId;
    const bolts = Array.from({ length: boltCount || 5 }, function (_, i) {
      const angle = (i / (boltCount || 5)) * Math.PI * 2 - Math.PI / 2;
      const x = (200 + Math.cos(angle) * 112).toFixed(1);
      const y = (200 + Math.sin(angle) * 112).toFixed(1);
      return '<circle cx="' + x + '" cy="' + y + '" r="10" fill="#0a0e13" stroke="' + accent + '" stroke-opacity=".45" stroke-width="2"/>' +
             '<circle cx="' + x + '" cy="' + y + '" r="4" fill="#687687"/>';
    }).join("");

    const teeth = Array.from({ length: 32 }, function (_, i) {
      return '<rect x="197.5" y="117" width="5" height="11" rx="1.5" fill="' + accent + '" opacity=".6" transform="rotate(' + (i * 11.25) + ' 200 200)"/>';
    }).join("");

    return '' +
      '<svg class="hub-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
        '<defs>' +
          '<linearGradient id="metal-' + id + '" x1="0" y1="0" x2="1" y2="1">' +
            '<stop offset="0%" stop-color="#7b8897"/><stop offset="28%" stop-color="#3a4654"/>' +
            '<stop offset="62%" stop-color="#161d26"/><stop offset="100%" stop-color="#596675"/>' +
          '</linearGradient>' +
          '<linearGradient id="inner-' + id + '" x1="0" y1="1" x2="1" y2="0">' +
            '<stop offset="0%" stop-color="#2a333f"/><stop offset="55%" stop-color="#0d131a"/>' +
            '<stop offset="100%" stop-color="#465361"/>' +
          '</linearGradient>' +
          '<radialGradient id="glow-' + id + '">' +
            '<stop offset="0%" stop-color="' + accent + '" stop-opacity=".26"/>' +
            '<stop offset="100%" stop-color="' + accent + '" stop-opacity="0"/>' +
          '</radialGradient>' +
        '</defs>' +
        '<circle cx="200" cy="195" r="188" fill="url(#glow-' + id + ')"/>' +
        '<ellipse cx="200" cy="362" rx="118" ry="11" fill="#000" opacity=".38"/>' +
        '<circle cx="200" cy="195" r="156" fill="url(#metal-' + id + ')" stroke="#5c6a7b" stroke-width="2"/>' +
        '<circle cx="200" cy="195" r="145" fill="none" stroke="#0b1016" stroke-width="7" opacity=".85"/>' +
        '<circle cx="200" cy="195" r="133" fill="none" stroke="#7d8a99" stroke-width="1" opacity=".35"/>' +
        bolts +
        '<circle cx="200" cy="195" r="93" fill="url(#inner-' + id + ')" stroke="#596675" stroke-width="3"/>' +
        teeth +
        '<circle cx="200" cy="195" r="66" fill="url(#metal-' + id + ')" stroke="#0b1016" stroke-width="4"/>' +
        '<circle cx="200" cy="195" r="52" fill="#0d131a" stroke="' + accent + '" stroke-opacity=".7" stroke-width="2"/>' +
        '<circle cx="200" cy="195" r="37" fill="url(#inner-' + id + ')" stroke="#4d5a69" stroke-width="2"/>' +
        '<circle cx="200" cy="195" r="20" fill="' + accent + '" fill-opacity=".9"/>' +
        '<circle cx="200" cy="195" r="9" fill="#0b1016"/>' +
        '<path d="M64 148a142 142 0 0 1 84-84" fill="none" stroke="#fff" stroke-opacity=".17" stroke-width="7" stroke-linecap="round"/>' +
        '<path d="M262 311a142 142 0 0 0 75-75" fill="none" stroke="#fff" stroke-opacity=".08" stroke-width="5" stroke-linecap="round"/>' +
      '</svg>';
  }

  function categoryName(id) {
    const found = D.categories.find(function (c) { return c.id === id; });
    return found ? found.name : id;
  }

  function money(value) {
    return "$" + Number(value).toFixed(2);
  }

  /* ---------- hero carousel ---------- */
  function renderHero() {
    const slides = D.slides.map(function (s, i) {
      return '<article class="hero-slide' + (i === 0 ? " is-active" : "") + '" style="--slide-accent:' + s.accent + '">' +
        '<div class="hero-inner">' +
          '<div class="hero-copy">' +
            '<span class="eyebrow">' + s.eyebrow + "</span>" +
            "<h1>" + s.title + "</h1>" +
            "<p>" + s.text + "</p>" +
            '<div class="hero-actions">' +
              '<a class="button" href="' + s.href + '">' + s.cta + ' <span aria-hidden="true">→</span></a>' +
              '<a class="button button-ghost" href="#products">View Catalogue</a>' +
            "</div>" +
            '<div class="hero-specs">' +
              "<div><strong>OEM Fitment</strong><span>Exact match</span></div>" +
              "<div><strong>48h</strong><span>Fast dispatch</span></div>" +
              "<div><strong>12 Months</strong><span>Warranty</span></div>" +
            "</div>" +
          "</div>" +
          '<div class="hero-art"><div class="hero-art-ring"></div><div class="hero-photo-frame"><img class="hero-photo" src="' + s.image + '" alt="' + s.title + '" loading="eager"></div></div>' +
        "</div>" +
      "</article>";
    }).join("");
    $("#heroSlides").innerHTML = slides;

    $("#heroDots").innerHTML = D.slides.map(function (_, i) {
      return '<button class="hero-dot' + (i === 0 ? " is-active" : "") + '" type="button" role="tab" aria-label="Go to slide ' + (i + 1) + '" aria-selected="' + (i === 0) + '"></button>';
    }).join("");
  }

  function initCarousel() {
    const slides = Array.from(document.querySelectorAll(".hero-slide"));
    const dots = Array.from(document.querySelectorAll(".hero-dot"));
    const hero = $("#home");
    let index = 0;
    let timer;

    function show(next) {
      index = (next + slides.length) % slides.length;
      slides.forEach(function (slide, i) { slide.classList.toggle("is-active", i === index); });
      dots.forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === index);
        dot.setAttribute("aria-selected", String(i === index));
      });
    }
    function start() {
      stop();
      timer = window.setInterval(function () { show(index + 1); }, 5500);
    }
    function stop() { if (timer) { window.clearInterval(timer); timer = null; } }

    $("#heroPrev").addEventListener("click", function () { show(index - 1); start(); });
    $("#heroNext").addEventListener("click", function () { show(index + 1); start(); });
    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () { show(i); start(); });
    });
    hero.addEventListener("mouseenter", stop);
    hero.addEventListener("mouseleave", start);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { stop(); } else { start(); }
    });
    start();
  }

  /* ---------- benefits ---------- */
  function renderBenefits() {
    $("#benefitsGrid").innerHTML = D.benefits.map(function (b) {
      return '<div class="benefit"><div class="benefit-icon">' + icon(b.icon) + "</div>" +
        "<div><strong>" + b.title + "</strong><span>" + b.text + "</span></div></div>";
    }).join("");
  }

  /* ---------- categories + filters + products ---------- */
  function renderCategories() {
    $("#categoryGrid").innerHTML = D.categories.map(function (c) {
      const count = D.products.filter(function (p) { return p.category === c.id; }).length;
      return '<button class="category-card" type="button" data-category="' + c.id + '">' +
        '<span class="category-count">' + count + " ITEMS</span>" +
        '<div class="category-icon">' + icon(c.icon) + "</div>" +
        "<h3>" + c.name + "</h3><p>" + c.text + "</p></button>";
    }).join("");

    $("#categoryGrid").addEventListener("click", function (event) {
      const card = event.target.closest("[data-category]");
      if (!card) return;
      setFilter(card.getAttribute("data-category"));
      $("#products").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function renderFilters(active) {
    const options = [{ id: "all", name: "All Products" }].concat(D.categories);
    $("#filterBar").innerHTML = options.map(function (o) {
      return '<button class="filter-chip' + (o.id === active ? " is-active" : "") + '" type="button" data-filter="' + o.id + '">' + o.name + "</button>";
    }).join("");
  }

  function renderProducts(filter) {
    const list = filter === "all" ? D.products : D.products.filter(function (p) { return p.category === filter; });
    $("#productCount").textContent = list.length + (list.length === 1 ? " product" : " products");

    if (!list.length) {
      $("#productGrid").innerHTML = '<div class="empty-state">No products in this category yet. Try another filter.</div>';
      return;
    }

    $("#productGrid").innerHTML = list.map(function (p) {
      return '<article class="product-card" tabindex="0" role="button" data-id="' + p.id + '" aria-label="View details for ' + p.name + '" style="--product-accent:' + p.accent + '">' +
        '<div class="product-media">' +
          (p.badge ? '<span class="product-badge">' + p.badge + "</span>" : "") +
          '<img class="product-photo" src="' + p.image + '" alt="' + p.name + ' for ' + p.fitment + '" loading="lazy">' +
          '<span class="product-oem-tag">OEM ' + p.oem + "</span>" +
        "</div>" +
        '<div class="product-info">' +
          '<span class="product-cat">' + categoryName(p.category) + "</span>" +
          "<h3>" + p.name + "</h3>" +
          '<p class="product-fit">' + p.fitment + "</p>" +
          '<div class="product-bottom"><span class="product-price">' + money(p.price) + " <small>/pc</small></span>" +
          '<button class="product-detail-btn" type="button">Details →</button></div>' +
        "</div>" +
      "</article>";
    }).join("");
  }

  function setFilter(id) {
    renderFilters(id);
    renderProducts(id);
  }

  /* ---------- promotions ---------- */
  function renderPromos() {
    $("#promoGrid").innerHTML = D.promos.map(function (p) {
      return '<article class="promo-card" style="--promo-accent:' + p.accent + '">' +
        '<span class="promo-tag">' + p.tag + "</span>" +
        "<h3>" + p.title + "</h3><p>" + p.text + "</p>" +
        '<div class="promo-foot"><button class="promo-code" type="button" data-copy="' + p.code + '">' + p.code + "</button>" +
        '<span class="promo-note">Click to copy code</span></div></article>';
    }).join("");
  }

  /* ---------- modal ---------- */
  function initModal() {
    const modal = $("#productModal");
    const body = $("#modalBody");
    let lastFocused = null;

    function open(product) {
      lastFocused = document.activeElement;
      const specs = Object.keys(product.specs).map(function (key) {
        return '<div class="spec-cell"><dt>' + key + "</dt><dd>" + product.specs[key] + "</dd></div>";
      }).join("");

      body.innerHTML = '<div class="modal-layout">' +
        '<div class="modal-media"><img class="modal-photo" src="' + product.image + '" alt="' + product.name + '"></div>' +
        '<div class="modal-content">' +
          '<span class="product-cat">' + categoryName(product.category) + "</span>" +
          '<h2 id="modalTitle">' + product.name + "</h2>" +
          '<p class="modal-fit">' + product.fitment + "</p>" +
          '<div class="modal-price-row"><strong>' + money(product.price) + "</strong><span>per unit · MOQ " + product.specs.MOQ + "</span></div>" +
          '<dl class="spec-table">' + specs + "</dl>" +
          '<div class="modal-oem"><div><span>OEM Reference</span><strong>' + product.oem + "</strong></div>" +
          '<button class="copy-btn" type="button" data-copy="' + product.oem + '">Copy</button></div>' +
          '<p class="modal-note">Illustration only. Confirm fitment using the OEM reference before ordering.</p>' +
        "</div></div>";

      modal.hidden = false;
      document.body.style.overflow = "hidden";
      $("#modalClose").focus();
    }

    function close() {
      modal.hidden = true;
      document.body.style.overflow = "";
      if (lastFocused) lastFocused.focus();
    }

    $("#modalClose").addEventListener("click", close);
    modal.querySelector("[data-close-modal]").addEventListener("click", close);
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !modal.hidden) close();
    });

    $("#productGrid").addEventListener("click", function (event) {
      const card = event.target.closest("[data-id]");
      if (!card) return;
      const product = D.products.find(function (p) { return p.id === card.getAttribute("data-id"); });
      if (product) open(product);
    });

    $("#productGrid").addEventListener("keydown", function (event) {
      if (event.key !== "Enter" && event.key !== " ") return;
      const card = event.target.closest("[data-id]");
      if (!card || event.target !== card) return;
      event.preventDefault();
      card.click();
    });
  }

  /* ---------- helpers ---------- */
  let toastTimer;
  function toast(message) {
    const el = $("#toast");
    el.textContent = message;
    el.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () { el.classList.remove("is-visible"); }, 1800);
  }

  function copyText(value, label) {
    function fallback() {
      const field = document.createElement("textarea");
      field.value = value;
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      try { document.execCommand("copy"); toast(label + " copied"); }
      catch (e) { toast("Copy failed: " + value); }
      document.body.removeChild(field);
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(value).then(function () { toast(label + " copied"); }, fallback);
    } else {
      fallback();
    }
  }

  function initMisc() {
    $("#year").textContent = new Date().getFullYear();

    const toggle = $("#navToggle");
    const nav = $("#mainNav");
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("click", function (event) {
      const copyButton = event.target.closest("[data-copy]");
      if (copyButton) copyText(copyButton.getAttribute("data-copy"), "Code");
    });

    $("#filterBar").addEventListener("click", function (event) {
      const chip = event.target.closest("[data-filter]");
      if (chip) setFilter(chip.getAttribute("data-filter"));
    });
  }

  /* ---------- boot ---------- */
  renderHero();
  renderBenefits();
  renderCategories();
  renderFilters("all");
  renderProducts("all");
  renderPromos();
  initCarousel();
  initModal();
  initMisc();
})();
