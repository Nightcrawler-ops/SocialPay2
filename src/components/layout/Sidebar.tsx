import React from 'react';
import { Home, Users, MessageSquare, Wallet, Settings, HelpCircle } from 'lucide-react';

const navigation = [
  { name: 'Home', icon: Home, active: true },
  { name: 'Friends', icon: Users },
  { name: 'Messages', icon: MessageSquare },
  { name: 'Wallet', icon: Wallet },
  { name: 'Settings', icon: Settings },
  { name: 'Help', icon: HelpCircle },
];

export default function Sidebar() {
  return (
    <nav className="space-y-1">
      {navigation.map((item) => (
        <button
          key={item.name}
          className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
            item.active
              ? 'bg-gradient-to-r from-blue-600 to-green-500 text-white'
              : 'text-gray-600 hover:bg-white hover:text-blue-600'
          }`}
        >
          <item.icon className="w-5 h-5 mr-3" />
          {item.name}
        </button>
      ))}
    </nav>
  );
}