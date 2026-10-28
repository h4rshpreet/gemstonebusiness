import React, { useState } from 'react';
import { Hammer, Sparkles, Sliders, ArrowRight, Check, MessageSquare, Download, Share2 } from 'lucide-react';
import { CUSTOM_BAR_FEATURES, RECIPE_OPTIONS, CustomRecipeOption } from '../data/customBar';
import { StudioImage } from './StudioImage';

interface CustomBarProps {
  onInspectAsset?: (assetId: string) => void;
  onOpenBooking: () => void;
}

export const CustomBar: React.FC<CustomBarProps> = ({ onInspectAsset, onOpenBooking }) => {
  const [selectedStone, setSelectedStone] = useState<CustomRecipeOption>(RECIPE_OPTIONS.stones[0]);
  const [selectedMetal, setSelectedMetal] = useState<CustomRecipeOption>(RECIPE_OPTIONS.metals[0]);
  const [selectedBase, setSelectedBase] = useState<CustomRecipeOption>(RECIPE_OPTIONS.bases[0]);
  const [selectedStyle, setSelectedStyle] = useState<CustomRecipeOption>(RECIPE_OPTIONS.styles[0]);
  const [copiedRecipe, setCopiedRecipe] = useState(false);

  const handleShareToWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Mudra & Mineral! 💎\n\nI created my Custom Wire-Wrapping Recipe online and want to craft this during my walk-in studio visit:\n\n` +
      `✨ *Stone:* ${selectedStone.name} (${selectedStone.originOrSpec})\n` +
      `⚡ *Energy:* ${selectedStone.vibe}\n` +
      `🔩 *Wire Metal:* ${selectedMetal.name}\n` +
      `📿 *Base / Chain:* ${selectedBase.name}\n` +
      `🌿 *Wrapping Style:* ${selectedStyle.name}\n\n` +
      `Can I walk in to the Andheri or Colaba studio to have this assembled?`
    );
    window.open(`https://wa.me/919820144520?text=${text}`, '_blank');
  };

  return (
    <section id="custom" className="py-24 bg-[#FAF7F4] border-t border-[#E8DFE6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#826E85]">
            <span className="text-[#F4ACB7] font-semibold">BESPOKE</span> WALK-IN STUDIO SERVICE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#2A212E] font-normal leading-tight">
            Customization &amp; Wire-Wrapping Bar
          </h2>
          <p className="font-body text-base text-[#2A212E]/80 leading-relaxed">
            Walk into our Andheri or Colaba studio any afternoon. Browse our open trays of raw minerals,
            hand-select your wire metallurgy, and sit beside our bench artisans as your bespoke heirloom is assembled live.
          </p>
        </div>

        {/* 4 Assigned Assets Showcase: Image 16, Image 3, Image 10, Image 4 with Pastel Step Accents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {/* Card 1: Image 16 (WhatsApp Image...13.22.12.jpeg) */}
          <div className="bg-white rounded-3xl border border-[#E8DFE6] p-5 flex flex-col justify-between hover:border-[#F4ACB7] hover:shadow-lg transition-all">
            <div>
              <div className="aspect-[3/4] w-full mb-4">
                <StudioImage
                  assetId="image-16"
                  arch={true}
                  className="w-full h-full shadow-xs"
                  alt="Hand holding wire-wrapped pendants - Image 16"
                  showBadge={true}
                  onInspect={onInspectAsset}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                <span className="px-2 py-0.5 rounded-md bg-[#FDE2E4] text-[#2A212E] font-semibold">STEP 01</span>
                <span className="text-[#826E85]">Asset #16</span>
              </div>
              <h3 className="font-display font-semibold text-lg text-[#2A212E] mb-1">
                Hand-Held Wire Pendants
              </h3>
              <p className="text-xs text-[#2A212E]/75 leading-relaxed">
                Select from raw or tumbled stones. We weigh and inspect each specimen with you at the counter.
              </p>
            </div>
            <span className="text-[11px] font-mono text-[#F4ACB7] mt-3 pt-3 border-t border-[#E8DFE6] block truncate">
              WhatsApp Image...13.22.12.jpeg
            </span>
          </div>

          {/* Card 2: Image 3 (_ (3).jpeg) */}
          <div className="bg-white rounded-3xl border border-[#E8DFE6] p-5 flex flex-col justify-between hover:border-[#D8BBFF] hover:shadow-lg transition-all">
            <div>
              <div className="aspect-[3/4] w-full mb-4">
                <StudioImage
                  assetId="image-3"
                  arch={true}
                  className="w-full h-full shadow-xs"
                  alt="Multi-pendant stone stack necklace - Image 3"
                  showBadge={true}
                  onInspect={onInspectAsset}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                <span className="px-2 py-0.5 rounded-md bg-[#E8DFF5] text-[#2A212E] font-semibold">STEP 02</span>
                <span className="text-[#826E85]">Asset #3</span>
              </div>
              <h3 className="font-display font-semibold text-lg text-[#2A212E] mb-1">
                Layered Pendant Stack
              </h3>
              <p className="text-xs text-[#2A212E]/75 leading-relaxed">
                Choose 18k gold-filled wire or sterling silver. We form tight custom tension bails live.
              </p>
            </div>
            <span className="text-[11px] font-mono text-[#D8BBFF] mt-3 pt-3 border-t border-[#E8DFE6] block truncate">
              _ (3).jpeg
            </span>
          </div>

          {/* Card 3: Image 10 (our one-of-a-kind gemstone charms...) */}
          <div className="bg-white rounded-3xl border border-[#E8DFE6] p-5 flex flex-col justify-between hover:border-[#81C3D7] hover:shadow-lg transition-all">
            <div>
              <div className="aspect-[3/4] w-full mb-4">
                <StudioImage
                  assetId="image-10"
                  arch={true}
                  className="w-full h-full shadow-xs"
                  alt="Gold charm cluster stack - Image 10"
                  showBadge={true}
                  onInspect={onInspectAsset}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                <span className="px-2 py-0.5 rounded-md bg-[#DFE7FD] text-[#2A212E] font-semibold">STEP 03</span>
                <span className="text-[#826E85]">Asset #10</span>
              </div>
              <h3 className="font-display font-semibold text-lg text-[#2A212E] mb-1">
                Custom Charm Clusters
              </h3>
              <p className="text-xs text-[#2A212E]/75 leading-relaxed">
                Stack talismans, baroque pearls, and mineral spikes onto soldered gold jump rings.
              </p>
            </div>
            <span className="text-[11px] font-mono text-[#81C3D7] mt-3 pt-3 border-t border-[#E8DFE6] block truncate">
              our one-of-a-kind gemstone charms...
            </span>
          </div>

          {/* Card 4: Image 4 (_.jpeg) */}
          <div className="bg-white rounded-3xl border border-[#E8DFE6] p-5 flex flex-col justify-between hover:border-[#FFE5D9] hover:shadow-lg transition-all">
            <div>
              <div className="aspect-[3/4] w-full mb-4">
                <StudioImage
                  assetId="image-4"
                  arch={true}
                  className="w-full h-full shadow-xs"
                  alt="Delicate multi-stone choker necklace - Image 4"
                  showBadge={true}
                  onInspect={onInspectAsset}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                <span className="px-2 py-0.5 rounded-md bg-[#FFE5D9] text-[#2A212E] font-semibold">STEP 04</span>
                <span className="text-[#826E85]">Asset #4</span>
              </div>
              <h3 className="font-display font-semibold text-lg text-[#2A212E] mb-1">
                Delicate Stone Chokers
              </h3>
              <p className="text-xs text-[#2A212E]/75 leading-relaxed">
                Add seed pearls or alternating colored mineral chips for an everyday coastal aesthetic.
              </p>
            </div>
            <span className="text-[11px] font-mono text-[#F4ACB7] mt-3 pt-3 border-t border-[#E8DFE6] block truncate">
              _.jpeg
            </span>
          </div>
        </div>

        {/* Interactive "Walk-in Bench Recipe Builder" in Luminous Pastel Gradient */}
        <div className="bg-gradient-to-br from-[#FFF5F7] via-[#F8F2FC] to-[#EFF7F6] rounded-3xl border border-[#E8DFE6] p-8 sm:p-12 shadow-xs">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#826E85]">
              <span className="text-[#F4ACB7] font-semibold">STUDIO</span> RECIPE GENERATOR
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-[#2A212E] font-semibold">
              Preview Your Custom Bench Design
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#2A212E]/80 leading-relaxed">
              Mix and match materials to create your studio recipe. Bring this recipe card with you to Andheri or Colaba, or send it ahead on WhatsApp!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Pick Stone */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2A212E] mb-2.5">
                  1. Choose Focal Mineral
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {RECIPE_OPTIONS.stones.map((st) => (
                    <button
                      key={st.id}
                      onClick={() => setSelectedStone(st)}
                      className={`text-left p-3.5 rounded-2xl border text-xs transition-all ${
                        selectedStone.id === st.id
                          ? 'bg-white border-[#F4ACB7] ring-2 ring-[#F4ACB7]/40 shadow-xs font-medium'
                          : 'bg-white/70 border-[#E8DFE6] hover:bg-white'
                      }`}
                    >
                      <div className="font-semibold text-[#2A212E]">{st.name}</div>
                      <div className="text-[10px] text-[#826E85]">{st.originOrSpec}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Pick Wire Metallurgy */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2A212E] mb-2.5">
                  2. Choose Wire Metallurgy
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {RECIPE_OPTIONS.metals.map((met) => (
                    <button
                      key={met.id}
                      onClick={() => setSelectedMetal(met)}
                      className={`text-left p-3.5 rounded-2xl border text-xs transition-all ${
                        selectedMetal.id === met.id
                          ? 'bg-white border-[#D8BBFF] ring-2 ring-[#D8BBFF]/40 shadow-xs font-medium'
                          : 'bg-white/70 border-[#E8DFE6] hover:bg-white'
                      }`}
                    >
                      <div className="font-semibold text-[#2A212E]">{met.name}</div>
                      <div className="text-[10px] text-[#826E85]">{met.vibe}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Pick Base Foundation */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2A212E] mb-2.5">
                  3. Choose Base Foundation
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {RECIPE_OPTIONS.bases.map((base) => (
                    <button
                      key={base.id}
                      onClick={() => setSelectedBase(base)}
                      className={`text-left p-3.5 rounded-2xl border text-xs transition-all ${
                        selectedBase.id === base.id
                          ? 'bg-white border-[#81C3D7] ring-2 ring-[#81C3D7]/40 shadow-xs font-medium'
                          : 'bg-white/70 border-[#E8DFE6] hover:bg-white'
                      }`}
                    >
                      <div className="font-semibold text-[#2A212E]">{base.name}</div>
                      <div className="text-[10px] text-[#826E85]">{base.originOrSpec}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Pick Wrapping Style */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2A212E] mb-2.5">
                  4. Wire Wrapping Silhouette
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {RECIPE_OPTIONS.styles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style)}
                      className={`text-left p-3.5 rounded-2xl border text-xs transition-all ${
                        selectedStyle.id === style.id
                          ? 'bg-white border-[#FFE5D9] ring-2 ring-[#FFE5D9]/50 shadow-xs font-medium'
                          : 'bg-white/70 border-[#E8DFE6] hover:bg-white'
                      }`}
                    >
                      <div className="font-semibold text-[#2A212E]">{style.name}</div>
                      <div className="text-[10px] text-[#826E85]">{style.vibe}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Live Recipe Card Preview */}
            <div className="lg:col-span-5 bg-white rounded-3xl border border-[#E8DFE6] p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#E8DFE6]">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#826E85] block">
                    Mudra &amp; Mineral Mumbai
                  </span>
                  <h4 className="font-display font-semibold text-lg text-[#2A212E]">
                    Studio Custom Recipe Card
                  </h4>
                </div>
                <span className="text-xs font-mono bg-[#E8DFF5] text-[#2A212E] px-2.5 py-1 rounded-xl border border-[#D8BBFF]/40">
                  Walk-in Bar
                </span>
              </div>

              {/* Recipe breakdown with pastel accents */}
              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#826E85] block">Focal Mineral:</span>
                  <p className="font-semibold text-sm text-[#2A212E]">{selectedStone.name}</p>
                  <p className="text-[11px] text-[#F4ACB7] font-medium">{selectedStone.originOrSpec} · {selectedStone.vibe}</p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-[#826E85] block">Wire Metallurgy:</span>
                  <p className="font-semibold text-sm text-[#2A212E]">{selectedMetal.name}</p>
                  <p className="text-[11px] text-[#826E85]">{selectedMetal.originOrSpec}</p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-[#826E85] block">Base Foundation:</span>
                  <p className="font-semibold text-sm text-[#2A212E]">{selectedBase.name}</p>
                  <p className="text-[11px] text-[#826E85]">{selectedBase.originOrSpec}</p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-[#826E85] block">Wrapping Style:</span>
                  <p className="font-semibold text-sm text-[#2A212E]">{selectedStyle.name}</p>
                  <p className="text-[11px] text-[#826E85]">{selectedStyle.originOrSpec}</p>
                </div>
              </div>

              {/* Bench estimated assembly time */}
              <div className="p-3 bg-[#D8F3DC]/40 rounded-2xl border border-[#A7D7C5]/40 text-xs text-[#2A212E] flex items-center justify-between">
                <span>Bench Assembly Time:</span>
                <span className="font-mono font-semibold text-[#19533B]">~20 Minutes Live</span>
              </div>

              {/* Recipe actions */}
              <div className="pt-2 space-y-2">
                <button
                  onClick={handleShareToWhatsApp}
                  className="w-full py-3.5 px-4 rounded-2xl bg-[#2A212E] text-white hover:bg-[#3D2C42] transition-all font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xs hover:shadow-md hover:shadow-[#F4ACB7]/25"
                >
                  <MessageSquare className="w-4 h-4 text-[#F4ACB7]" />
                  <span>Send Recipe to WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-[#826E85]">
                  Walk-ins welcome Tue–Sun 11 AM – 8 PM at Andheri West &amp; Colaba
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

