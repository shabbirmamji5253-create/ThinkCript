// Edit this file to change names, copy, images, pricing, projects, and social links.
// Layout components read from this config so non-developers can update content safely.
import {
  BadgeCheck,
  Clapperboard,
  Film,
  Layers3,
  MessageCircle,
  Rocket,
  ScanSearch,
  Sparkles,
  Wand2,
} from "lucide-react";

import myphoto from "../assets/myphoto.png";

import ammar from "../assets/ammar.png";

export const site = {
  name: "CutX Studio",
  nav: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/#work" },
    { label: "Plans", href: "/#plans" },
    { label: "Process", href: "/#process" },
    { label: "Founders", href: "/founders" },
    { label: "Contact", href: "/#contact" },
  ],
  socials: {
    whatsapp: "https://wa.me/918306251953",
    instagram: "https://instagram.com/cutxstudio.official",
    email: "mailto:cutxstudio53@gmail.com",
  },
};

export const founders = [
  {
    name: "Ammar Patiya",
    role: "Content Performer / Co editor / Face ",
    image:ammar,
    short: "On-screen creator and co-editor, turning ideas into engaging, well-timed content pieces",
    story:
      "Co-editor and on-camera talent, bringing ideas to life through performance, timing, and presence across every piece of content.",
    skills: ["Video Editing", "On Camera Performance", "Quick Edits"],
  },
  {
    name: "S.",
    role: "Lead Editor / Director / Web Developer",
    image:myphoto,
    short: "The one quietly shaping ideas into systems before anyone else sees",
    story:
    "The director, lead editor and the builder behind the webs, bringing structure, visuals, and execution together - usually before others notice.",
    skills: ["Video editing", "Scripting", "Researching", "Web Developing"],
  },
];

export const projects = [
  {
    title: "Velocity Launch Film",
    type: "video",
    category: "Product Campaign",
    media:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    poster:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=82",
    description:
      "A punchy launch edit with kinetic typography, paid social cutdowns, and founder-led narrative hooks.",
    gallery: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=82",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=82",
    ],
  },
  {
    title: "Blue Hour Social System",
    type: "image",
    category: "Social Content",
    media:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=82",
    description:
      "A modular visual system for weekly reels, carousels, and promo shorts with high contrast motion frames.",
    gallery: [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=82",
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=82",
    ],
  },
  {
    title: "Founder Cutdowns",
    type: "video",
    category: "Personal Brand",
    media:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    poster:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=82",
    description:
      "A month of founder-led short-form clips edited for pace, clarity, punchlines, and conversion.",
    gallery: [
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=82",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=82",
    ],
  },
  {
    title: "Retention Rebrand",
    type: "image",
    category: "Brand Motion",
    media:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=82",
    description:
      "Motion identity, edit rules, transitions, intro packs, lower thirds, and campaign graphics.",
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=82",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=82",
    ],
  },
];

export const plans = [
  {
    name: "Starter Cut",
    monthly: "Rs 2,999/month",
    description: "Sinple edit support for brands that need assets fast.",
    features: ["4 short-form edits", "Basic captions", "1 revision round", "Delivery in 2 - 3 days"],
  },
  {
    name: "Momentum",
    monthly: "Rs 6,999/month",
    description: "The best fit for active campaigns and consistent content drops.",
    recommended: true,
    features: ["8 short-form edits", "Storytelling", "Marketing Scripts", "Delivery in 3 days", "Vloging Availaible"],
  },
  {
    name: "Growth",
    monthly: "Rs 5,500/month",
    description: "Premium strategy, production planning, and high-volume motion assets.",
    features: ["18 assets/month", "Storytelling", "Marketing Script", "Delivery in 3 days", "Vloging Availaible"],
  },
  {
    name: "Per Short",
    monthly: "Custom",
    description: "For Creators and Brands wanting to test first.",
    features: ["Services According To Price", "Payment per short", "Delivery in 3 - 5 days"],
  },
];

export const processSteps = [
  { icon: ScanSearch, title: "Audit", text: "We decode the brand, audience, offer, and existing content gaps." },
  { icon: Wand2, title: "Concept", text: "Hooks, storyboards, edit references, and a campaign rhythm take shape." },
  { icon: Clapperboard, title: "Capture", text: "We guide filming or pull from your footage library with a clear shot map." },
  { icon: Layers3, title: "Edit", text: "Pacing, motion, captions, color, and sound get tuned for retention." },
  { icon: BadgeCheck, title: "Launch", text: "Assets ship organized for social, ads, landing pages, and sales teams." },
  { icon: Rocket, title: "Iterate", text: "Performance signals turn into sharper hooks and cleaner creative systems." },
];

export const behindScenes = [
  {
    title: "Timeline Build",
    type: "image",
    media:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=82",
  },
  {
    title: "Color Pass",
    type: "image",
    media:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=82",
  },
  {
    title: "Studio Notes",
    type: "image",
    media:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=82",
  },
  {
    title: "Motion Review",
    type: "video",
    media:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    poster:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=82",
  },
];

export const stats = [
  { value: "140+", label: "Total Edits" },
  { value: "38M", label: "Total views" },
  { value: "1k", label: "Followers" },
];

export const heroBadges = [
  { icon: Film, text: "Video editing" },
  { icon: Sparkles, text: "Marketing" },
  { icon: MessageCircle, text: "Campaign strategy" },
];
