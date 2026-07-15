import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  faShirt,
  faBagShopping,
  faPalette,
  faUserGear,
  faGlasses,
  faChampagneGlasses,
  faBoxArchive,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  icon: IconDefinition;
  image: string;
  features: string[];
  longDescription: string;
  includes: string[];
}

export const services: Record<string, ServiceItem> = {
  "wardrobe-consultation": {
    slug: "wardrobe-consultation",
    title: "Wardrobe Consultation",
    description: "Audit, curate, and transform your closet into a functional style arsenal.",
    icon: faShirt,
    image: "/images/services/wardrobe-consultation.jpg",
    features: [
      "Full closet audit & inventory",
      "Outfit combination planning",
      "Gap analysis for missing pieces",
      "Seasonal rotation strategy",
    ],
    longDescription:
      "Your wardrobe should work for you, not against you. Our comprehensive wardrobe consultation dives deep into your current closet, identifying what works, what doesn't, and what's missing. We create a personalized style blueprint that makes getting dressed effortless and enjoyable every single day.",
    includes: [
      "2-hour in-home or virtual session",
      "Digital closet inventory",
      "Personalized outfit lookbook",
      "Shopping list for essential pieces",
    ],
  },
  "personal-shopping": {
    slug: "personal-shopping",
    title: "Personal Shopping",
    description: "Expert-guided shopping experiences tailored to your style, budget, and lifestyle.",
    icon: faBagShopping,
    image: "/images/services/personal-shopping.jpg",
    features: [
      "Pre-shop style briefing",
      "Curated store selection",
      "Budget-conscious approach",
      "Post-purchase outfit styling",
    ],
    longDescription:
      "Say goodbye to impulse buys and closet regrets. Our personal shopping service pairs you with a style expert who understands your body type, coloring, and lifestyle. We pre-select items before your arrival so every minute in-store is productive and enjoyable.",
    includes: [
      "Style questionnaire & pre-brief",
      "3-hour guided shopping session",
      "Fitting room styling & advice",
      "Digital lookbook of all purchases",
    ],
  },
  "color-analysis": {
    slug: "color-analysis",
    title: "Color Analysis",
    description: "Discover your seasonal color palette and unlock colors that make you glow.",
    icon: faPalette,
    image: "/images/services/color-analysis.jpg",
    features: [
      "Seasonal palette determination",
      "Fabric draping analysis",
      "Makeup & accessory color guide",
      "Digital color swatch card",
    ],
    longDescription:
      "Wearing the right colors transforms your entire appearance — eyes brighten, skin glows, and confidence soars. Our professional color analysis uses scientific draping techniques to identify your perfect palette. You'll leave with clarity on every shade that flatters you.",
    includes: [
      "90-minute color draping session",
      "Custom seasonal palette guide",
      "Makeup shade recommendations",
      "Digital swatch card for shopping",
    ],
  },
  "style-makeover": {
    slug: "style-makeover",
    title: "Style Makeover",
    description: "Complete image transformation from head to toe — new you, new confidence.",
    icon: faUserGear,
    image: "/images/services/style-makeover.jpg",
    features: [
      "Comprehensive style assessment",
      "Body shape analysis",
      "Hair & grooming advisory",
      "Full wardrobe overhaul plan",
    ],
    longDescription:
      "Ready for a dramatic change? Our signature style makeover is a complete transformation experience. We analyze every aspect of your current image — wardrobe, grooming, posture, and personal brand — then craft a comprehensive plan to elevate your entire presence.",
    includes: [
      "2 style consultation sessions",
      "Personal shopping experience",
      "Hair & grooming partner referrals",
      "90-day style support via chat",
    ],
  },
  "virtual-styling": {
    slug: "virtual-styling",
    title: "Virtual Styling",
    description: "Professional styling advice from anywhere via video consultation and digital tools.",
    icon: faGlasses,
    image: "/images/services/virtual-styling.jpg",
    features: [
      "Video consultation sessions",
      "Digital wardrobe review",
      "Online shopping links",
      "Ongoing style chat support",
    ],
    longDescription:
      "Great style knows no boundaries. Our virtual styling service brings expert advice directly to you, wherever you are. Through video consultations, digital wardrobe reviews, and curated online shopping links, we deliver the full StyleCraft experience virtually.",
    includes: [
      "60-minute video consultation",
      "Digital closet review & feedback",
      "Curated online shopping list",
      "2 weeks of chat support",
    ],
  },
  "event-styling": {
    slug: "event-styling",
    title: "Special Event Styling",
    description: "Look unforgettable at galas, weddings, red carpets, and milestone celebrations.",
    icon: faChampagneGlasses,
    image: "/images/services/event-styling.jpg",
    features: [
      "Event-specific look curation",
      "Designer & rental sourcing",
      "Accessory coordination",
      "Day-of styling support",
    ],
    longDescription:
      "When the occasion demands extraordinary, trust our special event styling service. From black-tie galas to destination weddings, we ensure you arrive looking flawless and feeling confident. We handle every detail — from the gown to the last accessory.",
    includes: [
      "Pre-event style consultation",
      "3 curated outfit options",
      "Accessory & shoe pairing",
      "Day-of touch-up support",
    ],
  },
  "closet-organization": {
    slug: "closet-organization",
    title: "Closet Organization",
    description: "Declutter, systematize, and beautify your closet for effortless morning routines.",
    icon: faBoxArchive,
    image: "/images/services/closet-organization.jpg",
    features: [
      "Declutter & donation guidance",
      "Category-based organization",
      "Storage solution recommendations",
      "Maintenance system setup",
    ],
    longDescription:
      "A cluttered closet creates a cluttered mind. Our closet organization service transforms chaotic spaces into serene, functional dressing rooms. We categorize, fold, hang, and arrange everything beautifully so your morning routine becomes a pleasure, not a battle.",
    includes: [
      "3-4 hour hands-on organization",
      "Donation bag coordination",
      "Storage product recommendations",
      "Maintenance guide & checklist",
    ],
  },
  "corporate-image": {
    slug: "corporate-image",
    title: "Corporate Image Consulting",
    description: "Executive presence training and professional wardrobe strategy for business leaders.",
    icon: faBuilding,
    image: "/images/services/corporate-image.jpg",
    features: [
      "Executive presence coaching",
      "Professional dress code strategy",
      "Media & presentation styling",
      "Team image workshops",
    ],
    longDescription:
      "Your professional image speaks before you do. Our corporate image consulting service helps executives, entrepreneurs, and teams project authority, competence, and approachability through strategic personal presentation. We offer one-on-one coaching and team workshops.",
    includes: [
      "Executive image assessment",
      "Professional wardrobe strategy",
      "Presentation styling session",
      "Quarterly style check-in",
    ],
  },
};

export const serviceList = Object.values(services);
