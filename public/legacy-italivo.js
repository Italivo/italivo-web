/* ========================================
   Italivo Legacy JavaScript
   ======================================== */
console.log("ITALIVO SCRIPT LOADING");
initMobileMenu();
initScrollAnimations();
initSmoothScroll();
initNavbarScroll();

/* Mobile Menu */
function initMobileMenu() {
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    document.body.style.overflow = mobileMenu.classList.contains("active")
      ? "hidden"
      : "";
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
}

/* Scroll Animations */
function initScrollAnimations() {
  const animateElements = document.querySelectorAll(
    ".about-container, .method-card, .path-card, .features-content, " +
      ".features-image, .package-card, .testimonial-card, .cta-content"
  );

  animateElements.forEach((el) => {
    el.classList.add("animate-on-scroll");
  });

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });

  // Stagger animations
  const staggerGroups = [
    ".method-grid .method-card",
    ".paths-grid .path-card",
    ".packages-grid .package-card",
    ".testimonials-grid .testimonial-card",
  ];

  staggerGroups.forEach((selector) => {
    const items = document.querySelectorAll(selector);
    items.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.1}s`;
    });
  });
}

/* Smooth Scroll */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        const navHeight = document.querySelector(".navbar").offsetHeight;
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

/* Navbar Scroll Effect */
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 10) {
      navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.08)";
    }
  });
}
