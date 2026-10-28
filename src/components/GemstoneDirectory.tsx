import React, { useState } from 'react';
import { Sparkles, Search, Compass, Info, X, MapPin, Feather, Check } from 'lucide-react';
import { GEMSTONES } from '../data/gemstones';
import { GemstoneItem } from '../types';
import { StudioImage } from './StudioImage';

interface GemstoneDirectoryProps {
  onInspectAsset?: (assetId: string) => void;
  onOpenBooking: () => void;
}

export const GemstoneDirectory: React.FC<GemstoneDirectoryProps> = ({
  onInspectAsset,
  onOpenBooking,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEnergyFilter, setSelectedEnergyFilter] = useState('All');
  const [activeStone, setActiveStone] = useState<GemstoneItem | null>(null);

  const energyFilters = [
    'All',
    'Heart Healing & Joy',
    'Intuitive Clarity',
    'Transformation & Protection',
    'Tranquility & Vitality',
    'Grounding & Elemental',
    'Creativity & Focus',
  ];

  const filteredGemstones = GEMSTONES.filter((stone) => {
    const matchesSearch =
      stone.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stone.countryOfOrigin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stone.meaningAndEnergy.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (selectedEnergyFilter === 'All') return true;
    if (selectedEnergyFilter === 'Heart Healing & Joy') return stone.id.includes('pink-tourmaline');
    if (selectedEnergyFilter === 'Intuitive Clarity') return stone.id.includes('green-sapphire');
    if (selectedEnergyFilter === 'Transformation & Protection') return stone.id.includes('malachite');
    if (selectedEnergyFilter === 'Tranquility & Vitality') return stone.id.includes('aquamarine');
    if (selectedEnergyFilter === 'Grounding & Elemental') return stone.id.includes('cabochons');
    if (selectedEnergyFilter === 'Creativity & Focus') return stone.id.includes('opal');

    return true;
  });

  return (
    <section id="gemstones" className="py-24 bg-[#FAF7F4] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#826E85]">
              <span className="text-[#F4ACB7] font-semibold">CATALOG</span> &amp; ENERGETIC RESONANCE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#2A212E] font-normal leading-tight">
              Gemstone &amp; Meaning Directory
            </h2>
            <p className="font-body text-base text-[#2A212E]/80 leading-relaxed">
              Explore our studio collection of raw mineral specimens, hand-cut beads, and polished cabochons.
              Each stone carries distinct geological roots and energetic intentions.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#826E85]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stone, origin, or energy..."
              className="w-full bg-white border border-[#E8DFE6] rounded-2xl pl-10 pr-4 py-2.5 text-xs text-[#2A212E] placeholder:text-[#826E85]/60 focus:outline-hidden focus:ring-1 focus:ring-[#F4ACB7] shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#826E85] hover:text-[#2A212E]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Energy Filter Segmented Buttons (Colorful Pastel Functional Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {energyFilters.map((filter) => {
            const isSelected = selectedEnergyFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedEnergyFilter(filter)}
                className={`px-4 py-2 text-xs rounded-2xl whitespace-nowrap transition-all font-medium ${
                  isSelected
                    ? 'bg-[#2A212E] text-white shadow-xs'
                    : 'bg-white text-[#2A212E]/80 hover:bg-[#FDE2E4]/40 border border-[#E8DFE6]'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* 6 Gemstone Cards Grid (3 Columns on Desktop, 2 on Tablet) with Pastel Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGemstones.map((gem, index) => {
            const pastelHoverColors = [
              'hover:border-[#F4ACB7] hover:shadow-[#F4ACB7]/20',
              'hover:border-[#A7D7C5] hover:shadow-[#A7D7C5]/20',
              'hover:border-[#B5E2FA] hover:shadow-[#B5E2FA]/20',
              'hover:border-[#D8BBFF] hover:shadow-[#D8BBFF]/20',
              'hover:border-[#FFE5D9] hover:shadow-[#FFE5D9]/20',
              'hover:border-[#FFF1C5] hover:shadow-[#FFF1C5]/20',
            ];
            const hoverClass = pastelHoverColors[index % pastelHoverColors.length];

            return (
              <div
                key={gem.id}
                onClick={() => setActiveStone(gem)}
                className={`group bg-white rounded-3xl border border-[#E8DFE6] p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 cursor-pointer ${hoverClass}`}
              >
                <div>
                  {/* Arched Studio Image Container */}
                  <div className="aspect-[1/1] w-full mb-6">
                    <StudioImage
                      assetId={gem.assignedAssetId}
                      arch={true}
                      className="w-full h-full shadow-xs"
                      alt={`${gem.name} - ${gem.meaningAndEnergy}`}
                      showBadge={true}
                      onInspect={onInspectAsset}
                    />
                  </div>

                  {/* Unboxed Metadata Header */}
                  <div className="flex items-center justify-between text-xs text-[#826E85] mb-1.5 font-mono">
                    <span className="flex items-center gap-1.5">
                      <span>{gem.originFlag}</span>
                      <span className="uppercase tracking-wider">{gem.countryOfOrigin}</span>
                    </span>
                    <span className="text-[10px] text-[#F4ACB7] font-semibold uppercase">
                      Asset #{gem.assignedAssetId.replace('image-', '')}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-[#2A212E] group-hover:text-[#F4ACB7] transition-colors mb-2">
                    {gem.name}
                  </h3>

                  <p className="text-xs text-[#2A212E]/75 mb-3 leading-relaxed">
                    <span className="font-semibold text-[#2A212E]">Energy: </span>
                    {gem.meaningAndEnergy}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8DFE6] flex items-center justify-between text-xs">
                  <span className="text-[#826E85] font-mono">{gem.hardness}</span>
                  <span className="text-[#F4ACB7] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Bench Specs →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stone Details Modal / Drawer with Pastel Aesthetic */}
        {activeStone && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A212E]/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-[#FAF7F4] rounded-3xl border border-[#E8DFE6] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
              {/* Header */}
              <div className="p-6 pb-4 border-b border-[#E8DFE6] bg-white flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#826E85] uppercase tracking-wider mb-1">
                    <span>{activeStone.originFlag} {activeStone.countryOfOrigin}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#F4ACB7] font-semibold">PRD Asset #{activeStone.assignedAssetId.replace('image-', '')}</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#2A212E]">
                    {activeStone.name}
                  </h3>
                  <p className="text-xs text-[#826E85] font-medium mt-0.5">
                    {activeStone.variety}
                  </p>
                </div>
                <button
                  onClick={() => setActiveStone(null)}
                  className="p-2 text-[#826E85] hover:text-[#2A212E] hover:bg-[#E8DFF5] rounded-xl transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 overflow-y-auto space-y-5">
                {/* Image showcase */}
                <div className="w-full h-56 rounded-2xl overflow-hidden border border-[#E8DFE6]">
                  <StudioImage
                    assetId={activeStone.assignedAssetId}
                    className="w-full h-full"
                    alt={activeStone.name}
                  />
                </div>

                {/* Energy & Meaning */}
                <div className="bg-gradient-to-r from-[#FFF5F7] to-[#F8F2FC] p-4 rounded-2xl border border-[#E8DFE6]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#826E85] block mb-1">
                    Spiritual &amp; Energetic Meaning
                  </span>
                  <p className="text-sm font-medium text-[#2A212E]">
                    "{activeStone.meaningAndEnergy}"
                  </p>
                </div>

                {/* Mineral & Chakra Grid */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-white p-3.5 rounded-2xl border border-[#E8DFE6]">
                    <span className="text-[10px] font-mono uppercase text-[#826E85] block">Mohs Hardness</span>
                    <span className="font-semibold text-[#2A212E]">{activeStone.hardness}</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-2xl border border-[#E8DFE6]">
                    <span className="text-[10px] font-mono uppercase text-[#826E85] block">Chakra Resonance</span>
                    <span className="font-semibold text-[#2A212E]">{activeStone.chakra}</span>
                  </div>
                </div>

                {/* Wire Wrap & Bench Tips */}
                <div className="space-y-3 text-xs leading-relaxed text-[#2A212E]/85">
                  <div className="p-3.5 rounded-2xl bg-[#E8DFF5]/50 border border-[#D8BBFF]/40">
                    <span className="font-semibold text-[#2A212E] block mb-0.5">Wire Wrapping Advice:</span>
                    {activeStone.wireWrapRecommendation}
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#D8F3DC]/40 border border-[#A7D7C5]/40">
                    <span className="font-semibold text-[#2A212E] block mb-0.5">Artisanal Bench Notes:</span>
                    {activeStone.benchTips}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <span className="text-xs text-[#826E85]">
                    Available at Andheri &amp; Colaba Studios
                  </span>
                  <button
                    onClick={() => {
                      setActiveStone(null);
                      onOpenBooking();
                    }}
                    className="px-5 py-2.5 bg-[#2A212E] text-white rounded-xl text-xs font-semibold hover:bg-[#3D2C42] shadow-sm hover:shadow-[#F4ACB7]/25 transition-all"
                  >
                    Craft with this Stone
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
