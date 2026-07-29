import React from 'react';
import { X } from 'lucide-react';
import { transactionsList } from '../data/mockData';

interface TransactionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TransactionsModal: React.FC<TransactionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-5 animate-fadeIn border border-gray-100" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-800">Transactions Log</h3>
            <p className="text-xs text-gray-500">Recent inflows and payouts across platforms</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-gray-100 text-gray-400 font-medium">
                <th className="pb-2">ID</th>
                <th className="pb-2">User</th>
                <th className="pb-2">Type</th>
                <th className="pb-2">Amount</th>
                <th className="pb-2">Status</th>
                <th className="pb-2">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {transactionsList.map((txn) => (
                <tr key={txn.id} className="hover:bg-gray-50/80">
                  <td className="py-2.5 font-medium text-gray-800">{txn.id}</td>
                  <td className="py-2.5 text-gray-600">{txn.user}</td>
                  <td className="py-2.5 text-gray-500">{txn.type}</td>
                  <td className="py-2.5 font-semibold text-gray-800">{txn.amount}</td>
                  <td className="py-2.5">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                      txn.status === 'Completed' ? 'bg-green-50 text-green-600' :
                      txn.status === 'Pending' ? 'bg-yellow-50 text-yellow-600' : 'bg-red-50 text-red-600'
                    }`}>
                      {txn.status}
                    </span>
                  </td>
                  <td className="py-2.5 text-gray-400">{txn.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#105B48] text-white rounded-lg text-xs font-semibold hover:bg-[#0b4335]"
          >
            Close Log
          </button>
        </div>
      </div>
    </div>
  );
};
