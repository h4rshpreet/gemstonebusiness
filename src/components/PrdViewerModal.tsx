import React from 'react';
import { X, FileText, Download, ExternalLink, CheckCircle } from 'lucide-react';

interface PrdViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrdViewerModal: React.FC<PrdViewerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const pdfPath = '/assets/aistudio/Digital_literacy_prd_2a8a352a.pdf';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A212E]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl h-[90vh] bg-[#FAF7F4] rounded-3xl border border-[#E8DFE6] shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DFE6] bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FDE2E4] flex items-center justify-center text-[#2A212E] border border-[#F4ACB7]/40 shadow-xs">
              <FileText className="w-5 h-5 text-[#B83B5E]" />
            </div>
            <div>
              <h3 className="font-display text-lg text-[#2A212E] font-semibold">
                Product Requirements Document (PRD)
              </h3>
              <p className="text-xs text-[#826E85]">
                Digital_literacy_prd_2a8a352a.pdf · Artisanal Jewelry & Gemstone Studio
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={pdfPath}
              download="Digital_literacy_prd_2a8a352a.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#2A212E] bg-[#E8DFF5] hover:bg-[#D8BBFF] transition-colors rounded-xl border border-[#D8BBFF]/50"
            >
              <Download className="w-3.5 h-3.5 text-[#6D4C8C]" />
              <span>Download PDF</span>
            </a>
            <a
              href={pdfPath}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#2A212E] bg-white hover:bg-[#FDE2E4]/40 transition-colors rounded-xl border border-[#E8DFE6]"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#826E85]" />
              <span>Open in New Tab</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-[#826E85] hover:text-[#2A212E] hover:bg-[#FDE2E4]/50 rounded-xl transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PRD Compliance Quick Summary */}
        <div className="bg-[#FAF7F4] px-6 py-3 border-b border-[#E8DFE6] flex flex-wrap items-center gap-4 text-xs text-[#2A212E]">
          <span className="font-medium text-[#B83B5E] uppercase tracking-wider text-[11px]">
            PRD Compliance:
          </span>
          <span className="inline-flex items-center gap-1.5 bg-[#FDE2E4] px-2.5 py-1 rounded-full text-[#2A212E] font-medium border border-[#F4ACB7]/40">
            <CheckCircle className="w-3.5 h-3.5 text-[#B83B5E]" /> Pastel & Colorful Palette
          </span>
          <span className="inline-flex items-center gap-1.5 bg-[#E8DFF5] px-2.5 py-1 rounded-full text-[#2A212E] font-medium border border-[#D8BBFF]/40">
            <CheckCircle className="w-3.5 h-3.5 text-[#6D4C8C]" /> Luxury Serif & Josefin Sans
          </span>
          <span className="inline-flex items-center gap-1.5 bg-[#DFE7FD] px-2.5 py-1 rounded-full text-[#2A212E] font-medium border border-[#8FA8DF]/40">
            <CheckCircle className="w-3.5 h-3.5 text-[#3F68B5]" /> Arched Framing & Aura Rings
          </span>
          <span className="inline-flex items-center gap-1.5 bg-[#D8F3DC] px-2.5 py-1 rounded-full text-[#2A212E] font-medium border border-[#95D5B2]/40">
            <CheckCircle className="w-3.5 h-3.5 text-[#2D6A4F]" /> 16 Unique Vector Assets
          </span>
        </div>

        {/* PDF Embedded Frame */}
        <div className="flex-1 w-full bg-[#EFE9F4]">
          <iframe
            src={`${pdfPath}#toolbar=0`}
            title="PRD Document"
            className="w-full h-full border-none"
          />
        </div>
      </div>
    </div>
  );
};
