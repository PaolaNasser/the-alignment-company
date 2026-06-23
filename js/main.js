/* The Alignment Company — small, dependency-free site script
   Handles: mobile menu, header shadow on scroll, scroll-reveal,
   and graceful contact-form confirmation (until a real handler is wired in). */
(function () {
  "use strict";

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close the menu after tapping a link (mobile)
    links.addEventListener("click", function (e) {
      if (e.target.closest("a") && links.classList.contains("is-open")) {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Header hairline on scroll ---- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- Contact form -> Formspree (AJAX) ----
     Submits in the background via fetch so the page doesn't navigate away,
     and reuses the styled inline confirmation box. */
  var form = document.getElementById("contact-form");
  if (form) {
    var success = document.getElementById("form-success");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }

      var btn = form.querySelector("[type=submit]");
      var label = btn ? btn.textContent : "";
      if (btn) { btn.disabled = true; btn.textContent = "Sending..."; }

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      }).then(function (res) {
        if (res.ok) {
          if (success) {
            success.classList.add("show");
            success.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          form.reset();
        } else {
          alert("Sorry, something went wrong sending your message. You can email us directly at paolanasser@thealignmentco.co.");
        }
      }).catch(function () {
        alert("Network error. You can email us directly at paolanasser@thealignmentco.co.");
      }).then(function () {
        if (btn) { btn.disabled = false; btn.textContent = label; }
      });
    });
  }

  /* ---- Calendly booking popup ----
     Lazy-loads Calendly's widget only when a booking button (e.g. "Book a Free
     30-Minute Audit") is first clicked, so it adds zero weight to normal page loads. */
  var CALENDLY_URL = "https://calendly.com/paolanasser10/30min";
  var calendlyScriptAdded = false;
  function openCalendly() {
    if (window.Calendly) { window.Calendly.initPopupWidget({ url: CALENDLY_URL }); return; }
    if (calendlyScriptAdded) { return; }
    calendlyScriptAdded = true;
    var css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(css);
    var s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.onload = function () {
      if (window.Calendly) { window.Calendly.initPopupWidget({ url: CALENDLY_URL }); }
    };
    document.body.appendChild(s);
  }
  var bookingLinks = document.querySelectorAll('a[href="/contact/#book"], a[href="#book"], a[data-booking]');
  Array.prototype.forEach.call(bookingLinks, function (el) {
    el.addEventListener("click", function (e) { e.preventDefault(); openCalendly(); });
  });

  /* ---- Footer year ---- */
  var yr = document.getElementById("year");
  if (yr) { yr.textContent = new Date().getFullYear(); }
})();
