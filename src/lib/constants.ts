import {
  BarChart3,
  Target,
  Lightbulb,
  TrendingUp,
  FileText,
  ShieldCheck,
} from "lucide-react"

export const FEATURES = [
  {
    icon: FileText,
    title: "AEO Report",
    description: "Comprehensive audit of your AI engine optimization covering all key ranking factors.",
  },
  {
    icon: Target,
    title: "Visibility Score",
    description: "AI-powered scoring system that quantifies your digital presence in AI search results.",
  },
  {
    icon: Lightbulb,
    title: "Detailed Recommendations",
    description: "Actionable, prioritized steps to improve your visibility with clear implementation guidance.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Insights",
    description: "See how you stack up against competitors and identify opportunities to outperform them.",
  },
  {
    icon: BarChart3,
    title: "Content Gap Analysis",
    description: "Discover missing content opportunities that your competitors are capitalizing on.",
  },
  {
    icon: ShieldCheck,
    title: "Real-time Monitoring",
    description: "Track your visibility changes over time with automated monitoring and alerts.",
  },
]

export const STEPS = [
  {
    number: 1,
    title: "Enter URL",
    description: "Submit the website you want analyzed for AI visibility.",
  },
  {
    number: 2,
    title: "AI Analysis",
    description: "Our engine processes your data using advanced AI algorithms.",
  },
  {
    number: 3,
    title: "Get Report",
    description: "Receive a detailed PDF report with your visibility score and insights.",
  },
  {
    number: 4,
    title: "Implement",
    description: "Follow our recommendations to improve your AI search presence.",
  },
]

export const TESTIMONIALS = [
  {
    quote: "Visibility AI helped us understand where we were losing AI traffic. The recommendations were spot-on.",
    author: "Sarah Chen",
    role: "CMO",
    company: "TechStart",
  },
  {
    quote: "The AEO report revealed gaps we didn't know existed. We've seen 40% improvement in AI search presence.",
    author: "Marcus Rodriguez",
    role: "Growth Lead",
    company: "ScaleUp Inc",
  },
  {
    quote: "Best investment we made this quarter. The insights alone are worth 10x the price.",
    author: "Emily Watson",
    role: "Product Director",
    company: "InnovateCo",
  },
]

export const PRICING_TIERS = [
  {
    name: "Free",
    price: 0,
    features: [
      "1 report per month",
      "Basic visibility insights",
      "PDF export",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: 49,
    features: [
      "10 reports per month",
      "Detailed analysis",
      "Competitive insights",
      "Priority support",
      "API access (limited)",
    ],
  },
  {
    name: "Business",
    price: 149,
    features: [
      "Unlimited reports",
      "Full analysis suite",
      "Advanced competitive intelligence",
      "Dedicated support",
      "Full API access",
      "Custom integrations",
    ],
  },
]

export const FAQS = [
  {
    question: "What is AI visibility?",
    answer:
      "AI visibility refers to how prominently your content appears in AI-powered search results and generative AI responses. As AI search grows, optimizing for these new search interfaces is crucial for maintaining organic traffic and brand presence.",
  },
  {
    question: "How accurate are the reports?",
    answer:
      "Our reports are generated using advanced AI algorithms trained on thousands of successful optimization cases. We analyze over 100 data points across your website to provide accurate, actionable insights. Most users see measurable improvements within 30 days of implementation.",
  },
  {
    question: "What sites are supported?",
    answer:
      "We support any publicly accessible website, including e-commerce platforms, SaaS applications, content sites, and landing pages. We currently support WordPress, Shopify, Webflow, and custom-built sites.",
  },
  {
    question: "How long does analysis take?",
    answer:
      "A basic analysis completes in 2-5 minutes. Comprehensive reports with competitive analysis may take 10-15 minutes. You'll receive a notification when your report is ready.",
  },
  {
    question: "Can I export reports?",
    answer:
      "Yes! All plans include PDF export. Pro and Business plans also support CSV data export and API access for integrating reports into your workflows.",
  },
  {
    question: "What data sources do you use?",
    answer:
      "We analyze multiple data sources including search engine indexing status, content quality signals, structured data implementation, page speed metrics, and AI training corpus presence.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use enterprise-grade encryption and never store your proprietary data. Reports are generated in real-time and deleted after 30 days. We're SOC 2 compliant.",
  },
  {
    question: "Can I integrate via API?",
    answer:
      "Yes, API access is available on Pro (limited) and Business (full) plans. Our REST API allows you to automate report generation and integrate visibility data into your dashboards.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied with the insights and recommendations, we'll refund your subscription.",
  },
  {
    question: "What's the difference between AEO and SEO?",
    answer:
      "SEO (Search Engine Optimization) focuses on traditional search engines like Google. AEO (AI Engine Optimization) is specifically designed for AI-powered search interfaces like ChatGPT, Perplexity, and Google's AI Overviews. While SEO principles overlap, AEO requires different strategies optimized for how AI models process and present information.",
  },
]
