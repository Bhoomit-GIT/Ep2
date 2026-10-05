# Aura Concierge — VIP Concierge Services

A complete, pixel-perfect luxury web application replica with custom branding, self-contained assets, custom fonts, video backgrounds, Lenis smooth scrolling, GSAP ScrollTrigger animations, interactive navigation, and consultation inquiry form.

## Brand Identity

- **Brand**: `Aura`
- **Sub-label**: `- CONCIERGE -`
- **Main Editorial Headline**: `FOR THE BEST AURA EXPERIENCE...`
- **Signature Handwritten Script**: `Book with Aura`
- **Marquee Ticker**: `Feel the aura of VILLAS + YACHTS + HOTELS + ...`

## Features

- **Hero Arch Gate Experience**: Custom archway mask (`bg-gate`) that dynamically zooms and unrolls into the background villa video on scroll, complete with the curved circular scroll indicator badge.
- **Bespoke Typography**:
  - `Kaushan Script` (Brand logo)
  - `Dream Orphans` (Bold, Regular, Italic)
  - `Eastern Harrogate` (Handwritten script)
  - `Afacad Flux` (Modern grotesque sans)
- **High-Definition Background Videos**:
  - Hero villa pool loop (`homepage-hero.mp4`)
  - Service card loops (Villas, Hotels, Transport, Yachts, Corporate, Events, Weddings, Itineraries)
  - Day clubs & Nightclubs video loops
- **Interactive Navigation & Drawer**:
  - Left Menu pill button with wave vector icon opening the slide-out drawer menu with accordion sub-navigation
  - Right Book pill button with airplane vector icon linking directly to the quote consultation section
- **Sections & Graphic Elements**:
  - "Come for the beaches, stay for the feeling" with palm leaf shadows and BBC feature emblem
  - Polaroid photo cards with authentic drop-shadow and handwritten tape stickers
  - Service grid cards with smooth hover & video transitions
  - **Bespoke Living & Hospitality**: Private chefs, elite villa hosts & butlers, sommelier & poolside bar, and in-sanctuary wellness therapies
  - **The Curators (Team Members)**: High-profile concierge directors (Elena Rostova, Marcus Sterling, Sofia De La Torre, Alexandre Laurent) with specialties, languages, and direct liaison CTAs
  - **Need Help Section**: Direct CTA banner connecting clients with Aura Concierge experts
  - Trust, Reliability, Personal, Professional feature highlights
  - Scrolljacking day & night clubs section with rotating club badges
  - Corporate brand marquee (Shein, Boohoo, Jet2.com, Frasers Group, Jack Wills)
  - **The Aura Journal (Blog)**: Curated luxury editorial insights (Secret Coves & Anchorages, In-Villa Michelin Dining, VIP Nightlife & Private Galas)
  - Interactive quote form with custom phone input & client-side confirmation feedback
  - Dark slate footer with complete phone, email (`INFO@AURACONCIERGE.COM`), social links, and navigation
  - Floating WhatsApp concierge contact button

## Directory Structure

```
├── index.html              # Main application page
├── assets/
│   ├── css/                # Complete compiled styling
│   ├── fonts/              # Custom Dream Orphans, Eastern Harrogate & Afacad Flux fonts
│   ├── img/                # High-res photography, polaroids, logos, badges & SVGs
│   ├── js/                 # GSAP, ScrollTrigger, Lenis, Swiper, Splide, Arctext, AOS
│   └── video/              # High-definition video loops
├── package.json            # Project definition and npm run commands
└── README.md               # Documentation
```

## Running Locally

```bash
npm run dev
# or
npm start
```
Then open `http://localhost:3000` in your browser.

## Deployment

This website is a production-ready, self-contained static application with zero build steps required.

### Deploy to Vercel (Recommended)
1. Install the Vercel CLI or import via the Vercel Dashboard:
   ```bash
   npx vercel
   ```
2. Follow the prompts. The included `vercel.json` already configures static routing, long-term asset caching headers (fonts, images, videos, CSS/JS), and security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`).

### Deploy to Netlify
1. Drag and drop the project folder into [Netlify Drop](https://app.netlify.com/drop), or run:
   ```bash
   npx netlify deploy --prod --dir=.
   ```

### Deploy to GitHub Pages
1. Push the repository to GitHub.
2. In your repository settings, navigate to **Pages** -> **Build and deployment**.
3. Under **Source**, select **Deploy from a branch** -> branch `main` -> folder `/ (root)` -> **Save**.

