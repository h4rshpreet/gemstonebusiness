import React from 'react';
import { ArrowDown, Sparkles, MapPin, Calendar, Hammer } from 'lucide-react';
import { StudioImage } from './StudioImage';

interface HeroProps {
  onOpenBooking: () => void;
  onInspectAsset?: (assetId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onInspectAsset }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAF7F4] bg-pastel-mesh">
      {/* Decorative dreamy pastel blur orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#FDE2E4]/60 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-40 right-10 w-80 h-80 rounded-full bg-[#E8DFF5]/60 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-64 h-64 rounded-full bg-[#D8F3DC]/50 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Grid: Split column editorial with Studio Solen arched framing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-6 space-y-8">
            {/* Quiet sub-label (unboxed, clean typography) */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#826E85]">
              <span className="text-[#F4ACB7] font-semibold">MUMBAI STUDIO GUIDE</span>
              <span aria-hidden="true">·</span>
              <span>ANDHERI &amp; COLABA</span>
            </div>

            {/* Headline in Safira March with colorful pastel gradient accent */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#2A212E] font-normal leading-[1.08] tracking-tight text-balance">
              Crafted by Nature.{' '}
              <span className="italic font-light bg-gradient-to-r from-[#F4ACB7] via-[#D8BBFF] to-[#81C3D7] bg-clip-text text-transparent block mt-1">
                Shaped by You.
              </span>
            </h1>

            {/* Subtext in Josefin Sans */}
            <p className="font-body text-base sm:text-lg text-[#2A212E]/80 font-normal leading-relaxed max-w-xl">
              Artisanal gemstone jewelry and hands-on crafting workshops in Mumbai.
              Experience raw unpolished minerals, mindful energetic origins, and bespoke wire-wrapping alongside resident artisans.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 text-xs font-body font-semibold tracking-wider uppercase text-white bg-[#2A212E] hover:bg-[#3D2C42] transition-all duration-200 rounded-2xl shadow-md hover:shadow-lg hover:shadow-[#F4ACB7]/25 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#F4ACB7]" />
                <span>Reserve Workshop Bench</span>
              </button>

              <a
                href="#gemstones"
                className="px-6 py-3.5 text-xs font-body font-medium tracking-wider uppercase text-[#2A212E] bg-white hover:bg-[#FDE2E4]/40 transition-all duration-200 rounded-2xl border border-[#E8DFE6] shadow-xs flex items-center gap-2"
              >
                <span>Explore Gemstones</span>
              </a>
            </div>

            {/* Studio Pillars Strip (Unboxed metadata with separators) */}
            <div className="pt-6 border-t border-[#E8DFE6] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#826E85]">
              <div className="flex items-center gap-1.5 text-[#2A212E]">
                <MapPin className="w-3.5 h-3.5 text-[#F4ACB7]" />
                <span>2 Mumbai Studios</span>
              </div>
              <span aria-hidden="true" className="text-[#D8BBFF]">·</span>
              <div className="flex items-center gap-1.5 text-[#2A212E]">
                <Sparkles className="w-3.5 h-3.5 text-[#D8BBFF]" />
                <span>Fair-Mined Natural Stones</span>
              </div>
              <span aria-hidden="true" className="text-[#D8BBFF]">·</span>
              <div className="flex items-center gap-1.5 text-[#2A212E]">
                <Hammer className="w-3.5 h-3.5 text-[#81C3D7]" />
                <span>Zero Machine Castings</span>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Solen Arched Editorial Showcase (Image 9: @allisongunderson.jpeg) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Soft decorative backdrop layer in Pastel Aura (#FDE2E4 to #E8DFF5 to #DFE7FD) */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#FDE2E4] via-[#E8DFF5] to-[#DFE7FD] rounded-t-[140px] md:rounded-t-[180px] rounded-b-3xl -z-10 transform -rotate-1 shadow-sm" />

              {/* Arched image container for PRD Image 9 */}
              <div className="w-full aspect-[4/5] sm:aspect-[4/5] md:aspect-[5/6] lg:aspect-[4/5]">
                <StudioImage
                  assetId="image-9"
                  arch={true}
                  className="w-full h-full shadow-lg"
                  alt="Raw, unpolished mineral cluster featuring natural crystallization - Image 9"
                  showBadge={true}
                  onInspect={onInspectAsset}
                />
              </div>

              {/* Floating Architectural Badge (Studio Solen style caption) */}
              <div className="absolute -bottom-6 left-6 right-6 md:left-12 md:right-12 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#E8DFE6] shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#826E85] block">
                    Assigned Asset: Image 9
                  </span>
                  <p className="font-display font-medium text-sm text-[#2A212E]">
                    Raw Mineral Specimen Cluster
                  </p>
                </div>
                <span className="text-xs font-mono text-[#2A212E] bg-[#E8DFF5]/60 px-2.5 py-1 rounded-lg border border-[#D8BBFF]/40">
                  @allisongunderson.jpeg
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
