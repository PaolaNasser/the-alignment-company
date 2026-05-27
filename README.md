# The Alignment Company — Website

A clean, fast, mobile-responsive multi-page website for The Alignment Company — built to the
[design & copy blueprint](DESIGN-AND-COPY.md). Custom HTML/CSS with a tiny bit of vanilla
JavaScript (no frameworks, no build step).

## Pages
| File | Page |
|---|---|
| `index.html` | Home |
| `services.html` | Services (6 services, Problem → Solution → Outcome) |
| `about.html` | About |
| `contact.html` | Contact + booking |

Shared assets: `css/styles.css` (the whole design system) and `js/main.js` (mobile menu,
scroll reveals, contact-form confirmation).

## Preview it locally
Just open `index.html` in a browser — it works straight from the file system.
For a closer-to-production preview (so internal links and fonts behave exactly right), run a
tiny local server from this folder:

```powershell
# Python (any version 3.x)
python -m http.server 8000
# then visit  http://localhost:8000
```

## Brand
- **Colors:** ivory `#F5F0E8` · charcoal `#2B2A26` · taupe accent `#9A8E7D` · hairline `#D9D2C6`
- **Type:** Cormorant Garamond (headings) + Inter (body), loaded from Google Fonts
- All tokens live at the top of `css/styles.css` under `:root` — change them in one place.

## ✅ Go-live checklist — placeholders to replace
Everything below is clearly marked in the code. Search for the bracketed/placeholder text.

1. **Calendly / booking link** — `contact.html`, the `data-booking` button (`href="#"`).
   Also the "Book a Consultation" buttons currently point to `contact.html#book`.
2. **Contact email** — `hello@thealignmentcompany.com` appears in the footer of every page
   and on `contact.html`. Find-and-replace across the project.
3. **WhatsApp link** — `contact.html`, the `data-whatsapp` link. Or delete that `<li>` if unused.
4. **Contact form handler** — the form in `contact.html` is inert until you connect it:
   - **Formspree (easiest):** set `action="https://formspree.io/f/XXXXXXXX"` and `method="POST"`
     on the `<form>`, then add `data-handler="live"` so the script stops intercepting it.
   - **Netlify Forms:** add the `netlify` attribute to the `<form>` and a hidden
     `<input type="hidden" name="form-name" value="contact-form">`.
5. **Google Analytics (GA4)** — uncomment the GA snippet in the `<head>` of each page and
   replace `G-XXXXXXXXXX` with the real Measurement ID.
6. **Logo** — the header uses a small SVG recreation of the offset-rectangles mark. To use the
   real logo, drop an SVG/PNG into an `images/` folder and swap the `<svg class="brand__mark">`.
7. **Domain in `sitemap.xml` / `robots.txt`** — replace `https://www.thealignmentcompany.com/`
   with the real domain.

## Deploy (all free, no server needed)
This is a static site, so any of these work in minutes:

- **Netlify** — drag-and-drop this folder onto app.netlify.com, *or* connect a Git repo.
  Bonus: Netlify Forms handles the contact form with zero code.
- **Vercel** — `vercel` CLI or connect a repo; auto-deploys.
- **GitHub Pages** — push to a repo, enable Pages on the `main` branch.

Point the custom domain at whichever host you choose, and you're live.

## Notes
- Fully responsive (hamburger menu under 760px), keyboard-accessible, and respects
  `prefers-reduced-motion`.
- No tracking or third-party scripts load until you add GA — it's privacy-clean by default.
- This is **Phase 2** of the project. The written design + copy rationale lives in
  [DESIGN-AND-COPY.md](DESIGN-AND-COPY.md).
