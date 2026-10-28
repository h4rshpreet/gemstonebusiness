import React, { useState } from 'react';
import { ShieldCheck, Compass, Sparkles, Gem, Globe, ArrowRight } from 'lucide-react';
import { StudioImage } from './StudioImage';

interface BrandStoryProps {
  onInspectAsset?: (assetId: string) => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onInspectAsset }) => {
  const [activeOrigin, setActiveOrigin] = useState<'peru' | 'srilanka' | 'zambia' | 'madagascar'>('peru');

  const originsData = {
    peru: {
      country: 'Peru',
      flag: '🇵🇪',
      region: 'Andean Pegmatites & San Martín',
      stones: 'Pink Tourmaline, Mint Amazonite, Pyrite Clusters',
      practice: 'Family-run artisanal craft mines with zero mercury or cyanide leeching. Fair bench pricing guaranteed directly to local mining guilds.',
      vibe: 'Heart-opening rose tones that celebrate emotional resilience.',
    },
    srilanka: {
      country: 'Sri Lanka',
      flag: '🇱🇰',
      region: 'Ratnapura Alluvial Riverbeds',
      stones: 'Green Sapphire, Ceylon Blue Corundum, Natural Emerald',
      practice: 'Traditional pit-and-panning methods that leave local river ecosystems intact. Direct artisan cutting by generational master lapidaries.',
      vibe: 'Deep olive greens evoking clarity, patience, and grounded intuition.',
    },
    zambia: {
      country: 'Zambia',
      flag: '🇿🇲',
      region: 'Copper Belt Artisanal Concessions',
      stones: 'Banded Malachite, Raw Emerald Matrix',
      practice: 'Direct-from-source cooperatives adhering to fair wage benchmarks. Hand-sorted rough stones selected for distinct organic banding.',
      vibe: 'Vivid layered greens honoring transformation and natural shielding.',
    },
    madagascar: {
      country: 'Madagascar',
      flag: '🇲🇬',
      region: 'Antsirabe Central Highlands',
      stones: 'Ice-blue Aquamarine, Pyrope & Rhodolite Garnet',
      practice: 'Small-batch artisanal digging during dry season. Each crystal is hand-graded for clarity without artificial heat irradiation.',
      vibe: 'Oceanic cooling calm intertwined with deep garnet vitality.',
    },
  };

  const currentOrigin = originsData[activeOrigin];

  return (
    <section id="origins" className="py-24 bg-[#FAF7F4] border-t border-[#E8DFE6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header (Safira March & Josefin Sans) */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#826E85]">
            <span className="text-[#F4ACB7] font-semibold">OUR PHILOSOPHY</span> &amp; SOURCING
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#2A212E] font-normal leading-tight">
            Ethical Craft Mines.{' '}
            <span className="italic font-light bg-gradient-to-r from-[#F4ACB7] via-[#D8BBFF] to-[#81C3D7] bg-clip-text text-transparent">
              Mindful Earth Origins.
            </span>
          </h2>
          <p className="font-body text-base text-[#2A212E]/80 leading-relaxed">
            Every gemstone at Mudra &amp; Mineral is traceable to its native geological vein.
            We bypass mass-commercial brokers, sourcing directly from ethical small-scale miners
            in Peru, Sri Lanka, Zambia, and Madagascar.
          </p>
        </div>

        {/* Dual Arched Showcases: PRD Image 6 & Image 14 with Pastel Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20">
          {/* Card 1: PRD Image 6 (Hand made Zen bead necklace...) in Pastel Pink */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#FFF5F7] to-white rounded-3xl border border-[#E8DFE6] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div className="aspect-[4/3] w-full mb-6">
              <StudioImage
                assetId="image-6"
                arch={true}
                className="w-full h-full shadow-md"
                alt="Rough-cut gems set in organic gold stringing - Image 6"
                showBadge={true}
                onInspect={onInspectAsset}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-[#826E85] font-mono">
                <span>PRD ASSET #6</span>
                <span className="text-[#F4ACB7] font-semibold">Hand made Zen bead necklace...</span>
              </div>
              <h3 className="font-display text-xl text-[#2A212E] font-semibold">
                Rough-Cut Gems &amp; Gold Stringing
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#2A212E]/80 leading-relaxed">
                Raw, uncalibrated gemstone chunks strung on hand-knotted gold cords.
                We honor the original rock fracture, allowing the natural geological crystal face to rest directly against the skin.
              </p>
            </div>
          </div>

          {/* Card 2: PRD Image 14 (WhatsApp Image...13.22.12 (1).jpeg) in Pastel Lilac */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#F7F2FC] to-white rounded-3xl border border-[#E8DFE6] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div className="aspect-[4/3] w-full mb-6">
              <StudioImage
                assetId="image-14"
                arch={true}
                className="w-full h-full shadow-md"
                alt="Vintage gold bezel cuff showcasing polished stones - Image 14"
                showBadge={true}
                onInspect={onInspectAsset}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-[#826E85] font-mono">
                <span>PRD ASSET #14</span>
                <span className="text-[#D8BBFF] font-semibold">WhatsApp Image...13.22.12 (1).jpeg</span>
              </div>
              <h3 className="font-display text-xl text-[#2A212E] font-semibold">
                Vintage Gold Bezel Cuff Architecture
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#2A212E]/80 leading-relaxed">
                Artisanal 18k gold plated brass bezel cuffs forged by hand.
                Each bezel cup is individually shaped to hug the natural organic perimeter of tumbled cabochons and mineral crystals.
              </p>
            </div>
          </div>
        </div>

        {/* Studio Materials & Origin Explorer in Luminous Pastel Mesh */}
        <div className="bg-gradient-to-br from-[#FFF5F7] via-[#F8F2FC] to-[#EFF7F6] rounded-3xl border border-[#E8DFE6] p-8 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Materials Used Breakdown */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#826E85]">
                <span className="text-[#D8BBFF] font-semibold">AUTHENTIC</span> BENCH METALLURGY
              </span>
              <h3 className="font-display text-2xl text-[#2A212E] font-semibold">
                What Goes Into Every Piece
              </h3>
              <p className="text-xs sm:text-sm text-[#2A212E]/80 leading-relaxed">
                We believe in material purity. No mystery pot metals, no irritating nickel.
                Every wire, chain, and bezel is selected for tactile longevity.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  { name: '18k Gold Plated Brass', detail: '3-micron rich satin gold coating with protective micro-seal.', color: '#FFD166' },
                  { name: '925 Sterling Silver', detail: 'Recycled certified silver wire, dead-soft for clean tension wraps.', color: '#BEE1E6' },
                  { name: 'Jeweler Wire-Wrap Cord', detail: 'Braided Japanese silk and stainless nylon-coated micro-wire.', color: '#F4ACB7' },
                  { name: 'Recycled Solid Gold', detail: 'Available for bespoke heirloom ring and pendant commissions.', color: '#FFB703' },
                  { name: 'Untreated Natural Gemstones', detail: 'Unheated, ethically mined natural crystals and cabochons.', color: '#C8B6FF' },
                ].map((mat) => (
                  <div key={mat.name} className="flex items-start gap-2.5 text-xs">
                    <div className="w-2 h-2 rounded-full mt-1 shrink-0" style={{ backgroundColor: mat.color }} />
                    <div>
                      <span className="font-semibold text-[#2A212E]">{mat.name}: </span>
                      <span className="text-[#826E85]">{mat.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Interactive Direct Origin Selector with Colorful Pastel Buttons */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFE6] shadow-xs">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E8DFE6]">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#F4ACB7]" />
                  <span className="font-display text-base font-semibold text-[#2A212E]">
                    Direct Ethical Import Channels
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#826E85]">Select origin below</span>
              </div>

              {/* Origin Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {(['peru', 'srilanka', 'zambia', 'madagascar'] as const).map((key) => {
                  const item = originsData[key];
                  const pastelColors = {
                    peru: 'hover:bg-[#FDE2E4]',
                    srilanka: 'hover:bg-[#D8F3DC]',
                    zambia: 'hover:bg-[#E0F4EE]',
                    madagascar: 'hover:bg-[#DFE7FD]',
                  };
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveOrigin(key)}
                      className={`px-3 py-2 text-xs rounded-xl font-medium transition-all text-center ${
                        activeOrigin === key
                          ? 'bg-[#2A212E] text-white shadow-sm'
                          : `bg-[#FAF7F4] text-[#2A212E] ${pastelColors[key]} border border-[#E8DFE6]`
                      }`}
                    >
                      <span className="mr-1">{item.flag}</span>
                      <span>{item.country}</span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Origin Card with Pastel Accent Border */}
              <div className="space-y-3 bg-[#FAF7F4] p-5 rounded-2xl border border-[#E8DFE6]">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-lg text-[#2A212E] font-semibold flex items-center gap-2">
                    <span>{currentOrigin.flag}</span>
                    <span>{currentOrigin.country}</span>
                  </h4>
                  <span className="text-[11px] font-mono text-[#826E85]">{currentOrigin.region}</span>
                </div>

                <div className="text-xs">
                  <span className="font-semibold text-[#F4ACB7]">Primary Stones: </span>
                  <span className="text-[#2A212E]">{currentOrigin.stones}</span>
                </div>

                <p className="text-xs text-[#2A212E]/80 leading-relaxed">
                  {currentOrigin.practice}
                </p>

                <div className="pt-2 text-[11px] italic text-[#826E85] border-t border-[#E8DFE6]">
                  {currentOrigin.vibe}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
