import React, { useState, useEffect } from 'react';
import { MASTER_ASSETS } from '../data/assets';

interface StudioImageProps {
  assetId: string;
  className?: string;
  arch?: boolean;
  alt?: string;
  showBadge?: boolean;
  onInspect?: (assetId: string) => void;
}

export const StudioImage: React.FC<StudioImageProps> = ({
  assetId,
  className = '',
  arch = false,
  alt,
  showBadge = false,
  onInspect,
}) => {
  const asset = MASTER_ASSETS[assetId];
  const [customImage, setCustomImage] = useState<string | null>(null);

  useEffect(() => {
    // Check if user uploaded a replacement for this asset
    const stored = localStorage.getItem(`mudra_asset_${assetId}`);
    if (stored) {
      setCustomImage(stored);
    }

    const handleStorageChange = () => {
      const updated = localStorage.getItem(`mudra_asset_${assetId}`);
      setCustomImage(updated);
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('mudra_assets_updated', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('mudra_assets_updated', handleStorageChange);
    };
  }, [assetId]);

  if (!asset) {
    return (
      <div className={`bg-[#E5EDF0] flex items-center justify-center p-6 text-xs text-[#A49284] ${className}`}>
        Asset not found
      </div>
    );
  }

  const archClass = arch ? 'rounded-t-[120px] md:rounded-t-[160px]' : 'rounded-2xl';

  return (
    <div
      className={`group relative overflow-hidden bg-white border border-[#E8DFE6] shadow-xs hover:shadow-md transition-all duration-300 ${archClass} ${className}`}
      title={`${asset.title} (${asset.filename})`}
    >
      {customImage ? (
        <img
          src={customImage}
          alt={alt || asset.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF5F7] via-[#F8F2FC] to-[#EFF7F6]">
          {/* Bespoke artisanal SVG visualization crafted for this specific PRD asset */}
          {renderArtisanalAssetSvg(assetId)}
        </div>
      )}

      {/* Gentle pastel vignette scrim */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2A212E]/15 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity" />

      {/* Subtle bottom label on hover */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-[#2A212E] bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#E8DFE6] shadow-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span className="font-medium tracking-wide truncate">{asset.title}</span>
        <span className="text-[#826E85] text-[10px] uppercase tracking-wider shrink-0 ml-2">PRD Asset #{asset.imageNumber}</span>
      </div>

      {/* Optional Top Badge for PRD Audit mode */}
      {showBadge && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onInspect?.(assetId);
          }}
          className="absolute top-3 right-3 text-[10px] uppercase font-mono tracking-wider bg-[#2A212E]/80 text-white px-2.5 py-1 rounded-lg backdrop-blur-sm hover:bg-[#2A212E] transition-colors"
        >
          #{asset.imageNumber} {asset.filename.slice(0, 14)}...
        </button>
      )}
    </div>
  );
};

// Render handcrafted high-fidelity artisanal vector scenes for each of the 16 exact PRD assigned assets
function renderArtisanalAssetSvg(assetId: string) {
  switch (assetId) {
    case 'image-9': // Hero: Raw mineral cluster (@allisongunderson.jpeg)
      return (
        <svg viewBox="0 0 800 500" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="hero-glow" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#FDE2E4" stopOpacity="0.9" />
              <stop offset="45%" stopColor="#E8DFF5" stopOpacity="0.8" />
              <stop offset="80%" stopColor="#DFE7FD" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#D8F3DC" stopOpacity="0.6" />
            </radialGradient>
            <linearGradient id="crystal1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF0F5" />
              <stop offset="50%" stopColor="#F8C8DC" />
              <stop offset="100%" stopColor="#D8BBFF" />
            </linearGradient>
            <linearGradient id="crystal2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#BEE1E6" />
              <stop offset="50%" stopColor="#E2ECE9" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
            <linearGradient id="gold-wire" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F4A261" />
              <stop offset="50%" stopColor="#E76F51" />
              <stop offset="100%" stopColor="#FFD166" />
            </linearGradient>
          </defs>
          <rect width="800" height="500" fill="url(#hero-glow)" />
          {/* Textured raw mineral rock matrix with pastel hues */}
          <path d="M 220 380 Q 280 430 400 420 Q 550 435 620 380 Q 660 300 580 260 Q 520 230 440 240 Q 320 220 240 290 Z" fill="#E8DFF5" opacity="0.6" />
          <path d="M 260 370 Q 310 410 420 400 Q 530 410 580 365 Q 600 310 540 275 Q 460 255 380 260 Q 280 265 260 370 Z" fill="#D8BBFF" opacity="0.4" />
          {/* Crystalline facets cluster in pastel tourmaline, celestial aquamarine, and lilac quartz */}
          <polygon points="380,120 410,240 350,260 330,170" fill="url(#crystal1)" opacity="0.9" />
          <polygon points="410,120 450,220 410,240 380,120" fill="#FDE2E4" opacity="0.95" />
          <polygon points="430,90 480,210 430,230 395,150" fill="url(#crystal2)" opacity="0.85" />
          <polygon points="480,210 520,240 450,250 430,230" fill="#C8B6FF" opacity="0.75" />
          <polygon points="290,180 340,280 270,300 250,220" fill="url(#crystal2)" opacity="0.9" />
          <polygon points="470,160 540,270 480,300 440,220" fill="url(#crystal1)" opacity="0.85" />
          <polygon points="340,140 380,250 320,270 295,170" fill="#FFFFFF" opacity="0.6" />
          {/* Sparkling pastel druzy crystal particles */}
          <circle cx="370" cy="200" r="3" fill="#FFFFFF" opacity="0.9" />
          <circle cx="430" cy="180" r="4" fill="#FFF1C5" opacity="0.95" />
          <circle cx="460" cy="230" r="3" fill="#F8C8DC" opacity="0.9" />
          <circle cx="330" cy="230" r="3" fill="#BEE1E6" opacity="0.9" />
          <circle cx="490" cy="200" r="2.5" fill="#FFFFFF" opacity="0.9" />
          <circle cx="390" cy="130" r="3" fill="#FFD166" opacity="0.9" />
          {/* Delicate artisanal gold craft wire coils wrapping the mineral base */}
          <path d="M 270 330 C 330 380, 480 370, 560 320 C 580 340, 470 410, 310 370" fill="none" stroke="url(#gold-wire)" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 290 310 C 370 350, 450 340, 530 290" fill="none" stroke="url(#gold-wire)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'image-6': // Brand Sourcing: Raw-cut gems set in gold stringing (Zen bead)
      return (
        <svg viewBox="0 0 600 450" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="450" fill="#F4ECE1" />
          {/* Fluid hand-strung gold chain cord */}
          <path d="M 50 120 C 180 200, 240 380, 360 360 C 460 340, 520 180, 560 100" fill="none" stroke="#CCA586" strokeWidth="3" strokeDasharray="6 3" />
          <path d="M 70 140 C 200 220, 260 400, 370 370 C 480 340, 530 190, 570 120" fill="none" stroke="#D4AF37" strokeWidth="2" />
          {/* Organic rough-cut gemstone beads along the string */}
          <polygon points="170,180 195,190 190,215 165,210 155,195" fill="#81C3D7" stroke="#A49284" strokeWidth="1" />
          <polygon points="230,240 260,250 255,280 225,275 220,255" fill="#D97E96" stroke="#A49284" strokeWidth="1" />
          <polygon points="300,320 335,325 330,355 295,350 290,335" fill="#D4AF37" stroke="#A49284" strokeWidth="1" />
          <polygon points="380,335 410,325 415,355 385,365 375,345" fill="#4E878C" stroke="#A49284" strokeWidth="1" />
          <polygon points="460,260 485,250 495,275 470,285 455,270" fill="#D97E96" stroke="#A49284" strokeWidth="1" />
          {/* Hand knotted silk spacer nodes */}
          <circle cx="160" cy="180" r="4" fill="#CCA586" />
          <circle cx="215" cy="225" r="4" fill="#CCA586" />
          <circle cx="280" cy="295" r="4" fill="#CCA586" />
          <circle cx="355" cy="345" r="4" fill="#CCA586" />
          <circle cx="435" cy="305" r="4" fill="#CCA586" />
        </svg>
      );

    case 'image-14': // Brand Sourcing: Vintage gold bezel cuff with polished stones
      return (
        <svg viewBox="0 0 600 450" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="450" fill="#EAE1D5" />
          {/* Sculptural hammered vintage cuff silhouette */}
          <path d="M 140 260 C 140 140, 460 140, 460 260 C 460 310, 410 340, 360 320 C 330 305, 300 305, 270 320 C 210 350, 140 310, 140 260 Z" fill="#D4AF37" stroke="#B8972E" strokeWidth="4" />
          {/* Inner contour of cuff */}
          <ellipse cx="300" cy="245" rx="110" ry="60" fill="#EAE1D5" />
          {/* Bezel settings with polished stones */}
          {/* Center malachite bezel */}
          <ellipse cx="300" cy="165" rx="30" ry="22" fill="#19533B" stroke="#B8972E" strokeWidth="4" />
          <ellipse cx="295" cy="163" rx="16" ry="10" fill="#2E7D5B" opacity="0.8" />
          <ellipse cx="292" cy="162" rx="6" ry="3" fill="#68B996" opacity="0.9" />
          {/* Left bezel: Rose tourmaline */}
          <circle cx="220" cy="190" r="18" fill="#D97E96" stroke="#B8972E" strokeWidth="3" />
          <circle cx="217" cy="188" r="7" fill="#F0A6B8" opacity="0.8" />
          {/* Right bezel: Aquamarine */}
          <circle cx="380" cy="190" r="18" fill="#81C3D7" stroke="#B8972E" strokeWidth="3" />
          <circle cx="378" cy="188" r="7" fill="#BCE0EB" opacity="0.8" />
          {/* Hammered indentations on gold cuff */}
          <circle cx="260" cy="170" r="2.5" fill="#B8972E" opacity="0.7" />
          <circle cx="340" cy="170" r="2.5" fill="#B8972E" opacity="0.7" />
          <circle cx="170" cy="235" r="3" fill="#B8972E" opacity="0.7" />
          <circle cx="430" cy="235" r="3" fill="#B8972E" opacity="0.7" />
        </svg>
      );

    case 'image-5': // Gemstone Directory: Pink Tourmaline & Amazonite
      return (
        <svg viewBox="0 0 500 500" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="500" fill="#F7EFE2" />
          <circle cx="250" cy="250" r="180" fill="#E5EDF0" opacity="0.5" />
          {/* Prismatic Pink Tourmaline Column */}
          <polygon points="210,120 250,90 280,120 270,330 200,320" fill="#D97E96" opacity="0.9" />
          <polygon points="250,90 280,120 270,330 240,325" fill="#C76781" />
          <polygon points="210,120 250,90 240,325 200,320" fill="#EFA2B5" opacity="0.8" />
          {/* Mint Amazonite Polished Pebble alongside */}
          <ellipse cx="320" cy="300" rx="60" ry="45" fill="#68B996" opacity="0.95" />
          <ellipse cx="310" cy="295" rx="35" ry="20" fill="#8DD2B4" opacity="0.8" />
          <path d="M 280 300 Q 320 315 360 295" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.6" fill="none" />
          {/* Wire wrapping around tourmaline */}
          <path d="M 190 200 Q 240 220 290 190" stroke="#CCA586" strokeWidth="3" fill="none" />
          <path d="M 195 240 Q 245 260 285 230" stroke="#CCA586" strokeWidth="3" fill="none" />
          <circle cx="220" cy="140" r="3" fill="#FFFFFF" opacity="0.9" />
        </svg>
      );

    case 'image-8': // Gemstone Directory: Pear Cut Green Sapphire Ring
      return (
        <svg viewBox="0 0 500 500" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="500" fill="#F5EEE4" />
          {/* Golden ring band viewed from high-angle */}
          <ellipse cx="250" cy="280" rx="140" ry="70" fill="none" stroke="#D4AF37" strokeWidth="14" />
          <ellipse cx="250" cy="282" rx="136" ry="66" fill="none" stroke="#F3E5AB" strokeWidth="3" opacity="0.8" />
          {/* Pear-cut bezel setting mount */}
          <path d="M 250 140 C 290 200 300 240 250 270 C 200 240 210 200 250 140 Z" fill="#D4AF37" />
          {/* Natural deep green sapphire facets */}
          <path d="M 250 150 C 282 200 290 232 250 258 C 210 232 218 200 250 150 Z" fill="#1C5D47" />
          <polygon points="250,150 270,200 250,215 230,200" fill="#2E7D5B" />
          <polygon points="270,200 285,225 250,255 250,215" fill="#174A37" />
          <polygon points="230,200 215,225 250,255 250,215" fill="#3D9B73" opacity="0.9" />
          {/* Light flash reflection */}
          <line x1="245" y1="165" x2="255" y2="195" stroke="#A8E4C9" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
        </svg>
      );

    case 'image-7': // Gemstone Directory: Malachite & Pearl (Harris Reed)
      return (
        <svg viewBox="0 0 500 500" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="500" fill="#E8EDEC" />
          {/* Intertwined golden bench hands / organic link bails */}
          <path d="M 120 250 C 180 180 230 200 250 240 C 270 280 320 300 380 230" fill="none" stroke="#CCA586" strokeWidth="6" strokeLinecap="round" />
          {/* Banded Malachite oval cabochon */}
          <ellipse cx="200" cy="240" rx="70" ry="50" fill="#144D34" stroke="#D4AF37" strokeWidth="5" />
          {/* Malachite concentric organic banding */}
          <ellipse cx="195" cy="238" rx="55" ry="38" fill="none" stroke="#256F4C" strokeWidth="5" />
          <ellipse cx="190" cy="235" rx="40" ry="26" fill="none" stroke="#3DA373" strokeWidth="4" />
          <ellipse cx="185" cy="232" rx="25" ry="16" fill="none" stroke="#103F2A" strokeWidth="4" />
          <circle cx="180" cy="230" r="8" fill="#58C48E" />
          {/* Baroque freshwater pearl (organic irregular silhouette) */}
          <path d="M 320 210 C 350 200 380 220 375 250 C 370 280 340 290 315 270 C 295 250 300 220 320 210 Z" fill="#FDFBF7" stroke="#DDCDBD" strokeWidth="3" />
          {/* Pearl lustrous rainbow nacre highlight */}
          <path d="M 325 220 Q 355 225 350 245" fill="none" stroke="#E5EDF0" strokeWidth="4" opacity="0.8" />
          <circle cx="335" cy="230" r="4" fill="#FFFFFF" opacity="0.9" />
        </svg>
      );

    case 'image-1': // Gemstone Directory: Aquamarine & Garnet
      return (
        <svg viewBox="0 0 500 500" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="500" fill="#F7EFE2" />
          {/* Fine paperclip chain */}
          <path d="M 150 80 Q 250 160 250 240" fill="none" stroke="#D4AF37" strokeWidth="3" />
          <path d="M 350 80 Q 250 160 250 240" fill="none" stroke="#D4AF37" strokeWidth="3" />
          {/* Ice-ocean Aquamarine crystal nugget */}
          <polygon points="250,230 295,280 270,350 220,340 205,270" fill="#81C3D7" stroke="#60A1B5" strokeWidth="2" opacity="0.9" />
          <polygon points="250,230 270,350 220,340" fill="#9DD7E8" opacity="0.8" />
          <polygon points="220,340 205,270 250,230" fill="#5CA3B8" opacity="0.85" />
          {/* Deep red pomegranate rhodolite garnet drop charm suspended beside it */}
          <circle cx="280" cy="330" r="24" fill="#781C2E" stroke="#D4AF37" strokeWidth="3" />
          <circle cx="275" cy="325" r="9" fill="#A52C43" opacity="0.85" />
          <circle cx="273" cy="323" r="3" fill="#E86E84" opacity="0.9" />
        </svg>
      );

    case 'image-13': // Gemstone Directory: Smooth Polished Cabochons
      return (
        <svg viewBox="0 0 500 500" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="500" fill="#F0E9DF" />
          {/* 2x2 grid of smooth polished cabochon drops */}
          {/* Top-left: Golden tiger eye / jasper */}
          <ellipse cx="170" cy="170" rx="55" ry="45" fill="#CCA586" stroke="#A49284" strokeWidth="2" />
          <path d="M 130 170 Q 170 150 210 170" stroke="#F5DFCA" strokeWidth="8" opacity="0.6" fill="none" />
          {/* Top-right: Lapis lazuli deep ocean blue */}
          <ellipse cx="330" cy="170" rx="50" ry="42" fill="#244B6D" stroke="#A49284" strokeWidth="2" />
          <circle cx="320" cy="160" r="3" fill="#D4AF37" opacity="0.8" />
          <circle cx="345" cy="175" r="2.5" fill="#D4AF37" opacity="0.7" />
          {/* Bottom-left: Rose quartz */}
          <ellipse cx="170" cy="330" rx="52" ry="46" fill="#F0C2CA" stroke="#A49284" strokeWidth="2" />
          <ellipse cx="160" cy="320" rx="20" ry="12" fill="#FFFFFF" opacity="0.5" />
          {/* Bottom-right: Moss agate */}
          <ellipse cx="330" cy="330" rx="54" ry="44" fill="#6A8E7F" stroke="#A49284" strokeWidth="2" />
          <path d="M 310 320 Q 330 350 340 325" stroke="#3D5A4C" strokeWidth="3" fill="none" />
          {/* Top wire loops on each cabochon */}
          <circle cx="170" cy="115" r="8" fill="none" stroke="#D4AF37" strokeWidth="2.5" />
          <circle cx="330" cy="118" r="8" fill="none" stroke="#D4AF37" strokeWidth="2.5" />
          <circle cx="170" cy="274" r="8" fill="none" stroke="#D4AF37" strokeWidth="2.5" />
          <circle cx="330" cy="276" r="8" fill="none" stroke="#D4AF37" strokeWidth="2.5" />
        </svg>
      );

    case 'image-12': // Gemstone Directory: Beaded Opal & Tourmaline Strands
      return (
        <svg viewBox="0 0 500 500" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="500" fill="#F9F6F0" />
          {/* Cascading rows of micro-faceted opal beads with rainbow iridescence */}
          {Array.from({ length: 4 }).map((_, rowIndex) => {
            const yOffset = 150 + rowIndex * 60;
            return (
              <g key={rowIndex}>
                <path
                  d={`M 60 ${yOffset - 20} Q 250 ${yOffset + 60} 440 ${yOffset - 10}`}
                  fill="none"
                  stroke="#E5EDF0"
                  strokeWidth="2"
                />
                {Array.from({ length: 15 }).map((_, dotIndex) => {
                  const t = dotIndex / 14;
                  const cx = 60 + (440 - 60) * t;
                  const cy = yOffset - 20 + Math.sin(t * Math.PI) * 70;
                  const colors = ['#EAEFF2', '#FADCE3', '#C7EBE6', '#FBE5B8', '#D6C8E8'];
                  const fillColor = colors[(rowIndex * 3 + dotIndex) % colors.length];
                  return (
                    <circle
                      key={dotIndex}
                      cx={cx}
                      cy={cy}
                      r={5}
                      fill={fillColor}
                      stroke="#A49284"
                      strokeWidth="0.8"
                    />
                  );
                })}
              </g>
            );
          })}
        </svg>
      );

    case 'image-2': // Workshops: Stacked charm bracelets and beaded cords
      return (
        <svg viewBox="0 0 600 450" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="450" fill="#E5EDF0" />
          {/* Three stacked artisanal bracelets */}
          {/* Bracelet 1: Twisted cord with gold accents */}
          <path d="M 80 160 C 200 240, 400 240, 520 160" fill="none" stroke="#CCA586" strokeWidth="8" strokeLinecap="round" />
          {/* Bracelet 2: Gold paperclip link */}
          <path d="M 90 220 C 210 300, 390 300, 510 220" fill="none" stroke="#D4AF37" strokeWidth="5" strokeDasharray="14 6" />
          {/* Bracelet 3: Mixed natural stone & pearl strand */}
          <path d="M 110 280 C 220 360, 380 360, 490 280" fill="none" stroke="#A49284" strokeWidth="3" />
          {/* Charms dangling from middle bracelet */}
          <circle cx="240" cy="285" r="14" fill="#68B996" stroke="#D4AF37" strokeWidth="2.5" />
          <polygon points="300,285 315,310 285,310" fill="#D97E96" stroke="#D4AF37" strokeWidth="2" />
          <circle cx="360" cy="285" r="12" fill="#FDFBF7" stroke="#DDCDBD" strokeWidth="2" />
        </svg>
      );

    case 'image-11': // Workshops: Mixed natural stone and pearl bracelets on silk
      return (
        <svg viewBox="0 0 600 450" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="450" fill="#DDCDBD" />
          {/* Flowing silk fold shadows */}
          <path d="M 0 100 Q 200 180 600 120 L 600 450 L 0 450 Z" fill="#D2C0AF" opacity="0.5" />
          <path d="M 0 250 Q 300 350 600 270 L 600 450 L 0 450 Z" fill="#C5B19E" opacity="0.4" />
          {/* Artisan bracelet laid out flat on raw silk */}
          <ellipse cx="300" cy="240" rx="140" ry="80" fill="none" stroke="#FAF6F0" strokeWidth="12" />
          {/* Pearl & Gemstone alternation */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const cx = 300 + Math.cos(angle) * 140;
            const cy = 240 + Math.sin(angle) * 80;
            const isPearl = i % 2 === 0;
            return (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={isPearl ? 10 : 8}
                fill={isPearl ? '#FDFBF7' : '#9FADB6'}
                stroke="#A49284"
                strokeWidth="1.5"
              />
            );
          })}
        </svg>
      );

    case 'image-15': // Workshops: Fine gem chokers & drop pendants
      return (
        <svg viewBox="0 0 600 450" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="450" fill="#E5EDF0" />
          {/* Minimalist mannequin neck curve */}
          <path d="M 220 80 Q 300 140 380 80 L 420 380 L 180 380 Z" fill="#F7EFE2" opacity="0.7" />
          {/* Choker band */}
          <path d="M 235 150 Q 300 190 365 150" fill="none" stroke="#D4AF37" strokeWidth="3" />
          {/* Focal wire drop pendant */}
          <line x1="300" y1="172" x2="300" y2="230" stroke="#CCA586" strokeWidth="2.5" />
          <polygon points="300,230 320,265 300,310 280,265" fill="#19533B" stroke="#D4AF37" strokeWidth="2.5" />
          {/* Facet reflections */}
          <polygon points="300,230 320,265 300,310" fill="#2E7D5B" opacity="0.7" />
          <circle cx="300" cy="172" r="4" fill="#D4AF37" />
        </svg>
      );

    case 'image-3': // Custom Bar: Multi-pendant stone stack necklace
      return (
        <svg viewBox="0 0 450 600" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <rect width="450" height="600" fill="#FAF6F0" />
          {/* Layered chain setup */}
          <path d="M 120 40 Q 225 220 330 40" fill="none" stroke="#CCA586" strokeWidth="2.5" />
          <path d="M 90 40 Q 225 320 360 40" fill="none" stroke="#D4AF37" strokeWidth="3" />
          {/* First layer pendant: raw quartz drop */}
          <polygon points="225,180 238,215 225,250 212,215" fill="#E5EDF0" stroke="#CCA586" strokeWidth="2" opacity="0.9" />
          {/* Lower layer: Asymmetrical multi-pendant cluster */}
          <circle cx="210" cy="275" r="14" fill="#D97E96" stroke="#D4AF37" strokeWidth="2.5" />
          <ellipse cx="238" cy="285" rx="12" ry="18" fill="#19533B" stroke="#D4AF37" strokeWidth="2" />
          <circle cx="255" cy="270" r="9" fill="#FDFBF7" stroke="#DDCDBD" strokeWidth="1.5" />
        </svg>
      );

    case 'image-4': // Custom Bar: Delicate multi-stone choker
      return (
        <svg viewBox="0 0 450 600" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <rect width="450" height="600" fill="#F4ECE1" />
          {/* Subtle choker curvature */}
          <path d="M 60 260 Q 225 380 390 260" fill="none" stroke="#D4AF37" strokeWidth="2.5" />
          {/* Alternating seed pearls and raw gemstones */}
          {Array.from({ length: 9 }).map((_, i) => {
            const t = (i + 1) / 10;
            const cx = 60 + (390 - 60) * t;
            const cy = 260 + Math.sin(t * Math.PI) * 120;
            const isStone = i % 2 === 0;
            return (
              <g key={i}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={isStone ? 8 : 5}
                  fill={isStone ? (i === 4 ? '#81C3D7' : '#D97E96') : '#FDFBF7'}
                  stroke="#A49284"
                  strokeWidth="1.5"
                />
                {isStone && <circle cx={cx} cy={cy - 12} r={2.5} fill="#D4AF37" />}
              </g>
            );
          })}
        </svg>
      );

    case 'image-10': // Custom Bar: Gold charm cluster stack
      return (
        <svg viewBox="0 0 450 600" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <rect width="450" height="600" fill="#EBE3D5" />
          {/* Central heavy gold jump ring bail */}
          <circle cx="225" cy="180" r="28" fill="none" stroke="#D4AF37" strokeWidth="6" />
          <circle cx="225" cy="180" r="24" fill="none" stroke="#F3E5AB" strokeWidth="2" opacity="0.8" />
          {/* Clustered gold charms radiating downwards */}
          {/* Charm 1: Sun disk with center garnet */}
          <circle cx="180" cy="280" r="28" fill="#D4AF37" stroke="#B8972E" strokeWidth="2" />
          <circle cx="180" cy="280" r="10" fill="#781C2E" />
          {/* Charm 2: Wire wrapped crystal prism */}
          <polygon points="225,240 240,290 225,360 210,290" fill="#9FADB6" stroke="#CCA586" strokeWidth="3" />
          {/* Charm 3: Coin talisman with engraved moon */}
          <circle cx="270" cy="290" r="26" fill="#D4AF37" stroke="#B8972E" strokeWidth="2" />
          <path d="M 265 275 A 15 15 0 0 0 265 305 A 12 12 0 0 1 265 275 Z" fill="#F3E5AB" />
        </svg>
      );

    case 'image-16': // Custom Bar: Hand-held wire-wrapped pendants
      return (
        <svg viewBox="0 0 450 600" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <rect width="450" height="600" fill="#F7EFE2" />
          {/* Stylized warm hand contour holding pendants */}
          <path d="M 100 460 C 130 380, 180 340, 240 330 C 310 320, 360 360, 420 420 L 450 600 L 80 600 Z" fill="#E6D3C1" opacity="0.6" stroke="#CCA586" strokeWidth="2" />
          {/* Three wire-wrapped finished pendants resting on palm */}
          {/* Pendant 1: Green malachite teardrop wrapped in silver wire */}
          <ellipse cx="180" cy="290" rx="22" ry="34" fill="#19533B" stroke="#9FADB6" strokeWidth="3" />
          <path d="M 160 270 Q 185 290 200 310" stroke="#E5EDF0" strokeWidth="3" fill="none" />
          <circle cx="180" cy="250" r="6" fill="none" stroke="#9FADB6" strokeWidth="2.5" />
          {/* Pendant 2: Raw amethyst/tourmaline with gold spiral wire cage */}
          <polygon points="245,230 265,270 245,320 225,270" fill="#D97E96" stroke="#D4AF37" strokeWidth="3" />
          <path d="M 220 260 Q 245 270 268 280" stroke="#D4AF37" strokeWidth="3.5" fill="none" />
          <path d="M 224 285 Q 245 295 264 305" stroke="#D4AF37" strokeWidth="3.5" fill="none" />
          <circle cx="245" cy="220" r="7" fill="none" stroke="#D4AF37" strokeWidth="3" />
          {/* Pendant 3: Aquamarine pebble */}
          <ellipse cx="310" cy="280" rx="20" ry="26" fill="#81C3D7" stroke="#CCA586" strokeWidth="2.5" />
          <circle cx="310" cy="245" r="5" fill="none" stroke="#CCA586" strokeWidth="2.5" />
        </svg>
      );

    default:
      return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#A49284]">
          <span className="font-display text-lg text-[#2B2B2B] mb-1">Mudra & Mineral</span>
          <span className="text-xs">Artisanal Studio Specimen</span>
        </div>
      );
  }
}
