// Data produk
const products = [
  {
    id: 1,
    name: "Es Cappucino",
    description: "Cappucino dingin creamy dengan espresso bold dan susu segar, ideal untuk penyegar siang.",
    image: "assets/img/product-1.jpeg",
    price: { regular: "Rp 5.000", jumbo: "Rp 10.000" },
  },
  {
    id: 2,
    name: "Mochachino",
    description: "Perpaduan espresso, susu, dan cokelat yang seimbang; manis, pekat, namun tetap ringan.",
    image: "assets/img/product-2.jpeg",
    price: { regular: "Rp 5.000", jumbo: "Rp 10.000" },
  },
  {
    id: 3,
    name: "Tiramisu",
    description: "Signature tiramisu latte dengan krim mascarpone, espresso, dan taburan cocoa.",
    image: "assets/img/product-3.jpeg",
    price: { regular: "Rp 5.000", jumbo: "Rp 10.000" },
  },
  {
    id: 4,
    name: "Kopi Karamel",
    description: "Latte karamel dengan sirup homemade, manis gurih tanpa menutupi rasa kopi.",
    image: "assets/img/product-4.jpeg",
    price: { regular: "Rp 5.000", jumbo: "Rp 10.000" },
  },
  {
    id: 5,
    name: "Vanila Latte",
    description: "Latte lembut dengan vanilla bean, wangi dan smooth untuk dinikmati kapan saja.",
    image: "assets/img/product-5.jpeg",
    price: { regular: "Rp 5.000", jumbo: "Rp 10.000" },
  },
  {
    id: 6,
    name: "Americano",
    description: "Espresso yang ditarik ganda, disajikan black untuk rasa kopi murni yang bersih.",
    image: "assets/img/product-6.jpeg",
    price: { regular: "Rp 5.000", jumbo: "Rp 10.000" },
  },
  {
    id: 7,
    name: "Classic",
    description: "Kopi susu klasik dengan gula aren, rasa familiar yang pas untuk setiap momen.",
    image: "assets/img/product-7.jpeg",
    price: { regular: "Rp 5.000", jumbo: "Rp 10.000" },
  },
];

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const mobilePanel = document.getElementById("mobilePanel");
const productsGrid = document.getElementById("productsGrid");

function setMenu(open) {
  if (!menuBtn || !navbar || !mobilePanel) return;
  const isOpen = !!open;
  menuBtn.setAttribute("aria-expanded", String(isOpen));
  navbar.classList.toggle("menu-open", isOpen);
  mobilePanel.style.display = isOpen ? "block" : "none";
}

function initMenu() {
  if (!menuBtn) return;
  setMenu(false);

  menuBtn.addEventListener("click", () => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    setMenu(!expanded);
  });

  // Tutup saat klik di luar navbar
  document.addEventListener("click", (e) => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    if (!expanded) return;
    const clickedInside = navbar && navbar.contains(e.target);
    if (!clickedInside) setMenu(false);
  });

  // Tutup dengan ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
  });
}

function initSmoothScroll() {
  document.addEventListener("click", (e) => {
    const target = e.target.closest("[data-scroll]");
    if (!target) return;

    e.preventDefault();
    const href = target.getAttribute("data-scroll");
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });

    setMenu(false);
  });
}

function renderProducts() {
  if (!productsGrid) return;
  productsGrid.innerHTML = products
    .map((p, index) => {
      const delay = (index * 0.1).toFixed(1);
      return `
        <article class="card product-card" style="animation-delay:${delay}s" aria-label="${p.name}">
          <div class="media">
            <img src="${p.image}" alt="${p.name}">
            <div class="overlay" aria-hidden="true"></div>
          </div>
          <div class="body">
            <div class="row">
              <h3 class="name">${p.name}</h3>
              </div>
              <div class="price-group">
                <span class="price-chip">Reguler ${p.price.regular}</span>
                <span class="price-chip price-chip--outline">Jumbo ${p.price.jumbo}</span>
              </div>
            <p class="desc">${p.description}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function initContacts() {
  const waCard = document.getElementById("waCard");
  const igCard = document.getElementById("igCard");

  const whatsappNumber = "6285777677767";
  const whatsappMessage = "";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const instagramLink = "https://www.facebook.com/share/17Zrbr8z3T";

  if (waCard) waCard.href = whatsappLink;
  if (igCard) igCard.href = instagramLink;
}

function initYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

initMenu();
initSmoothScroll();
renderProducts();
initContacts();
initYear();
