import React from 'react';
import { Calendar, Clock, Users, Sparkles, Check, MessageSquare, HeartHandshake } from 'lucide-react';
import { WORKSHOP_PLANS } from '../data/workshops';
import { StudioImage } from './StudioImage';

interface WorkshopsProps {
  onOpenBooking: (workshopId?: string) => void;
  onInspectAsset?: (assetId: string) => void;
}

export const Workshops: React.FC<WorkshopsProps> = ({ onOpenBooking, onInspectAsset }) => {
  return (
    <section id="workshops" className="py-24 bg-[#FAF7F4] border-t border-[#E8DFE6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#826E85]">
            <span className="text-[#F4ACB7] font-semibold">FRIENDS &amp; GROUP</span> CREATIVE SESSIONS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#2A212E] font-normal leading-tight">
            Interactive Crafting Workshops
          </h2>
          <p className="font-body text-base text-[#2A212E]/80 leading-relaxed">
            Gather your friends for an intimate weekend session around our jeweler benches.
            Learn the tactile art of wire-wrapping, hand-stringing, and charm clustering under the guidance of Mumbai’s bench artisans.
          </p>
        </div>

        {/* Studio Solen Arched Image Cards with Vibrant Pastel Background Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {WORKSHOP_PLANS.map((plan) => (
            <div
              key={plan.id}
              className="rounded-3xl border border-[#E8DFE6] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ backgroundColor: plan.bgBlockColor }}
            >
              <div>
                {/* Arched Photo Showcase */}
                <div className="aspect-[4/3] w-full mb-6">
                  <StudioImage
                    assetId={plan.assignedAssetId}
                    arch={true}
                    className="w-full h-full shadow-md"
                    alt={plan.title}
                    showBadge={true}
                    onInspect={onInspectAsset}
                  />
                </div>

                {/* Session Meta */}
                <div className="flex items-center justify-between text-xs text-[#826E85] font-mono mb-2">
                  <span>{plan.batchSize}</span>
                  <span className="text-[#2A212E] font-semibold">2.5 Hours</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#2A212E] mb-2 leading-snug">
                  {plan.title}
                </h3>

                <p className="font-body text-xs sm:text-sm text-[#2A212E]/80 mb-6 leading-relaxed">
                  {plan.tagline}
                </p>

                {/* What You Make (PRD: Exactly 2 Custom Pieces) */}
                <div className="bg-white/85 rounded-2xl p-4 border border-[#E8DFE6] mb-6 space-y-2 shadow-2xs">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#826E85] block font-semibold">
                    What You Make (2 Keepsake Pieces):
                  </span>
                  {plan.whatYouMake.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#2A212E]">
                      <Check className="w-3.5 h-3.5 text-[#2E7D5B] shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Materials Included */}
                <div className="space-y-1.5 text-xs text-[#2A212E]/80 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#826E85] block">
                    Materials Included:
                  </span>
                  {plan.materialsIncluded.map((mat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F4ACB7]" />
                      <span>{mat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action & Price */}
              <div className="pt-6 border-t border-[#E8DFE6] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-display text-base font-semibold text-[#2A212E]">
                    {plan.pricePerSeat}
                  </span>
                  <span className="text-[11px] font-mono text-[#826E85]">Sat &amp; Sun</span>
                </div>

                <button
                  onClick={() => onOpenBooking(plan.id)}
                  className="w-full py-3.5 px-4 rounded-2xl bg-[#2A212E] text-white hover:bg-[#3D2C42] transition-all font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xs hover:shadow-md hover:shadow-[#F4ACB7]/25"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#F4ACB7]" />
                  <span>Book Your Bench via WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Intimate Workshop Experience Details Banner in Pastel Mesh */}
        <div className="bg-gradient-to-r from-[#FFF5F7] via-[#F8F2FC] to-[#EFF7F6] rounded-3xl border border-[#E8DFE6] p-8 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-[#E8DFE6]">
            <div className="space-y-1.5 md:pr-6">
              <span className="text-xs font-mono text-[#F4ACB7] uppercase font-semibold">Duration</span>
              <p className="font-display text-lg font-semibold text-[#2A212E]">2.5 Hours</p>
              <p className="text-xs text-[#2A212E]/70">Relaxed pacing with tea, refreshments, and music.</p>
            </div>

            <div className="space-y-1.5 pt-4 md:pt-0 md:px-6">
              <span className="text-xs font-mono text-[#D8BBFF] uppercase font-semibold">Batch Size</span>
              <p className="font-display text-lg font-semibold text-[#2A212E]">6–8 Participants Max</p>
              <p className="text-xs text-[#2A212E]/70">Ensures one-on-one bench artisan guidance.</p>
            </div>

            <div className="space-y-1.5 pt-4 md:pt-0 md:px-6">
              <span className="text-xs font-mono text-[#81C3D7] uppercase font-semibold">What You Craft</span>
              <p className="font-display text-lg font-semibold text-[#2A212E]">2 Finished Pieces</p>
              <p className="text-xs text-[#2A212E]/70">Wire-wrapped pendants, chokers, or charm stacks.</p>
            </div>

            <div className="space-y-1.5 pt-4 md:pt-0 md:pl-6">
              <span className="text-xs font-mono text-[#FFD166] uppercase font-semibold">All-Inclusive</span>
              <p className="font-display text-lg font-semibold text-[#2A212E]">Zero Hidden Fees</p>
              <p className="text-xs text-[#2A212E]/70">All natural stones, wire, chains, and tools provided.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
