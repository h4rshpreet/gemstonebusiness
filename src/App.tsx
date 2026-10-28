/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { GemstoneDirectory } from './components/GemstoneDirectory';
import { Workshops } from './components/Workshops';
import { CustomBar } from './components/CustomBar';
import { StudioLocations } from './components/StudioLocations';
import { Footer } from './components/Footer';
import { WorkshopBookingModal } from './components/WorkshopBookingModal';
import { PrdViewerModal } from './components/PrdViewerModal';
import { AssetVaultModal } from './components/AssetVaultModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedWorkshopId, setSelectedWorkshopId] = useState<string | undefined>(undefined);
  const [prdModalOpen, setPrdModalOpen] = useState(false);
  const [vaultModalOpen, setVaultModalOpen] = useState(false);
  const [inspectAssetId, setInspectAssetId] = useState<string | null>(null);

  const handleOpenBooking = (workshopId?: string) => {
    setSelectedWorkshopId(workshopId);
    setBookingModalOpen(true);
  };

  const handleInspectAsset = (assetId: string) => {
    setInspectAssetId(assetId);
    setVaultModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7EFE2] text-[#2B2B2B] flex flex-col selection:bg-[#CCA586]/30">
      {/* 4.1 Navigation Header */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenPrd={() => setPrdModalOpen(true)}
        onOpenVault={() => setVaultModalOpen(true)}
      />

      <main className="flex-1">
        {/* 4.2 Hero Section (Assigned: Image 9 @allisongunderson.jpeg) */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onInspectAsset={handleInspectAsset}
        />

        {/* 4.3 Brand Story & Ethical Sourcing (Assigned: Image 6 & Image 14) */}
        <BrandStory onInspectAsset={handleInspectAsset} />

        {/* 4.4 Gemstone & Meaning Directory (Assigned: Images 5, 8, 7, 1, 13, 12) */}
        <GemstoneDirectory
          onInspectAsset={handleInspectAsset}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 4.5 Interactive Crafting Workshops (Assigned: Images 2, 11, 15) */}
        <Workshops
          onOpenBooking={handleOpenBooking}
          onInspectAsset={handleInspectAsset}
        />

        {/* 4.6 Customization & Wire-Wrapping Bar (Assigned: Images 3, 4, 10, 16) */}
        <CustomBar
          onInspectAsset={handleInspectAsset}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 4.7 Studio Locations (Andheri West & Colaba Causeway) */}
        <StudioLocations />
      </main>

      {/* 4.8 Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenPrd={() => setPrdModalOpen(true)}
        onOpenVault={() => setVaultModalOpen(true)}
      />

      {/* Interactive WhatsApp Workshop Booking Modal */}
      <WorkshopBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialWorkshopId={selectedWorkshopId}
      />

      {/* Attached PRD PDF Source Viewer Modal */}
      <PrdViewerModal
        isOpen={prdModalOpen}
        onClose={() => setPrdModalOpen(false)}
      />

      {/* Master Asset Allocation & Vault Modal (Maps all 16 assets, zero duplication) */}
      <AssetVaultModal
        isOpen={vaultModalOpen}
        onClose={() => {
          setVaultModalOpen(false);
          setInspectAssetId(null);
        }}
        selectedAssetId={inspectAssetId}
      />
    </div>
  );
}
