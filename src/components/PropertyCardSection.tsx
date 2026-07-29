import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Bookmark } from 'lucide-react';
import { siteVisitSlides, clickedSlides, watchlistedSlides } from '../data/mockData';

interface PropertyCardSectionProps {
  triggerToast: (msg: string) => void;
}

export const PropertyCardSection: React.FC<PropertyCardSectionProps> = ({ triggerToast }) => {
  // Carousel indices
  const [slide1Index, setSlide1Index] = useState(0);
  const [slide2Index, setSlide2Index] = useState(0);
  const [slide3Index, setSlide3Index] = useState(0);

  // Filters & Toggles
  const [card2Filter, setCard2Filter] = useState<'Live' | 'All'>('Live');
  const [card3Filter, setCard3Filter] = useState<'Live' | 'All'>('All');
  const [isWatchlisted, setIsWatchlisted] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Card 1: Site Visits Carousel */}
      <div className="relative rounded-xl overflow-hidden h-72 sm:h-80 group shadow-sm">
        <img
          src={siteVisitSlides[slide1Index].image}
          alt="Office Building"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setSlide1Index((slide1Index - 1 + siteVisitSlides.length) % siteVisitSlides.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/40 hover:bg-black/60 rounded-full text-white backdrop-blur-xs transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => setSlide1Index((slide1Index + 1) % siteVisitSlides.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/40 hover:bg-black/60 rounded-full text-white backdrop-blur-xs transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="absolute bottom-5 left-5 right-5">
          <div className="text-[10px] font-bold text-white/80 tracking-wider mb-1">{siteVisitSlides[slide1Index].title}</div>
          <div className="text-2xl sm:text-3xl font-bold text-yellow-400">{siteVisitSlides[slide1Index].value}</div>
          <p className="text-xs text-white/70 mt-1">{siteVisitSlides[slide1Index].subtitle}</p>
          <div className="flex justify-center mt-3 space-x-1.5">
            {siteVisitSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlide1Index(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === slide1Index ? 'bg-white w-4' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Card 2: Most Clicked Carousel & Filter Pills */}
      <div className="relative rounded-xl overflow-hidden h-72 sm:h-80 group shadow-sm">
        <img
          src={clickedSlides[slide2Index].image}
          alt="Apartment Building"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30"></div>

        {/* Filter Pills */}
        <div className="absolute top-4 left-4 flex space-x-2 z-10">
          <button
            onClick={() => setCard2Filter('Live')}
            className={`flex items-center px-2 py-1 text-[10px] font-semibold rounded border transition-all ${card2Filter === 'Live'
                ? 'bg-yellow-400 text-black border-yellow-400'
                : 'bg-black/50 text-white border-white/20 hover:bg-black/70'
              }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span> Live Listings
          </button>
          <button
            onClick={() => setCard2Filter('All')}
            className={`px-2 py-1 text-[10px] font-semibold rounded border transition-all ${card2Filter === 'All'
                ? 'bg-yellow-400 text-black border-yellow-400'
                : 'bg-black/50 text-white border-white/20 hover:bg-black/70'
              }`}
          >
            All Listings
          </button>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setSlide2Index((slide2Index - 1 + clickedSlides.length) % clickedSlides.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/40 hover:bg-black/60 rounded-full text-white backdrop-blur-xs transition-colors z-10"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => setSlide2Index((slide2Index + 1) % clickedSlides.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/40 hover:bg-black/60 rounded-full text-white backdrop-blur-xs transition-colors z-10"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Bottom Info */}
        <div className="absolute bottom-5 left-5 right-5">
          <div className="text-[10px] font-bold text-white/80 tracking-wider mb-1">{clickedSlides[slide2Index].title}</div>
          <h3 className="text-base sm:text-lg font-bold text-white leading-tight mb-1">{clickedSlides[slide2Index].name}</h3>
          <p className="text-xs text-white/70 mb-2">{clickedSlides[slide2Index].location}</p>
          <div className="text-lg sm:text-xl font-bold text-yellow-400">{clickedSlides[slide2Index].clicks}</div>
          <div className="flex justify-center mt-2 space-x-1.5">
            {clickedSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlide2Index(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === slide2Index ? 'bg-white w-4' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Card 3: Watchlist Carousel & Watchlist Toggle */}
      <div className="relative rounded-xl overflow-hidden h-72 sm:h-80 group shadow-sm md:col-span-2 lg:col-span-1">
        <img
          src={watchlistedSlides[slide3Index].image}
          alt="Minimal Building"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30"></div>

        {/* Filter Pills */}
        <div className="absolute top-4 left-4 flex space-x-2 z-10">
          <button
            onClick={() => setCard3Filter('Live')}
            className={`flex items-center px-2 py-1 text-[10px] font-semibold rounded border transition-all ${card3Filter === 'Live'
                ? 'bg-yellow-400 text-black border-yellow-400'
                : 'bg-black/50 text-white border-white/20 hover:bg-black/70'
              }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span> Live Listings
          </button>
          <button
            onClick={() => setCard3Filter('All')}
            className={`px-2 py-1 text-[10px] font-semibold rounded border transition-all ${card3Filter === 'All'
                ? 'bg-yellow-400 text-black border-yellow-400'
                : 'bg-black/50 text-white border-white/20 hover:bg-black/70'
              }`}
          >
            All Listings
          </button>
        </div>

        {/* Watchlist Toggle Button */}
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={() => {
              setIsWatchlisted(!isWatchlisted);
              triggerToast(isWatchlisted ? 'Removed from Watchlist' : 'Saved to Watchlist!');
            }}
            className={`p-2 rounded-full backdrop-blur-xs transition-all ${isWatchlisted
                ? 'bg-yellow-400 text-black scale-110'
                : 'bg-black/50 text-white hover:bg-black/70'
              }`}
            title={isWatchlisted ? 'Remove from Watchlist' : 'Add to Watchlist'}
          >
            <Bookmark className={`w-4 h-4 ${isWatchlisted ? 'fill-black' : ''}`} />
          </button>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setSlide3Index((slide3Index - 1 + watchlistedSlides.length) % watchlistedSlides.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/40 hover:bg-black/60 rounded-full text-white backdrop-blur-xs transition-colors z-10"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => setSlide3Index((slide3Index + 1) % watchlistedSlides.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/40 hover:bg-black/60 rounded-full text-white backdrop-blur-xs transition-colors z-10"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Bottom Info */}
        <div className="absolute bottom-5 left-5 right-5">
          <div className="text-[10px] font-bold text-white/80 tracking-wider mb-1">{watchlistedSlides[slide3Index].title}</div>
          <h3 className="text-base sm:text-lg font-bold text-white leading-tight mb-1">{watchlistedSlides[slide3Index].name}</h3>
          <p className="text-xs text-white/70 mb-2">{watchlistedSlides[slide3Index].location}</p>
          <div className="text-lg sm:text-xl font-bold text-yellow-400">
            {isWatchlisted && slide3Index === 0
              ? `${(watchlistedSlides[0].watchlistCount + 1 / 1000).toFixed(1)}k`
              : `${(watchlistedSlides[slide3Index].watchlistCount / 1000).toFixed(0)}k`}
          </div>
          <div className="flex justify-center mt-2 space-x-1.5">
            {watchlistedSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlide3Index(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === slide3Index ? 'bg-white w-4' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
