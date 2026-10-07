/* ============================================================
   Parth Shirke Portfolio — script.js
   Features: sticky nav, active link, hamburger (pill nav),
             scroll animations, skill bars, Web3Forms contact,
             hero parallax, cursor-trail effect
============================================================ */

(function () {
  "use strict";

  /* ── DOM refs ── */
  const navbar    = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navPill   = document.getElementById("navLinks");       // the pill container
  const allLinks  = navPill ? navPill.querySelectorAll("a[href^='#']") : [];
  const sections  = document.querySelectorAll("section[id]");
  const form      = document.getElementById("contactForm");
  const formBtn   = document.getElementById("formSubmit");
  const formOk    = document.getElementById("formSuccess");
  const formErr   = document.getElementById("formError");

  /* ══════════════════════════════════════════
     1. NAVBAR — scroll style + active link
  ══════════════════════════════════════════ */
  function onScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > 30);

    let current = "";
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      if (window.scrollY >= top) current = sec.id;
    });

    allLinks.forEach(a => {
      a.classList.remove("active");
      if (a.getAttribute("href") === "#" + current) {
        a.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ══════════════════════════════════════════
     2. HAMBURGER MENU (mobile) — pill nav
  ══════════════════════════════════════════ */
  if (hamburger && navPill) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("open");
      navPill.classList.toggle("open");
    });

    allLinks.forEach(a => {
      a.addEventListener("click", function () {
        hamburger.classList.remove("open");
        navPill.classList.remove("open");
      });
    });

    document.addEventListener("click", function (e) {
      if (!navbar.contains(e.target)) {
        hamburger.classList.remove("open");
        navPill.classList.remove("open");
      }
    });
  }

  /* ══════════════════════════════════════════
     3. SMOOTH SCROLL
  ══════════════════════════════════════════ */
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  /* ══════════════════════════════════════════
     4. INTERSECTION OBSERVER — fade-in & timelines
  ══════════════════════════════════════════ */
  const fadeEls     = document.querySelectorAll(".fade-in");
  const timelineEls = document.querySelectorAll(".timeline-item");

  const fadeObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.10 }
  );
  fadeEls.forEach(el => fadeObserver.observe(el));

  const timelineObserver = new IntersectionObserver(
    entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, i * 120);
          timelineObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  timelineEls.forEach(el => timelineObserver.observe(el));

  /* ══════════════════════════════════════════
     5. SKILL BARS — animate on scroll
  ══════════════════════════════════════════ */
  const skillFills = document.querySelectorAll(".skill-fill");

  const skillObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          fill.style.width = fill.getAttribute("data-width") + "%";
          skillObserver.unobserve(fill);
        }
      });
    },
    { threshold: 0.4 }
  );
  skillFills.forEach(fill => skillObserver.observe(fill));

  /* ══════════════════════════════════════════
     6. CONTACT FORM — Web3Forms integration
     Messages land directly in your inbox.
     Get your free access key at: web3forms.com
  ══════════════════════════════════════════ */
  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const name  = document.getElementById("fname").value.trim();
      const email = document.getElementById("femail").value.trim();
      const msg   = document.getElementById("fmessage").value.trim();

      if (!name || !email || !msg) {
        showFormError("Please fill in your name, email, and message.");
        return;
      }

      // Button loading state
      formBtn.disabled = true;
      formBtn.innerHTML = "<span>Sending&hellip;</span><span>&#8987;</span>";
      if (formErr) formErr.style.display = "none";

      try {
        const formData = new FormData(form);
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          form.reset();
          formBtn.style.display = "none";
          if (formOk) formOk.style.display = "block";
        } else {
          showFormError(data.message || "Something went wrong. Please try again.");
          resetBtn();
        }
      } catch (err) {
        showFormError("Network error. Please email me directly at parthpshirke1811@gmail.com");
        resetBtn();
      }
    });
  }

  function showFormError(msg) {
    if (formErr) {
      formErr.textContent = "\u26A0 " + msg;
      formErr.style.display = "block";
    }
  }

  function resetBtn() {
    if (formBtn) {
      formBtn.disabled = false;
      formBtn.innerHTML = "<span>Send Message</span><span>&#10148;</span>";
    }
  }

  /* ══════════════════════════════════════════
     7. HERO — mouse parallax on photo ring
  ══════════════════════════════════════════ */
  const heroSection = document.getElementById("hero");
  const photoRing   = document.querySelector(".hero-photo-ring");

  if (heroSection && photoRing) {
    heroSection.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const cx   = rect.width  / 2;
      const cy   = rect.height / 2;
      const dx   = (e.clientX - rect.left - cx) / cx;
      const dy   = (e.clientY - rect.top  - cy) / cy;
      photoRing.style.transform =
        "translate(" + (dx * 8) + "px, " + (dy * 8) + "px)";
    });

    heroSection.addEventListener("mouseleave", function () {
      photoRing.style.transform = "translate(0, 0)";
    });
  }

  /* ══════════════════════════════════════════
     8. TECH TAG hover — subtle glow ripple
  ══════════════════════════════════════════ */
  document.querySelectorAll(".tech-tag, .chip").forEach(tag => {
    tag.addEventListener("mouseenter", function () {
      this.style.transition = "all 0.2s ease";
    });
  });

  /* ══════════════════════════════════════════
     9. CARD entrance — stagger children
  ══════════════════════════════════════════ */
  const cardObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll(
            ".project-card, .exp-card, .skill-category, .about-card"
          );
          cards.forEach((card, i) => {
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, i * 80);
          });
          cardObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.06 }
  );

  document.querySelectorAll(
    ".projects-grid, .experience-grid, .skills-categories, .about-cards"
  ).forEach(grid => {
    // Set initial state
    grid.querySelectorAll(".project-card, .exp-card, .skill-category, .about-card").forEach(card => {
      card.style.opacity = "0";
      card.style.transform = "translateY(24px)";
      card.style.transition = "opacity 0.55s ease, transform 0.55s ease";
    });
    cardObserver.observe(grid);
  });

})();
