import React from 'react';
import { Instagram, MessageSquare, MapPin, FileText, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenPrd: () => void;
  onOpenVault: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenPrd,
  onOpenVault,
}) => {
  return (
    <footer className="bg-[#2A212E] text-[#FAF7F4] pt-16 pb-12 border-t border-[#3E2B44]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
              <span className="bg-gradient-to-r from-white via-[#F4ACB7] to-[#D8BBFF] bg-clip-text text-transparent">
                Mudra &amp; Mineral
              </span>
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#FAF7F4]/80 leading-relaxed max-w-sm">
              Artisanal jewelry crafting studio based in Mumbai. We celebrate natural ethical minerals,
              ancient wire wrapping traditions, and vibrant social crafting experiences with friends.
            </p>
            <div className="text-xs text-[#FAF7F4]/60 font-mono">
              Andheri West (Lokhandwala) · Colaba Causeway (Regal)
            </div>
          </div>

          {/* Studio Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#F4ACB7] block font-semibold">
              Studio Guide
            </span>
            <ul className="space-y-2 text-xs text-[#FAF7F4]/85">
              <li>
                <a href="#origins" className="hover:text-[#F4ACB7] transition-colors">
                  Ethical Origins &amp; Mining
                </a>
              </li>
              <li>
                <a href="#gemstones" className="hover:text-[#D8BBFF] transition-colors">
                  Gemstone &amp; Meaning Directory
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-[#81C3D7] transition-colors">
                  Interactive Weekend Workshops
                </a>
              </li>
              <li>
                <a href="#custom" className="hover:text-[#FFD166] transition-colors">
                  Customization &amp; Wire Bar
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-[#F4ACB7] transition-colors">
                  Studio Locations &amp; Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Inquiries */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#D8BBFF] block font-semibold">
              Connect &amp; Bookings
            </span>
            <div className="space-y-2.5 text-xs">
              <a
                href="https://wa.me/919820144520?text=Hello%20Mudra%20%26%20Mineral%20Studio!%20I%20have%20an%20inquiry%20about%20your%20jewelry%20workshops."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#FAF7F4] hover:text-[#F4ACB7] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#F4ACB7]" />
                <span>WhatsApp Workshop Inquiries (+91 98201 44520)</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#FAF7F4] hover:text-[#D8BBFF] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#D8BBFF]" />
                <span>@mudraandmineral.studio</span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Lokhandwala+Complex+Andheri+West+Mumbai"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#FAF7F4] hover:text-[#81C3D7] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#81C3D7]" />
                <span>Mumbai Map Directions</span>
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={onOpenPrd}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-[11px] font-mono text-[#FAF7F4] transition-colors border border-white/10"
              >
                <FileText className="w-3.5 h-3.5 text-[#F4ACB7]" />
                <span>View PRD Spec</span>
              </button>

              <button
                onClick={onOpenVault}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-[11px] font-mono text-[#FAF7F4] transition-colors border border-white/10"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D8BBFF]" />
                <span>16 Asset Allocations</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F4]/60 font-mono">
          <p>© {new Date().getFullYear()} Mudra &amp; Mineral Studio. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Handcrafted in Mumbai</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#F4ACB7]">Pastel Gemstone Color System</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
