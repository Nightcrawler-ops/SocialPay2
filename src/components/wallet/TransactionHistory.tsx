import React from 'react';
import { X, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const transactions = [
  {
    id: '1',
    type: 'send',
    amount: 5000,
    recipient: 'Sarah Johnson',
    timestamp: new Date(),
    status: 'completed',
  },
  {
    id: '2',
    type: 'receive',
    amount: 2500,
    sender: 'Michael Chen',
    timestamp: new Date(),
    status: 'completed',
  },
  {
    id: '3',
    type: 'send',
    amount: 1000,
    recipient: 'David Wilson',
    timestamp: new Date(),
    status: 'pending',
  },
];

interface TransactionHistoryProps {
  onClose: () => void;
}

export default function TransactionHistory({ onClose }: TransactionHistoryProps) {
  return (
    <div className="border-t">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Transaction History</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  transaction.type === 'send'
                    ? 'bg-red-100 text-red-600'
                    : 'bg-green-100 text-green-600'
                }`}>
                  {transaction.type === 'send' ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownLeft className="w-4 h-4" />
                  )}
                </div>
                <div>
                  <p className="font-medium">
                    {transaction.type === 'send'
                      ? `Sent to ${transaction.recipient}`
                      : `Received from ${transaction.sender}`}
                  </p>
                  <p className="text-sm text-gray-500">
                    {transaction.timestamp.toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-semibold ${
                  transaction.type === 'send' ? 'text-red-600' : 'text-green-600'
                }`}>
                  {transaction.type === 'send' ? '-' : '+'}₦{transaction.amount.toLocaleString()}
                </p>
                <p className={`text-sm ${
                  transaction.status === 'completed'
                    ? 'text-green-600'
                    : 'text-yellow-600'
                }`}>
                  {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}