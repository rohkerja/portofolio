/* Roh — portfolio interactions */
(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  /* Header background on scroll */
  const header = document.getElementById("site-header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Mobile menu */
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.getElementById("nav-links");
  const menuLinks = navLinks.querySelectorAll("a");

  const setMenu = (open) => {
    navLinks.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("nav-open", open);
  };

  toggle.addEventListener("click", () => {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });

  menuLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      toggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) setMenu(false);
  });

  /* Footer year */
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* Reveal on scroll */
  const revealItems = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((el) => el.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealItems.forEach((el) => revealObserver.observe(el));
  }

  /* Active section in navigation */
  const navAnchors = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const sections = navAnchors
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  let spyTicking = false;
  const updateActive = () => {
    spyTicking = false;
    const marker = window.scrollY + window.innerHeight * 0.35;
    let current = null;

    sections.forEach((section) => {
      if (section.offsetTop <= marker) current = section;
    });

    navAnchors.forEach((link) => {
      const isActive = current && link.getAttribute("href") === `#${current.id}`;
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  const requestSpy = () => {
    if (spyTicking) return;
    spyTicking = true;
    window.requestAnimationFrame(updateActive);
  };

  updateActive();
  window.addEventListener("scroll", requestSpy, { passive: true });
  window.addEventListener("resize", requestSpy);

  /* Pointer spotlight */
  const spotlight = document.querySelector(".spotlight");
  if (spotlight && finePointer && !reduceMotion) {
    let px = 50;
    let py = 18;
    let frame = null;

    window.addEventListener(
      "pointermove",
      (event) => {
        px = (event.clientX / window.innerWidth) * 100;
        py = (event.clientY / window.innerHeight) * 100;
        if (frame) return;
        frame = window.requestAnimationFrame(() => {
          spotlight.style.setProperty("--mx", `${px}%`);
          spotlight.style.setProperty("--my", `${py}%`);
          frame = null;
        });
      },
      { passive: true }
    );
  }

  /* Subtle 3D tilt on the hero code card */
  const card = document.querySelector("[data-tilt]");
  if (card && finePointer && !reduceMotion) {
    const stage = card.closest(".hero-visual");

    stage.addEventListener(
      "pointermove",
      (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `rotateY(${(x * 7).toFixed(2)}deg) rotateX(${(-y * 7).toFixed(2)}deg)`;
      },
      { passive: true }
    );

    stage.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  }
})();
