export interface StudioAsset {
  id: string;
  imageNumber: number;
  filename: string;
  section: 'Hero' | 'Brand Sourcing' | 'Gemstone Directory' | 'Workshops' | 'Custom Bar';
  title: string;
  description: string;
  aestheticNotes: string;
  aspectRatio: string;
}

export interface GemstoneItem {
  id: string;
  name: string;
  variety: string;
  countryOfOrigin: string;
  originFlag: string;
  meaningAndEnergy: string;
  assignedAssetId: string;
  hardness: string;
  element: string;
  chakra: string;
  wireWrapRecommendation: string;
  benchTips: string;
}

export interface WorkshopPlan {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  batchSize: string;
  schedule: string;
  pricePerSeat: string;
  materialsIncluded: string[];
  whatYouMake: string[];
  assignedAssetId: string;
  bgBlockColor: string; // e.g., #E5EDF0 or #DDCDBD
}

export interface CustomBarFeature {
  step: number;
  title: string;
  description: string;
  assignedAssetId: string;
  craftNotes: string;
}

export interface StudioLocation {
  id: 'andheri' | 'colaba';
  name: string;
  neighborhood: string;
  address: string;
  landmarks: string;
  hours: string;
  specialty: string;
  transitInfo: string;
  phone: string;
  whatsappNumber: string;
  mapQuery: string;
}
