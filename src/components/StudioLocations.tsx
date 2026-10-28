import React, { useState } from 'react';
import { MapPin, Clock, Phone, MessageSquare, Navigation, Sparkles, CheckCircle2 } from 'lucide-react';
import { STUDIOS } from '../data/locations';

export const StudioLocations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'andheri' | 'colaba'>('both');

  const displayedStudios =
    activeTab === 'both' ? STUDIOS : STUDIOS.filter((s) => s.id === activeTab);

  return (
    <section id="locations" className="py-24 bg-[#FAF7F4] border-t border-[#E8DFE6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#826E85]">
              <span className="text-[#F4ACB7] font-semibold">PHYSICAL WORKSHOP</span> &amp; WALK-IN SPACES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#2A212E] font-normal leading-tight">
              Studio Locations in Mumbai
            </h2>
            <p className="font-body text-base text-[#2A212E]/80 leading-relaxed">
              Visit us in the heart of Mumbai. Drop by to examine raw crystals, book a weekend friend workshop,
              or design a bespoke wire-wrapped charm stack on the spot.
            </p>
          </div>

          {/* Location Filter Tabs in Pastel Styling */}
          <div className="flex items-center gap-1.5 p-1 bg-[#E8DFF5]/40 rounded-2xl border border-[#D8BBFF]/40 self-start md:self-end">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-colors ${
                activeTab === 'both'
                  ? 'bg-white text-[#2A212E] shadow-xs'
                  : 'text-[#826E85] hover:text-[#2A212E]'
              }`}
            >
              All Studios (2)
            </button>
            <button
              onClick={() => setActiveTab('andheri')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-colors ${
                activeTab === 'andheri'
                  ? 'bg-white text-[#2A212E] shadow-xs'
                  : 'text-[#826E85] hover:text-[#2A212E]'
              }`}
            >
              Andheri West
            </button>
            <button
              onClick={() => setActiveTab('colaba')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-colors ${
                activeTab === 'colaba'
                  ? 'bg-white text-[#2A212E] shadow-xs'
                  : 'text-[#826E85] hover:text-[#2A212E]'
              }`}
            >
              Colaba Causeway
            </button>
          </div>
        </div>

        {/* Studio Cards Grid with Clean Pastel Aesthetics */}
        <div className={`grid grid-cols-1 ${displayedStudios.length > 1 ? 'lg:grid-cols-2' : 'max-w-3xl mx-auto'} gap-8`}>
          {displayedStudios.map((studio, idx) => {
            const cardAccent = idx === 0 ? 'hover:border-[#F4ACB7]' : 'hover:border-[#D8BBFF]';
            return (
              <div
                key={studio.id}
                className={`bg-white rounded-3xl border border-[#E8DFE6] p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 ${cardAccent}`}
              >
                <div className="space-y-6">
                  {/* Header Tag & Studio Name */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#F4ACB7] block mb-1 font-semibold">
                        {studio.neighborhood}
                      </span>
                      <h3 className="font-display text-2xl font-semibold text-[#2A212E]">
                        {studio.name}
                      </h3>
                    </div>

                    <span className="text-[11px] font-mono px-3 py-1 rounded-xl bg-[#E8DFF5]/60 text-[#2A212E] border border-[#D8BBFF]/40 whitespace-nowrap">
                      Tue–Sun 11 AM – 8 PM
                    </span>
                  </div>

                  {/* Specialty Banner with Pastel Gradient */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FFF5F7] via-[#F8F2FC] to-[#EFF7F6] border border-[#E8DFE6] flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-[#F4ACB7] shrink-0" />
                    <div className="text-xs">
                      <span className="font-semibold text-[#2A212E]">Studio Specialty: </span>
                      <span className="text-[#2A212E]/85 font-medium">{studio.specialty}</span>
                    </div>
                  </div>

                  {/* Address & Hours Breakdown */}
                  <div className="space-y-4 text-xs">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#F4ACB7] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-[#2A212E] leading-relaxed">{studio.address}</p>
                        <p className="text-[11px] text-[#826E85] mt-0.5">Landmark: {studio.landmarks}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-[#D8BBFF] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-[#2A212E]">{studio.hours}</p>
                        <p className="text-[11px] text-[#826E85] mt-0.5">Mondays reserved for stone sourcing &amp; bench maintenance</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Navigation className="w-4 h-4 text-[#81C3D7] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-[#2A212E]">Transit &amp; Parking: </span>
                        <span className="text-[#2A212E]/80">{studio.transitInfo}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-8 mt-6 border-t border-[#E8DFE6] flex flex-wrap items-center gap-3">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${studio.mapQuery}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-4 rounded-2xl bg-[#2A212E] text-white hover:bg-[#3D2C42] transition-colors text-xs font-medium tracking-wider uppercase flex items-center justify-center gap-2 shadow-xs hover:shadow-md hover:shadow-[#F4ACB7]/25"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#F4ACB7]" />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href={`https://wa.me/${studio.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Mudra & Mineral! I'm planning to visit your ${studio.name}. Could you confirm today's bench artisan availability?`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-3 px-4 rounded-2xl bg-[#E8DFF5]/60 text-[#2A212E] hover:bg-[#E8DFF5] transition-colors text-xs font-medium tracking-wider uppercase flex items-center justify-center gap-2 border border-[#D8BBFF]/40"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#D8BBFF]" />
                    <span>WhatsApp Studio</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
