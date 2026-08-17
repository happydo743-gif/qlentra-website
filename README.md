# Qlentra — Corporate Website

Production-ready marketing website for **Qlentra** — Sales, Retention &
Customer Experience Outsourcing — built with Next.js 14 (App Router),
TypeScript, and Tailwind CSS.

---

## 1. Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** lucide-react
- **Fonts:** Space Grotesk (display) + Manrope (body), loaded via
  `next/font/google` as high-quality equivalents for the brand's Qentra
  Display / Satoshi typography system
- **Booking:** Calendly (button links + inline embed)
- **Hosting target:** Vercel

## 2. Install

```bash
npm install
```

## 3. Run Locally

```bash
npm run dev
```

Visit `http://localhost:3000`.

Local environment variables live in `.env.local` (already created from
`.env.example` — update the values described in Section 9 below).

## 4. Build

```bash
npm run build
npm run start   # serve the production build locally
```

## 5. Lint & Typecheck

```bash
npm run lint
npm run typecheck
```

## 6. Deploy to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Vercel, click **Add New → Project** and import the repository.
3. Framework preset: Vercel auto-detects **Next.js** — no changes needed.
4. Add the environment variables listed in `.env.example` under
   **Project Settings → Environment Variables** (see Section 9).
5. Deploy. Vercel will build and host the site automatically on every push.

## 7. Add a Custom Domain

1. In the Vercel project, go to **Settings → Domains**.
2. Add your domain (e.g. `qlentracx.com` and `www.qlentracx.com`).
3. Follow Vercel's DNS instructions (A record or CNAME, depending on your
   registrar).
4. Once the domain is verified, update `NEXT_PUBLIC_SITE_URL` in your
   Vercel environment variables to match the final domain, then redeploy.

## 8. Configure Calendly

1. Create your Calendly event (recommended: 20-minute "Discovery Call").
2. In the Calendly event's **Location** settings, select **Google Meet**.
3. Copy the event's public scheduling URL, e.g.
   `https://calendly.com/your-handle/discovery-call`.
4. Paste it into `NEXT_PUBLIC_CALENDLY_URL` (see Section 9 for exact
   location).
5. Every "Book a Discovery Call" button across the site — header, hero,
   pilot page, contact page, footer flows — reads from this single value,
   as does the inline embed on the Contact page.

## 8b. Configure the Contact Form (Resend)

The Contact page form submits to `app/api/contact/route.ts`, a Next.js API
route that emails the enquiry to `NEXT_PUBLIC_CONTACT_EMAIL` using
[Resend](https://resend.com).

1. Create a free Resend account at [resend.com](https://resend.com) (free
   tier covers 3,000 emails/month, more than enough for a contact form).
2. In the Resend dashboard, go to **API Keys → Create API Key** and copy
   the key.
3. Add it as `RESEND_API_KEY` in `.env.local` (dev) and in Vercel →
   Project Settings → Environment Variables (production). **Do not**
   prefix it with `NEXT_PUBLIC_` — it must stay server-side only.
4. For quick testing, leave `CONTACT_FROM_EMAIL` as the default
   `Qlentra Website <onboarding@resend.dev>` — Resend's shared test
   sender works immediately with no setup, but can only deliver to the
   email address on your Resend account while unverified.
5. For production, go to Resend → **Domains → Add Domain**, add
   `qlentracx.com` (or your real domain), and add the DNS records Resend
   provides. Once verified, set `CONTACT_FROM_EMAIL` to something like
   `Qlentra Website <no-reply@qlentracx.com>` so it can send to any
   recipient, not just your own account email.
6. Redeploy after adding/changing these environment variables.

The API route validates all fields server-side (never trust client-side
validation alone), rejects the request if the honeypot field is filled,
and returns a clear error message surfaced directly in the form UI if
sending fails for any reason.

## 9. Environment Variables — Exactly Where to Update Things

All environment variables are defined in **`.env.example`** (template) and
consumed via `process.env` inside **`lib/site-config.ts`**, which is the
single source of truth the rest of the site imports from.

| Variable | Purpose | Where it's used |
|---|---|---|
| `NEXT_PUBLIC_CALENDLY_URL` | Your Calendly scheduling page URL | `lib/site-config.ts` → `siteConfig.calendlyUrl` → `components/BookingCTA.tsx`, `components/CalendlyEmbed.tsx` |
| `NEXT_PUBLIC_SITE_URL` | Final production domain (no trailing slash) | `lib/site-config.ts` → `siteConfig.url` → `app/layout.tsx` (metadata/OG), `app/sitemap.ts`, `app/robots.ts` |
| `NEXT_PUBLIC_LINKEDIN_URL` | Official LinkedIn company page | `lib/site-config.ts` → `socialLinks` → `components/SocialLinks.tsx`, footer |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public support email | `lib/site-config.ts` → `siteConfig.email` → Footer, Contact page, Privacy/Terms pages |
| `RESEND_API_KEY` | Server-side secret for sending contact form emails | `app/api/contact/route.ts` |
| `CONTACT_FROM_EMAIL` | The "from" address contact form emails are sent from | `app/api/contact/route.ts` |

**For local development:** edit `.env.local` (already created).
**For production:** add the same keys under Vercel → Project Settings →
Environment Variables, then redeploy.

### Exact locations, quick reference

- **Paste your final Calendly URL:** `.env.local` (dev) and Vercel env vars
  (prod) → key `NEXT_PUBLIC_CALENDLY_URL`.
- **Add your final production domain:** `.env.local` / Vercel env vars →
  key `NEXT_PUBLIC_SITE_URL`.
- **Update the contact email:** `.env.local` / Vercel env vars → key
  `NEXT_PUBLIC_CONTACT_EMAIL`. (Also appears hardcoded as a sensible
  fallback default inside `lib/site-config.ts` if you'd rather not use an
  env var.)
- **Update social links:** `lib/site-config.ts` → the `socialLinks` array
  (Facebook, Instagram, TikTok, and X URLs are set directly there since
  they aren't environment-specific; LinkedIn reads from the env var above
  but can also be edited directly in this same array).

## 10. Update Pricing

Edit `lib/site-config.ts` → `pricingPackages` array. Each package has a
`name`, `subtitle`, `price`, `period`, `features` list, and `cta` label.
The 14-Day Pilot page and homepage pilot section pull the "What's
Included" list from `components/PilotSection.tsx` and
`app/pilot/page.tsx` directly (edit the `included` array in each file).

## 11. Edit Page Content

All page copy lives directly in each route's `page.tsx` file under `app/`,
or in shared data files:

- `lib/site-config.ts` — company info, nav links, footer links, social
  links, pricing, FAQ content
- `lib/content.ts` — services, industries, "what we provide" list, "why
  Qlentra" pillars
- `app/*/page.tsx` — page-specific hero copy and layout

## 12. Brand Assets

Official Qlentra brand files live in `public/brand/`:

- `qlentra-icon.png` — icon mark (used to generate favicon/app icons)
- `qlentra-horizontal-logo.png` — primary header logo
- `qlentra-white-logo.png` — logo on dark backgrounds (used in footer, OG image)
- `qlentra-dark-logo.png` — logo on light backgrounds

`public/favicon.ico`, `public/apple-touch-icon.png`, `public/icon-192.png`,
`public/icon-512.png`, and `public/og-image.jpg` were generated from these
official assets. **The logo files themselves have not been redrawn,
recolored, or modified** — only resized/placed for favicon and OG image
purposes.

## 13. Project Structure

```
app/
  layout.tsx            Root layout, fonts, global SEO metadata
  page.tsx               Home
  solutions/page.tsx      Solutions
  industries/page.tsx     Industries
  pilot/page.tsx          14-Day Pilot
  about/page.tsx          About
  contact/page.tsx        Contact (form + Calendly embed)
  privacy/page.tsx         Privacy Policy
  terms/page.tsx           Terms of Use
  not-found.tsx            Custom 404
  sitemap.ts               Dynamic sitemap.xml
  robots.ts                Dynamic robots.txt
  loading.tsx              Route loading state
  globals.css              Tailwind base + design tokens
  api/contact/route.ts    Contact form email delivery (Resend)

components/
  Header.tsx, Footer.tsx, Hero.tsx
  OrbitalLifecycle.tsx     Signature hero visual (customer lifecycle orbit)
  BookingCTA.tsx           Calendly button (all CTAs route through this)
  CalendlyEmbed.tsx        Inline Calendly widget (Contact page)
  ContactForm.tsx          Validated form + honeypot spam field
  ServiceCard.tsx, IndustryCard.tsx, PricingCard.tsx
  ProcessSteps.tsx, FAQ.tsx, SocialLinks.tsx
  SectionHeading.tsx        Shared heading pattern
  StructuredData.tsx        JSON-LD (Organization, Service, FAQ)
  ProblemSection.tsx, SolutionsPreview.tsx, IndustriesPreview.tsx,
  ProvidesSection.tsx, PilotSection.tsx, WhySection.tsx, FinalCTA.tsx

lib/
  site-config.ts           Central config: nav, footer, social, pricing, FAQ
  content.ts                Services / industries / provisions data

public/
  brand/                    Official Qlentra logo files
  favicon.ico, icon-*.png, apple-touch-icon.png, og-image.jpg
  site.webmanifest
```

## 14. Accessibility & Performance Notes

- Semantic HTML landmarks (`header`, `main`, `footer`, `nav`) throughout.
- Skip-to-content link on every page.
- Visible focus states via global `:focus-visible` styling.
- `prefers-reduced-motion` respected — animations are disabled for users
  who request reduced motion.
- All interactive elements are keyboard-operable (header nav, mobile
  menu, FAQ accordion, form fields).
- Images use `next/image`/`<Image>` where practical for optimization;
  logo files are marked `priority` in the header for fast LCP.
- No heavy client-side dependencies beyond React/Next itself; Framer
  Motion was intentionally **not** added as a dependency since Tailwind's
  built-in keyframe utilities cover all motion needs here, keeping the
  JS bundle lean.

## 15. What Remains to Be Configured Manually

1. **Calendly URL** — replace the placeholder in `.env.example` /
   `.env.local` / Vercel env vars with your real scheduling link (Section 8).
2. **Production domain** — set `NEXT_PUBLIC_SITE_URL` once your domain is
   live (Section 6 & 9).
3. **Contact email** — confirm `support@qlentracx.com` is the correct,
   monitored inbox, or update `NEXT_PUBLIC_CONTACT_EMAIL`.
4. **Contact form backend** — now wired to `app/api/contact/route.ts`,
   which emails enquiries via Resend. You just need to add a
   `RESEND_API_KEY` (see Section 8b) — no further code changes required.
5. **Legal review** — both `app/privacy/page.tsx` and `app/terms/page.tsx`
   display an on-page notice that they are templates requiring review by
   qualified legal counsel, including the governing-law placeholder in
   the Terms page. Replace bracketed placeholders after review.
6. **Analytics** — no analytics package is included by default; add your
   preferred provider (e.g. Vercel Analytics, Plausible) if desired.

---

© Qlentra. All rights reserved.
