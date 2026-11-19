(function () {
  const REVIEW = new URLSearchParams(location.search).has("review");
  const catName = id => (CATEGORIES.find(c => c.id === id) || {}).name || id;
  const hasSpecs = p => Array.isArray(p.specs) ? p.specs.length > 0 : !!(p.specs && p.specs.rows && p.specs.rows.length);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  let activeCat = "all";
  let query = "";

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
    el.innerHTML = `
      <div class="card-img"><img src="images/${esc(p.images[0])}" alt="${esc(p.name)}" loading="lazy"></div>
      <div class="card-body">
        ${p.model ? `<span class="card-model">${esc(p.model)}</span>` : ""}
        <span class="card-title">${esc(p.name)}</span>
        <p class="card-summary">${esc(p.summary)}</p>
        <div class="card-foot">
          <span class="card-make">${p.make ? esc(p.make) : ""}${REVIEW && p.verify ? ' <span class="verify-flag">&#9888; check</span>' : ""}</span>
          ${hasSpecs(p) ? '<span class="badge-specs">Specs</span>' : '<span class="card-link">Details &rarr;</span>'}
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
  $("dlg-enquire").href = "#contact";
  $("dlg-enquire").addEventListener("click", e => {
    e.preventDefault();
    dlg.close();
    history.replaceState(null, "", location.pathname + location.search + "#contact");
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });
  dlg.addEventListener("close", () => { if (location.hash.startsWith("#p-")) history.replaceState(null, "", location.pathname + location.search); });

  function openProduct(p) {
    $("dlg-cat").textContent = catName(p.category) + (p.make ? "  |  " + p.make : "");
    $("dlg-title").textContent = p.name;
    $("dlg-model").textContent = p.model || "";
    $("dlg-model").hidden = !p.model;
    $("dlg-summary").textContent = p.summary;

    const v = $("dlg-verify");
    v.hidden = !(REVIEW && p.verify);
    v.textContent = p.verify ? "To verify: " + p.verify : "";

    $("dlg-features").innerHTML = (p.features || []).map(f => `<li>${esc(f)}</li>`).join("");
    $("dlg-specs").innerHTML = specsHtml(p);

    const img = $("dlg-img");
    const setImg = i => {
      img.src = "images/" + p.images[i];
      img.alt = p.name;
      $("dlg-thumbs").querySelectorAll("button").forEach((b, k) => b.classList.toggle("active", k === i));
    };
    $("dlg-thumbs").innerHTML = p.images.length > 1
      ? p.images.map((src, i) => `<button type="button" aria-label="Image ${i + 1}"><img src="images/${esc(src)}" alt=""></button>`).join("")
      : "";
    $("dlg-thumbs").querySelectorAll("button").forEach((b, i) => b.addEventListener("click", () => setImg(i)));
    setImg(0);


    history.replaceState(null, "", "#p-" + p.id);
    if (!dlg.open) dlg.showModal();
    dlg.querySelector(".dlg-info").scrollTop = 0;
  }

  function specsHtml(p) {
    if (!hasSpecs(p)) return '<div class="spec-empty">Detailed specifications available on request.</div>';
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
