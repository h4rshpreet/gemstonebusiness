import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, MessageSquare, Sparkles, Check } from 'lucide-react';
import { WORKSHOP_PLANS } from '../data/workshops';
import { STUDIOS } from '../data/locations';

interface WorkshopBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialWorkshopId?: string;
  initialStudioId?: 'andheri' | 'colaba';
}

export const WorkshopBookingModal: React.FC<WorkshopBookingModalProps> = ({
  isOpen,
  onClose,
  initialWorkshopId,
  initialStudioId = 'andheri',
}) => {
  const [selectedWorkshopId, setSelectedWorkshopId] = useState<string>(
    initialWorkshopId || WORKSHOP_PLANS[0].id
  );
  const [selectedStudioId, setSelectedStudioId] = useState<'andheri' | 'colaba'>(initialStudioId);
  const [selectedDate, setSelectedDate] = useState<string>('Upcoming Saturday (Batch 1)');
  const [selectedSlot, setSelectedSlot] = useState<string>('11:30 AM – 2:00 PM');
  const [partySize, setPartySize] = useState<number>(2);
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  if (!isOpen) return null;

  const currentWorkshop = WORKSHOP_PLANS.find((w) => w.id === selectedWorkshopId) || WORKSHOP_PLANS[0];
  const currentStudio = STUDIOS.find((s) => s.id === selectedStudioId) || STUDIOS[0];

  const upcomingDates = [
    'Upcoming Saturday (Morning Batch)',
    'Upcoming Saturday (Afternoon Batch)',
    'Upcoming Sunday (Morning Batch)',
    'Upcoming Sunday (Twilight Batch)',
    'Next Weekend (Private Group Request)',
  ];

  const timeSlots = [
    '11:30 AM – 2:00 PM',
    '3:30 PM – 6:00 PM',
    '6:30 PM – 8:30 PM (Sunset Crafting)',
  ];

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = currentStudio.whatsappNumber;
    const message = encodeURIComponent(
      `Hello Mudra & Mineral Studio! 🌸\n\nI would like to book a bench for the *${currentWorkshop.title}*.\n\n` +
      `📍 *Studio:* ${currentStudio.name} (${currentStudio.neighborhood})\n` +
      `📅 *Date:* ${selectedDate}\n` +
      `⏰ *Time Slot:* ${selectedSlot}\n` +
      `👥 *Party Size:* ${partySize} participants\n` +
      `👤 *Name:* ${guestName || 'Studio Guest'}\n` +
      (guestPhone ? `📞 *Contact:* ${guestPhone}\n` : '') +
      (notes ? `✨ *Notes:* ${notes}\n` : '') +
      `\nPlease let me know bench availability and confirmation details!`
    );

    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A212E]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[92vh] bg-[#FAF7F4] rounded-3xl border border-[#E8DFE6] shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DFE6] bg-white">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#F4ACB7] font-semibold">
              Weekend Workshop Reservation
            </span>
            <h3 className="font-display text-xl text-[#2A212E] font-semibold">
              Book Your Studio Bench
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#826E85] hover:text-[#2A212E] hover:bg-[#E8DFF5] rounded-xl transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content / Form */}
        <form onSubmit={handleWhatsAppBooking} className="flex-1 overflow-y-auto p-6 space-y-5">
          {/* 1. Select Workshop */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#2A212E] mb-2">
              1. Choose Crafting Experience
            </label>
            <div className="space-y-2">
              {WORKSHOP_PLANS.map((plan) => (
                <button
                  type="button"
                  key={plan.id}
                  onClick={() => setSelectedWorkshopId(plan.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                    selectedWorkshopId === plan.id
                      ? 'bg-white border-[#F4ACB7] ring-2 ring-[#F4ACB7]/40 shadow-xs'
                      : 'bg-white/70 border-[#E8DFE6] hover:bg-white'
                  }`}
                >
                  <div>
                    <h4 className="font-display font-semibold text-sm text-[#2A212E]">
                      {plan.title}
                    </h4>
                    <p className="text-xs text-[#826E85] mt-0.5">{plan.tagline}</p>
                    <span className="text-[11px] text-[#F4ACB7] font-semibold block mt-1">
                      {plan.pricePerSeat}
                    </span>
                  </div>
                  {selectedWorkshopId === plan.id && (
                    <div className="w-5 h-5 rounded-full bg-[#2A212E] text-white flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Select Mumbai Studio */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#2A212E] mb-2">
              2. Select Mumbai Studio Location
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {STUDIOS.map((studio) => (
                <button
                  type="button"
                  key={studio.id}
                  onClick={() => setSelectedStudioId(studio.id)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    selectedStudioId === studio.id
                      ? 'bg-white border-[#D8BBFF] ring-2 ring-[#D8BBFF]/40 shadow-xs'
                      : 'bg-white/70 border-[#E8DFE6] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2A212E] mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#F4ACB7]" />
                    <span>{studio.name}</span>
                  </div>
                  <p className="text-xs text-[#826E85] line-clamp-1">{studio.neighborhood}</p>
                  <span className="text-[10px] text-[#2A212E]/70 block mt-1 italic">
                    {studio.specialty}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Date & Time Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-[#2B2B2B] mb-1.5 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#CCA586]" /> Date / Session
              </label>
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-[#FAF6F0] border border-[#DDCDBD] rounded-xl px-3 py-2 text-xs text-[#2B2B2B] focus:outline-hidden focus:ring-1 focus:ring-[#CCA586]"
              >
                {upcomingDates.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-[#2B2B2B] mb-1.5 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#CCA586]" /> Time Slot (2.5 Hours)
              </label>
              <select
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
                className="w-full bg-[#FAF6F0] border border-[#DDCDBD] rounded-xl px-3 py-2 text-xs text-[#2B2B2B] focus:outline-hidden focus:ring-1 focus:ring-[#CCA586]"
              >
                {timeSlots.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 4. Party Size & Guest Info */}
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-[#2B2B2B] mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#F4ACB7]" /> Number of Participants (Max 8)
              </span>
              <span className="font-mono text-[#826E85]">{partySize} guests</span>
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5, 6, 8].map((num) => (
                <button
                  type="button"
                  key={num}
                  onClick={() => setPartySize(num)}
                  className={`flex-1 py-2 text-xs font-medium rounded-xl border transition-colors ${
                    partySize === num
                      ? 'bg-[#2A212E] text-white border-[#2A212E] shadow-xs'
                      : 'bg-white text-[#2A212E] border-[#E8DFE6] hover:bg-[#FDE2E4]/30'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#2A212E] mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="e.g. Ananya Mehta"
                className="w-full bg-white border border-[#E8DFE6] rounded-xl px-3 py-2 text-xs text-[#2A212E] placeholder:text-[#826E85]/60 focus:outline-hidden focus:ring-1 focus:ring-[#F4ACB7]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#2A212E] mb-1">
                WhatsApp / Phone Number
              </label>
              <input
                type="tel"
                required
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full bg-white border border-[#E8DFE6] rounded-xl px-3 py-2 text-xs text-[#2A212E] placeholder:text-[#826E85]/60 focus:outline-hidden focus:ring-1 focus:ring-[#F4ACB7]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#2A212E] mb-1">
              Special Requests or Occasion (Optional)
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Birthday celebration with friends, interested in raw crystals"
              className="w-full bg-white border border-[#E8DFE6] rounded-xl px-3 py-2 text-xs text-[#2A212E] placeholder:text-[#826E85]/60 focus:outline-hidden focus:ring-1 focus:ring-[#F4ACB7]"
            />
          </div>

          {/* Value callout in Pastel Gradient */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FFF5F7] via-[#F8F2FC] to-[#EFF7F6] border border-[#E8DFE6] text-xs text-[#2A212E] flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-[#F4ACB7] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#2A212E]">What's included: </span>
              All natural raw gemstones, wire wrapping tools, chains/cords, step-by-step guidance, and you take home 2 completed custom keepsake pieces!
            </div>
          </div>

          {/* Action button */}
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-2xl bg-[#2A212E] text-white hover:bg-[#3D2C42] transition-all font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:shadow-[#F4ACB7]/25"
          >
            <MessageSquare className="w-4 h-4 text-[#F4ACB7]" />
            <span>Confirm Reservation via WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};
