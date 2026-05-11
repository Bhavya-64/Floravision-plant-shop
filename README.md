# FloraVision – Plant Shop

A pixel-perfect Next.js implementation of the FloraVision plant shop product listing page, built to match the provided Figma design.

## 🌿 Live Demo

> Deploy to Vercel (instructions below)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: JavaScript (React)
- **Fonts**: Playfair Display + DM Sans (Google Fonts)
- **Images**: Unsplash (via Next.js Image optimization)

## 📦 Setup & Run

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/floravision.git
cd floravision

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🚀 Deploy to Vercel

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your live URL will be provided instantly

## 📄 Page Sections

| Section | Description |
|--------|-------------|
| **Navbar** | Logo, nav links (Plants Type dropdown), search/cart/menu icons, mobile hamburger drawer |
| **Hero Banner** | "Earth's Exhale" heading, CTA buttons, featured plant card, customer quote |
| **Trending Plants** | Horizontal cards with blurred background, price, Explore + cart buttons |
| **Top Selling Plants** | 3-column responsive grid of plant cards with hover effects |
| **Customer Reviews** | 3 testimonial cards with avatar, star rating, and review text |
| **Our Best O2** | Full-width featured section with plant image, description, and Explore CTA |
| **Footer** | Brand tagline, quick links, newsletter subscription, social links |

## 🧩 Component Structure

```
src/
├── app/
│   ├── layout.js         # Root layout with metadata
│   ├── page.js           # Main page assembling all sections
│   └── globals.css       # Global styles, font imports, animations
└── components/
    ├── Navbar.js          # Responsive navbar with dropdown
    ├── HeroBanner.js      # Hero section
    ├── TrendingPlants.js  # Trending section with horizontal cards
    ├── PlantCard.js       # Reusable plant card component
    ├── TopSelling.js      # Top selling grid section
    ├── TestimonialCard.js # Reusable review card
    ├── CustomerReviews.js # Reviews section
    ├── O2Plants.js        # O2 plants featured section
    └── Footer.js          # Footer with newsletter
```

## ✅ Features

- ✅ Pixel-perfect match to Figma design
- ✅ Dark theme (`#1a2318` background)
- ✅ Fully responsive (320px – 1440px)
- ✅ Mobile hamburger navigation with drawer
- ✅ Plants Type dropdown menu
- ✅ Hover transitions on all interactive elements
- ✅ Semantic HTML with proper alt text
- ✅ Keyboard-accessible navigation
- ✅ Optimized images via Next.js Image component
- ✅ Smooth scroll behavior
- ✅ Fade-in animations on page load

## 🎨 Design Tokens

| Token | Value |
|-------|-------|
| Background | `#1a2318` |
| Card BG | `#1e2a1c` |
| Border | `#2e3d2b` |
| Primary Green | `#4a7c59` |
| Text Primary | `#e8f0e0` |
| Text Secondary | `#a8b8a0` |
| Text Muted | `#6b7c65` |
| Display Font | Playfair Display |
| Body Font | DM Sans |
