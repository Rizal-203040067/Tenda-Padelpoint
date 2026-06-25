// ---------------------------------------------------------------
// PRODUCT DATA (real catalogue)
// ---------------------------------------------------------------
// category must be one of: rackets | shoes | apparel | bags
// image is a path under images/products/
// No price field: this store sends buyers to the physical store or
// WhatsApp to check current pricing, so price is intentionally
// omitted from both the data and the card rendering.
// ---------------------------------------------------------------
const PRODUCTS = [
  {
    id: "p01",
    name: "ADIDAS CLUB CLIMACOOL CYAN BLUE SKIRT",
    brand: "Adidas",
    category: "apparel",
    image: "images/products/adidas-club-climacool-cyan-blue-skirt.jpg",
  },
  {
    id: "p02",
    name: "ADIDAS COURTJAM CONTROL 3 CLAY WHITE ORANGE BLACK",
    brand: "Adidas",
    category: "shoes",
    image:
      "images/products/adidas-courtjam-control-3-clay-white-orange-black.jpg",
  },
  {
    id: "p03",
    name: "ADIDAS CRAZYQUICK LS WHITE BLUE GREY SHOES",
    brand: "Adidas",
    category: "shoes",
    image: "images/products/adidas-crazyquick-ls-white-blue-grey-shoes.jpg",
  },
  {
    id: "p04",
    name: "ADIDAS CROSS IT LIGHT 2026 – MARTITA ORTEGA",
    brand: "Adidas",
    category: "rackets",
    image: "images/products/adidas-cross-it-light-2026-martita-ortega.jpg",
  },
  {
    id: "p05",
    name: "ADIDAS DROP SHOT MEN SHOES",
    brand: "Adidas",
    category: "shoes",
    image: "images/products/adidas-drop-shot-men-shoes.jpg",
  },
  {
    id: "p06",
    name: "ADIDAS METALBONE CTRL 2026",
    brand: "Adidas",
    category: "rackets",
    image: "images/products/adidas-metalbone-ctrl-2026.jpg",
  },
  {
    id: "p07",
    name: "ADIDAS METALBONE HRD+ 2026 – ALE GALÁN",
    brand: "Adidas",
    category: "rackets",
    image: "images/products/adidas-metalbone-hrd-plus-2026-ale-galan.jpg",
  },
  {
    id: "p08",
    name: "ADIDAS WHITE T-SHIRT BY. ALE GALAN",
    brand: "Adidas",
    category: "apparel",
    image: "images/products/adidas-white-t-shirt-by-ale-galan.jpg",
  },
  {
    id: "p09",
    name: "ASICS GEL CHALLENGER 15 CLAY GREEN STEEL GREY SHOES",
    brand: "Asics",
    category: "shoes",
    image:
      "images/products/asics-gel-challenger-15-clay-green-steel-grey-shoes.jpg",
  },
  {
    id: "p10",
    name: "ASICS GEL RESOLUTION X CLAY GREY GREEN PISTACHIO SHOES",
    brand: "Asics",
    category: "shoes",
    image:
      "images/products/asics-gel-resolution-x-clay-grey-green-pistachio-shoes.jpg",
  },
  {
    id: "p11",
    name: "ASICS SONICMASH FF BLUE GREEN SHOES",
    brand: "Asics",
    category: "shoes",
    image: "images/products/asics-sonicmash-ff-blue-green-shoes.jpg",
  },
  {
    id: "p12",
    name: "Adidas Arrow Hit Pro EDT 2026",
    brand: "Adidas",
    category: "shoes",
    image: "images/products/adidas-arrow-hit-pro-edt-2026.jpg",
  },
  {
    id: "p13",
    name: "Adidas Metalbone 3.5 2026 Ale Galán",
    brand: "Adidas",
    category: "rackets",
    image: "images/products/adidas-metalbone-3-5-2026-ale-galan.jpg",
  },
  {
    id: "p14",
    name: "BABOLAT JET PREMURA 3 WHITE ORANGE BY. JUAN LEBRON SHOES",
    brand: "Babolat",
    category: "shoes",
    image:
      "images/products/babolat-jet-premura-3-white-orange-by-juan-lebron-shoes.jpg",
  },
  {
    id: "p15",
    name: "BABOLAT JET VIVA BLUE SHOES",
    brand: "Babolat",
    category: "shoes",
    image: "images/products/babolat-jet-viva-blue-shoes.jpg",
  },
  {
    id: "p16",
    name: "BABOLAT PREMURA 3 BLACK GOLD MEN SHOES",
    brand: "Babolat",
    category: "shoes",
    image: "images/products/babolat-premura-3-black-gold-men-shoes.jpg",
  },
  {
    id: "p17",
    name: "BABOLAT PREMURA 3 BLUE PETROLEO MEN SHOES",
    brand: "Babolat",
    category: "shoes",
    image: "images/products/babolat-premura-3-blue-petroleo-men-shoes.jpg",
  },
  {
    id: "p18",
    name: "BABOLAT RH PRO MULTICOLOR BY. JUAN LEBRON",
    brand: "Babolat",
    category: "bags",
    image: "images/products/babolat-rh-pro-multicolor-by-juan-lebron.jpg",
  },
  {
    id: "p19",
    name: "BABOLAT RH PRO ORANGE PADEL BAG BY. JUAN LEBRON",
    brand: "Babolat",
    category: "bags",
    image: "images/products/babolat-rh-pro-orange-padel-bag-by-juan-lebron.jpg",
  },
  {
    id: "p20",
    name: "BULLPADEL AZABAL OFFICIAL T-SHIRT GRAPEFRUIT",
    brand: "Bullpadel",
    category: "apparel",
    image: "images/products/bullpadel-azabal-official-t-shirt-grapefruit.jpg",
  },
  {
    id: "p21",
    name: "BULLPADEL CASUAL BLACK PADEL BAG",
    brand: "Bullpadel",
    category: "bags",
    image: "images/products/bullpadel-casual-black-padel-bag.jpg",
  },
  {
    id: "p22",
    name: "BULLPADEL VERTEX 05 GEO BLACK PREMIER PADEL BAG 2026",
    brand: "Bullpadel",
    category: "bags",
    image:
      "images/products/bullpadel-vertex-05-geo-black-premier-padel-bag-2026.jpg",
  },
  {
    id: "p23",
    name: "BULLPADEL VERTEX WOMAN PREMIER WHITE 2026 PADEL BAG",
    brand: "Bullpadel",
    category: "bags",
    image:
      "images/products/bullpadel-vertex-woman-premier-white-2026-padel-bag.jpg",
  },
  {
    id: "p24",
    name: "Babolat Veron Juan Lebrón 3.0",
    brand: "Babolat",
    category: "rackets",
    image: "images/products/babolat-veron-juan-lebron-3-0.jpg",
  },
  {
    id: "p25",
    name: "Babolat Viper Juan Lebron 3.0 FW",
    brand: "Babolat",
    category: "rackets",
    image: "images/products/babolat-viper-juan-lebron-3-0-fw.jpg",
  },
  {
    id: "p26",
    name: "Babolat Viper Juan Lebrón 3.0",
    brand: "Babolat",
    category: "rackets",
    image: "images/products/babolat-viper-juan-lebron-3-0.jpg",
  },
  {
    id: "p27",
    name: "Babolat Viper Soft Juan Lebrón 3.0",
    brand: "Babolat",
    category: "rackets",
    image: "images/products/babolat-viper-soft-juan-lebron-3-0.jpg",
  },
  {
    id: "p28",
    name: "MUNICH TOLITO ATOMIK 52 WHITE BLUE SNEAKERS",
    brand: "Munich",
    category: "shoes",
    image: "images/products/munich-tolito-atomik-52-white-blue-sneakers.jpg",
  },
  {
    id: "p29",
    name: "NIKE ZOOM VOMERO 5 SE MEN SHOES",
    brand: "Nike",
    category: "shoes",
    image: "images/products/nike-zoom-vomero-5-se-men-shoes.jpg",
  },
  {
    id: "p30",
    name: "NOX AT10 Genius 12K Xtrem 2026 A. Tapia",
    brand: "NOX",
    category: "rackets",
    image: "images/products/nox-at10-genius-12k-xtrem-2026-a-tapia.jpg",
  },
  {
    id: "p31",
    name: "NOX AT10 Genius 18K Agustín Tapia 2024",
    brand: "NOX",
    category: "rackets",
    image: "images/products/nox-at10-genius-18k-agustin-tapia-2024.jpg",
  },
  {
    id: "p32",
    name: "NOX AT10 Genius 18K Alum 2025 Agustin Tapia",
    brand: "NOX",
    category: "rackets",
    image: "images/products/nox-at10-genius-18k-alum-2025-agustin-tapia.jpg",
  },
  {
    id: "p33",
    name: "Nike Air Max Invigor White Original",
    brand: "Nike",
    category: "shoes",
    image: "images/products/nike-air-max-invigor-white-original.jpg",
  },
  {
    id: "p34",
    name: "Nike Journey Run Purple Original",
    brand: "Nike",
    category: "shoes",
    image: "images/products/nike-journey-run-purple-original.jpg",
  },
  {
    id: "p35",
    name: "Oxdog Hyper Pro 2.0",
    brand: "Oxdog",
    category: "rackets",
    image: "images/products/oxdog-hyper-pro-2-0.jpg",
  },
  {
    id: "p36",
    name: "Oxdog Ultimate Pro + 2026",
    brand: "Oxdog",
    category: "rackets",
    image: "images/products/oxdog-ultimate-pro-plus-2026.jpg",
  },
  {
    id: "p37",
    name: "Oxdog Ultimate Pro Light 2026",
    brand: "Oxdog",
    category: "rackets",
    image: "images/products/oxdog-ultimate-pro-light-2026.jpg",
  },
  {
    id: "p38",
    name: "ROYAL PADEL M27 LIGHT 2026",
    brand: "Royal Padel",
    category: "rackets",
    image: "images/products/royal-padel-m27-light-2026.jpg",
  },
  {
    id: "p39",
    name: "SIUX FENIX BLACK ORANGE T-SHIRT BY. LEO AUGSBURGER",
    brand: "Siux",
    category: "apparel",
    image:
      "images/products/siux-fenix-black-orange-t-shirt-by-leo-augsburger.jpg",
  },
  {
    id: "p40",
    name: "Siux Electra Pro Fire Red 2026",
    brand: "Siux",
    category: "rackets",
    image: "images/products/siux-electra-pro-fire-red-2026.jpg",
  },
  {
    id: "p41",
    name: "Siux Electra ST5 Pro Shadow Red 2026 Franco Stupaczuk",
    brand: "Siux",
    category: "rackets",
    image:
      "images/products/siux-electra-st5-pro-shadow-red-2026-franco-stupaczuk.jpg",
  },
  {
    id: "p42",
    name: "Siux Fenix Pro Glow Purple 2026 Leo Augsburger",
    brand: "Siux",
    category: "rackets",
    image: "images/products/siux-fenix-pro-glow-purple-2026-leo-augsburger.jpg",
  },
  {
    id: "p43",
    name: "Siux Padel Racket Electra Pro ST4 2025 F. Stupaczuk",
    brand: "Siux",
    category: "rackets",
    image:
      "images/products/siux-padel-racket-electra-pro-st4-2025-f-stupaczuk.jpg",
  },
  {
    id: "p44",
    name: "T-SHIRT BABOLAT PINK BY. JUAN LEBRON",
    brand: "Babolat",
    category: "apparel",
    image: "images/products/t-shirt-babolat-pink-by-juan-lebron.jpg",
  },
  {
    id: "p45",
    name: "T-SHIRT NOX SPONSOR AT10 WHITE",
    brand: "NOX",
    category: "apparel",
    image: "images/products/t-shirt-nox-sponsor-at10-white.jpg",
  },
  {
    id: "p46",
    name: "WILSON COURTGLIDE WHITE GREY WOMAN SHOES",
    brand: "Wilson",
    category: "shoes",
    image: "images/products/wilson-courtglide-white-grey-woman-shoes.jpg",
  },
];

const CATEGORY_LABELS = {
  all: "All Products",
  rackets: "Rackets",
  shoes: "Shoes",
  apparel: "Apparel",
  bags: "Bags",
};

function getCategoryFromURL() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat");
  return CATEGORY_LABELS[cat] ? cat : "all";
}

function renderProducts(category, sort) {
  const grid = document.getElementById("productGrid");
  const emptyState = document.getElementById("emptyState");
  const countLabel = document.getElementById("shopCount");
  if (!grid) return;

  let items =
    category === "all"
      ? [...PRODUCTS]
      : PRODUCTS.filter((p) => p.category === category);

  if (sort === "name-asc") items.sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === "brand-asc")
    items.sort(
      (a, b) => a.brand.localeCompare(b.brand) || a.name.localeCompare(b.name),
    );

  grid.innerHTML = "";

  if (items.length === 0) {
    emptyState.hidden = false;
    countLabel.textContent = "No items in this category yet";
    return;
  }
  emptyState.hidden = true;
  countLabel.textContent = `Showing ${items.length} item${items.length === 1 ? "" : "s"}`;

  items.forEach((p) => {
    const card = document.createElement("article");
    card.className = "shop-card";
    card.innerHTML = `
      <div class="shop-card__img">
        <img src="${p.image}" alt="${p.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;">
      </div>
      <div class="shop-card__body">
        <span class="shop-card__brand">${p.brand}</span>
        <h3 class="shop-card__name">${p.name}</h3>
      </div>
    `;
    grid.appendChild(card);
  });
}

function setActiveChip(category) {
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("filter-chip--active", chip.dataset.cat === category);
  });
}

function initShop() {
  const initialCategory = getCategoryFromURL();
  const titleEl = document.getElementById("shopTitle");
  const sortSelect = document.getElementById("sortSelect");

  function applyState(category, pushHistory) {
    titleEl.textContent = CATEGORY_LABELS[category];
    setActiveChip(category);
    renderProducts(category, sortSelect.value);
    if (pushHistory) {
      const url =
        category === "all" ? "products.html" : `products.html?cat=${category}`;
      history.pushState({ category }, "", url);
    }
  }

  applyState(initialCategory, false);

  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.addEventListener("click", () => applyState(chip.dataset.cat, true));
  });

  sortSelect.addEventListener("change", () => {
    const activeChip = document.querySelector(".filter-chip--active");
    renderProducts(
      activeChip ? activeChip.dataset.cat : "all",
      sortSelect.value,
    );
  });

  window.addEventListener("popstate", () => {
    applyState(getCategoryFromURL(), false);
  });
}

document.addEventListener("DOMContentLoaded", initShop);
