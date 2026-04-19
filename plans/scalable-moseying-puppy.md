# Visibility AI Landing Page - Implementation Plan

## Context

This landing page will showcase "Visibility AI" - a service that generates AI Visibility/AEO reports for user-submitted URLs. The design follows a minimalist premium black-and-white aesthetic similar to Resend, focusing on clean typography, subtle animations, and professional trust signals.

**Problem:** Need a conversion-focused landing page that captures user URLs and generates AI-powered visibility reports.

**Outcome:** A complete, production-ready landing page with all marketing sections, ready for user acquisition.

---

## Implementation Approach

### Recommended Strategy

Build from the ground up using Vite for fastest development, then layer in shadcn/ui components for consistent design. Follow the black-and-white premium aesthetic with careful attention to spacing, typography, and micro-interactions.

---

## Project Structure

```
visibility-ai/
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn/ui base components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── accordion.tsx
│   │   │   └── sheet.tsx
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   └── mobile-nav.tsx
│   │   └── sections/
│   │       ├── hero/
│   │       │   ├── hero.tsx
│   │       │   ├── hero-form.tsx
│   │       │   └── hero-visual.tsx
│   │       ├── features/
│   │       │   ├── features.tsx
│   │       │   └── feature-card.tsx
│   │       ├── how-it-works/
│   │       │   ├── how-it-works.tsx
│   │       │   └── step-card.tsx
│   │       ├── testimonials/
│   │       │   ├── testimonials.tsx
│   │       │   └── testimonial-card.tsx
│   │       ├── pricing/
│   │       │   ├── pricing.tsx
│   │       │   └── pricing-card.tsx
│   │       ├── faq/
│   │       │   ├── faq.tsx
│   │       │   └── faq-item.tsx
│   │       ├── cta/
│   │       │   └── cta-section.tsx
│   │       └── index.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   └── constants.ts
│   ├── hooks/
│   │   └── use-scroll.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── public/
│   └── favicon.ico
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Dependencies

### Core Dependencies
```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.468.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.4",
    "class-variance-authority": "^0.7.0"
  }
}
```

### Dev Dependencies
```json
{
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "typescript": "^5.6.2",
    "vite": "^5.4.10",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@radix-ui/react-slot": "^1.1.1",
    "@radix-ui/react-label": "^2.1.1",
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-accordion": "^1.2.1",
    "@radix-ui/react-icons": "^1.3.2"
  }
}
```

---

## Section Specifications

### 1. Header
- Logo: "Visibility AI" (text-based, bold)
- Desktop: Navigation links (Features, How It Works, Pricing, FAQ) + CTA button
- Mobile: Hamburger menu with sheet drawer
- Sticky positioning with subtle backdrop blur

### 2. Hero Section
- **Layout:** Centered, dark background (#0A0A0A) with subtle gradient mesh
- **Headline:** "Unlock Your AI Visibility" (3.5rem, bold)
- **Subheadline:** "Get a comprehensive AEO report and detailed recommendations to improve your presence in AI search results."
- **HeroForm:**
  - URL input field with validation
  - Primary CTA button "Get My Free Report"
  - Loading state with spinner
  - Static demo - shows loading then redirects to a "thank you" message
- **Visual:** Abstract geometric pattern or subtle animated gradient

### 3. Features Section
- **Layout:** 2x3 grid (2 columns, 3 rows)
- **Features:**
  1. **AEO Report** - Comprehensive audit of your AI engine optimization
  2. **Visibility Score** - AI-powered scoring of your digital presence
  3. **Detailed Recommendations** - Actionable steps to improve visibility
  4. **Competitive Insights** - See how you stack up against competitors
  5. **Content Gap Analysis** - Identify missing content opportunities
  6. **Real-time Monitoring** - Track changes over time

### 4. How It Works Section
- **Layout:** Numbered timeline with arrows (desktop) / vertical stack (mobile)
- **Steps:**
  1. **Enter URL** - Submit the website you want analyzed
  2. **AI Analysis** - Our engine processes your data
  3. **Get Report** - Receive detailed PDF report instantly
  4. **Implement** - Follow recommendations to improve

### 5. Testimonials Section
- **Layout:** 3-column grid
- **Testimonials:**
  - "Visibility AI helped us understand where we were losing AI traffic. The recommendations were spot-on." - Sarah Chen, CMO at TechStart
  - "The AEO report revealed gaps we didn't know existed. We've seen 40% improvement in AI search presence." - Marcus Rodriguez, Growth Lead
  - "Best investment we made this quarter. The insights alone are worth 10x the price." - Emily Watson, Product Director

### 6. Pricing Section
- **Layout:** 3 cards with monthly pricing (no toggle)
- **Tiers:**
  - **Free:** $0 - 1 report/month, basic insights, PDF export
  - **Pro:** $49/mo - 10 reports/month, detailed analysis, competitive insights
  - **Business:** $149/mo - Unlimited reports, API access, priority support

### 7. FAQ Section
- **Layout:** Accordion with smooth expand/collapse
- **Questions:**
  - What is AI visibility?
  - How accurate are the reports?
  - What sites are supported?
  - How long does analysis take?
  - Can I export reports?
  - What data sources do you use?
  - Is my data secure?
  - Can I integrate via API?
  - Do you offer refunds?
  - What's the difference between AEO and SEO?

### 8. CTA Section
- **Layout:** Centered, bold headline
- **Headline:** "Ready to Improve Your AI Visibility?"
- **Subheadline:** "Join hundreds of companies optimizing for the future of search."
- **Primary Button:** "Get Your Free Report"
- **Background:** Subtle pattern or gradient

### 9. Footer
- **Layout:** 4-column grid
- **Columns:**
  - Product (Features, Pricing, FAQ)
  - Company (About, Blog, Contact)
  - Legal (Privacy, Terms, Cookies)
  - Social (Twitter, LinkedIn, GitHub icons)
- **Bottom:** Copyright notice

---

## Critical Files

| File | Purpose |
|------|---------|
| `src/lib/utils.ts` | Core `cn()` utility for class merging |
| `src/lib/constants.ts` | Configuration (pricing, features, testimonials) |
| `src/components/ui/button.tsx` | Button component with variants |
| `src/components/ui/accordion.tsx` | FAQ accordion |
| `src/styles/globals.css` | Global styles, animations, Inter font |
| `src/components/layout/header.tsx` | Navigation |
| `src/components/sections/hero/hero.tsx` | Primary conversion section |
| `src/App.tsx` | Main component assembling all sections |

---

## Design System

### Colors
```css
--background: #FAFAFA
--foreground: #111111
--primary: #000000
--primary-foreground: #FFFFFF
--secondary: #F4F4F5
--border: #E5E5E5
--muted: #F5F5F5
--muted-foreground: #737373
```

### Typography (Inter from Google Fonts)
```
H1: 3.5rem (56px) - 700 weight
H2: 2.5rem (40px) - 600 weight
H3: 1.5rem (24px) - 600 weight
Body: 1rem (16px) - 400 weight
Small: 0.875rem (14px) - 400 weight
```

### Spacing
```
Section padding: 6rem (96px) top/bottom
Container max-width: 1200px
Gap between cards: 1.5rem (24px)
Button padding: 1rem 2rem
```

### Animations
```
Micro-interactions: 150-300ms
Section entrances: 500-700ms
Easing: cubic-bezier(0.4, 0, 0.2, 1)
Stagger delay: 50-100ms between children
```

---

## TypeScript Types

```typescript
interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface PricingTier {
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface Step {
  number: number;
  title: string;
  description: string;
}
```

---

## Implementation Steps

### Phase 1: Project Setup (30 min)
1. Initialize Vite + React + TypeScript project
2. Install TailwindCSS and configure
3. Install core dependencies (lucide-react, clsx, tailwind-merge, class-variance-authority)
4. Install Radix UI dependencies
5. Set up directory structure

### Phase 2: Core Infrastructure (1 hour)
1. Create `lib/utils.ts` with `cn()` helper
2. Create `lib/constants.ts` with all data
3. Set up `styles/globals.css` with Inter font and CSS variables
4. Configure tailwind.config.js with custom theme
5. Create base UI components (button, input, card, accordion, sheet)

### Phase 3: Layout Components (45 min)
1. Create `use-scroll` hook for scroll detection
2. Build `Header` component with mobile menu
3. Build `Footer` component
4. Create reusable `Container` and `Section` components

### Phase 4: Section Implementation (3-4 hours)
1. **Hero Section** - URL form with loading state
2. **Features Section** - Grid with icons
3. **How It Works** - Timeline layout
4. **Testimonials** - Grid of cards
5. **Pricing** - Three-tier display
6. **FAQ** - Accordion component
7. **CTA Section** - Final call to action

### Phase 5: Polish (1 hour)
1. Add scroll-triggered animations
2. Add hover effects on interactive elements
3. Responsive testing and adjustments
4. Accessibility review (ARIA, semantic HTML)
5. Cross-browser testing

---

## Verification / Testing

### Manual Testing Checklist
- [ ] All sections render correctly
- [ ] Mobile navigation works (hamburger menu)
- [ ] Hero form shows loading state on submit
- [ ] FAQ accordion expands/collapses smoothly
- [ ] All buttons have hover states
- [ ] Typography scales correctly on mobile
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] Lighthouse score > 90 (performance, accessibility, best practices)

### Commands to Run
```bash
# Install dependencies
npm install

# Type checking
npm run type-check

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Expected Output
- Clean, premium black-and-white aesthetic
- Smooth animations and transitions
- Fully responsive across all devices
- Conversion-focused hero section
- Professional trust signals throughout

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| shadcn/ui complexity | Follow official docs, start with simple components |
| Responsive issues | Mobile-first development, test early |
| TypeScript errors | Use strict mode, define all interfaces |
| Performance issues | Lazy load heavy components, optimize animations |
| Browser compatibility | Target modern browsers (95%+ coverage) |

---

## Next Actions

Once approved:
1. Initialize project with Vite
2. Set up all dependencies and configuration
3. Build components incrementally
4. Test each section before moving to next
5. Final polish and production build
