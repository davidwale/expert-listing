import React from 'react';
import { Building, ChevronRight } from 'lucide-react';

interface ListingsOverviewCardProps {
  onViewAll: () => void;
}

export const ListingsOverviewCard: React.FC<ListingsOverviewCardProps> = ({ onViewAll }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col justify-between hover:border-gray-200 transition-all">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center text-gray-800 font-medium">
          <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mr-3 shrink-0">
            <Building className="w-4 h-4" />
          </div>
          <span className="text-sm sm:text-base font-semibold">Listings Overview</span>
        </div>
        <button
          onClick={onViewAll}
          className="text-xs text-blue-600 flex items-center hover:underline font-medium focus:outline-none"
        >
          View all <ChevronRight className="w-3 h-3 ml-0.5" />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2 text-center sm:text-left">
        <div className="bg-gray-50/50 p-2.5 rounded-lg border border-gray-100/80 hover:bg-blue-50/30 transition-colors cursor-pointer">
          <div className="text-[11px] text-gray-500 mb-0.5">Total</div>
          <div className="text-base sm:text-lg font-bold text-gray-800">2.2k</div>
        </div>
        <div className="bg-gray-50/50 p-2.5 rounded-lg border border-gray-100/80 hover:bg-green-50/30 transition-colors cursor-pointer">
          <div className="text-[11px] text-gray-500 mb-0.5">Published</div>
          <div className="text-base sm:text-lg font-bold text-gray-800">1.2k</div>
        </div>
        <div className="bg-gray-50/50 p-2.5 rounded-lg border border-gray-100/80 hover:bg-orange-50/30 transition-colors cursor-pointer">
          <div className="text-[11px] text-gray-500 mb-0.5">Unpublished</div>
          <div className="text-base sm:text-lg font-bold text-gray-800">1k</div>
        </div>
      </div>
    </div>
  );
};
