import React from 'react';
import { User, ChevronRight } from 'lucide-react';

interface UserOverviewCardProps {
  onViewAll: () => void;
}

export const UserOverviewCard: React.FC<UserOverviewCardProps> = ({ onViewAll }) => {
  const userStats = [
    { label: 'Total', value: '20.7k' },
    { label: 'Riders', value: '8.5k' },
    { label: 'Subscribers', value: '7.5k' },
    { label: 'Free Users', value: '3.3k' },
    { label: 'Agent', value: '8.1k' },
    { label: 'Developers', value: '1.5k' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col justify-between hover:border-gray-200 transition-all">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center text-gray-800 font-medium">
          <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mr-3 shrink-0">
            <User className="w-4 h-4" />
          </div>
          <span className="text-sm sm:text-base font-semibold">User Overview</span>
        </div>
        <button
          onClick={onViewAll}
          className="text-xs text-blue-600 flex items-center hover:underline font-medium focus:outline-none"
        >
          View all <ChevronRight className="w-3 h-3 ml-0.5" />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2 text-center sm:text-left">
        {userStats.map((stat) => (
          <div
            key={stat.label}
            className="bg-gray-50/50 p-2 rounded-lg border border-gray-100/80 hover:bg-indigo-50/30 transition-colors cursor-pointer"
          >
            <div className="text-[10px] sm:text-[11px] text-gray-500 mb-0.5">{stat.label}</div>
            <div className="text-base sm:text-lg font-bold text-gray-800">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
