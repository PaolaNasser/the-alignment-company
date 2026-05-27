# The Alignment Company — Website Design & Copy Document

> **Purpose of this doc:** A complete blueprint of how the website will look, feel, and read — *before* we build it in code. It covers the design system (colors, type, components), the structure of every page, and the finished, ready-to-use copy. Once approved, this becomes the spec we build the real site from.

> **Tagline:** *Bringing structure to HR, payroll & business operations.*
> **Positioning statement:** *We create operational alignment and structure for growing businesses.*

---

## 1. Brand at a Glance

| | |
|---|---|
| **What it is** | An operations & systems company — not a freelancer, not a VA service. |
| **Who it's for** | Small businesses, founders, startups, and professional service companies (U.S.-based, higher-value clients). |
| **The feeling** | Calm professionalism · structure · elegance · modern operations consulting. |
| **The promise** | We replace chaos with clean, repeatable systems. |
| **Primary CTA** | **Book a Consultation** (appears on every page). |
| **Tone** | Structured · approachable · competent · calm authority. |

**Sound like this:** clarity, structure, operational efficiency, workflow improvement, organization.
**Never sound like this:** overly corporate, too tech-heavy, or a generic admin/VA service.

---

## 2. Design System

### 2.1 Color Palette

Pulled directly from the logo — warm, neutral, premium. The whole site lives in this narrow, intentional range. Restraint *is* the brand.

| Role | Name | Hex | Where it's used |
|---|---|---|---|
| Page background | **Canvas (Warm Ivory)** | `#F5F0E8` | The default background of every page. |
| Raised surface | **Warm White** | `#FBF8F2` | Cards, form fields, panels that sit on the canvas. |
| Primary text | **Charcoal Ink** | `#2B2A26` | Headings and body text. Also the primary button fill. |
| Secondary text | **Slate Taupe** | `#5C584F` | Subheads, paragraph support, captions. |
| Accent | **Soft Taupe** | `#9A8E7D` | Eyebrow labels, links, icons, hover states, small flourishes. |
| Accent (light) | **Taupe Mist** | `#BCB2A3` | Decorative lines under headings, muted detail. |
| Hairlines | **Line** | `#D9D2C6` | Borders, dividers, table rules, section separators. |

**Rules of thumb**
- ~70% of every screen should be empty Canvas. High whitespace is non-negotiable.
- One accent color only (Soft Taupe). Never introduce a bright/brand-clashing color.
- Charcoal does the heavy lifting; taupe is a *whisper*, not a highlight.

### 2.2 Typography

Matches the doc's recommendation and the logo's elegant serif feel.

| Use | Font | Notes |
|---|---|---|
| Display / Headings | **Cormorant Garamond** (primary) or **Playfair Display** (alt) | Elegant, high-authority serif. Closest match to the logo's lettering. Used for H1–H3. |
| Body / UI | **Inter** (primary) or **Open Sans** (alt) | Clean, modern, highly readable. All paragraphs, buttons, nav, forms. |
| Eyebrow / Labels | Inter, UPPERCASE, letter-spaced `+2px` | Echoes the spaced "THE ALIGNMENT COMPANY" lettering in the logo. |

**Type scale (desktop)**

| Element | Size / Line-height | Weight |
|---|---|---|
| H1 (hero) | 56px / 1.1 | Cormorant 500 |
| H2 (section) | 38px / 1.2 | Cormorant 500 |
| H3 (card/sub) | 24px / 1.3 | Cormorant 600 |
| Body large (intros) | 20px / 1.6 | Inter 400 |
| Body | 17px / 1.7 | Inter 400 |
| Eyebrow / label | 13px / 1.4, tracked | Inter 600, uppercase |
| Button | 15px | Inter 600 |

> On mobile, headings scale down ~30–40% (H1 ≈ 36px). Body stays ≥16px for readability.

### 2.3 Layout & Spacing

- **Max content width:** ~1140px, centered, generous side gutters.
- **Vertical rhythm:** large section padding (≈ 96–120px top/bottom on desktop, 56–64px mobile). Let sections breathe.
- **Grid:** 12-column feel; service/benefit cards in 2- or 3-up grids that collapse to 1 column on mobile.
- **Alignment:** structured and left-aligned for content blocks; hero and section intros may be centered. Everything snaps to a clear grid — *structure is the product*.

### 2.4 Components

- **Primary button** — Charcoal fill, ivory text, subtle hover (lifts to `#3A3833`), gentle rounded corners (4–6px). Label: **Book a Consultation**.
- **Secondary button** — Transparent with a 1px Soft Taupe border, charcoal text; fills to taupe-tint on hover.
- **Cards** — Warm White surface, 1px Line border *or* a very soft shadow (never both heavy), comfortable internal padding, a small taupe icon or number at top.
- **Eyebrow label** — Small taupe uppercase tracked text above section headings (e.g. `SERVICES`, `WHY ALIGNMENT`).
- **Divider** — A short Taupe Mist line (the same motif as the logo's underline) used to separate the logotype from taglines and to underline section headings.
- **Section separator** — Full-width 1px Line hairline between major sections, mirroring the horizontal rules in the brand doc.

### 2.5 Visuals & Graphics Direction

The requirements ask for "professional visuals or workflow graphics." Keep it abstract and on-brand — **no stocky people-at-laptops clichés**.

- Thin-line **workflow diagrams** (boxes + connectors) in charcoal/taupe — visually echoes the offset-rectangles motif in the logo mark.
- Simple **line icons** for each service (single weight, taupe).
- Calm, neutral, decluttered photography *only if needed* (organized desks, soft architecture, paper/grids) — muted and warm-toned to match the palette.
- Lots of negative space around every graphic.

---

## 3. Site Map & Navigation

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]        Home   Services   About   Contact   [Book a    │
│                                                     Consult.] │
└─────────────────────────────────────────────────────────────┘
```

- **Sticky header**, Canvas background, becomes a hairline-bordered bar on scroll.
- Logo top-left (links to Home). Nav links center/right. Primary CTA button far right.
- **Mobile:** hamburger menu; CTA button stays visible.
- **Footer (every page):** logo + tagline · quick nav · email · booking link · optional WhatsApp · small print / copyright.

**Pages:** Home · Services · About · Contact.

---

## 4. Page-by-Page Layout & Copy

> All copy below is **final and ready to use** (edit names/details as needed). Placeholders are marked `[[like this]]`.

---

### 4.1 HOME PAGE

**Goal:** build trust in seconds, explain what she does, drive consultation bookings.

```
┌───────────────────────────── HERO ──────────────────────────────┐
│  (centered, lots of ivory space)                                 │
│                  EYEBROW: OPERATIONS & SYSTEMS                    │
│        H1: Bring structure to your operations.                   │
│        Sub: one calm sentence of what you do                     │
│        [ Book a Consultation ]   [ Explore Services ]            │
│              (thin workflow-line graphic below)                  │
├──────────────────────── WHAT I DO (intro) ──────────────────────┤
│  Short 2–3 sentence positioning paragraph, centered.             │
├────────────────────── SERVICES OVERVIEW (3×2 grid) ─────────────┤
│  [icon] HR Ops        [icon] Payroll Opt.    [icon] SOPs         │
│  [icon] Workflows     [icon] AI Admin        [icon] Dashboards   │
│            [ See all services → ]                                │
├──────────────────────── BENEFITS / RESULTS ─────────────────────┤
│  3–4 outcome statements (less chaos, clear systems, time back…)  │
├──────────────────────── HOW IT WORKS (3 steps) ─────────────────┤
│  01 Assess   02 Align   03 Systematize                           │
├──────────────────────────── CTA BANNER ─────────────────────────┤
│  "Ready to bring order to your operations?" [ Book a Consult. ] │
└──────────────────────────────────────────────────────────────────┘
```

**HERO**
- Eyebrow: `OPERATIONS & SYSTEMS`
- **H1:** Bring structure to your operations.
- Subhead: We help HR, payroll, and business operations run on clear, repeatable systems — so your business grows without the chaos.
- Buttons: **Book a Consultation** · *Explore Services*
- *(Alt headline options: "Operational alignment for growing businesses." / "Bringing structure to HR, payroll & business operations." — the tagline as headline.)*

**WHAT I DO (intro paragraph)**
> The Alignment Company brings order to the behind-the-scenes work that keeps a business running. We design the systems, streamline the processes, and document the workflows that let small teams operate like well-run organizations — calm, consistent, and ready to scale.

**SERVICES OVERVIEW** (6 cards, each links to its section on the Services page)

| Service | One-liner |
|---|---|
| **HR Operations Support** | Structure and support for the people side of your business. |
| **Payroll Process Optimization** | Accurate, on-time payroll without the monthly scramble. |
| **SOP Creation** | Turn "how we do things" into clear, repeatable documentation. |
| **Workflow & Systems Organization** | Connect your tools and steps into one smooth flow. |
| **AI-Assisted Admin Automation** | Let smart automation handle the repetitive admin work. |
| **Reporting & Dashboard Setup** | See your business clearly with reports you'll actually use. |

Link: **See all services →**

**BENEFITS / RESULTS** — eyebrow `THE RESULT`
- **Less chaos.** Clear processes replace guesswork and last-minute firefighting.
- **Time back.** Automation and documentation free your team to do real work.
- **Fewer mistakes.** Standardized systems mean consistent, reliable output.
- **Room to grow.** Operations that scale with you instead of holding you back.

**HOW IT WORKS** — eyebrow `THE PROCESS`
- **01 · Assess** — We map how your operations work today and find the friction.
- **02 · Align** — We design the right systems, processes, and documentation for your team.
- **03 · Systematize** — We put it in place, automate what we can, and hand you something that runs.

**CTA BANNER**
- Heading: Ready to bring order to your operations?
- Sub: Book a free consultation and let's find where structure will make the biggest difference.
- Button: **Book a Consultation**

---

### 4.2 SERVICES PAGE

**Goal:** explain each service through *problem → solution → outcome* so prospects see themselves and the result.

```
┌──────────────── PAGE HEADER ─────────────────┐
│  EYEBROW: SERVICES                           │
│  H1: Systems for every part of your operation│
│  Intro sentence.                             │
├──────────────── SERVICE BLOCK (×6) ──────────┤
│  [icon]  H2: Service name                    │
│  The Problem  │  The Solution  │  The Outcome│
│  (alternating text / workflow-graphic side)  │
├──────────────────── CTA BANNER ──────────────┤
└───────────────────────────────────────────────┘
```

**PAGE HEADER**
- Eyebrow: `SERVICES`
- **H1:** Systems for every part of your operation.
- Intro: From hiring to payroll to reporting, we bring structure to the work that keeps your business moving. Here's how we help.

Each service uses the same three-part structure: **The Problem · The Solution · The Outcome.**

---

**1. HR Operations Support**
- **The Problem:** HR tasks pile up in inboxes and spreadsheets. Onboarding is inconsistent, records are scattered, and compliance feels like a guessing game.
- **The Solution:** We organize your HR operations end to end — onboarding/offboarding workflows, employee records, policy documentation, and the day-to-day processes that keep the people side running smoothly.
- **The Outcome:** A calm, consistent HR function where nothing falls through the cracks and your team knows exactly what happens, and when.

**2. Payroll Process Optimization**
- **The Problem:** Payroll is a recurring scramble — manual steps, last-minute corrections, and no clear process when someone's out.
- **The Solution:** We streamline and document your payroll process, tighten the hand-offs, and build in checks that catch errors before they happen.
- **The Outcome:** Accurate, on-time payroll that runs the same way every cycle — no scramble, no surprises.

**3. SOP Creation**
- **The Problem:** Critical knowledge lives in people's heads. When they're out — or they leave — the process goes with them.
- **The Solution:** We document your key processes as clear, easy-to-follow Standard Operating Procedures your whole team can rely on.
- **The Outcome:** Repeatable, transferable workflows that protect your business and make training effortless.

**4. Workflow & Systems Organization**
- **The Problem:** Tools don't talk to each other, steps get duplicated, and work slips between the cracks of disconnected systems.
- **The Solution:** We map your workflows, eliminate the redundant steps, and connect your tools into one organized, logical flow.
- **The Outcome:** A streamlined operation where work moves smoothly from start to finish — with less effort and fewer dropped balls.

**5. AI-Assisted Admin Automation**
- **The Problem:** Your team spends hours on repetitive admin — data entry, follow-ups, formatting, scheduling — that drains time from real work.
- **The Solution:** We identify the right tasks to automate and put smart, AI-assisted tools to work on the busywork.
- **The Outcome:** Hours given back every week, fewer manual errors, and a team focused on what actually moves the business forward.

**6. Reporting & Dashboard Setup**
- **The Problem:** Your data is everywhere and nowhere — you can't get a clear, current view of how the business is doing.
- **The Solution:** We build clean reports and dashboards that pull your key numbers into one place, updated and easy to read.
- **The Outcome:** Clear visibility into your operations, so you can make confident decisions based on what's really happening.

**CTA Banner** (same as Home): Ready to bring order to your operations? → **Book a Consultation**

---

### 4.3 ABOUT PAGE

**Goal:** convey mission, an operations/systems mindset, and calm authority. Build trust through *how she thinks*, not a résumé.

```
┌──────────── PAGE HEADER ────────────┐
│  EYEBROW: ABOUT                      │
│  H1: Operations, brought into order. │
├──────────── MISSION ────────────────┤
│  2–3 short paragraphs.               │
├──────────── HOW I THINK (3 values) ─┤
│  Structure · Clarity · Calm          │
├──────────── WHO I WORK WITH ─────────┤
├──────────── CTA BANNER ──────────────┤
└───────────────────────────────────────┘
```

**PAGE HEADER**
- Eyebrow: `ABOUT`
- **H1:** Operations, brought into order.

**MISSION**
> The Alignment Company exists for one reason: to bring structure to the businesses that need it most. Growing companies don't usually fall apart because of bad strategy — they stall because the day-to-day operations get tangled. Processes live in people's heads, tools don't connect, and the team spends more time managing chaos than doing the work.
>
> We change that. With an operations and systems mindset, we look at how your business actually runs, find where the friction is, and design the workflows, documentation, and automation that bring everything back into alignment.
>
> The result isn't just tidier operations. It's a calmer business, a clearer team, and the room to grow — confidently and without the chaos.

**HOW I THINK** — eyebrow `THE APPROACH` (3 value cards)
- **Structure over scramble.** Every problem has a process behind it. We build the process.
- **Clarity for the whole team.** Good systems are simple, documented, and easy to follow.
- **Calm, capable execution.** We bring order quietly and reliably — no drama, just results.

**WHO I WORK WITH**
> We partner with small businesses, founders, startups, and professional service companies — teams that have outgrown "winging it" and are ready for operations that can scale with them.

**CTA Banner:** Let's bring alignment to your business. → **Book a Consultation**

---

### 4.4 CONTACT PAGE

**Goal:** make booking and reaching out effortless. (Requirements: contact form, email, Calendly booking link, optional WhatsApp.)

```
┌──────────── PAGE HEADER ────────────┐
│  EYEBROW: CONTACT                    │
│  H1: Let's bring structure to your   │
│      operations.                     │
├────── 2-COLUMN ──────────────────────┤
│  Contact form     │  Direct contact  │
│  (name, email,    │  · Book a call   │
│   company,        │    (Calendly)    │
│   message)        │  · Email         │
│  [ Send message ] │  · WhatsApp      │
└───────────────────┴──────────────────┘
```

**PAGE HEADER**
- Eyebrow: `CONTACT`
- **H1:** Let's bring structure to your operations.
- Sub: Tell us a bit about your business and where things feel chaotic — or book a free consultation and we'll talk it through.

**CONTACT FORM** (fields)
- Name *(required)*
- Email *(required)*
- Company / website
- What can we help you align? *(message, required)*
- Button: **Send Message**
- Confirmation copy: *Thanks — we'll be in touch within one business day.*

**DIRECT CONTACT** (sidebar)
- **Book a free consultation** → `[[CALENDLY LINK]]` (primary button)
- **Email** → `[[hello@thealignmentcompany.com]]`
- **WhatsApp** → `[[WHATSAPP NUMBER/LINK]]` *(optional — easy to remove)*

---

## 5. Global Elements

**Footer** (every page)
```
THE ALIGNMENT COMPANY
Bringing structure to HR, payroll & business operations.

Home · Services · About · Contact          [ Book a Consultation ]

Email: [[hello@thealignmentcompany.com]]   WhatsApp: [[number]]

© 2026 The Alignment Company. All rights reserved.
```

**Recurring CTA banner** — appears at the bottom of Home, Services, and About. Charcoal or Warm White panel, centered heading + **Book a Consultation** button.

---

## 6. Functional & Technical Requirements

**Must-have (build these in)**
- ✅ Mobile responsive (single-column, tap-friendly, ≥16px text on phones).
- ✅ Fast loading (system/Google fonts, optimized images, minimal scripts).
- ✅ Clean navigation (sticky header, clear labels, visible CTA).
- ✅ Booking form / link (Calendly embed or button — drop in URL when ready).
- ✅ Contact form (with a real form handler — see build notes).
- ✅ SEO basics (page titles, meta descriptions, headings hierarchy, alt text, sitemap).
- ✅ Google Analytics (GA4 tag — drop in measurement ID when ready).

**Suggested page titles & meta descriptions (SEO)**

| Page | Title tag | Meta description |
|---|---|---|
| Home | The Alignment Company — Operations & Systems for Growing Businesses | We bring structure to HR, payroll & business operations. Calm, repeatable systems that let your business grow without the chaos. Book a consultation. |
| Services | Services — HR, Payroll, SOPs & Workflow Systems \| The Alignment Company | HR operations, payroll optimization, SOP creation, workflow organization, AI admin automation, and reporting dashboards. See how we help. |
| About | About — An Operations & Systems Mindset \| The Alignment Company | We help growing businesses reduce chaos and create efficient workflows. Learn about our approach to operational alignment. |
| Contact | Contact & Book a Consultation \| The Alignment Company | Let's bring structure to your operations. Book a free consultation or send us a message. |

**Optional (later phases)**
- AI chatbot · Blog · Downloadable resources (e.g. a free "Operations Audit Checklist" lead magnet) · Client portal.

---

## 7. Build Notes & Next Steps

**When we build the real site, here's what plugs in:**
1. `[[CALENDLY LINK]]` — consultation booking URL.
2. `[[CONTACT EMAIL]]` — e.g. hello@thealignmentcompany.com.
3. `[[WHATSAPP NUMBER]]` — optional.
4. `[[GA4 MEASUREMENT ID]]` — for Google Analytics.
5. **Contact form handler** — a static site needs a form service (Formspree, Netlify Forms, etc.). Easy to wire in.
6. **Logo file** — the existing logo (SVG preferred for crispness).

**Recommended build path** (matches the requirements doc):
- **Option A — Custom-coded static site (what we'll build here):** fastest, most polished, deploys free to Netlify/Vercel/GitHub Pages, fully on-brand. Easiest for us to control pixel-for-pixel.
- **Option B — Webflow:** best no-code option for her to edit later; this doc maps cleanly to Webflow sections.
- **Option C — Squarespace:** simplest for a non-technical owner to maintain.

**Decision needed from her before build:** which platform, the contact details above, and a quick thumbs-up on the copy.

---

*Prepared as a pre-build blueprint. Nothing here is locked — flag anything that doesn't sound like her and we'll adjust before writing a line of code.*
