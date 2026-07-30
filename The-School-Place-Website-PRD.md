# The School Place — Website PRD
**Product Requirements Document · v1.0**
**Owners:** Product Manager / UX Engineer & Writer
**Status:** Draft for review

---

## 1. Overview

### 1.1 Problem statement
The School Place currently drives all discovery and conversion through static social flyers and a WhatsApp number. There is no owned digital destination that:
- Establishes credibility (Cambridge assessor credentials, results, testimonials)
- Lets a prospective student/parent self-serve information before messaging
- Converts interest into a booked consultation without relying on manual WhatsApp back-and-forth

A website closes this gap: it becomes the trust-building, conversion layer behind every flyer, referral, and DM.

### 1.2 Goal
Ship a lean marketing + booking website that **converts visiting parents/students into booked consultations**, while reinforcing the brand positioning established in the brand guidelines (expertise, personalization, results, trust).

### 1.3 Non-goals (v1)
- No student learning portal, LMS, or login-gated content
- No payment processing in v1 (consultations are free; paid packages are quoted manually post-consultation)
- No blog/CMS-heavy content engine in v1 (structure for it, don't build it yet)
- No multi-tutor marketplace — this is a single-brand site, not a directory

---

## 2. Users & Use Cases

### 2.1 Primary personas

**1. The Concerned Parent**
- Searching on behalf of their A-Level child, often at night, on mobile
- Wants: credibility signals, clear subject list, pricing expectations, an easy way to ask a question without commitment
- Anxiety: "Is this legitimate? Are they actually qualified?"

**2. The Motivated Student**
- Self-directed, often the one who finds the tutor and convinces the parent
- Wants: fast answers ("do they teach Chemistry A2?"), social proof from other students, a low-friction way to book
- Behavior: mobile-first, short attention span, compares 2–3 options quickly

**3. The Resit Candidate**
- Time-pressured, has already had one AA-Level attempt, higher urgency
- Wants: reassurance this will work this time, evidence of exam-technique focus, fastest possible path to booking

### 2.2 Core user stories
- As a parent, I want to see tutor credentials and subjects offered so I can quickly judge legitimacy.
- As a student, I want to book a free consultation in under 2 minutes without creating an account.
- As a resit candidate, I want to see exam-focused proof points (past paper practice, technique coaching) so I trust this will fix what went wrong last time.
- As any visitor, I want to reach a human via WhatsApp instantly if I have a quick question instead of filling a form.
- As the business owner, I want every booking request to land in one place (email/WhatsApp/calendar) without manual reconciliation.

---

## 3. Information Architecture

```
Home
├── Subjects (Physics / Maths / Chemistry / Biology / IT)
│   └── Individual subject detail (optional v1.1)
├── How It Works
├── About / Meet the Tutor(s)
├── Testimonials & Results
├── Pricing / Packages
├── FAQ
├── Book a Consultation (form + calendar)
└── Contact (WhatsApp / Email / Phone)
```

**V1 scope note:** Single-page scroll site with anchored sections is likely sufficient given the content volume (see Section 5 — MVP recommendation). Multi-page IA above is the target structure to grow into as content matures (e.g., v1.1 adds individual subject pages for SEO).

---

## 4. Key Pages & Requirements

### 4.1 Home / Hero
**Purpose:** Establish credibility and positioning within 3 seconds; drive to booking.

| Element | Requirement |
|---|---|
| Headline | Leads with outcome + credibility, not generic tagline (e.g., "One-on-one A-Level coaching from real Cambridge assessors") |
| Subhead | Names the mechanism: personalized, exam-focused, results-driven |
| Primary CTA | "Book a Free Consultation" — always visible (sticky on mobile) |
| Secondary CTA | "Chat on WhatsApp" — for low-commitment visitors |
| Trust strip | Subjects offered, "Cambridge assessors," years of experience / number of students — scannable icons, not paragraphs |

### 4.2 Subjects
- Grid of 5 subjects (Physics, Maths, Chemistry, Biology, IT) using the unified icon set from brand guidelines
- Each card: subject name, one-line description of curriculum coverage (Cambridge International + others), link to "Book for this subject" (pre-fills the booking form)

### 4.3 How It Works
- 3–4 step process, e.g.: *1. Book a free consultation → 2. We assess your level & goals → 3. We build a personalized plan → 4. Weekly 1-on-1 sessions + past paper practice*
- Reduces anxiety by making the process concrete and low-risk

### 4.4 About / Tutor Credibility
- Real photo(s), not stock imagery (per brand guidelines)
- Credentials stated plainly: Cambridge assessor status, years teaching, subjects certified in
- This page carries the most trust-conversion weight for the Concerned Parent persona — do not skimp on it

### 4.5 Testimonials & Results
- Short quotes from students/parents (with first name + grade achieved if permitted)
- Grade-improvement proof points if available (e.g., "average grade improvement: X")
- Placed above the fold on mobile if strong testimonials exist — social proof drives conversion harder than feature lists for this category

### 4.6 Pricing / Packages
- Even directional pricing ("Sessions from ₦X/hour" or "packages from X") reduces drop-off — parents abandon inquiries when pricing is completely hidden
- If exact pricing can't be public, show package *structure* (single session / monthly / exam-intensive package) with "confirmed on consultation call"

### 4.7 FAQ
- Address the top objections directly: curriculum coverage, online session logistics, rescheduling policy, what "resit support" includes
- Written in plain, reassuring voice per brand voice guidelines (warm, precise, not hype-y)

### 4.8 Book a Consultation (critical path)
- Single form: Name, Email/WhatsApp, Subject(s), Student's current level (AS/A2/Resit), Preferred contact method, optional message
- On submit: confirmation screen + automatic WhatsApp deep link option + email notification to business owner
- Calendar integration (v1.1): let the user pick a slot directly rather than "we'll reach out" — this is the single highest-leverage UX improvement once volume justifies it

### 4.9 Contact / Footer
- WhatsApp, phone, email repeated (already the trusted channel from the flyer — don't bury it)
- Social links
- Logo mark, tagline, minimal legal (privacy note if collecting form data)

---

## 5. MVP Recommendation

Given current content maturity (one flyer's worth of copy, no CMS, no dedicated dev resourcing implied), recommend:

**V1 — Single-page site** with anchored sections (Home → How It Works → Subjects → About → Testimonials → Pricing → FAQ → Book), sticky WhatsApp + Book CTA. Fastest to ship, fully covers the conversion goal, no CMS needed.

**V1.1 — Expand to multi-page** once: (a) testimonial volume justifies a dedicated page, (b) subject-specific SEO becomes a priority, (c) calendar booking replaces the static form.

This phasing avoids over-building IA the content can't yet support.

---

## 6. UX Writing Guidelines

Derived from the brand voice matrix (Brand Guidelines §1.4):

| Context | Approach |
|---|---|
| Headlines | Outcome-led, confident, no exclamation points |
| CTA buttons | Verb-first, low-friction: "Book a Free Consultation," not "Submit" |
| Form labels | Plain language over formal ("What subject do you need help with?" not "Subject of Interest") |
| Error states | Reassuring, specific: "That email doesn't look quite right — mind double-checking?" |
| Empty/loading states | Calm, no dead air: "Sending your request to our team..." |
| Microcopy near CTA | Reduce anxiety: "No commitment — just a conversation about your goals." |

**Tone check for every string before ship:** Would a Cambridge assessor say this, or does it sound like a generic tutoring ad? If the latter, rewrite.

---

## 7. Functional Requirements

| ID | Requirement | Priority |
|---|---|---|
| F1 | Responsive design, mobile-first (majority of traffic will be mobile, per flyer distribution channel) | P0 |
| F2 | Booking form with validation, submits to email + optionally a spreadsheet/CRM | P0 |
| F3 | WhatsApp click-to-chat button (persistent, mobile sticky) | P0 |
| F4 | Subject filtering on booking form (pre-select from Subjects page) | P1 |
| F5 | Testimonials section, easily editable without a developer (lightweight CMS or structured JSON) | P1 |
| F6 | Calendar/slot-picker booking (replaces static form) | P2 (v1.1) |
| F7 | Individual subject landing pages for SEO | P2 (v1.1) |
| F8 | Analytics: track CTA clicks, form completion rate, WhatsApp click-throughs | P0 |

---

## 8. Non-Functional Requirements

- **Performance:** LCP under 2.5s on mobile 4G — flyers link directly to this site from WhatsApp, so first impression speed matters
- **Accessibility:** WCAG AA — sufficient color contrast (validate navy/gold combinations from brand guidelines against AA), alt text on all imagery, keyboard-navigable form
- **SEO basics:** meta titles/descriptions per section, structured data for local business (helps with "A-Level tutor near me" searches)
- **Hosting/maintenance:** Static site or lightweight CMS (e.g., a simple site builder or a static generator) — avoid over-engineering for a single-owner-operated tutoring business

---

## 9. Success Metrics

| Metric | Target (first 90 days, directional) |
|---|---|
| Consultation form completion rate | Establish baseline, then optimize |
| WhatsApp click-through rate from site | Track as leading indicator of interest |
| Bounce rate on mobile | < 55% |
| Time to first CTA click | Under 30s median |
| Booking → actual consultation show-rate | Track to validate lead quality, not just volume |

---

## 10. Risks & Open Questions

- **Pricing transparency:** Does the business want to publish even directional pricing? This materially affects Section 4.6 and overall conversion — needs a decision before copy is finalized.
- **Testimonial availability:** Do we have real testimonials/results data today, or does launch proceed without Section 4.5 populated (with a fallback: credentials-only trust strip)?
- **Content ownership:** Who maintains the site post-launch — does the business need a no-code editing capability (F5), or is occasional developer-assisted updates acceptable?
- **Calendar tooling:** Is there an existing calendar/booking tool preference (Calendly-style) for the v1.1 upgrade, or does that need evaluation?

---

## 11. Milestones (proposed)

| Phase | Scope |
|---|---|
| M1 | Content finalized (copy, credentials, photos, pricing decision) |
| M2 | Design applying Brand Guidelines v1.0 (single-page layout, mobile-first) |
| M3 | Build: hero, subjects, how-it-works, about, FAQ, booking form, footer |
| M4 | QA: mobile responsiveness, form submission, WhatsApp deep link, analytics wiring |
| M5 | Launch + monitor Section 9 metrics; scope v1.1 backlog (calendar booking, subject pages, testimonials CMS) |

---

*This PRD assumes the brand direction established in "The School Place — Brand Guidelines v1.0." Visual and copy decisions throughout should be validated against that document before final design handoff.*
