/* ============================================================
   Parth Shirke Portfolio — script.js
   Features: sticky nav, active links, hamburger, typewriter,
             counter animation, scroll fade-ins, skill bars,
             staggered cards, Web3Forms contact, parallax ring
============================================================ */

(function () {
  "use strict";

  /* ── DOM refs ── */
  const navbar    = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navPill   = document.getElementById("navLinks");
  const allLinks  = navPill ? navPill.querySelectorAll("a[href^='#']") : [];
  const sections  = document.querySelectorAll("section[id]");
  const form      = document.getElementById("contactForm");
  const formBtn   = document.getElementById("formSubmit");
  const formOk    = document.getElementById("formSuccess");
  const formErr   = document.getElementById("formError");

  /* ══════════════════════════════════════════
     1. NAVBAR — scroll class + active link
  ══════════════════════════════════════════ */
  function onScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
    let current = "";
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 110) current = sec.id;
    });
    allLinks.forEach(a => {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ══════════════════════════════════════════
     2. HAMBURGER (mobile)
  ══════════════════════════════════════════ */
  if (hamburger && navPill) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("open");
      navPill.classList.toggle("open");
    });
    [...allLinks].forEach(a =>
      a.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navPill.classList.remove("open");
      })
    );
    document.addEventListener("click", e => {
      if (!navbar.contains(e.target)) {
        hamburger.classList.remove("open");
        navPill.classList.remove("open");
      }
    });
  }

  /* ══════════════════════════════════════════
     3. SMOOTH SCROLL
  ══════════════════════════════════════════ */
  document.querySelectorAll("a[href^='#']").forEach(a =>
    a.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth" }); }
    })
  );

  /* ══════════════════════════════════════════
     4. TYPEWRITER EFFECT
  ══════════════════════════════════════════ */
  const tw = document.getElementById("typewriterText");
  if (tw) {
    const phrases = [
      "Building AI-powered solutions",
      "B.Tech CSE · 4th Year @ GCE Kolhapur",
      "Secretary, Algobot Technical Club",
      "Technical Member, CSESA 2025–2026",
      "Creator of VittaBodh & StocksGROW",
      "Exploring Machine Learning & Deep Learning",
    ];
    let pi = 0, ci = 0, deleting = false;

    function tick() {
      const phrase = phrases[pi];
      tw.textContent = deleting ? phrase.slice(0, ci--) : phrase.slice(0, ci++);

      let delay = deleting ? 45 : 75;
      if (!deleting && ci > phrase.length) {
        delay = 1800; deleting = true;
      } else if (deleting && ci < 0) {
        deleting = false; ci = 0;
        pi = (pi + 1) % phrases.length;
        delay = 400;
      }
      setTimeout(tick, delay);
    }
    setTimeout(tick, 900);
  }

  /* ══════════════════════════════════════════
     5. COUNTER ANIMATION on stats
  ══════════════════════════════════════════ */
  function animateCounters() {
    document.querySelectorAll(".hero-stat .num[data-count]").forEach(el => {
      const target = parseInt(el.getAttribute("data-count"), 10);
      let current = 0;
      const step = Math.ceil(target / 30);
      const interval = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current + "+";
        if (current >= target) clearInterval(interval);
      }, 40);
    });
  }
  const heroEl = document.getElementById("hero");
  if (heroEl) {
    const co = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { animateCounters(); co.disconnect(); }
    }, { threshold: 0.3 });
    co.observe(heroEl);
  }

  /* ══════════════════════════════════════════
     6. INTERSECTION OBSERVER — fade-in + timeline
  ══════════════════════════════════════════ */
  const fadeObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("visible"); fadeObs.unobserve(e.target); }
    });
  }, { threshold: 0.10 });
  document.querySelectorAll(".fade-in").forEach(el => fadeObs.observe(el));

  const timelineObs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), i * 130);
        timelineObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".timeline-item").forEach(el => timelineObs.observe(el));

  /* ══════════════════════════════════════════
     7. SKILL BARS — animate on scroll
  ══════════════════════════════════════════ */
  const skillObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.getAttribute("data-width") + "%";
        skillObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll(".skill-fill").forEach(el => skillObs.observe(el));

  /* ══════════════════════════════════════════
     8. STAGGERED CARD ANIMATIONS
  ══════════════════════════════════════════ */
  const cardGridObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll(
          ".project-card, .exp-card, .skill-category, .about-card"
        );
        cards.forEach((card, i) => {
          card.style.transition = `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`;
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, i * 80);
        });
        cardGridObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06 });

  document.querySelectorAll(".projects-grid, .experience-grid, .skills-categories, .about-cards").forEach(grid => {
    grid.querySelectorAll(".project-card, .exp-card, .skill-category, .about-card").forEach(card => {
      card.style.opacity = "0";
      card.style.transform = "translateY(22px)";
    });
    cardGridObs.observe(grid);
  });

  /* ══════════════════════════════════════════
     9. HERO RING PARALLAX (mouse tracking)
  ══════════════════════════════════════════ */
  const heroSec   = document.getElementById("hero");
  const initialsW = document.querySelector(".hero-initials-wrap");
  if (heroSec && initialsW) {
    heroSec.addEventListener("mousemove", function (e) {
      const { width, height, left, top } = this.getBoundingClientRect();
      const dx = ((e.clientX - left) / width  - 0.5) * 16;
      const dy = ((e.clientY - top)  / height - 0.5) * 16;
      initialsW.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    heroSec.addEventListener("mouseleave", () => {
      initialsW.style.transform = "translate(0,0)";
    });
  }

  /* ══════════════════════════════════════════
     10. CONTACT FORM — Web3Forms
  ══════════════════════════════════════════ */
  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const name  = (document.getElementById("fname")?.value || "").trim();
      const email = (document.getElementById("femail")?.value || "").trim();
      const msg   = (document.getElementById("fmessage")?.value || "").trim();

      if (!name) { showErr("Please enter your name."); return; }
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showErr("Please enter a valid email address."); return;
      }
      if (!msg) { showErr("Please write a message."); return; }

      formBtn.disabled = true;
      formBtn.innerHTML = "<span>Sending&hellip;</span><span>&#8987;</span>";
      if (formErr) formErr.style.display = "none";

      try {
        const res  = await fetch("https://api.web3forms.com/submit", {
          method: "POST", body: new FormData(form),
        });
        const data = await res.json();

        if (data.success) {
          form.reset();
          if (formBtn) formBtn.style.display = "none";
          if (formOk)  formOk.style.display  = "block";
        } else {
          showErr(data.message || "Something went wrong. Please try again.");
          resetBtn();
        }
      } catch {
        showErr("Network error — please email me directly at parthpshirke1811@gmail.com");
        resetBtn();
      }
    });
  }

  function showErr(msg) {
    if (formErr) { formErr.textContent = "\u26A0 " + msg; formErr.style.display = "block"; }
  }
  function resetBtn() {
    if (formBtn) { formBtn.disabled = false; formBtn.innerHTML = "<span>Send Message</span><span>&#10148;</span>"; }
  }

  /* ══════════════════════════════════════════
     11. ACTIVE NAV ON CLICK (instant feedback)
  ══════════════════════════════════════════ */
  allLinks.forEach(a => {
    a.addEventListener("click", function () {
      allLinks.forEach(x => x.classList.remove("active"));
      this.classList.add("active");
    });
  });

})();
