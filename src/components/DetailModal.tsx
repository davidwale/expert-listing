import React from 'react';
import { X } from 'lucide-react';

interface DetailModalProps {
  activeDetailModal: 'listings' | 'users' | null;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ activeDetailModal, onClose }) => {
  if (!activeDetailModal) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-gray-100" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
          <h3 className="text-base font-bold text-gray-800 capitalize">{activeDetailModal} Detailed Summary</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg text-gray-400">
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-gray-500">
          Complete metrics for active {activeDetailModal} across all geographical zones in Nigeria.
        </p>

        <div className="space-y-2">
          <div className="flex justify-between p-2.5 bg-gray-50 rounded-lg text-xs">
            <span className="text-gray-500">Lagos State</span>
            <span className="font-bold text-gray-800">45%</span>
          </div>
          <div className="flex justify-between p-2.5 bg-gray-50 rounded-lg text-xs">
            <span className="text-gray-500">Abuja (FCT)</span>
            <span className="font-bold text-gray-800">30%</span>
          </div>
          <div className="flex justify-between p-2.5 bg-gray-50 rounded-lg text-xs">
            <span className="text-gray-500">Rivers State</span>
            <span className="font-bold text-gray-800">25%</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2 bg-[#105B48] text-white rounded-lg text-xs font-semibold hover:bg-[#0b4335]"
        >
          Done
        </button>
      </div>
    </div>
  );
};
