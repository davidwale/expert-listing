import React from 'react';
import { Home, Briefcase, Users, FileSignature, Copy, CheckSquare } from 'lucide-react';
import type { TabType } from '../types/dashboard';

interface NavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabsList = [
    { id: 'Dashboard' as TabType, icon: Home, label: 'Dashboard' },
    { id: 'Listings' as TabType, icon: Briefcase, label: 'Listings' },
    { id: 'Users' as TabType, icon: Users, label: 'Users' },
    { id: 'Request' as TabType, icon: FileSignature, label: 'Request' },
    { id: 'Applications' as TabType, icon: Copy, label: 'Applications' },
    { id: 'Tasks' as TabType, icon: CheckSquare, label: 'Tasks' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-2xs">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <ul className="flex overflow-x-auto hide-scrollbar sm:justify-start md:justify-center space-x-2 sm:space-x-6 py-2.5 text-xs sm:text-sm font-medium text-gray-500 whitespace-nowrap">
          {tabsList.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <li
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-md cursor-pointer shrink-0 transition-all duration-200 ${
                  isActive
                    ? 'bg-[#176D5826] text-[#105B48] font-semibold'
                    : 'hover:text-[#105B48] hover:bg-gray-50'
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                {tab.label}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
