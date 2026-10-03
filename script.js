/* ============================================================
   Parth Shirke Portfolio — script.js
   Features: sticky nav, active link, hamburger,
             scroll animations, skill bars, contact form
============================================================ */

(function () {
  "use strict";

  /* ── DOM refs ── */
  const navbar    = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks  = document.getElementById("navLinks");
  const allLinks  = navLinks.querySelectorAll("a[href^='#']");
  const sections  = document.querySelectorAll("section[id]");
  const form      = document.getElementById("contactForm");
  const formBtn   = document.getElementById("formSubmit");
  const formOk    = document.getElementById("formSuccess");

  /* ══════════════════════════════════════════
     1. NAVBAR — scroll style + active link
  ══════════════════════════════════════════ */
  function onScroll() {
    /* Scrolled class for glass effect */
    navbar.classList.toggle("scrolled", window.scrollY > 30);

    /* Active nav link based on visible section */
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
  onScroll(); /* run once on load */

  /* ══════════════════════════════════════════
     2. HAMBURGER MENU (mobile)
  ══════════════════════════════════════════ */
  hamburger.addEventListener("click", function () {
    this.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  /* Close menu when a link is clicked */
  allLinks.forEach(a => {
    a.addEventListener("click", function () {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });

  /* Close menu when clicking outside */
  document.addEventListener("click", function (e) {
    if (!navbar.contains(e.target)) {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    }
  });

  /* ══════════════════════════════════════════
     3. SMOOTH SCROLL for all nav links
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
  const fadeEls    = document.querySelectorAll(".fade-in");
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
    { threshold: 0.12 }
  );

  fadeEls.forEach(el => fadeObserver.observe(el));

  const timelineObserver = new IntersectionObserver(
    entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, i * 150);
          timelineObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
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
          const target = fill.getAttribute("data-width");
          fill.style.width = target + "%";
          skillObserver.unobserve(fill);
        }
      });
    },
    { threshold: 0.5 }
  );

  skillFills.forEach(fill => skillObserver.observe(fill));

  /* ══════════════════════════════════════════
     6. CONTACT FORM — simple demo handler
  ══════════════════════════════════════════ */
  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const name  = document.getElementById("fname").value.trim();
      const email = document.getElementById("femail").value.trim();
      const msg   = document.getElementById("fmessage").value.trim();

      if (!name || !email || !msg) {
        alert("Please fill in your name, email, and message.");
        return;
      }

      formBtn.disabled = true;
      formBtn.innerHTML = "<span>Sending...</span>";

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
          formOk.style.display = "block";
          formOk.innerHTML = "&#10003; Message sent! I'll get back to you soon.";
        } else {
          alert("Something went wrong. Please try again.");
          formBtn.disabled = false;
          formBtn.innerHTML = "<span>Send Message</span><span>&#10148;</span>";
        }
      } catch (error) {
        alert("Network error. Please try again later.");
        formBtn.disabled = false;
        formBtn.innerHTML = "<span>Send Message</span><span>&#10148;</span>";
      }
    });
  }

  /* ══════════════════════════════════════════
     7. HERO — subtle parallax on mouse move
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
        "translate(" + dx * 8 + "px, " + dy * 8 + "px)";
    });

    heroSection.addEventListener("mouseleave", function () {
      photoRing.style.transform = "translate(0, 0)";
    });
  }

})();
