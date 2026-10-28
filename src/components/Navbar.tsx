import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenPrd: () => void;
  onOpenVault: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenPrd,
  onOpenVault,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ORIGINS', href: '#origins' },
    { name: 'GEMSTONES', href: '#gemstones' },
    { name: 'WORKSHOPS', href: '#workshops' },
    { name: 'CUSTOM', href: '#custom' },
    { name: 'LOCATIONS', href: '#locations' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F4]/90 backdrop-blur-md border-b border-[#E8DFE6] shadow-xs py-3.5'
          : 'bg-[#FAF7F4]/75 backdrop-blur-xs border-b border-[#E8DFE6]/60 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Display Face, single line, no badges) */}
        <a
          href="#"
          className="font-display text-xl md:text-2xl font-semibold tracking-tight text-[#2A212E] whitespace-nowrap shrink-0 hover:text-[#F4ACB7] transition-colors"
        >
          <span className="bg-gradient-to-r from-[#2A212E] via-[#5C3B5E] to-[#2A212E] bg-clip-text text-transparent">
            Mudra &amp; Mineral
          </span>
        </a>

        {/* Zone 2: 4-5 Nav Links (Josefin Sans, Caps, Tracked Out) */}
        <nav className="hidden lg:flex items-center gap-8 text-[12px] font-body tracking-[0.2em] font-medium text-[#2A212E]/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#2A212E] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#F4ACB7] after:via-[#D8BBFF] after:to-[#BEE1E6] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Utility Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenPrd}
            title="Inspect original PRD specifications"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#826E85] hover:text-[#2A212E] bg-[#E8DFF5]/40 hover:bg-[#E8DFF5] rounded-xl transition-colors border border-[#D8BBFF]/30"
          >
            <FileText className="w-3.5 h-3.5 text-[#D8BBFF]" />
            <span className="font-mono text-[11px] uppercase tracking-wider">PRD Spec</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="px-4 py-2 text-xs font-body font-medium tracking-wider uppercase text-white bg-[#2A212E] hover:bg-[#3D2C42] hover:shadow-md hover:shadow-[#F4ACB7]/20 transition-all duration-200 rounded-xl whitespace-nowrap shrink-0"
          >
            Book Workshop
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2A212E] hover:bg-[#E8DFF5] rounded-xl transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F4] border-b border-[#E8DFE6] px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-xs font-body tracking-[0.2em] font-medium text-[#2A212E]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#F4ACB7] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#E8DFE6] flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrd();
              }}
              className="flex items-center gap-1.5 text-xs text-[#826E85]"
            >
              <FileText className="w-3.5 h-3.5 text-[#D8BBFF]" />
              <span>View PRD Spec</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVault();
              }}
              className="flex items-center gap-1.5 text-xs text-[#F4ACB7]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Asset Vault (16)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
