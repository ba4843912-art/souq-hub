const app = document.getElementById("app");
const BUYER_FEE_RATE = 0.10;
const SELLER_FEE_RATE = 0.10;
const DEFAULT_SHIPPING_FEE = 60;

const CATEGORIES_META = [
    { key: "phones", icon: "📱", ar: "موبايلات", en: "Phones", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85" },
    { key: "laptops", icon: "💻", ar: "لابتوبات", en: "Laptops", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85" },
    { key: "shoes", icon: "👟", ar: "أحذية", en: "Shoes", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85" },
    { key: "gaming", icon: "🎮", ar: "ألعاب وكونسول", en: "Gaming", image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=900&q=85" },
    { key: "vehicles", icon: "🚗", ar: "سيارات وموتوسيكلات", en: "Cars & Motors", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85" },
    { key: "home", icon: "🛋️", ar: "منزل وأثاث", en: "Home & Furniture", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=85" },
    { key: "fashion", icon: "👕", ar: "أزياء وملابس", en: "Fashion", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85" },
    { key: "accessories", icon: "⌚", ar: "إكسسوارات وساعات", en: "Accessories & Watches", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85" },
    { key: "appliances", icon: "🔌", ar: "أجهزة منزلية", en: "Home Appliances", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=85" },
    { key: "sports", icon: "🏋️", ar: "رياضة ولياقة", en: "Sports & Fitness", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85" },
    { key: "books", icon: "📚", ar: "كتب ودراسة", en: "Books & Study", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=85" },
    { key: "tools", icon: "🛠️", ar: "أدوات وعدد", en: "Tools & Hardware", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=85" }
];

const translations = {
    en: {
        announcement: "BUY & SELL ANYTHING EASILY ✦ BETA VERSION",
        nav_home: "Home",
        nav_shop: "Marketplace",
        cat_phones: "Phones",
        cat_laptops: "Laptops",
        cat_shoes: "Shoes",
        cat_gaming: "Gaming",
        cat_vehicles: "Cars & Motors",
        cat_home: "Home & Furniture",
        cat_fashion: "Fashion",
        cat_accessories: "Accessories & Watches",
        cat_appliances: "Home Appliances",
        cat_sports: "Sports & Fitness",
        cat_books: "Books & Study",
        cat_tools: "Tools & Hardware",
        nav_seller: "Seller Studio",
        nav_delivery: "Delivery Hub",
        nav_admin: "Wallet",
        bag: "Bag",
        search_placeholder: "Search anything: phones, laptops, shoes, cars, gaming...",
        footer_tagline: "Buy & sell anything easily in one place.",
        footer_shop: "MARKETPLACE",
        all_products: "All Listings",
        footer_help: "HELP",
        my_account: "My Account",
        my_orders: "My Orders",
        shopping_bag: "Shopping Bag",
        footer_about: "ABOUT",
        footer_about_text: "Your multi-category marketplace.",
        footer_bottom: "BUY & SELL ANYTHING.",
        eyebrow_hero: "ALL-IN-ONE MARKETPLACE",
        hero_title_1: "BUY & SELL",
        hero_title_2: "ANY",
        hero_title_span: "THING.",
        hero_desc: "Phones, laptops, shoes, gaming, cars, furniture, fashion, appliances & more.",
        shop_collection: "EXPLORE MARKETPLACE →",
        explore: "CATEGORIES",
        shop_by_cat: "Shop by category",
        shop_now: "BROWSE ↗",
        handpicked: "FEATURED LISTINGS",
        trending_now: "Trending now",
        view_all: "VIEW ALL →",
        add_to_bag: "ADD TO BAG",
        details: "DETAILS",
        shop_eyebrow: "SOUQ HUB MARKETPLACE",
        shop_sneakers: "All Listings",
        products_word: "items",
        all: "ALL",
        sort_featured: "Sort by: Featured",
        sort_low: "Price: Low to High",
        sort_high: "Price: High to Low",
        sort_rating: "Top Rated",
        sort_az: "Name: A to Z",
        select_size: "SELECT OPTION / SIZE",
        bag_empty_title: "Your bag is empty",
        shop_now_btn: "BROWSE ITEMS",
        checkout_btn: "CHECKOUT →",
        currency: "EGP",
        reviews_title: "Ratings & Comments",
        add_review_title: "Write a review & comment",
        your_name: "Your name",
        your_comment: "Write your comment...",
        submit_review: "POST REVIEW",
        no_reviews: "No reviews yet."
    },
    ar: {
        announcement: "بيع واشتري أي حاجة بسهولة ✦ نسخة تجريبية",
        nav_home: "الرئيسية",
        nav_shop: "كل الإعلانات",
        cat_phones: "موبايلات",
        cat_laptops: "لابتوبات",
        cat_shoes: "أحذية",
        cat_gaming: "ألعاب وكونسول",
        cat_vehicles: "سيارات وموتوسيكلات",
        cat_home: "منزل وأثاث",
        cat_fashion: "أزياء وملابس",
        cat_accessories: "إكسسوارات وساعات",
        cat_appliances: "أجهزة منزلية",
        cat_sports: "رياضة ولياقة",
        cat_books: "كتب ودراسة",
        cat_tools: "أدوات وعدد",
        nav_seller: "لوحة البائع",
        nav_delivery: "لوحة التوصيل",
        nav_admin: "المحفظة",
        bag: "السلة",
        search_placeholder: "ابحث عن أي حاجة: موبايلات، لابتوبات، أحذية، سيارات، ألعاب...",
        footer_tagline: "بيع واشتري أي حاجة بسهولة في مكان واحد.",
        footer_shop: "الأقسام",
        all_products: "كل المنتجات",
        footer_help: "المساعدة",
        my_account: "حسابي",
        my_orders: "طلباتي",
        shopping_bag: "سلة التسوق",
        footer_about: "عن المنصة",
        footer_about_text: "منصة متكاملة لبيع وشراء كل حاجة.",
        footer_bottom: "بيع واشتري أي حاجة.",
        eyebrow_hero: "منصة بيع وشراء شاملة",
        hero_title_1: "بيع واشتري",
        hero_title_2: "أي ",
        hero_title_span: "حاجة.",
        hero_desc: "موبايلات، لابتوبات، أحذية، ألعاب، سيارات، أثاث، ملابس، أجهزة، كتب وأكتر — فلترة ذكية، بحث بالكاميرا، تقييمات وكومنتات.",
        shop_collection: "تصفح المنصة ←",
        explore: "الأقسام",
        shop_by_cat: "تصفح حسب القسم",
        shop_now: "تصفح القسم ↗",
        handpicked: "إعلانات مميزة",
        trending_now: "الأكثر رواجاً",
        view_all: "عرض الكل ←",
        add_to_bag: "أضف للسلة",
        details: "التفاصيل",
        shop_eyebrow: "سوق SOUQ HUB الشامل",
        shop_sneakers: "كل المعروضات",
        products_word: "منتج",
        all: "الكل",
        sort_featured: "ترتيب: المميز",
        sort_low: "السعر: من الأقل للأعلى",
        sort_high: "السعر: من الأعلى للأقل",
        sort_rating: "الأعلى تقييماً",
        sort_az: "الاسم: أ إلى ي",
        select_size: "اختر المقاس أو الخيار",
        bag_empty_title: "السلة فارغة",
        shop_now_btn: "تصفح الآن",
        checkout_btn: "إتمام الطلب ←",
        currency: "ج.م",
        reviews_title: "التقييمات والكومنتات",
        add_review_title: "أضف تقييمك وكومنتك",
        your_name: "اسمك",
        your_comment: "اكتب رأيك أو كومنتك على المنتج...",
        submit_review: "إرسال التقييم والكومنت",
        no_reviews: "لا توجد تقييمات بعد."
    }
};

const defaultListings = [
    {id:1,name:"Air Max Pulse Sneakers",brand:"NIKE",price:3500,category:"shoes",condition:"new",badge:"NEW",sellerEmail:"seller1@souqhub.local",sellerName:"متجر كورة وستريت",sellerPhone:"01011223344",sellerLocation:"المعادي - القاهرة",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",description:"Everyday comfort sneakers with street style."},
    {id:2,name:"iPhone 15 Pro 256GB",brand:"APPLE",price:46500,category:"phones",condition:"like_new",badge:"PHONE",sellerEmail:"seller2@souqhub.local",sellerName:"تيك زون",sellerPhone:"01122334455",sellerLocation:"مدينة نصر - القاهرة",image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85",description:"Clean flagship smartphone with great battery health and camera."},
    {id:3,name:"Ryzen Gaming Laptop 16GB",brand:"LENOVO",price:31000,category:"laptops",condition:"used",badge:"LAPTOP",sellerEmail:"seller3@souqhub.local",sellerName:"جيمينج هب",sellerPhone:"01233445566",sellerLocation:"الدقي - الجيزة",image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85",description:"Fast laptop for gaming, coding, and study with full charger."},
    {id:4,name:"PS5 DualSense & Games Bundle",brand:"SONY",price:24500,category:"gaming",condition:"like_new",badge:"GAMING",sellerEmail:"seller4@souqhub.local",sellerName:"بلاي ستور",sellerPhone:"01555667788",sellerLocation:"مصر الجديدة - القاهرة",image:"https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=900&q=85",description:"Console bundle with wireless controller and action titles."},
    {id:5,name:"Ultraboost Running Shoes",brand:"ADIDAS",price:4200,category:"shoes",condition:"new",badge:"SPORT",sellerEmail:"seller1@souqhub.local",sellerName:"متجر كورة وستريت",sellerPhone:"01011223344",sellerLocation:"المعادي - القاهرة",image:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=85",description:"Lightweight running shoes for workouts and daily walks."},
    {id:6,name:"Classic Chronograph Watch",brand:"CASIO",price:2950,category:"accessories",condition:"new",badge:"WATCH",sellerEmail:"seller3@souqhub.local",sellerName:"تايم زون",sellerPhone:"01233445566",sellerLocation:"الدقي - الجيزة",image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",description:"Stylish everyday watch with durable strap."},
    {id:7,name:"Modern Lounge Armchair",brand:"HOME STYLE",price:6800,category:"home",condition:"like_new",badge:"HOME",sellerEmail:"seller5@souqhub.local",sellerName:"هوم ستايل",sellerPhone:"01099887766",sellerLocation:"التجمع الخامس - القاهرة",image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=85",description:"Comfortable room chair in clean condition."},
    {id:8,name:"Urban Street Hoodie & Jacket",brand:"ZARA",price:1950,category:"fashion",condition:"new",badge:"FASHION",sellerEmail:"seller6@souqhub.local",sellerName:"ستريت وير",sellerPhone:"01144556677",sellerLocation:"الزمالك - القاهرة",image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",description:"Warm everyday streetwear piece."}
];

const defaultReviews = {
    1: [
        {id:101, author:"Omar", rating:5, comment:"مريح جداً في المشي والخامة ممتازة والتوصيل كان سريع.", date:"2026-11-10"},
        {id:103, author:"Karim", rating:4, comment:"شكله شيك جداً على اللبس الكاجوال، أنصح بيه.", date:"2026-11-18"}
    ],
    2: [
        {id:102, author:"Youssef", rating:5, comment:"الجهاز نضيف جداً والبطارية ممتازة والكاميرا رهيبة.", date:"2026-11-15"}
    ]
};

const getStorage = (key, fallback) => {
    try {
        const val = JSON.parse(localStorage.getItem(key));
        return val ?? fallback;
    } catch {
        return fallback;
    }
};

let currentLang = getStorage("sh_lang", "ar");
if (!translations[currentLang]) currentLang = "ar";

let shoeProducts = getStorage("sh_listings", defaultListings);
if (!Array.isArray(shoeProducts) || !shoeProducts.length) shoeProducts = [...defaultListings];

let reviewsByProduct = getStorage("sh_reviews", defaultReviews);
let cart = getStorage("sh_cart", []);
let accounts = getStorage("sh_accounts", []);
let currentUser = getStorage("sh_currentUser", null);
let orders = getStorage("sh_orders", []);
let platformWallet = getStorage("sh_platformWallet", { balance: 0, history: [] });

let selectedSize = "Standard";
let registerRole = "buyer";
let loginRole = "buyer";
let cameraStream = null;
let capturedImageData = "";
let reviewStarFilter = 0;
let reviewSortMode = "newest";
let editingReviewId = null;

function t(key) {
    return translations[currentLang]?.[key] ?? translations.en[key] ?? key;
}

function getConditionLabel(cond) {
    const isAr = currentLang === "ar";
    if (cond === "new") return isAr ? "جديد" : "New";
    if (cond === "like_new") return isAr ? "كالجديد" : "Like New";
    return isAr ? "مستعمل" : "Used";
}

function getCategoryLabel(cat) {
    const meta = CATEGORIES_META.find(c => c.key === cat);
    if (meta) return currentLang === "ar" ? meta.ar : meta.en;
    const map = { tech: t("cat_laptops") };
    return map[cat] || cat;
}

function renderNoonCategoryStrip() {
    const strip = document.getElementById("noonCategoryStrip");
    if (!strip) return;
    strip.innerHTML = CATEGORIES_META.map(c => `
        <a href="#shop?category=${c.key}" class="noon-chip">
            <span>${c.icon}</span>
            <span>${currentLang === "ar" ? c.ar : c.en}</span>
        </a>
    `).join("");
}

function applyLanguage() {
    const isRtl = currentLang === "ar";
    document.documentElement.lang = currentLang;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.body.classList.toggle("rtl", isRtl);

    const langSelect = document.getElementById("langSelect");
    if (langSelect) langSelect.value = currentLang;

    const searchInputEl = document.getElementById("searchInput");
    if (searchInputEl) searchInputEl.placeholder = t("search_placeholder");

    document.querySelectorAll("[data-i18n]").forEach(el => {
        el.textContent = t(el.getAttribute("data-i18n"));
    });

    renderNoonCategoryStrip();
}

function saveAll() {
    try {
        localStorage.setItem("sh_lang", JSON.stringify(currentLang));
        localStorage.setItem("sh_listings", JSON.stringify(shoeProducts));
        localStorage.setItem("sh_reviews", JSON.stringify(reviewsByProduct));
        localStorage.setItem("sh_cart", JSON.stringify(cart));
        localStorage.setItem("sh_accounts", JSON.stringify(accounts));
        localStorage.setItem("sh_currentUser", JSON.stringify(currentUser));
        localStorage.setItem("sh_orders", JSON.stringify(orders));
        localStorage.setItem("sh_platformWallet", JSON.stringify(platformWallet));
    } catch {}
    updateRoleNavs();
    applyLanguage();
}

function syncUserAccount(updatedUser) {
    if (!updatedUser) return;
    currentUser = updatedUser;
    accounts = accounts.map(a => a.email === updatedUser.email ? updatedUser : a);
}

function creditUserWalletByEmail(email, amount, note) {
    if (!email || !amount || amount <= 0) return;
    const tx = { id: Date.now() + Math.floor(Math.random() * 1000), type: "credit", amount, note, date: new Date().toLocaleString() };

    accounts = accounts.map(acc => {
        if (acc.email !== email) return acc;
        return {
            ...acc,
            walletBalance: Number(acc.walletBalance || 0) + amount,
            walletHistory: [...(Array.isArray(acc.walletHistory) ? acc.walletHistory : []), tx]
        };
    });

    if (currentUser && currentUser.email === email) {
        currentUser = {
            ...currentUser,
            walletBalance: Number(currentUser.walletBalance || 0) + amount,
            walletHistory: [...(Array.isArray(currentUser.walletHistory) ? currentUser.walletHistory : []), tx]
        };
    }
}

function getProductReviews(productId) {
    return reviewsByProduct[Number(productId)] || [];
}

function getRatingStats(productId) {
    const list = getProductReviews(productId);
    if (!list.length) return { avg: 0, count: 0, counts: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 } };
    const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    let sum = 0;
    list.forEach(r => {
        const star = Math.min(5, Math.max(1, Number(r.rating || 5)));
        counts[star] = (counts[star] || 0) + 1;
        sum += star;
    });
    return { avg: Number((sum / list.length).toFixed(1)), count: list.length, counts };
}

function renderStars(score) {
    const rounded = Math.round(Number(score) || 0);
    return "★".repeat(rounded) + "☆".repeat(Math.max(0, 5 - rounded));
}

function updateRoleNavs() {
    const sellerLink = document.getElementById("sellerNavLink");
    const deliveryLink = document.getElementById("deliveryNavLink");
    if (sellerLink) sellerLink.style.display = currentUser && currentUser.role === "seller" ? "inline-block" : "none";
    if (deliveryLink) deliveryLink.style.display = currentUser && currentUser.role === "delivery" ? "inline-block" : "none";
}

function money(price) {
    return Number(price || 0).toLocaleString("en-US") + " " + t("currency");
}

function toast(message) {
    const box = document.getElementById("toast");
    if (!box) return;
    box.textContent = message;
    box.classList.add("show");
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => box.classList.remove("show"), 2500);
}

function go(route) {
    location.hash = route;
}

function getRoute() {
    return location.hash.slice(1) || "home";
}

function escapeHtml(text) {
    return String(text || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function productCard(product) {
    const stats = getRatingStats(product.id);
    return `
    <article class="product-card">
        <div class="product-image">
            <span class="product-badge">${escapeHtml(product.badge || getConditionLabel(product.condition))}</span>
            <a href="#product/${product.id}"><img src="${product.image}" alt="${escapeHtml(product.name)}"></a>
        </div>
        <div class="product-card-info">
            <p class="product-brand">${escapeHtml(product.brand)} · ${escapeHtml(getConditionLabel(product.condition))}</p>
            <a href="#product/${product.id}"><h3>${escapeHtml(product.name)}</h3></a>
            <div class="rating-summary">
                <span class="stars">${stats.count ? "★" : "☆"}</span>
                <span>${stats.count ? `${stats.avg.toFixed(1)} (${stats.count} تقييم)` : "لا توجد تقييمات"}</span>
            </div>
            <p class="price">${money(product.price)}</p>
            <div class="product-buttons">
                <button onclick="addToCart(${product.id})">${t("add_to_bag")}</button>
                <button onclick="go('product/${product.id}')">${t("details")}</button>
            </div>
        </div>
    </article>`;
}

function renderHome() {
    app.innerHTML = `
    <section class="hero">
        <div>
            <p class="eyebrow">${t("eyebrow_hero")}</p>
            <h1>${t("hero_title_1")}<br>${t("hero_title_2")}<span>${t("hero_title_span")}</span></h1>
            <p class="description">${t("hero_desc")}</p>
            <a href="#shop" class="btn">${t("shop_collection")}</a>
        </div>
        <div class="hero-image">
            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85">
        </div>
    </section>

    <section class="section">
        <div class="section-title">
            <div><p class="eyebrow">${t("explore")}</p><h2>${t("shop_by_cat")}</h2></div>
            <a href="#shop" class="btn btn-light">${t("view_all")}</a>
        </div>
        <div class="categories">
            ${CATEGORIES_META.map(cat => `
                <a class="category" href="#shop?category=${cat.key}">
                    <img src="${cat.image}" alt="${escapeHtml(currentLang === "ar" ? cat.ar : cat.en)}">
                    <div class="category-info">
                        <h3>${cat.icon} ${escapeHtml(currentLang === "ar" ? cat.ar : cat.en)}</h3>
                        <p>${t("shop_now")}</p>
                    </div>
                </a>
            `).join("")}
        </div>
    </section>

    <section class="shop-section">
        <div class="section-title">
            <div><p class="eyebrow">${t("handpicked")}</p><h2>${t("trending_now")}</h2></div>
            <a href="#shop" class="btn btn-light">${t("view_all")}</a>
        </div>
        <div class="product-grid">${shoeProducts.slice(0,4).map(productCard).join("")}</div>
    </section>`;
}

function applyShopFilters(baseCategory = "all") {
    const condVal = document.getElementById("filterCondition")?.value || "all";
    const maxPriceVal = Number(document.getElementById("filterMaxPrice")?.value || 0);
    const minRatingVal = Number(document.getElementById("filterMinRating")?.value || 0);
    const sortVal = document.getElementById("sortSelect")?.value || "default";

    let list = [...shoeProducts];
    if (baseCategory !== "all") {
        list = list.filter(p => p.category === baseCategory || (baseCategory === "laptops" && p.category === "tech"));
    }
    if (condVal !== "all") list = list.filter(p => (p.condition || "new") === condVal);
    if (maxPriceVal > 0) list = list.filter(p => Number(p.price) <= maxPriceVal);
    if (minRatingVal > 0) list = list.filter(p => getRatingStats(p.id).avg >= minRatingVal);

    if (sortVal === "low") list.sort((a, b) => a.price - b.price);
    if (sortVal === "high") list.sort((a, b) => b.price - a.price);
    if (sortVal === "rating") list.sort((a, b) => getRatingStats(b.id).avg - getRatingStats(a.id).avg);
    if (sortVal === "az") list.sort((a, b) => a.name.localeCompare(b.name));

    const countEl = document.getElementById("productCount");
    if (countEl) countEl.textContent = `${list.length} ${t("products_word")}`;

    const gridEl = document.getElementById("shopGrid");
    if (gridEl) {
        gridEl.innerHTML = list.length
            ? list.map(productCard).join("")
            : `<div class="empty-state" style="grid-column:1/-1;"><h2>لا توجد منتجات مطابقة في هذا القسم</h2></div>`;
    }
}

function renderShop(category = "all") {
    const categoryKeys = ["all", ...CATEGORIES_META.map(c => c.key)];
    app.innerHTML = `
    <section class="shop-section">
        <div class="section-title">
            <div>
                <p class="eyebrow">${t("shop_eyebrow")}</p>
                <h2>${category === "all" ? t("shop_sneakers") : escapeHtml(getCategoryLabel(category))}</h2>
            </div>
            <span id="productCount">0 ${t("products_word")}</span>
        </div>

        <div class="shop-toolbar">
            <div class="filters">
                ${categoryKeys.map(cat => `<button class="filter ${category === cat ? "active" : ""}" onclick="renderShop('${cat}')">${cat === "all" ? t("all") : escapeHtml(getCategoryLabel(cat))}</button>`).join("")}
            </div>
            <select class="sort-select" id="sortSelect" onchange="applyShopFilters('${category}')">
                <option value="default">${t("sort_featured")}</option>
                <option value="low">${t("sort_low")}</option>
                <option value="high">${t("sort_high")}</option>
                <option value="rating">${t("sort_rating")}</option>
                <option value="az">${t("sort_az")}</option>
            </select>
        </div>

        <div class="advanced-filters">
            <div class="filter-group">
                <label>الحالة:</label>
                <select id="filterCondition" onchange="applyShopFilters('${category}')">
                    <option value="all">الكل</option>
                    <option value="new">جديد</option>
                    <option value="like_new">كالجديد</option>
                    <option value="used">مستعمل</option>
                </select>
            </div>
            <div class="filter-group">
                <label>أقل تقييم:</label>
                <select id="filterMinRating" onchange="applyShopFilters('${category}')">
                    <option value="0">الكل</option>
                    <option value="4">4+ ★</option>
                    <option value="5">5 ★</option>
                </select>
            </div>
            <div class="filter-group">
                <label>أقصى سعر:</label>
                <input id="filterMaxPrice" type="number" min="0" placeholder="مثال: 10000" oninput="applyShopFilters('${category}')" style="width:120px;">
            </div>
        </div>

        <div class="product-grid" id="shopGrid"></div>
    </section>`;
    applyShopFilters(category);
}

function startEditReview(productId, reviewId) {
    const list = getProductReviews(productId);
    const target = list.find(r => r.id === Number(reviewId));
    if (!target) return;
    editingReviewId = Number(reviewId);
    renderProduct(productId);
    const authorInput = document.getElementById("reviewAuthor");
    const ratingSelect = document.getElementById("reviewRating");
    const commentInput = document.getElementById("reviewComment");
    if (authorInput) authorInput.value = target.author;
    if (ratingSelect) ratingSelect.value = String(target.rating || 5);
    if (commentInput) {
        commentInput.value = target.comment;
        commentInput.focus();
    }
}

function deleteReview(productId, reviewId) {
    const pid = Number(productId);
    reviewsByProduct[pid] = (reviewsByProduct[pid] || []).filter(r => r.id !== Number(reviewId));
    if (editingReviewId === Number(reviewId)) editingReviewId = null;
    saveAll();
    toast("تم حذف التقييم والكومنت");
    renderProduct(pid);
}

function setReviewStarFilter(productId, star) {
    reviewStarFilter = Number(star);
    renderProduct(productId);
}

function setReviewSort(productId, mode) {
    reviewSortMode = mode;
    renderProduct(productId);
}

function renderProduct(id) {
    const product = shoeProducts.find(p => p.id === Number(id));
    if (!product) return renderShop("all");

    const optionsList = product.category === "shoes" ? ["39", "40", "41", "42", "43", "44", "45"] : ["Standard", "Bundle +1"];
    selectedSize = optionsList.includes("42") ? "42" : optionsList[0];
    const stats = getRatingStats(product.id);
    const allReviews = getProductReviews(product.id);

    let filteredReviews = [...allReviews];
    if (reviewStarFilter > 0) {
        filteredReviews = filteredReviews.filter(r => Number(r.rating) === reviewStarFilter);
    }
    if (reviewSortMode === "newest") filteredReviews.reverse();
    if (reviewSortMode === "highest") filteredReviews.sort((a, b) => Number(b.rating) - Number(a.rating));
    if (reviewSortMode === "lowest") filteredReviews.sort((a, b) => Number(a.rating) - Number(b.rating));

    app.innerHTML = `
    <section class="page">
        <div class="product-details">
            <div class="details-image"><img src="${product.image}" alt="${escapeHtml(product.name)}"></div>
            <div class="details-info">
                <p class="eyebrow">${escapeHtml(product.brand)} · ${escapeHtml(getCategoryLabel(product.category))} · ${escapeHtml(getConditionLabel(product.condition))}</p>
                <h1>${escapeHtml(product.name)}</h1>
                <div class="rating-summary">
                    <span class="stars">${renderStars(stats.avg)}</span>
                    <span>${stats.count ? `${stats.avg.toFixed(1)} / 5 (${stats.count} تقييم وكومنت)` : "0.0 / 5 (لا توجد تقييمات بعد)"}</span>
                </div>
                <div class="price">${money(product.price)}</div>
                <p>${escapeHtml(product.description)}</p>
                <p style="margin-top:10px;color:#444;"><strong>مكان البائع:</strong> ${escapeHtml(product.sellerLocation || "القاهرة")}</p>

                <p class="size-label">${t("select_size")}</p>
                <div class="sizes">
                    ${optionsList.map(opt => `<button class="size-option ${opt === selectedSize ? "selected" : ""}" onclick="selectSize('${opt}', this)">${escapeHtml(opt)}</button>`).join("")}
                </div>

                <button class="btn" style="margin-top:25px;width:100%" onclick="addToCart(${product.id}, selectedSize, 1)">
                    ${t("add_to_bag")} — ${money(product.price)}
                </button>
            </div>
        </div>

        <div class="reviews-section">
            <div class="form-box" style="max-width:100%;margin:0;">
                <h2>${editingReviewId ? "تعديل التقييم والكومنت" : t("add_review_title")}</h2>
                <form id="reviewForm">
                    <input id="reviewAuthor" placeholder="${t("your_name")}" value="${currentUser ? escapeHtml(currentUser.name) : ""}" required>
                    <select id="reviewRating">
                        <option value="5">★★★★★ (5 / 5 — ممتاز)</option>
                        <option value="4">★★★★☆ (4 / 5 — جيد جداً)</option>
                        <option value="3">★★★☆☆ (3 / 5 — مقبول)</option>
                        <option value="2">★★☆☆☆ (2 / 5 — ضعيف)</option>
                        <option value="1">★☆☆☆☆ (1 / 5 — سيئ)</option>
                    </select>
                    <textarea id="reviewComment" rows="3" placeholder="${t("your_comment")}" required></textarea>
                    <button class="btn" type="submit">${editingReviewId ? "حفظ التعديل" : t("submit_review")}</button>
                    ${editingReviewId ? `<button type="button" class="btn btn-light" style="margin-top:8px;" onclick="editingReviewId=null;renderProduct(${product.id})">إلغاء التعديل</button>` : ""}
                </form>
            </div>

            <div>
                <h2 style="font-size:26px;font-weight:900;margin-bottom:14px;">${t("reviews_title")} (${allReviews.length})</h2>

                <div class="rating-overview-box">
                    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                        <div>
                            <strong style="font-size:24px;">${stats.avg.toFixed(1)}</strong> <span style="color:#777;font-size:12px;">من 5</span>
                            <div class="review-stars">${renderStars(stats.avg)}</div>
                        </div>
                        <span style="font-size:12px;font-weight:700;color:#555;">${stats.count} تقييم</span>
                    </div>
                    ${[5, 4, 3, 2, 1].map(star => {
                        const c = stats.counts[star] || 0;
                        const pct = stats.count ? Math.round((c / stats.count) * 100) : 0;
                        return `
                        <div class="rating-bar-row">
                            <span>${star} ★</span>
                            <div class="rating-bar-track"><div class="rating-bar-fill" style="width:${pct}%;"></div></div>
                            <span>${c}</span>
                        </div>`;
                    }).join("")}
                </div>

                <div class="review-toolbar">
                    <div class="filters">
                        <button type="button" class="filter ${reviewStarFilter === 0 ? "active" : ""}" onclick="setReviewStarFilter(${product.id}, 0)">الكل (${allReviews.length})</button>
                        ${[5, 4, 3, 2, 1].map(s => `<button type="button" class="filter ${reviewStarFilter === s ? "active" : ""}" onclick="setReviewStarFilter(${product.id}, ${s})">${s} ★</button>`).join("")}
                    </div>
                    <select class="sort-select" onchange="setReviewSort(${product.id}, this.value)">
                        <option value="newest" ${reviewSortMode === "newest" ? "selected" : ""}>الأحدث أولاً</option>
                        <option value="highest" ${reviewSortMode === "highest" ? "selected" : ""}>الأعلى تقييماً</option>
                        <option value="lowest" ${reviewSortMode === "lowest" ? "selected" : ""}>الأقل تقييماً</option>
                    </select>
                </div>

                ${filteredReviews.length ? filteredReviews.map(rev => `
                    <div class="review-card">
                        <div class="review-header">
                            <div><strong>${escapeHtml(rev.author)}</strong><div class="review-stars">${renderStars(rev.rating)} (${rev.rating}/5)</div></div>
                            <span class="review-date">${escapeHtml(rev.date)}</span>
                        </div>
                        <p style="font-size:13px;color:#333;line-height:1.7;">${escapeHtml(rev.comment)}</p>
                        <div class="review-actions">
                            <button type="button" class="mini-action-btn" onclick="startEditReview(${product.id}, ${rev.id})">✏️ تعديل</button>
                            <button type="button" class="mini-action-btn" onclick="deleteReview(${product.id}, ${rev.id})">🗑️ حذف</button>
                        </div>
                    </div>
                `).join("") : `<div class="empty-state"><p style="margin:0;">${t("no_reviews")}</p></div>`}
            </div>
        </div>
    </section>`;

    document.getElementById("reviewForm").addEventListener("submit", e => {
        e.preventDefault();
        const author = document.getElementById("reviewAuthor").value.trim();
        const rating = Number(document.getElementById("reviewRating").value) || 5;
        const comment = document.getElementById("reviewComment").value.trim();
        if (!author || !comment) return;

        const currentList = [...(reviewsByProduct[product.id] || [])];
        if (editingReviewId) {
            reviewsByProduct[product.id] = currentList.map(r => r.id === editingReviewId ? { ...r, author, rating, comment } : r);
            editingReviewId = null;
            toast("تم تحديث تقييمك وكومنتك!");
        } else {
            reviewsByProduct[product.id] = [...currentList, { id: Date.now(), author, rating, comment, date: new Date().toLocaleDateString() }];
            toast("تم إضافة تقييمك وكومنتك بنجاح!");
        }
        saveAll();
        renderProduct(product.id);
    });
}

function selectSize(size, btn) {
    selectedSize = size;
    document.querySelectorAll(".size-option").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
}

function addToCart(id, size = "Standard", qty = 1) {
    const product = shoeProducts.find(p => p.id === Number(id));
    if (!product) return;
    const existing = cart.find(item => item.id === product.id && item.size === size);
    if (existing) existing.quantity += Number(qty) || 1;
    else cart.push({ ...product, size, quantity: Number(qty) || 1 });
    saveAll();
    updateCartCount();
    toast("تمت الإضافة للسلة");
}

function updateCartCount() {
    const el = document.getElementById("cartCount");
    if (el) el.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function renderCart() {
    if (!cart.length) {
        app.innerHTML = `<section class="page"><h1 class="page-title">${t("shopping_bag")}</h1><div class="empty-state"><h2>${t("bag_empty_title")}</h2><a href="#shop" class="btn">${t("shop_now_btn")}</a></div></section>`;
        return;
    }
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    app.innerHTML = `
    <section class="page">
        <h1 class="page-title">${t("shopping_bag")}</h1>
        <div class="cart-list">
            ${cart.map(item => `
                <div class="cart-row">
                    <img src="${item.image}">
                    <div>
                        <h3>${escapeHtml(item.name)}</h3>
                        <p>${escapeHtml(item.brand)} · ${escapeHtml(String(item.size))}</p>
                        <strong>${money(item.price)}</strong>
                        <div class="qty-controls">
                            <button onclick="changeQty(${item.id},'${escapeHtml(String(item.size))}',-1)">−</button>
                            <span>${item.quantity}</span>
                            <button onclick="changeQty(${item.id},'${escapeHtml(String(item.size))}',1)">+</button>
                            <button class="remove-btn" onclick="removeCartItem(${item.id},'${escapeHtml(String(item.size))}')">حذف</button>
                        </div>
                    </div>
                    <strong>${money(item.price * item.quantity)}</strong>
                </div>
            `).join("")}
        </div>
        <div class="cart-summary">
            <div class="summary-line total"><span>الإجمالي</span><strong>${money(total)}</strong></div>
            <button class="btn" onclick="go('checkout')">${t("checkout_btn")}</button>
        </div>
    </section>`;
}

function changeQty(id, size, amount) {
    const item = cart.find(p => p.id === Number(id) && String(p.size) === String(size));
    if (!item) return;
    item.quantity += amount;
    if (item.quantity <= 0) return removeCartItem(id, size);
    saveAll();
    updateCartCount();
    renderCart();
}

function removeCartItem(id, size) {
    cart = cart.filter(p => !(p.id === Number(id) && String(p.size) === String(size)));
    saveAll();
    updateCartCount();
    renderCart();
}

function renderLogin() {
    app.innerHTML = `
    <section class="page">
        <div class="form-box">
            <h2>تسجيل الدخول</h2>
            <p>اختر نوع الحساب وأدخل رقم موبايلك</p>
            <div class="role-picker">
                <button type="button" class="role-btn ${loginRole === "buyer" ? "active" : ""}" onclick="setLoginRole('buyer', this)">مشتري</button>
                <button type="button" class="role-btn ${loginRole === "seller" ? "active" : ""}" onclick="setLoginRole('seller', this)">بائع</button>
                <button type="button" class="role-btn ${loginRole === "delivery" ? "active" : ""}" onclick="setLoginRole('delivery', this)">توصيل</button>
            </div>
            <form id="loginForm">
                <input id="loginEmail" type="email" placeholder="البريد الإلكتروني" required>
                <input id="loginPhone" type="tel" placeholder="رقم الموبايل (إلزامي)" required>
                <input id="loginPassword" type="password" placeholder="كلمة المرور" required>
                <button class="btn" type="submit">دخول</button>
            </form>
            <div class="form-switch">معندكش حساب؟ <a href="#register">إنشاء حساب</a></div>
        </div>
    </section>`;

    document.getElementById("loginForm").addEventListener("submit", e => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value.trim().toLowerCase();
        const phone = document.getElementById("loginPhone").value.trim();
        const password = document.getElementById("loginPassword").value;
        if (!phone) return toast("لازم تكتب رقم موبايلك");

        const user = accounts.find(a => a.email === email && a.password === password);
        if (!user) return toast("البيانات غير صحيحة");
        const userRole = user.role || "buyer";
        if (userRole !== loginRole) return toast(`هذا الحساب مسجل كـ ${userRole}`);

        const updatedUser = {
            ...user,
            phone,
            role: userRole,
            walletBalance: Number(user.walletBalance || 0),
            walletHistory: Array.isArray(user.walletHistory) ? user.walletHistory : []
        };
        syncUserAccount(updatedUser);
        saveAll();
        toast("تم تسجيل الدخول!");
        if (userRole === "seller") return go("seller");
        if (userRole === "delivery") return go("delivery");
        go("account");
    });
}

function setLoginRole(role, btn) {
    loginRole = role;
    document.querySelectorAll(".role-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
}

function renderRegister() {
    app.innerHTML = `
    <section class="page">
        <div class="form-box">
            <h2>إنشاء حساب جديد</h2>
            <p>رقم الموبايل والعنوان إلزامي لكل حساب (مشتري، بائع، أو دليفري)</p>
            <div class="role-picker">
                <button type="button" class="role-btn ${registerRole === "buyer" ? "active" : ""}" onclick="setRegisterRole('buyer', this)">مشتري</button>
                <button type="button" class="role-btn ${registerRole === "seller" ? "active" : ""}" onclick="setRegisterRole('seller', this)">بائع</button>
                <button type="button" class="role-btn ${registerRole === "delivery" ? "active" : ""}" onclick="setRegisterRole('delivery', this)">مندوب توصيل</button>
            </div>
            <form id="registerForm">
                <input id="registerName" placeholder="الاسم بالكامل / اسم المتجر" required>
                <input id="registerPhone" type="tel" placeholder="رقم الموبايل (إلزامي)" required>
                <input id="registerLocation" placeholder="المنطقة / العنوان (مثال: المعادي، مدينة نصر...)" required>
                <input id="registerEmail" type="email" placeholder="البريد الإلكتروني" required>
                <input id="registerPassword" type="password" placeholder="كلمة المرور (6 أحرف فأكثر)" minlength="6" required>
                <button class="btn" type="submit">إنشاء الحساب</button>
            </form>
            <div class="form-switch">لديك حساب بالفعل؟ <a href="#login">تسجيل الدخول</a></div>
        </div>
    </section>`;

    document.getElementById("registerForm").addEventListener("submit", e => {
        e.preventDefault();
        const name = document.getElementById("registerName").value.trim();
        const phone = document.getElementById("registerPhone").value.trim();
        const locationText = document.getElementById("registerLocation").value.trim();
        const email = document.getElementById("registerEmail").value.trim().toLowerCase();
        const password = document.getElementById("registerPassword").value;

        if (!phone || !locationText) return toast("رقم الموبايل والعنوان مطلوبين");
        if (accounts.some(a => a.email === email)) return toast("هذا البريد مسجل مسبقاً");

        const user = {
            id: Date.now(),
            name,
            phone,
            location: locationText,
            email,
            password,
            role: registerRole,
            walletBalance: 0,
            walletHistory: []
        };
        accounts.push(user);
        currentUser = user;
        saveAll();
        toast("تم إنشاء الحساب بنجاح!");
        if (registerRole === "seller") return go("seller");
        if (registerRole === "delivery") return go("delivery");
        go("account");
    });
}

function setRegisterRole(role, btn) {
    registerRole = role;
    document.querySelectorAll(".role-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
}

function renderUserWalletSection() {
    if (!currentUser || !["seller", "delivery"].includes(currentUser.role)) return "";
    const balance = Number(currentUser.walletBalance || 0);
    const history = Array.isArray(currentUser.walletHistory) ? currentUser.walletHistory : [];
    const badgeText = currentUser.role === "seller" ? "SELLER WALLET" : "COURIER WALLET";
    const titleText = currentUser.role === "seller" ? "محفظة البائع" : "محفظة التوصيل";
    const descText = currentUser.role === "seller"
        ? "تُضاف أرباح مبيعاتك هنا تلقائياً عند إتمام الطلب، ويمكنك سحبها في أي وقت."
        : "تُضاف رسوم التوصيل هنا عند تسليم الطلبات، ويمكنك سحبها في أي وقت.";

    return `
    <div class="profile-box" style="margin-top:24px;border-inline-start:4px solid var(--orange);">
        <span class="role-badge">${badgeText}</span>
        <h2>${titleText}: <span style="color:var(--orange);">${money(balance)}</span></h2>
        <p>${descText}</p>

        <form id="userWithdrawForm" style="margin-top:14px;">
            <input id="withdrawAmount" type="number" min="1" max="${Math.max(1, balance)}" placeholder="المبلغ المراد سحبه (بالجنيه)" required style="width:100%;padding:12px;margin-bottom:10px;border:1px solid #ddd;background:#fff;">
            <input id="withdrawTarget" value="${escapeHtml(currentUser.phone || "")}" placeholder="رقم المحفظة / الحساب المستلم" required style="width:100%;padding:12px;margin-bottom:10px;border:1px solid #ddd;background:#fff;">
            <button class="btn" type="submit">سحب الرصيد الآن</button>
        </form>

        <div style="margin-top:18px;">
            <h4 style="font-size:13px;font-weight:900;margin-bottom:8px;">سجل عمليات المحفظة</h4>
            ${history.length ? history.slice().reverse().map(h => `
                <p style="font-size:12px;padding:8px 10px;background:#fff;border:1px solid #e5e5e5;margin:6px 0;">
                    <strong>${escapeHtml(h.type === "credit" ? "+ إيداع" : "- سحب")}:</strong> ${money(h.amount)} — ${escapeHtml(h.note)} <span style="color:#888;">(${escapeHtml(h.date)})</span>
                </p>
            `).join("") : `<p style="font-size:12px;color:#777;">لا توجد عمليات بعد.</p>`}
        </div>
    </div>`;
}

function bindUserWithdrawForm(onDone) {
    const form = document.getElementById("userWithdrawForm");
    if (!form || !currentUser || !["seller", "delivery"].includes(currentUser.role)) return;

    form.addEventListener("submit", e => {
        e.preventDefault();
        const amount = Number(document.getElementById("withdrawAmount").value);
        const target = document.getElementById("withdrawTarget").value.trim();
        const balance = Number(currentUser.walletBalance || 0);

        if (!amount || amount <= 0) return toast("أدخل مبلغاً صحيحاً");
        if (amount > balance) return toast("الرصيد غير كافٍ للسحب");
        if (!target) return toast("أدخل رقم المحفظة أو الحساب");

        const history = Array.isArray(currentUser.walletHistory) ? currentUser.walletHistory : [];
        const updatedUser = {
            ...currentUser,
            walletBalance: balance - amount,
            walletHistory: [
                ...history,
                { id: Date.now(), type: "withdraw", amount, note: `سحب إلى ${target}`, date: new Date().toLocaleString() }
            ]
        };
        syncUserAccount(updatedUser);
        saveAll();
        toast(`تم سحب ${money(amount)} بنجاح!`);
        if (typeof onDone === "function") onDone();
    });
}

function renderAccount() {
    if (!currentUser) {
        app.innerHTML = `<section class="page"><div class="empty-state"><h2>أهلاً بك في SOUQ HUB</h2><a class="btn" href="#login">تسجيل الدخول</a><a class="btn btn-light" href="#register">إنشاء حساب</a></div></section>`;
        return;
    }

    app.innerHTML = `
    <section class="page">
        <h1 class="page-title">${t("my_account")}</h1>
        <div class="profile-box">
            <span class="role-badge">${escapeHtml(currentUser.role || "buyer")}</span>
            <h2>أهلاً، ${escapeHtml(currentUser.name)}</h2>
            <p><strong>البريد:</strong> ${escapeHtml(currentUser.email)}</p>
            <p><strong>رقم الموبايل:</strong> ${escapeHtml(currentUser.phone || "غير مسجل")}</p>
            <p><strong>المكان / العنوان:</strong> ${escapeHtml(currentUser.location || "غير مسجل")}</p>

            <form id="updateContactForm" style="margin-top:16px;">
                <input id="profPhone" type="tel" value="${escapeHtml(currentUser.phone || "")}" placeholder="رقم الموبايل (إلزامي)" required style="width:100%;padding:12px;margin-bottom:10px;border:1px solid #ddd;background:#fff;">
                <input id="profLocation" value="${escapeHtml(currentUser.location || "")}" placeholder="العنوان / المنطقة" required style="width:100%;padding:12px;margin-bottom:10px;border:1px solid #ddd;background:#fff;">
                <button class="btn" type="submit">حفظ الرقم والعنوان</button>
            </form>

            <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap;">
                ${currentUser.role === "seller" ? `<a class="btn" href="#seller">${t("nav_seller")}</a>` : ""}
                ${currentUser.role === "delivery" ? `<a class="btn" href="#delivery">${t("nav_delivery")}</a>` : ""}
                ${currentUser.role === "buyer" ? `<a class="btn" href="#orders">${t("my_orders")}</a>` : ""}
                <a class="btn btn-light" href="#wallet">👛 ${t("nav_admin")}</a>
                <button class="btn btn-orange" onclick="logout()">تسجيل الخروج</button>
            </div>
        </div>

        ${renderUserWalletSection()}
    </section>`;

    document.getElementById("updateContactForm").addEventListener("submit", e => {
        e.preventDefault();
        const phone = document.getElementById("profPhone").value.trim();
        const locationText = document.getElementById("profLocation").value.trim();
        if (!phone || !locationText) return toast("لازم تدخل رقم الموبايل والعنوان");
        syncUserAccount({ ...currentUser, phone, location: locationText });
        saveAll();
        toast("تم تحديث رقم الموبايل والمكان!");
        renderAccount();
    });

    bindUserWithdrawForm(() => renderAccount());
}

function renderSellerStudio() {
    if (!currentUser) return go("login");
    if ((currentUser.role || "buyer") !== "seller") {
        app.innerHTML = `<section class="page"><div class="empty-state"><h2>لوحة البائع متاحة لحسابات Seller فقط</h2><a class="btn" href="#account">حسابي</a></div></section>`;
        return;
    }

    if (!currentUser.phone) {
        return toast("لازم تضيف رقم موبايلك في حسابك أولاً!");
    }

    const sellerBalance = Number(currentUser.walletBalance || 0);

    app.innerHTML = `
    <section class="page">
        <h1 class="page-title">${t("nav_seller")}</h1>

        <div class="stats-grid" style="grid-template-columns:repeat(2,1fr);max-width:600px;">
            <div class="stat-card">
                <p>رصيد محفظتك كـ بائع</p>
                <h3 style="color:var(--orange)">${money(sellerBalance)}</h3>
            </div>
            <div class="stat-card">
                <p>سحب الأرباح</p>
                <a class="btn" style="margin-top:6px;padding:10px 14px;" href="#wallet">الذهاب للمحفظة والسحب ←</a>
            </div>
        </div>

        <div class="form-box" style="max-width:600px;margin:0;">
            <span class="role-badge">SELLER PICKUP INFO</span>
            <h2>إضافة إعلان جديد وتحديد مكان الاستلام</h2>
            <p>رقم البائع: <strong>${escapeHtml(currentUser.phone)}</strong></p>
            <form id="addShoeForm">
                <input id="shoeName" placeholder="اسم المنتج / الإعلان" required>
                <input id="shoeBrand" placeholder="الماركة أو النوع" required>
                <input id="shoePrice" type="number" min="1" placeholder="السعر (بالجنيه)" required>
                <input id="shoeSellerPhone" type="tel" value="${escapeHtml(currentUser.phone)}" placeholder="رقم موبايل البائع للتواصل والاستلام" required>
                <input id="shoeSellerLocation" value="${escapeHtml(currentUser.location || "")}" placeholder="مكان وعنوان البائع (عشان الدليفري يستلم منه)" required>
                <select id="shoeCategory" required>
                    ${CATEGORIES_META.map(c => `<option value="${c.key}">${c.icon} ${escapeHtml(currentLang === "ar" ? c.ar : c.en)}</option>`).join("")}
                </select>
                <select id="shoeCondition" required>
                    <option value="new">جديد</option>
                    <option value="like_new">كالجديد</option>
                    <option value="used">مستعمل</option>
                </select>
                <input id="shoeImage" type="url" value="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85" required>
                <textarea id="shoeDesc" rows="3" placeholder="تفاصيل المنتج..." required></textarea>
                <button class="btn" type="submit">نشر الإعلان</button>
            </form>
        </div>
    </section>`;

    document.getElementById("addShoeForm").addEventListener("submit", e => {
        e.preventDefault();
        const sellerPhone = document.getElementById("shoeSellerPhone").value.trim();
        const sellerLocation = document.getElementById("shoeSellerLocation").value.trim();
        if (!sellerPhone || !sellerLocation) return toast("رقم البائع ومكان الاستلام مطلوبين");

        shoeProducts.unshift({
            id: Date.now(),
            name: document.getElementById("shoeName").value.trim(),
            brand: document.getElementById("shoeBrand").value.trim().toUpperCase(),
            price: Number(document.getElementById("shoePrice").value),
            category: document.getElementById("shoeCategory").value,
            condition: document.getElementById("shoeCondition").value,
            badge: "NEW",
            image: document.getElementById("shoeImage").value.trim(),
            description: document.getElementById("shoeDesc").value.trim(),
            sellerEmail: currentUser.email,
            sellerName: currentUser.name,
            sellerPhone,
            sellerLocation
        });

        syncUserAccount({ ...currentUser, phone: sellerPhone, location: sellerLocation });
        saveAll();
        toast("تم نشر الإعلان وتحديد مكان الاستلام!");
        go("shop");
    });
}

function updateDeliveryStatus(orderId, nextStatus) {
    const targetOrder = orders.find(o => o.id === Number(orderId));
    if (!targetOrder) return;

    const alreadyDelivered = targetOrder.deliveryStatus === "Delivered";
    const shippingPayout = targetOrder.wantsDelivery !== false ? Number(targetOrder.shippingFee || DEFAULT_SHIPPING_FEE) : 0;

    if (nextStatus === "Delivered" && !alreadyDelivered && shippingPayout > 0 && currentUser?.role === "delivery") {
        creditUserWalletByEmail(currentUser.email, shippingPayout, `توصيل طلب #${targetOrder.id}`);
    }

    orders = orders.map(o => o.id === Number(orderId)
        ? {
            ...o,
            deliveryStatus: nextStatus,
            courierEmail: currentUser?.email || o.courierEmail,
            courierName: currentUser?.name || o.courierName || "Courier",
            courierPhone: currentUser?.phone || o.courierPhone || ""
        }
        : o
    );

    saveAll();
    toast(nextStatus === "Delivered" ? "تم التسليم وإضافة رسوم التوصيل لمحفظتك!" : "تم تحديث حالة التوصيل!");
    renderDeliveryHub();
}

function renderDeliveryHub() {
    if (!currentUser) return go("login");
    if ((currentUser.role || "buyer") !== "delivery") {
        app.innerHTML = `<section class="page"><div class="empty-state"><h2>لوحة التوصيل متاحة لمندوبي التوصيل فقط</h2><a class="btn" href="#account">حسابي</a></div></section>`;
        return;
    }

    const deliveryOrders = orders.filter(o => o.wantsDelivery !== false);
    const courierBalance = Number(currentUser.walletBalance || 0);

    app.innerHTML = `
    <section class="page">
        <h1 class="page-title">${t("nav_delivery")}</h1>
        <div class="stats-grid" style="grid-template-columns:repeat(2,1fr);max-width:600px;">
            <div class="stat-card">
                <p>رصيد محفظتك الحالي</p>
                <h3 style="color:var(--orange)">${money(courierBalance)}</h3>
            </div>
            <div class="stat-card">
                <p>إدارة المحفظة والسحب</p>
                <a class="btn" style="margin-top:6px;padding:10px 14px;" href="#wallet">فتح المحفظة والسحب ←</a>
            </div>
        </div>

        <p style="margin-bottom:20px;color:#555;">مندوب التوصيل: <strong>${escapeHtml(currentUser.name)}</strong> · رقم المندوب: <strong>${escapeHtml(currentUser.phone || "-")}</strong></p>

        ${deliveryOrders.length ? deliveryOrders.slice().reverse().map(order => {
            const firstItem = order.items?.[0] || {};
            const sellerName = order.sellerName || firstItem.sellerName || "البائع";
            const sellerPhone = order.sellerPhone || firstItem.sellerPhone || "غير مسجل";
            const sellerLocation = order.sellerLocation || firstItem.sellerLocation || "غير محدد";

            return `
            <div class="order-card">
                <h3>طلب #${order.id} <span class="status-pill ${order.deliveryStatus === "Delivered" ? "delivered" : "transit"}">${escapeHtml(order.deliveryStatus || "بانتظار الاستلام من البائع")}</span></h3>

                <div class="route-grid">
                    <div class="route-box">
                        <h4>1. استلام من البائع (Pickup)</h4>
                        <p><strong>البائع:</strong> ${escapeHtml(sellerName)}</p>
                        <p><strong>رقم البائع:</strong> <a href="tel:${escapeHtml(sellerPhone)}" style="color:var(--orange);font-weight:800;">${escapeHtml(sellerPhone)}</a></p>
                        <p><strong>مكان البائع:</strong> ${escapeHtml(sellerLocation)}</p>
                    </div>

                    <div class="route-box buyer-box">
                        <h4>2. توصيل إلى المشتري (Drop-off)</h4>
                        <p><strong>المشتري:</strong> ${escapeHtml(order.name)}</p>
                        <p><strong>رقم المشتري:</strong> <a href="tel:${escapeHtml(order.phone)}" style="color:var(--orange);font-weight:800;">${escapeHtml(order.phone)}</a></p>
                        <p><strong>عنوان المشتري:</strong> ${escapeHtml(order.address)} - ${escapeHtml(order.city)}</p>
                    </div>
                </div>

                <p><strong>المنتجات:</strong> ${order.items.map(i => `${escapeHtml(i.name)} × ${i.quantity}`).join("، ")}</p>
                <p><strong>الإجمالي المطلوب:</strong> ${money(order.total)} · <strong>رسوم التوصيل لك:</strong> ${money(order.shippingFee || DEFAULT_SHIPPING_FEE)}</p>

                <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px;">
                    <button class="btn btn-light" style="padding:10px 14px;" onclick="updateDeliveryStatus(${order.id}, 'تم الاستلام من البائع وجاري التوصيل')">استلمت من البائع (جاري التوصيل)</button>
                    <button class="btn" style="padding:10px 14px;" onclick="updateDeliveryStatus(${order.id}, 'Delivered')">تم التسليم للمشتري ✓</button>
                </div>
            </div>`;
        }).join("") : `<div class="empty-state"><h2>لا توجد طلبات توصيل حالياً</h2></div>`}
    </section>`;
}

function renderWalletHub() {
    if (currentUser && ["seller", "delivery"].includes(currentUser.role)) {
        const isSeller = currentUser.role === "seller";
        const balance = Number(currentUser.walletBalance || 0);
        app.innerHTML = `
        <section class="page">
            <h1 class="page-title">👛 ${isSeller ? "محفظة البائع" : "محفظة التوصيل"}</h1>
            <div class="stats-grid" style="grid-template-columns:repeat(2,1fr);max-width:600px;">
                <div class="stat-card">
                    <p>رصيدك الحالي</p>
                    <h3 style="color:var(--orange)">${money(balance)}</h3>
                </div>
                <div class="stat-card">
                    <p>حالة الحساب</p>
                    <h3>${isSeller ? "بائع" : "مندوب توصيل"}</h3>
                </div>
            </div>
            ${renderUserWalletSection()}
            <div style="margin-top:20px;">
                <a class="btn btn-light" href="#${isSeller ? "seller" : "delivery"}">العودة للوحة التحكم ←</a>
            </div>
        </section>`;
        bindUserWithdrawForm(() => renderWalletHub());
        return;
    }

    renderAdminDashboard();
}

function renderAdminDashboard() {
    const totalSales = orders.reduce((sum, o) => sum + Number(o.subtotal || o.total || 0), 0);
    const totalBuyerFee = orders.reduce((sum, o) => sum + (o.buyerFee != null ? Number(o.buyerFee) : Math.round(Number(o.subtotal || o.total || 0) * BUYER_FEE_RATE)), 0);
    const totalSellerFee = orders.reduce((sum, o) => sum + (o.sellerFee != null ? Number(o.sellerFee) : Math.round(Number(o.subtotal || o.total || 0) * SELLER_FEE_RATE)), 0);
    const walletBalance = Number(platformWallet.balance || 0);
    const history = Array.isArray(platformWallet.history) ? platformWallet.history : [];

    app.innerHTML = `
    <section class="page">
        <h1 class="page-title">👛 ${t("nav_admin")}</h1>
        <div class="stats-grid">
            <div class="stat-card"><p>إجمالي المبيعات</p><h3>${money(totalSales)}</h3></div>
            <div class="stat-card"><p>10% من المشتري</p><h3>${money(totalBuyerFee)}</h3></div>
            <div class="stat-card"><p>10% من البائع</p><h3>${money(totalSellerFee)}</h3></div>
            <div class="stat-card"><p>رصيد محفظتك على المنصة</p><h3 style="color:var(--orange)">${money(walletBalance)}</h3></div>
        </div>

        <div class="profile-box" style="margin-bottom:24px;">
            <span class="role-badge">OWNER WALLET</span>
            <h2>سحب من محفظة المنصة</h2>
            <form id="ownerWithdrawForm" style="margin-top:12px;">
                <input id="ownerWithdrawAmount" type="number" min="1" max="${Math.max(1, walletBalance)}" placeholder="مبلغ السحب من محفظتك" required style="width:100%;padding:12px;margin-bottom:10px;border:1px solid #ddd;background:#fff;">
                <input id="ownerWithdrawNote" placeholder="وجهة التحويل (مثال: فودافون كاش / إنستا باي)" required style="width:100%;padding:12px;margin-bottom:10px;border:1px solid #ddd;background:#fff;">
                <button class="btn" type="submit">تأكيد السحب</button>
            </form>
        </div>

        <div class="order-card">
            <h3>سجل حركات محفظة المنصة</h3>
            ${history.length ? history.slice().reverse().map(item => `
                <p><strong>${escapeHtml(item.type === "credit" ? "+ وارد" : "- مسحوب")}:</strong> ${money(item.amount)} — ${escapeHtml(item.note)} (${escapeHtml(item.date)})</p>
            `).join("") : `<p>لا توجد حركات بعد.</p>`}
        </div>
    </section>`;

    document.getElementById("ownerWithdrawForm").addEventListener("submit", e => {
        e.preventDefault();
        const amount = Number(document.getElementById("ownerWithdrawAmount").value);
        const note = document.getElementById("ownerWithdrawNote").value.trim();
        if (!amount || amount <= 0) return toast("أدخل مبلغاً صحيحاً");
        if (amount > walletBalance) return toast("رصيد محفظة المنصة غير كافٍ");

        platformWallet = {
            balance: walletBalance - amount,
            history: [
                ...history,
                { id: Date.now(), type: "withdraw", amount, note: note || "سحب من محفظة المنصة", date: new Date().toLocaleString() }
            ]
        };
        saveAll();
        toast(`تم سحب ${money(amount)} من محفظة المنصة!`);
        renderAdminDashboard();
    });
}

function logout() {
    currentUser = null;
    saveAll();
    go("account");
}

function renderCheckout() {
    if (!currentUser) {
        toast("سجل دخولك وأدخل رقم موبايلك أولاً");
        return go("login");
    }
    if (!cart.length) return go("cart");

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const initialBuyerFee = Math.round(subtotal * BUYER_FEE_RATE);
    const firstItem = cart[0] || {};
    const sellerName = firstItem.sellerName || "البائع";
    const sellerPhone = firstItem.sellerPhone || "01000000000";
    const sellerLocation = firstItem.sellerLocation || "القاهرة";

    app.innerHTML = `
    <section class="page">
        <h1 class="page-title">إتمام الطلب والتوصيل</h1>
        <div class="form-box" style="max-width:560px;">
            <h2>بيانات المشتري والتوصيل</h2>
            <form id="checkoutForm">
                <input id="checkoutName" value="${escapeHtml(currentUser.name)}" placeholder="اسم المشتري" required>
                <input id="checkoutPhone" type="tel" value="${escapeHtml(currentUser.phone || "")}" placeholder="رقم موبايل المشتري (إلزامي)" required>
                <input id="checkoutAddress" value="${escapeHtml(currentUser.location || "")}" placeholder="عنوان المشتري بالتفصيل" required>
                <input id="checkoutCity" placeholder="المدينة / المحافظة" required>

                <p class="size-label">نظام التوصيل</p>
                <div class="payment-box">
                    <label class="payment-option"><input type="radio" name="deliveryOption" value="delivery" checked style="width:auto;margin:0;"> توصيل عبر عامل توصيل البرنامج (${DEFAULT_SHIPPING_FEE} ج.م)</label>
                    <label class="payment-option"><input type="radio" name="deliveryOption" value="pickup" style="width:auto;margin:0;"> استلام مباشر من البائع (0 ج.م)</label>
                </div>

                <p class="size-label">طريقة الدفع</p>
                <div class="payment-box">
                    <label class="payment-option"><input type="radio" name="paymentMethod" value="Cash on Delivery (COD)" checked style="width:auto;margin:0;"> الدفع عند الاستلام</label>
                    <label class="payment-option"><input type="radio" name="paymentMethod" value="Vodafone Cash / InstaPay" style="width:auto;margin:0;"> فودافون كاش / إنستا باي</label>
                    <label class="payment-option"><input type="radio" name="paymentMethod" value="Card" style="width:auto;margin:0;"> فيزا / ماستركارد</label>
                </div>

                <div class="summary-line"><span>قيمة المنتجات</span><strong>${money(subtotal)}</strong></div>
                <div class="summary-line"><span>رسوم المنصة (10%)</span><strong id="checkoutBuyerFeeText">${money(initialBuyerFee)}</strong></div>
                <div class="summary-line"><span>رسوم التوصيل</span><strong id="checkoutShippingText">${money(DEFAULT_SHIPPING_FEE)}</strong></div>
                <div class="summary-line total"><span>الإجمالي</span><strong id="checkoutGrandTotalText">${money(subtotal + initialBuyerFee + DEFAULT_SHIPPING_FEE)}</strong></div>
                <button class="btn" type="submit">تأكيد الطلب</button>
            </form>
        </div>
    </section>`;

    const updateCheckoutSummary = () => {
        const wantsDel = document.querySelector('input[name="deliveryOption"]:checked')?.value === "delivery";
        const ship = wantsDel ? DEFAULT_SHIPPING_FEE : 0;
        const bFee = Math.round(subtotal * BUYER_FEE_RATE);
        const shipEl = document.getElementById("checkoutShippingText");
        const feeEl = document.getElementById("checkoutBuyerFeeText");
        const totalEl = document.getElementById("checkoutGrandTotalText");
        if (shipEl) shipEl.textContent = money(ship);
        if (feeEl) feeEl.textContent = money(bFee);
        if (totalEl) totalEl.textContent = money(subtotal + bFee + ship);
    };

    document.querySelectorAll('input[name="deliveryOption"]').forEach(radio => {
        radio.addEventListener("change", updateCheckoutSummary);
    });

    document.getElementById("checkoutForm").addEventListener("submit", e => {
        e.preventDefault();
        const buyerPhone = document.getElementById("checkoutPhone").value.trim();
        if (!buyerPhone) return toast("رقم المشتري إلزامي");

        const wantsDelivery = document.querySelector('input[name="deliveryOption"]:checked')?.value === "delivery";
        const shippingFee = wantsDelivery ? DEFAULT_SHIPPING_FEE : 0;
        const buyerFee = Math.round(subtotal * BUYER_FEE_RATE);
        const sellerFee = Math.round(subtotal * SELLER_FEE_RATE);
        const platformCommission = buyerFee + sellerFee;
        const grandTotal = subtotal + buyerFee + shippingFee;
        const orderId = Date.now();

        syncUserAccount({ ...currentUser, phone: buyerPhone });

        platformWallet = {
            balance: Number(platformWallet.balance || 0) + platformCommission,
            history: [
                ...(Array.isArray(platformWallet.history) ? platformWallet.history : []),
                { id: Date.now() + 1, type: "credit", amount: platformCommission, note: `عمولة طلب #${orderId}`, date: new Date().toLocaleString() }
            ]
        };

        const sellerPayoutsByEmail = {};
        cart.forEach(item => {
            const lineTotal = Number(item.price || 0) * Number(item.quantity || 1);
            const netForSeller = Math.max(0, lineTotal - Math.round(lineTotal * SELLER_FEE_RATE));
            const sEmail = item.sellerEmail;
            if (sEmail) {
                sellerPayoutsByEmail[sEmail] = (sellerPayoutsByEmail[sEmail] || 0) + netForSeller;
            }
        });

        Object.entries(sellerPayoutsByEmail).forEach(([sEmail, netAmount]) => {
            creditUserWalletByEmail(sEmail, netAmount, `مبيعات طلب #${orderId}`);
        });

        orders.push({
            id: orderId,
            email: currentUser.email,
            name: document.getElementById("checkoutName").value.trim(),
            phone: buyerPhone,
            address: document.getElementById("checkoutAddress").value.trim(),
            city: document.getElementById("checkoutCity").value.trim(),
            wantsDelivery,
            deliveryStatus: wantsDelivery ? "بانتظار استلام المندوب من البائع" : "استلام من البائع",
            sellerName,
            sellerPhone,
            sellerLocation,
            payment: document.querySelector('input[name="paymentMethod"]:checked')?.value || "Cash on Delivery",
            subtotal,
            shippingFee,
            buyerFee,
            sellerFee,
            platformCommission,
            items: [...cart],
            total: grandTotal,
            date: new Date().toLocaleString()
        });

        cart = [];
        saveAll();
        updateCartCount();
        toast("تم تأكيد الطلب وإضافة المستحقات للمحافظ!");
        go("orders");
    });
}

function renderOrders() {
    if (!currentUser) return go("login");
    const myOrders = orders.filter(o => o.email === currentUser.email);

    app.innerHTML = `
    <section class="page">
        <h1 class="page-title">${t("my_orders")}</h1>
        ${myOrders.length ? myOrders.slice().reverse().map(order => `
            <div class="order-card">
                <h3>طلب #${order.id} <span class="status-pill ${order.deliveryStatus === "Delivered" ? "delivered" : "transit"}">${escapeHtml(order.deliveryStatus || "")}</span></h3>
                <p><strong>مكان استلام البائع:</strong> ${escapeHtml(order.sellerLocation || "-")} · <strong>رقم البائع:</strong> ${escapeHtml(order.sellerPhone || "-")}</p>
                <p><strong>عنوان التوصيل:</strong> ${escapeHtml(order.address)} - ${escapeHtml(order.city)} · <strong>رقمك:</strong> ${escapeHtml(order.phone)}</p>
                <p><strong>الإجمالي:</strong> ${money(order.total)}</p>
            </div>
        `).join("") : `<div class="empty-state"><h2>لا توجد طلبات بعد</h2><a href="#shop" class="btn">${t("shop_now_btn")}</a></div>`}
    </section>`;
}

function renderCurrent() {
    try {
        updateRoleNavs();
        applyLanguage();
        const route = getRoute();
        if (route === "home") return renderHome();
        if (route.startsWith("shop")) return renderShop(route.includes("?category=") ? route.split("?category=")[1] : "all");
        if (route.startsWith("product/")) {
            reviewStarFilter = 0;
            editingReviewId = null;
            return renderProduct(route.split("/")[1]);
        }
        if (route === "cart") return renderCart();
        if (route === "login") return renderLogin();
        if (route === "register") return renderRegister();
        if (route === "account") return renderAccount();
        if (route === "seller") return renderSellerStudio();
        if (route === "delivery") return renderDeliveryHub();
        if (route === "wallet" || route === "admin") return renderWalletHub();
        if (route === "checkout") return renderCheckout();
        if (route === "orders") return renderOrders();
        renderHome();
    } catch (err) {
        app.innerHTML = `<section class="page"><div class="empty-state"><h2>حدث خطأ</h2><p>${escapeHtml(err.message)}</p></div></section>`;
    }
}

document.getElementById("langSelect")?.addEventListener("change", function() {
    currentLang = translations[this.value] ? this.value : "ar";
    saveAll();
    renderCurrent();
});

const searchBar = document.getElementById("searchBar");
const searchInput = document.getElementById("searchInput");
const cameraModal = document.getElementById("cameraModal");
const cameraVideo = document.getElementById("cameraVideo");
const cameraCanvas = document.getElementById("cameraCanvas");
const cameraPreviewWrap = document.getElementById("cameraPreviewWrap");
const cameraPreviewImg = document.getElementById("cameraPreviewImg");
const cameraFileInput = document.getElementById("cameraFileInput");

function stopCameraStream() {
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
    }
}

async function openCameraSearchModal() {
    capturedImageData = "";
    if (cameraPreviewWrap) cameraPreviewWrap.style.display = "none";
    if (cameraModal) cameraModal.style.display = "flex";
    if (navigator.mediaDevices?.getUserMedia && cameraVideo) {
        try {
            cameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
            cameraVideo.srcObject = cameraStream;
        } catch {
            toast("يمكنك رفع صورة من الجهاز");
        }
    }
}

document.getElementById("cameraSearchBtn")?.addEventListener("click", openCameraSearchModal);
document.getElementById("closeCameraModal")?.addEventListener("click", () => {
    stopCameraStream();
    if (cameraModal) cameraModal.style.display = "none";
});

document.getElementById("snapPhotoBtn")?.addEventListener("click", () => {
    if (!cameraVideo?.videoWidth || !cameraCanvas) return cameraFileInput?.click();
    cameraCanvas.width = cameraVideo.videoWidth;
    cameraCanvas.height = cameraVideo.videoHeight;
    cameraCanvas.getContext("2d").drawImage(cameraVideo, 0, 0);
    capturedImageData = cameraCanvas.toDataURL("image/jpeg", 0.8);
    if (cameraPreviewImg) cameraPreviewImg.src = capturedImageData;
    if (cameraPreviewWrap) cameraPreviewWrap.style.display = "block";
});

document.getElementById("uploadPhotoBtn")?.addEventListener("click", () => cameraFileInput?.click());
cameraFileInput?.addEventListener("change", e => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
        capturedImageData = String(reader.result || "");
        if (cameraPreviewImg) cameraPreviewImg.src = capturedImageData;
        if (cameraPreviewWrap) cameraPreviewWrap.style.display = "block";
    };
    reader.readAsDataURL(file);
});

document.getElementById("applyCameraSearchBtn")?.addEventListener("click", () => {
    const hint = document.getElementById("cameraQueryHint")?.value.trim() || "phone";
    stopCameraStream();
    if (cameraModal) cameraModal.style.display = "none";
    searchBar?.classList.add("show");
    if (searchInput) searchInput.value = hint;
    runSearchQuery(hint);
});

function runSearchQuery(rawQuery) {
    const q = String(rawQuery || "").toLowerCase().trim();
    const found = shoeProducts.filter(p => !q || p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    app.innerHTML = `<section class="shop-section"><div class="section-title"><div><h2>${escapeHtml(q || "Search")}</h2></div><span>${found.length}</span></div><div class="product-grid">${found.map(productCard).join("")}</div></section>`;
}

document.getElementById("searchBtn")?.addEventListener("click", () => {
    searchBar?.classList.toggle("show");
    searchInput?.focus();
});

document.getElementById("searchClose")?.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    searchBar?.classList.remove("show");
    renderCurrent();
});

searchInput?.addEventListener("input", () => runSearchQuery(searchInput.value));

window.addEventListener("hashchange", () => {
    stopCameraStream();
    if (cameraModal) cameraModal.style.display = "none";
    renderCurrent();
});

let deferredInstallPrompt = null;
const installAppBtn = document.getElementById("installAppBtn");
const installGuideModal = document.getElementById("installGuideModal");

window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault();
    deferredInstallPrompt = e;
});

installAppBtn?.addEventListener("click", async () => {
    if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        await deferredInstallPrompt.userChoice;
        deferredInstallPrompt = null;
        return;
    }
    if (installGuideModal) installGuideModal.style.display = "flex";
});

document.getElementById("closeInstallGuide")?.addEventListener("click", () => {
    if (installGuideModal) installGuideModal.style.display = "none";
});
document.getElementById("gotInstallGuideBtn")?.addEventListener("click", () => {
    if (installGuideModal) installGuideModal.style.display = "none";
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
}

updateRoleNavs();
updateCartCount();
applyLanguage();
renderCurrent();