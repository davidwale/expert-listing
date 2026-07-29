import { useState, useEffect } from 'react';
import { CheckCircle2, Briefcase, ArrowLeft } from 'lucide-react';
import type { TabType } from './types/dashboard';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { SalesOverviewCard } from './components/SalesOverviewCard';
import { ListingsOverviewCard } from './components/ListingsOverviewCard';
import { UserOverviewCard } from './components/UserOverviewCard';
import { PropertyCardSection } from './components/PropertyCardSection';
import { TransactionsModal } from './components/TransactionsModal';
import { DetailModal } from './components/DetailModal';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const validTabs: TabType[] = ['Dashboard', 'Listings', 'Users', 'Request', 'Applications', 'Tasks'];

  const getInitialTab = (): TabType => {
    const params = new URLSearchParams(window.location.search);
    const tabFromUrl = params.get('tab');
    if (tabFromUrl && validTabs.includes(tabFromUrl as TabType)) {
      return tabFromUrl as TabType;
    }
    return 'Dashboard';
  };

  const [activeTab, setActiveTab] = useState<TabType>(getInitialTab);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Modals state
  const [showTransactionsModal, setShowTransactionsModal] = useState(false);
  const [activeDetailModal, setActiveDetailModal] = useState<'listings' | 'users' | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleTabChange = (newTab: TabType) => {
    setActiveTab(newTab);
    const url = new URL(window.location.href);
    if (newTab === 'Dashboard') {
      url.searchParams.delete('tab');
    } else {
      url.searchParams.set('tab', newTab);
    }
    window.history.pushState({}, '', url.toString());
  };

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const tabFromUrl = params.get('tab');
      if (tabFromUrl && validTabs.includes(tabFromUrl as TabType)) {
        setActiveTab(tabFromUrl as TabType);
      } else {
        setActiveTab('Dashboard');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-gray-800 overflow-x-hidden relative">
      {/* Initial 3-Second Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-[#105B48] text-white px-4 py-3 rounded-xl shadow-lg flex items-center space-x-3 border border-white/20 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-green-400" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Header Bar */}
      <Header onTabChange={handleTabChange} triggerToast={triggerToast} />

      {/* Navigation Tab Bar */}
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Main Content Area */}
      {activeTab !== 'Dashboard' ? (
        <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center max-w-xl mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#105B48]/10 text-[#105B48] flex items-center justify-center mx-auto">
              <Briefcase className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{activeTab} View</h2>
            <p className="text-gray-500 text-sm">
              You are currently viewing the management area for <strong className="text-gray-700">{activeTab}</strong>.
            </p>
            <button
              onClick={() => handleTabChange('Dashboard')}
              className="px-5 py-2.5 bg-[#105B48] text-white rounded-xl text-sm font-medium hover:bg-[#0b4335] transition-colors inline-flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Dashboard</span>
            </button>
          </div>
        </main>
      ) : (
        <main className="max-w-7xl mx-auto px-4 lg:px-8 py-6 sm:py-8 space-y-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Welcome, Ahmed</h1>

          {/* Row 1: Overview Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <SalesOverviewCard onOpenTransactionsModal={() => setShowTransactionsModal(true)} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 lg:col-span-1">
              <ListingsOverviewCard onViewAll={() => setActiveDetailModal('listings')} />
              <UserOverviewCard onViewAll={() => setActiveDetailModal('users')} />
            </div>
          </div>

          {/* Row 2: Image Content Cards */}
          <PropertyCardSection triggerToast={triggerToast} />
        </main>
      )}

      {/* Modals */}
      <TransactionsModal isOpen={showTransactionsModal} onClose={() => setShowTransactionsModal(false)} />
      <DetailModal activeDetailModal={activeDetailModal} onClose={() => setActiveDetailModal(null)} />
    </div>
  );
}

export default App;
