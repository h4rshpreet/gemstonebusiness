import { CustomBarFeature } from '../types';

export const CUSTOM_BAR_FEATURES: CustomBarFeature[] = [
  {
    step: 1,
    title: 'Select Raw or Cut Stones',
    description: 'Browse our tactile studio trays of raw crystalline points, organic tumbled cabochons, and hand-faceted gems from Peru, Sri Lanka, and Madagascar.',
    assignedAssetId: 'image-16',
    craftNotes: 'Each stone is untreated and individually weighed, keeping its distinct organic contour and natural inclusions.',
  },
  {
    step: 2,
    title: 'Choose Custom Metal Wrapping',
    description: 'Select your wire gauge and metallurgy: 14k/18k Gold-Filled Wire, 925 Sterling Silver, or solid recycled gold. Choose between tight cage spirals, prong embraces, or minimalist bails.',
    assignedAssetId: 'image-3',
    craftNotes: 'Our wire is nickel-free, hypoallergenic, and crafted to patina gracefully with everyday wear in coastal humidity.',
  },
  {
    step: 3,
    title: 'Assemble with Bench Artisans',
    description: 'Sit alongside our resident bench smiths at Andheri or Colaba. Watch your stones wired live, paired with delicate chokers, paperclip chains, or clustered charms.',
    assignedAssetId: 'image-10',
    craftNotes: 'Takes 15–25 minutes at the walk-in bar. Walk away wearing a one-of-a-kind heirloom tailored to your energy.',
  },
  {
    step: 4,
    title: 'Fine Choker & Multi-Stack Finish',
    description: 'Layer delicate gemstone stations or finish with adjustable slider beads and customized extender tags.',
    assignedAssetId: 'image-4',
    craftNotes: 'Ideal for gifting, friend milestone tokens, or building your personal talisman stack over time.',
  },
];

export interface CustomRecipeOption {
  id: string;
  name: string;
  category: 'stone' | 'metal' | 'base' | 'style';
  originOrSpec: string;
  vibe: string;
}

export const RECIPE_OPTIONS: {
  stones: CustomRecipeOption[];
  metals: CustomRecipeOption[];
  bases: CustomRecipeOption[];
  styles: CustomRecipeOption[];
} = {
  stones: [
    { id: 'st-tourmaline', name: 'Raw Peruvian Pink Tourmaline', category: 'stone', originOrSpec: 'Peru (Artisanal Mine)', vibe: 'Heart Healing & Joy' },
    { id: 'st-aquamarine', name: 'Rough Madagascar Aquamarine Nugget', category: 'stone', originOrSpec: 'Madagascar (Pegmatite)', vibe: 'Tranquility & Oceanic Calm' },
    { id: 'st-malachite', name: 'Zambian Banded Malachite Cabochon', category: 'stone', originOrSpec: 'Zambia (Copper Belt)', vibe: 'Protection & Transformation' },
    { id: 'st-sapphire', name: 'Ratnapura Green Sapphire Specimen', category: 'stone', originOrSpec: 'Sri Lanka (Ratnapura)', vibe: 'Clarity & Intuitive Insight' },
    { id: 'st-opal', name: 'Jaipur Fire Opal Micro-Cluster', category: 'stone', originOrSpec: 'India (Hand-Faceted)', vibe: 'Spark of Pure Creative Energy' },
  ],
  metals: [
    { id: 'met-goldfill', name: '18k Gold-Filled Wire (24ga)', category: 'metal', originOrSpec: 'Hypoallergenic thick bonded gold layer', vibe: 'Warm Coastal Glow' },
    { id: 'met-silver', name: '925 Sterling Silver Wire (22ga)', category: 'metal', originOrSpec: 'Recycled certified fine silver', vibe: 'Crisp Architectural Cool' },
    { id: 'met-brass', name: 'Artisanal Patina Brass', category: 'metal', originOrSpec: 'Hand-hammered warm alloy', vibe: 'Vintage Earth Luster' },
  ],
  bases: [
    { id: 'base-paperclip', name: 'Fine Paperclip Chain (18")', category: 'base', originOrSpec: '18k Gold Plated Brass', vibe: 'Modern Everyday Layering' },
    { id: 'base-choker', name: 'Minimalist Micro-Stone Choker (15")', category: 'base', originOrSpec: 'Strung with Seed Pearls', vibe: 'Clean Editorial Silhouette' },
    { id: 'base-cord', name: 'Braided Japanese Silk Cord', category: 'base', originOrSpec: 'Tied with sliding gold bead', vibe: 'Casual Coastal Chic' },
    { id: 'base-cuff', name: 'Open Bezel Wire Bangle', category: 'base', originOrSpec: 'Hand-forged flexible wire', vibe: 'Sculptural Statement' },
  ],
  styles: [
    { id: 'style-cage', name: 'Raw Crystal Cage Wrap', category: 'style', originOrSpec: 'Geometric wire harness holding unpolished stone', vibe: 'Boho Mineral Art' },
    { id: 'style-bezel', name: 'Minimalist Floating Bail', category: 'style', originOrSpec: 'Clean single loop with hidden retention notch', vibe: 'Quiet Studio Luxury' },
    { id: 'style-cluster', name: 'Cascading Charm Cluster', category: 'style', originOrSpec: '3 staggered pendants with mini baroque pearl', vibe: 'Rich Maximalist Texture' },
  ],
};
