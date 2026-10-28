import React, { useState } from 'react';
import { X, Image as ImageIcon, Upload, Check, RefreshCw, Sparkles, AlertCircle } from 'lucide-react';
import { MASTER_ASSETS } from '../data/assets';
import { StudioImage } from './StudioImage';

interface AssetVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedAssetId?: string | null;
}

export const AssetVaultModal: React.FC<AssetVaultModalProps> = ({
  isOpen,
  onClose,
  selectedAssetId,
}) => {
  const [filterSection, setFilterSection] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const assetsList = Object.values(MASTER_ASSETS);
  const sections = ['All', 'Hero', 'Brand Sourcing', 'Gemstone Directory', 'Workshops', 'Custom Bar'];

  const filtered = filterSection === 'All'
    ? assetsList
    : assetsList.filter((a) => a.section === filterSection);

  const handleFileUpload = (assetId: string, file: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        localStorage.setItem(`mudra_asset_${assetId}`, result);
        window.dispatchEvent(new Event('mudra_assets_updated'));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetAsset = (assetId: string) => {
    localStorage.removeItem(`mudra_asset_${assetId}`);
    window.dispatchEvent(new Event('mudra_assets_updated'));
  };

  const handleResetAll = () => {
    assetsList.forEach((a) => {
      localStorage.removeItem(`mudra_asset_${a.id}`);
    });
    window.dispatchEvent(new Event('mudra_assets_updated'));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A212E]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl h-[88vh] bg-[#FAF7F4] rounded-3xl border border-[#E8DFE6] shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DFE6] bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FDE2E4] flex items-center justify-center text-[#2A212E] border border-[#F4ACB7]/40 shadow-xs">
              <ImageIcon className="w-5 h-5 text-[#B83B5E]" />
            </div>
            <div>
              <h3 className="font-display text-lg text-[#2A212E] font-semibold">
                PRD Master Asset Allocation & Vault
              </h3>
              <p className="text-xs text-[#826E85]">
                Strict mapping of all 16 unique photographic assets · Zero duplication across website
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleResetAll}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#826E85] hover:text-[#2A212E] hover:bg-[#FDE2E4]/50 rounded-xl transition-colors border border-transparent hover:border-[#F4ACB7]/30"
              title="Reset all images to default studio vector renderers"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset All Overrides</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#826E85] hover:text-[#2A212E] hover:bg-[#FDE2E4]/50 rounded-xl transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Informational Banner */}
        <div className="px-6 py-3 bg-[#FAF7F4] border-b border-[#E8DFE6] flex flex-wrap items-center justify-between gap-3 text-xs text-[#2A212E]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#B83B5E]" />
            <span className="text-[#826E85]">
              All 16 assets from the PRD are loaded with handcrafted high-fidelity vector artwork. Drop or upload local photo replacements (e.g. <code className="text-[#2A212E] bg-white px-1 py-0.5 rounded border border-[#E8DFE6]">@allisongunderson.jpeg</code>) to preview instantly.
            </span>
          </div>

          <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-[#E8DFE6] text-[11px] font-mono text-[#826E85] shadow-xs">
            <span>16 / 16 Mapped</span>
            <span className="text-[#2D6A4F] font-semibold ml-1">✓ Zero Duplication</span>
          </div>
        </div>

        {/* Section Filter Tabs */}
        <div className="px-6 py-2.5 border-b border-[#E8DFE6] bg-white flex items-center gap-2 overflow-x-auto">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => setFilterSection(sec)}
              className={`px-3 py-1.5 text-xs rounded-xl whitespace-nowrap transition-all font-medium ${
                filterSection === sec
                  ? 'bg-[#2A212E] text-white shadow-xs'
                  : 'text-[#826E85] hover:text-[#2A212E] hover:bg-[#FDE2E4]/40'
              }`}
            >
              {sec}
            </button>
          ))}
        </div>

        {/* Assets Grid */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#FAF7F4]">
          {filtered.map((asset) => {
            const isHighlighted = selectedAssetId === asset.id;
            const hasCustom = !!localStorage.getItem(`mudra_asset_${asset.id}`);

            return (
              <div
                key={asset.id}
                className={`bg-white rounded-2xl border p-4 flex flex-col transition-all duration-200 ${
                  isHighlighted
                    ? 'border-[#F4ACB7] ring-2 ring-[#F4ACB7]/40 shadow-md'
                    : 'border-[#E8DFE6] hover:border-[#F4ACB7] hover:shadow-md'
                }`}
              >
                {/* Visual Preview */}
                <div className="h-44 w-full mb-3 rounded-xl overflow-hidden relative border border-[#E8DFE6] bg-[#FAF7F4]">
                  <StudioImage assetId={asset.id} className="w-full h-full" />
                  {hasCustom && (
                    <span className="absolute top-2 left-2 bg-[#2D6A4F] text-white text-[10px] uppercase font-mono px-2 py-0.5 rounded-full shadow-xs">
                      Custom Photo Loaded
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h4 className="font-display font-semibold text-sm text-[#2A212E]">
                    #{asset.imageNumber}. {asset.title}
                  </h4>
                  <span className="text-[10px] font-mono uppercase bg-[#E8DFF5] text-[#2A212E] px-2 py-0.5 rounded-full border border-[#D8BBFF]/40 shrink-0 font-medium">
                    {asset.section}
                  </span>
                </div>

                <p className="text-xs text-[#826E85] mb-2 font-mono truncate" title={asset.filename}>
                  {asset.filename}
                </p>

                <p className="text-xs text-[#826E85] mb-3 line-clamp-2 leading-relaxed flex-1">
                  {asset.description}
                </p>

                {/* Actions */}
                <div className="pt-2 border-t border-[#E8DFE6] flex items-center justify-between gap-2">
                  <label className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#2A212E] bg-[#FDE2E4] hover:bg-[#F4ACB7] transition-colors rounded-xl cursor-pointer border border-[#F4ACB7]/40">
                    <Upload className="w-3.5 h-3.5 text-[#B83B5E]" />
                    <span>{hasCustom ? 'Replace Photo' : 'Upload Original'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload(asset.id, file);
                      }}
                    />
                  </label>

                  {hasCustom && (
                    <button
                      onClick={() => handleResetAsset(asset.id)}
                      className="text-[11px] text-[#826E85] hover:text-[#B83B5E] transition-colors"
                      title="Reset to default artwork"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
