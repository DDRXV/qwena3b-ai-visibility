# Visibility AI

A modern landing page for an AI Visibility/AEO reporting startup, built with React, TypeScript, Vite, TailwindCSS, and shadcn/ui.

## Features

- **Hero Section** - URL input form for generating AI Visibility reports
- **Features Section** - 6 core features with icons
- **How It Works** - 4-step process visualization
- **Testimonials** - Social proof from customers
- **Pricing** - 3-tier pricing (Free, Pro, Business)
- **FAQ** - Accordion-style frequently asked questions
- **CTA Section** - Final call to action
- **Footer** - Navigation links and social media

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **shadcn/ui** - Component library
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type checking
npm run type-check

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui base components
│   ├── layout/          # Header, Footer
│   └── sections/        # Hero, Features, Pricing, etc.
├── lib/
│   ├── constants.ts     # Data for all sections
│   └── utils.ts         # Utility functions
├── styles/
│   └── globals.css      # Global styles
├── App.tsx              # Main application component
└── main.tsx             # Entry point
```

## Customization

### Colors

The color scheme is defined in `src/styles/globals.css` using CSS variables. Modify the `:root` section to change the color palette.

### Content

All content data is stored in `src/lib/constants.ts`:
- `FEATURES` - Feature list with icons
- `STEPS` - How it works steps
- `TESTIMONIALS` - Customer testimonials
- `PRICING_TIERS` - Pricing information
- `FAQS` - FAQ questions and answers

### Fonts

The Inter font is loaded from Google Fonts in `index.html`.

## Deployment

```bash
# Build for production
npm run build

# The output will be in the dist/ directory
# Deploy this directory to your hosting provider
```

## License

MIT
