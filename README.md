# Ganpati Dental Clinic — Website

A professional, fully responsive website for Ganpati Dental Clinic, Sirsa, Haryana.

## 📁 Files

| File | Purpose |
|---|---|
| `index.html` | Full page structure, content, SEO meta tags, structured data |
| `styles.css` | Responsive styling, colors, animations, media queries |
| `script.js` | Mobile menu, smooth scroll, scroll-reveal animations, form validation, WhatsApp integration |

## ✨ Features

- **Mobile-first, fully responsive** — tested breakpoints at 320px, 768px, 1200px+
- **Sticky navigation** with hamburger menu on mobile
- **Hero section** with gradient background and clear CTAs
- **Quick info cards** (Location, Hours, Contact) with hover effects
- **6 service cards** with gradient backgrounds and hover animations
- **About section** with "Why Choose Us" list and 5.0★ rating badge
- **Contact section** with:
  - Click-to-call phone link
  - Google Maps directions link
  - Embedded Google Map
  - WhatsApp direct chat link
  - Validated contact form that sends submissions via WhatsApp
- **Floating WhatsApp button**
- **Scroll-reveal animations** using IntersectionObserver
- **SEO**: meta description/keywords, Open Graph tags, `Dentist` structured data (JSON-LD), semantic heading hierarchy
- **Accessibility**: ARIA labels on nav/hamburger/form, sufficient color contrast, alt-safe icon usage (emoji + text pairing), keyboard-dismissible mobile menu (Esc key)

## 🎨 Color Palette

| Role | Color | Hex |
|---|---|---|
| Primary | Professional Blue | `#0066cc` |
| Secondary | Calming Green | `#00a86b` |
| Accent (CTA) | Warm Red | `#ff6b6b` |
| Background | Light Gray | `#f9f9f9` |
| Text | Dark Gray | `#333333` |

## 🔧 Customization

- **Phone number**: search-and-replace `919992652681` / `+91 99926 52681` across all three files.
- **Address**: update the address text in `index.html` (appears in Hero info strip, Quick Info card, Contact section, Footer, and the Google Maps `iframe`/links).
- **Images**: the hero currently uses an emoji-based placeholder (`.hero-image-placeholder` in `styles.css`). Replace with a real photo by swapping the `<div class="hero-image-placeholder">...</div>` block in `index.html` for an `<img>` tag, e.g.:
  ```html
  <img src="images/clinic-hero.jpg" alt="Ganpati Dental Clinic reception" class="hero-photo">
  ```
- **Reviews/Rating**: update the "5.0" and "172 Reviews" text in the hero badge, quick info, about section, contact info, and the JSON-LD schema block.
- **WhatsApp message templates**: edit the pre-filled text in the `wa.me` links in `index.html` and in `script.js` (`whatsappMessage` variable).

## 🚀 Deployment Guide

### Option 1: Static hosting (recommended, free)
1. Create a free account on **Netlify**, **Vercel**, or **GitHub Pages**.
2. Upload/drag-drop the folder containing `index.html`, `styles.css`, and `script.js` (keep them in the same directory).
3. Deploy — your site will get a live URL instantly (e.g. `yourclinic.netlify.app`).
4. Optionally connect a custom domain (e.g. `ganpatidentalclinic.com`) via the host's domain settings.

### Option 2: Traditional web hosting (cPanel / shared hosting)
1. Purchase hosting + domain (GoDaddy, Hostinger, BigRock, etc. — popular in India).
2. Access **File Manager** or connect via **FTP** (FileZilla).
3. Upload `index.html`, `styles.css`, and `script.js` to the `public_html` (or `www`) root folder.
4. Visit your domain — the site should load automatically.

### Option 3: GitHub Pages
1. Create a GitHub repository and push these three files to it.
2. Go to **Settings → Pages**, set source to the `main` branch / root folder.
3. Your site will be live at `https://yourusername.github.io/repo-name/`.

## ✅ Post-Deployment Checklist

- [ ] Test click-to-call on an actual mobile device
- [ ] Test the WhatsApp button and contact form on mobile + desktop
- [ ] Verify Google Maps directions link opens correctly
- [ ] Submit the site to **Google Business Profile** and **Google Search Console** for local SEO
- [ ] Add real clinic photos in place of the emoji placeholder
- [ ] Test on Chrome, Safari, Firefox, and Edge
- [ ] Run a Lighthouse audit (Performance / Accessibility / SEO) in Chrome DevTools
- [ ] Set up HTTPS (most hosts like Netlify/Vercel provide this automatically)

## 📱 Browser & Device Support

Tested for modern evergreen browsers (Chrome, Firefox, Safari, Edge) and responsive across:
- Mobile: 320px – 767px
- Tablet: 768px – 1199px
- Desktop: 1200px+

---
Built for **Ganpati Dental Clinic** — Satnam Singh Chowk, Kanganpur Road, Kirti Nagar, Sirsa, Haryana 125055.
