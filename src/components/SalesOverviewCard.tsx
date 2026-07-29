import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { TimeframeType } from '../types/dashboard';
import { chartDatasets, altChartDataset } from '../data/mockData';

interface SalesOverviewCardProps {
  onOpenTransactionsModal: () => void;
}

export const SalesOverviewCard: React.FC<SalesOverviewCardProps> = ({ onOpenTransactionsModal }) => {
  const [timeframe, setTimeframe] = useState<TimeframeType>('1 Year');
  const [chartDatasetIndex, setChartDatasetIndex] = useState(0);

  const currentChartData = chartDatasetIndex === 1 && timeframe === '1 Year'
    ? altChartDataset
    : chartDatasets[timeframe];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:col-span-2 flex flex-col justify-between h-full">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-base sm:text-lg font-semibold text-gray-800">Sales Overview</h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Showing overview {timeframe === '1 Year' ? (chartDatasetIndex === 0 ? 'Jan 2022 - Sep 2022' : 'Oct 2022 - Dec 2022') : timeframe}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
          <button
            onClick={onOpenTransactionsModal}
            className="text-xs sm:text-sm px-3.5 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all w-full sm:w-auto text-center font-medium shadow-2xs active:scale-98"
          >
            View Transactions
          </button>

          {/* Timeframe Selector */}
          <div className="flex bg-gray-50 p-1 rounded-lg border border-gray-100 justify-between sm:justify-start">
            {(['1 Week', '1 Month', '1 Year'] as const).map((tf) => (
              <button
                key={tf}
                onClick={() => {
                  setTimeframe(tf);
                  setChartDatasetIndex(0);
                }}
                className={`flex-1 sm:flex-initial px-2.5 py-1 text-xs rounded-md transition-all font-medium ${
                  timeframe === tf
                    ? 'text-gray-800 bg-white shadow-2xs font-semibold'
                    : 'text-gray-500 hover:bg-white/50'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chart & Summary Tiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center flex-grow">
        {/* Chart Area */}
        <div className="relative h-56 sm:h-64 md:col-span-7 flex-grow">
          <button
            onClick={() => setChartDatasetIndex(0)}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white border border-gray-200 rounded-full shadow-xs text-gray-600 hover:bg-gray-50 transition-all active:scale-90 ${chartDatasetIndex === 0 ? 'opacity-40 cursor-not-allowed' : ''}`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              if (timeframe === '1 Year') {
                setChartDatasetIndex(1);
              }
            }}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white border border-gray-200 rounded-full shadow-xs text-gray-600 hover:bg-gray-50 transition-all active:scale-90 ${chartDatasetIndex === 1 || timeframe !== '1 Year' ? 'opacity-40 cursor-not-allowed' : ''}`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={currentChartData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} tickFormatter={(value) => `${value}m`} />
              <Tooltip cursor={{ fill: '#f9fafb' }} />
              <Bar dataKey="blue" fill="#4f46e5" radius={[2, 2, 0, 0]} barSize={6} />
              <Bar dataKey="green" fill="#10b981" radius={[2, 2, 0, 0]} barSize={6} />
              <Bar dataKey="orange" fill="#f59e0b" radius={[2, 2, 0, 0]} barSize={6} />
              <Bar dataKey="purple" fill="#8b5cf6" radius={[2, 2, 0, 0]} barSize={6} />
              <Bar dataKey="red" fill="#ef4444" radius={[2, 2, 0, 0]} barSize={6} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Summary Tiles (Right side 2x2 Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:col-span-5 gap-3.5">
          <div className="border border-blue-100 rounded-xl p-3.5 bg-blue-50/20 hover:bg-blue-50/40 cursor-pointer transition-colors group flex flex-col justify-between">
            <div className="text-sm sm:text-base md:text-base lg:text-lg font-bold text-blue-600 mb-1 truncate" title="₦120,000,000.00">₦120,000,000.00</div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="group-hover:text-blue-700 transition-colors">Total Inflow</span>
              <span className="flex items-center text-[10px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full font-medium shrink-0">
                <ArrowUpRight className="w-3 h-3 mr-0.5" /> 2.5%
              </span>
            </div>
          </div>

          <div className="border border-green-100 rounded-xl p-3.5 bg-green-50/20 hover:bg-green-50/40 cursor-pointer transition-colors group flex flex-col justify-between">
            <div className="text-sm sm:text-base md:text-base lg:text-lg font-bold text-green-600 mb-1 truncate" title="₦50,000,000.00">₦50,000,000.00</div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="group-hover:text-green-700 transition-colors">MRR</span>
              <span className="flex items-center text-[10px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full font-medium shrink-0">
                <ArrowUpRight className="w-3 h-3 mr-0.5" /> 2.5%
              </span>
            </div>
          </div>

          <div className="border border-orange-100 rounded-xl p-3.5 bg-orange-50/20 hover:bg-orange-50/40 cursor-pointer transition-colors group flex flex-col justify-between">
            <div className="text-sm sm:text-base md:text-base lg:text-lg font-bold text-orange-500 mb-1 truncate" title="₦200,000,000.00">₦200,000,000.00</div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="group-hover:text-orange-700 transition-colors">Payout</span>
              <span className="flex items-center text-[10px] text-red-600 bg-red-50 px-1.5 py-0.5 rounded-full font-medium shrink-0">
                <ArrowDownRight className="w-3 h-3 mr-0.5" /> 0.5%
              </span>
            </div>
          </div>

          <div className="border border-emerald-100 rounded-xl p-3.5 bg-emerald-50/20 hover:bg-emerald-50/40 cursor-pointer transition-colors group flex flex-col justify-between">
            <div className="text-sm sm:text-base md:text-base lg:text-lg font-bold text-[#105B48] mb-1 truncate" title="₦100,000,000.00">₦100,000,000.00</div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="truncate pr-1 group-hover:text-[#105B48] transition-colors">Riders' Credit</span>
              <span className="flex items-center text-[10px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full font-medium shrink-0">
                <ArrowUpRight className="w-3 h-3 mr-0.5" /> 0.5%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
