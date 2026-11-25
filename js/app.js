(function () {
  const REVIEW = new URLSearchParams(location.search).has("review");
  const catName = id => (CATEGORIES.find(c => c.id === id) || {}).name || id;
  const hasSpecs = p => Array.isArray(p.specs) ? p.specs.length > 0 : !!(p.specs && p.specs.rows && p.specs.rows.length);
  const imgSrc = f => !f ? "images/logo.png" : (f.includes("/") ? f : "images/" + f);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  let activeCat = "all";
  let query = "";

  // ── Hero Carousel ──
  (function initHeroCarousel() {
    if (typeof HERO_PRODUCT_IDS === "undefined" || !HERO_PRODUCT_IDS.length) return;
    const heroProducts = HERO_PRODUCT_IDS.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
    if (!heroProducts.length) return;

    const slidesEl = document.getElementById("hero-slides");
    const dotsEl = document.getElementById("hero-dots");
    if (!slidesEl || !dotsEl) return;

    let current = 0;
    let autoTimer = null;

    heroProducts.forEach((p, i) => {
      const slide = document.createElement("div");
      slide.className = "hero-slide" + (i === 0 ? " active" : "");
      slide.innerHTML = `
        <div class="hero-slide-card" data-product-id="${esc(p.id)}">
          <div class="hero-slide-img"><img src="${esc(imgSrc(p.images && p.images[0]))}" alt="${esc(p.name)}" loading="${i === 0 ? 'eager' : 'lazy'}" onerror="this.onerror=null;this.src='images/logo.png';"></div>
          <div class="hero-slide-body">
            ${p.model ? `<span class="hero-slide-model">${esc(p.model)}</span>` : ""}
            <span class="hero-slide-name">${esc(p.name)}</span>
            ${p.summary ? `<p class="hero-slide-summary">${esc(p.summary)}</p>` : ""}
            <span class="hero-slide-link">View details &rarr;</span>
          </div>
        </div>`;
      slide.querySelector(".hero-slide-card").addEventListener("click", () => openProduct(p));
      slidesEl.appendChild(slide);

      const dot = document.createElement("button");
      dot.className = "hero-dot" + (i === 0 ? " active" : "");
      dot.setAttribute("aria-label", `Show ${p.name}`);
      dot.addEventListener("click", () => goTo(i));
      dotsEl.appendChild(dot);
    });

    function goTo(idx) {
      const slides = slidesEl.querySelectorAll(".hero-slide");
      const dots = dotsEl.querySelectorAll(".hero-dot");
      slides[current].classList.remove("active");
      dots[current].classList.remove("active");
      current = idx;
      slides[current].classList.add("active");
      dots[current].classList.add("active");
      resetAuto();
    }

    function next() { goTo((current + 1) % heroProducts.length); }

    function resetAuto() {
      clearInterval(autoTimer);
      autoTimer = setInterval(next, 4000);
    }

    resetAuto();

    // Pause on hover
    const carousel = document.getElementById("hero-carousel");
    carousel.addEventListener("mouseenter", () => clearInterval(autoTimer));
    carousel.addEventListener("mouseleave", resetAuto);
  })();

  // Category tiles
  const tiles = document.getElementById("category-tiles");
  CATEGORIES.forEach(c => {
    const n = PRODUCTS.filter(p => p.category === c.id).length;
    if (!n) return;
    const a = document.createElement("a");
    a.className = "cat-tile";
    a.href = "#products";
    a.innerHTML = `<strong>${esc(c.name)}</strong><span>${n}</span>`;
    a.addEventListener("click", () => setCat(c.id));
    tiles.appendChild(a);
  });

  // Filter chips
  const filters = document.getElementById("filters");
  [{ id: "all", name: "All" }, ...CATEGORIES].forEach(c => {
    if (c.id !== "all" && !PRODUCTS.some(p => p.category === c.id)) return;
    const b = document.createElement("button");
    b.className = "chip";
    b.dataset.cat = c.id;
    b.textContent = c.name;
    b.addEventListener("click", () => setCat(c.id));
    filters.appendChild(b);
  });

  function setCat(id) {
    activeCat = id;
    filters.querySelectorAll(".chip").forEach(b => b.classList.toggle("active", b.dataset.cat === id));
    render();
  }

  document.getElementById("search").addEventListener("input", e => {
    query = e.target.value.trim().toLowerCase();
    render();
  });

  // Render product groups
  const groupsEl = document.getElementById("product-groups");
  function render() {
    groupsEl.innerHTML = "";
    let total = 0;
    CATEGORIES.forEach(c => {
      if (activeCat !== "all" && activeCat !== c.id) return;
      const items = PRODUCTS.filter(p => p.category === c.id && matches(p));
      if (!items.length) return;
      total += items.length;
      const g = document.createElement("div");
      g.className = "group";
      g.innerHTML = `<h3>${esc(c.name)} <span class="count">${items.length}</span></h3><div class="grid"></div>`;
      const grid = g.querySelector(".grid");
      items.forEach(p => grid.appendChild(card(p)));
      groupsEl.appendChild(g);
    });
    document.getElementById("no-results").hidden = total > 0;
  }

  function matches(p) {
    if (!query) return true;
    return [p.name, p.model, p.summary, p.make, catName(p.category)].join(" ").toLowerCase().includes(query);
  }

  function card(p) {
    const el = document.createElement("button");
    el.className = "card";
    el.type = "button";
    el.dataset.pid = p.id;
    el.innerHTML = `
      <div class="card-img"><img src="${esc(imgSrc(p.images && p.images[0]))}" alt="${esc(p.name)}" loading="lazy"></div>
      <div class="card-body">
        ${p.model ? `<span class="card-model">${esc(p.model)}</span>` : ""}
        <span class="card-title">${esc(p.name)}</span>
        ${p.summary ? `<p class="card-summary">${esc(p.summary)}</p>` : ""}
        <div class="card-foot">
          <span class="card-make">${p.make ? esc(p.make) : ""}${REVIEW && p.verify ? ' <span class="verify-flag">&#9888; check</span>' : ""}</span>
          <span class="card-link">Details &rarr;</span>
        </div>
      </div>`;
    el.addEventListener("click", () => openProduct(p));
    return el;
  }

  // Dialog
  const dlg = document.getElementById("product-dialog");
  const $ = id => document.getElementById(id);
  dlg.querySelector(".dlg-close").addEventListener("click", () => dlg.close());
  dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
  let currentProduct = null;
  $("dlg-enquire").href = "#contact";
  $("dlg-enquire").addEventListener("click", e => {
    e.preventDefault();
    dlg.close();
    history.replaceState(null, "", location.pathname + location.search + "#contact");
    if (currentProduct) $("enq-product").value = currentProduct.id;
    const form = $("enquiry-form");
    form.scrollIntoView({ behavior: "smooth", block: "center" });
    form.classList.remove("form-flash"); void form.offsetWidth; form.classList.add("form-flash");
    setTimeout(() => form.querySelector('[name="name"]').focus({ preventScroll: true }), 600);
  });
  dlg.addEventListener("close", () => { if (location.hash.startsWith("#p-")) history.replaceState(null, "", location.pathname + location.search); });

  function openProduct(p) {
    currentProduct = p;
    $("dlg-cat").textContent = catName(p.category) + (p.make ? "  |  " + p.make : "");
    $("dlg-title").textContent = p.name;
    $("dlg-model").textContent = p.model || "";
    $("dlg-model").hidden = !p.model;
    $("dlg-summary").textContent = p.summary || "";
    $("dlg-summary").hidden = !p.summary;

    const v = $("dlg-verify");
    v.hidden = !(REVIEW && p.verify);
    v.textContent = p.verify ? "To verify: " + p.verify : "";

    $("dlg-features").innerHTML = (p.features || []).map(f => `<li>${esc(f)}</li>`).join("");
    $("dlg-features").hidden = !(p.features && p.features.length);
    $("dlg-specs").innerHTML = specsHtml(p);

    const img = $("dlg-img");
    const setImg = i => {
      img.src = imgSrc(p.images[i]);
      img.alt = p.name;
      $("dlg-thumbs").querySelectorAll("button").forEach((b, k) => b.classList.toggle("active", k === i));
    };
    if (!p.images || !p.images.length) p.images = [""];
    $("dlg-thumbs").innerHTML = p.images.length > 1
      ? p.images.map((src, i) => `<button type="button" aria-label="Image ${i + 1}"><img src="${esc(imgSrc(src))}" alt=""></button>`).join("")
      : "";
    $("dlg-thumbs").querySelectorAll("button").forEach((b, i) => b.addEventListener("click", () => setImg(i)));
    setImg(0);


    history.replaceState(null, "", "#p-" + p.id);
    if (!dlg.open) dlg.showModal();
    dlg.querySelector(".dlg-info").scrollTop = 0;
  }

  function specsHtml(p) {
    if (!hasSpecs(p)) return "";
    if (Array.isArray(p.specs)) {
      return `<table class="spec-table"><caption>Technical Specifications</caption><tbody>${
        p.specs.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join("")
      }</tbody></table>`;
    }
    const { cols, rows } = p.specs;
    return `<table class="spec-table"><caption>Technical Specifications</caption>
      <thead><tr><th></th>${cols.map(c => `<th scope="col">${esc(c)}</th>`).join("")}</tr></thead>
      <tbody>${rows.map(([k, ...vals]) => `<tr><th scope="row">${esc(k)}</th>${vals.map(v => `<td>${esc(v)}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
  }

  // Enquiry form (WhatsApp)
  const WHATSAPP = "919500902163";
  const productLabel = p => p.name + (p.model ? " (" + p.model + ")" : "");
  const sel = $("enq-product");
  sel.innerHTML = '<option value="">Select a product</option>' +
    CATEGORIES.map(c => {
      const items = PRODUCTS.filter(p => p.category === c.id);
      return items.length ? `<optgroup label="${esc(c.name)}">${items.map(p => `<option value="${esc(p.id)}">${esc(productLabel(p))}</option>`).join("")}</optgroup>` : "";
    }).join("") +
    '<option value="other">Other / general enquiry</option>';

  $("enquiry-form").addEventListener("submit", e => {
    e.preventDefault();
    const f = e.target;
    const name = f.name.value.trim();
    const pid = sel.value;
    f.name.classList.toggle("invalid", !name);
    sel.classList.toggle("invalid", !pid);
    $("enq-error").hidden = !!(name && pid);
    if (!name || !pid) return;
    const prod = pid === "other" ? "Other / general enquiry" : productLabel(PRODUCTS.find(p => p.id === pid));
    const lines = [
      "Hello Ramm Enterprises, I would like to enquire about:",
      "*Product:* " + prod,
      "*Name:* " + name,
      f.company.value.trim() && "*Company:* " + f.company.value.trim(),
      f.phone.value.trim() && "*Phone:* " + f.phone.value.trim(),
      f.message.value.trim() && "*Message:* " + f.message.value.trim()
    ].filter(Boolean);
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
  });

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  document.getElementById("year").textContent = new Date().getFullYear();

  // Init
  setCat("all");
  if (location.hash.startsWith("#p-")) {
    const p = PRODUCTS.find(x => x.id === location.hash.slice(3));
    if (p) openProduct(p);
  }
})();
