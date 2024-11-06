import React from 'react';
import { Wallet, ArrowUpRight, ArrowDownLeft, History } from 'lucide-react';
import TransactionHistory from './TransactionHistory';

export default function WalletCard() {
  const [showHistory, setShowHistory] = React.useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-green-500 p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">My Wallet</h2>
          <Wallet className="w-6 h-6" />
        </div>
        <div className="text-3xl font-bold mb-1">₦25,000.00</div>
        <p className="text-blue-100">Available Balance</p>
      </div>
      
      <div className="p-4 grid grid-cols-3 gap-4">
        <button className="flex flex-col items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-2">
            <ArrowUpRight className="w-5 h-5" />
          </div>
          <span className="text-sm font-medium">Send</span>
        </button>
        
        <button className="flex flex-col items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
            <ArrowDownLeft className="w-5 h-5" />
          </div>
          <span className="text-sm font-medium">Request</span>
        </button>
        
        <button 
          onClick={() => setShowHistory(true)}
          className="flex flex-col items-center p-3 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-2">
            <History className="w-5 h-5" />
          </div>
          <span className="text-sm font-medium">History</span>
        </button>
      </div>

      {showHistory && <TransactionHistory onClose={() => setShowHistory(false)} />}
    </div>
  );
}