// ---------------------------------------------------------------------------
// Menu mobile
// ---------------------------------------------------------------------------
(function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const icon = document.getElementById("mobile-menu-icon");
  const menu = document.getElementById("nav-links-mobile");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");
    menu.classList.toggle("hidden");
    icon.innerHTML = isOpen ? "&#9776;" : "&#10005;";
  });

  // Ferme le menu mobile après un clic sur un lien
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      icon.innerHTML = "&#9776;";
    });
  });
})();

// ---------------------------------------------------------------------------
// Scrollspy : sur la page d'accueil, met en évidence le lien de nav
// correspondant à la section actuellement visible. Sur les autres pages
// (blog, don...), c'est le chemin de l'URL qui détermine le lien actif.
// ---------------------------------------------------------------------------
(function initScrollspy() {
  const homeSections = ["home", "about", "donate", "blog", "contact"];
  const navLinks = document.querySelectorAll(".nav-link");
  const isHome = window.location.pathname === "/";

  function setActive(id) {
    navLinks.forEach((link) => {
      const linkId = link.dataset.navId;
      const active = linkId === id;
      link.classList.toggle("text-vice-green-700", active);
      link.classList.toggle("text-gray-800", !active);
    });
  }

  if (isHome) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.2 }
    );

    homeSections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  } else {
    // Détermine le lien actif à partir du chemin de l'URL.
    const path = window.location.pathname;
    let activeId = null;
    if (path.startsWith("/blog")) activeId = "blog";
    if (path.startsWith("/don")) activeId = "donate";
    if (activeId) setActive(activeId);
  }
})();

// ---------------------------------------------------------------------------
// Compteurs animés (section À propos) : compte de 0 jusqu'à la valeur cible
// quand l'élément entre dans le viewport.
// ---------------------------------------------------------------------------
(function initCounters() {
  const counters = document.querySelectorAll(".counter");
  if (!counters.length) return;

  const DURATION_MS = 1200;

  function animateCounter(el) {
    const target = parseInt(el.dataset.counterTarget, 10) || 0;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / DURATION_MS, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((el) => observer.observe(el));
})();
