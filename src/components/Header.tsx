import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, Bell, Search, Activity, FileText, Wallet, Settings,
  MessageCircle, User, ShieldCheck, LogOut
} from 'lucide-react';
import type { TabType } from '../types/dashboard';

interface HeaderProps {
  onTabChange: (tab: TabType) => void;
  triggerToast: (msg: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onTabChange, triggerToast }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [unreadNotificationsCount, setUnreadNotificationsCount] = useState(3);

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
        setShowProfileMenu(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header ref={headerRef} className="bg-[#105B48] text-white relative z-40">
      <div className="flex items-center justify-between px-4 lg:px-8 py-3">
        {/* Left Logo Section */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onTabChange('Dashboard')}>
          <div className="flex items-center justify-center p-1 rounded">
            <img src="/Logo.svg" alt="Expert Listing Logo" className="h-6" />
          </div>
        </div>

        {/* Right Section Icons */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="hidden md:flex items-center space-x-4 mr-2 text-white/80">
            <MessageCircle className="w-5 h-5 cursor-pointer hover:text-white transition-colors" onClick={() => triggerToast('Messages panel opened')} />
            <Search className="w-5 h-5 cursor-pointer hover:text-white transition-colors" onClick={() => triggerToast('Quick Search activated')} />
            <Activity className="w-5 h-5 cursor-pointer hover:text-white transition-colors" onClick={() => triggerToast('Live activity logs loaded')} />
            <FileText className="w-5 h-5 cursor-pointer hover:text-white transition-colors" onClick={() => triggerToast('Documentation opened')} />
            <Wallet className="w-5 h-5 cursor-pointer hover:text-white transition-colors" onClick={() => triggerToast('Wallet balance: ₦320,500.00')} />
            <Settings className="w-5 h-5 cursor-pointer hover:text-white transition-colors" onClick={() => triggerToast('System Settings loaded')} />
          </div>

          {/* Notification Bell */}
          <div className="relative">
            <button
              className="relative p-1 text-white hover:text-white/80 focus:outline-none transition-colors"
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfileMenu(false);
              }}
            >
              <Bell className="w-5 h-5" />
              {unreadNotificationsCount > 0 && (
                <span className="absolute top-1 right-1 block w-2 h-2 bg-green-400 rounded-full ring-2 ring-[#105B48]"></span>
              )}
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-3 text-gray-800 z-50">
                <div className="flex justify-between items-center px-4 pb-2 border-b border-gray-100">
                  <span className="font-semibold text-sm">Notifications</span>
                  {unreadNotificationsCount > 0 && (
                    <button
                      onClick={() => setUnreadNotificationsCount(0)}
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Mark all read
                    </button>
                  )}
                </div>
                <div className="divide-y divide-gray-50 max-h-64 overflow-y-auto">
                  <div className="p-3 hover:bg-gray-50 cursor-pointer flex items-start space-x-3">
                    <span className="w-2 h-2 mt-1.5 bg-green-500 rounded-full shrink-0"></span>
                    <div>
                      <p className="text-xs font-semibold text-gray-800">New Agent Registration</p>
                      <p className="text-[11px] text-gray-500">Tunde Bakare registered as an agent.</p>
                      <span className="text-[10px] text-gray-400 mt-1 block">5m ago</span>
                    </div>
                  </div>
                  <div className="p-3 hover:bg-gray-50 cursor-pointer flex items-start space-x-3">
                    <span className="w-2 h-2 mt-1.5 bg-blue-500 rounded-full shrink-0"></span>
                    <div>
                      <p className="text-xs font-semibold text-gray-800">Payout Completed</p>
                      <p className="text-[11px] text-gray-500">₦1.2M payout processed for Riders.</p>
                      <span className="text-[10px] text-gray-400 mt-1 block">1h ago</span>
                    </div>
                  </div>
                  <div className="p-3 hover:bg-gray-50 cursor-pointer flex items-start space-x-3">
                    <span className="w-2 h-2 mt-1.5 bg-orange-400 rounded-full shrink-0"></span>
                    <div>
                      <p className="text-xs font-semibold text-gray-800">New Listing Pending</p>
                      <p className="text-[11px] text-gray-500">Urban Prime Plaza premiere requested approval.</p>
                      <span className="text-[10px] text-gray-400 mt-1 block">2h ago</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Avatar */}
          <div className="relative">
            <button
              className="w-8 h-8 rounded-full bg-white text-[#105B48] flex items-center justify-center font-bold text-sm overflow-hidden border border-white/20 hover:ring-2 hover:ring-white/40 transition-all focus:outline-none"
              onClick={() => {
                setShowProfileMenu(!showProfileMenu);
                setShowNotifications(false);
              }}
            >
              D
            </button>

            {/* Profile Dropdown */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 text-gray-800 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="font-semibold text-sm">Ahmed Mansur</p>
                  <p className="text-xs text-gray-500">ahmed@expertlisting.com</p>
                </div>
                <button
                  onClick={() => {
                    triggerToast('Navigating to Account Profile');
                    setShowProfileMenu(false);
                  }}
                  className="w-full px-4 py-2 text-left text-xs hover:bg-gray-50 flex items-center space-x-2 text-gray-700"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>My Profile</span>
                </button>
                <button
                  onClick={() => {
                    triggerToast('Security Settings opened');
                    setShowProfileMenu(false);
                  }}
                  className="w-full px-4 py-2 text-left text-xs hover:bg-gray-50 flex items-center space-x-2 text-gray-700"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Security & Roles</span>
                </button>
                <button
                  onClick={() => {
                    triggerToast('Logged out successfully');
                    setShowProfileMenu(false);
                  }}
                  className="w-full px-4 py-2 text-left text-xs hover:bg-gray-50 flex items-center space-x-2 text-red-600 border-t border-gray-50 mt-1"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Log Out</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden p-1 text-white hover:text-white/80 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0b4335] border-t border-white/10 px-4 py-3 space-y-3">
          <div className="grid grid-cols-3 gap-2 py-2">
            <button
              onClick={() => { triggerToast('Search tool activated'); setIsMobileMenuOpen(false); }}
              className="flex flex-col items-center justify-center p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 text-xs space-y-1"
            >
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
            <button
              onClick={() => { triggerToast('Activity logs loaded'); setIsMobileMenuOpen(false); }}
              className="flex flex-col items-center justify-center p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 text-xs space-y-1"
            >
              <Activity className="w-4 h-4" />
              <span>Activity</span>
            </button>
            <button
              onClick={() => { triggerToast('Documentation opened'); setIsMobileMenuOpen(false); }}
              className="flex flex-col items-center justify-center p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 text-xs space-y-1"
            >
              <FileText className="w-4 h-4" />
              <span>Docs</span>
            </button>
            <button
              onClick={() => { triggerToast('Wallet overview: ₦320,500.00'); setIsMobileMenuOpen(false); }}
              className="flex flex-col items-center justify-center p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 text-xs space-y-1"
            >
              <Wallet className="w-4 h-4" />
              <span>Wallet</span>
            </button>
            <button
              onClick={() => { triggerToast('Settings menu opened'); setIsMobileMenuOpen(false); }}
              className="flex flex-col items-center justify-center p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 text-xs space-y-1"
            >
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </button>
            <button
              onClick={() => { triggerToast('Messages panel opened'); setIsMobileMenuOpen(false); }}
              className="flex flex-col items-center justify-center p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 text-xs space-y-1"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Messages</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
