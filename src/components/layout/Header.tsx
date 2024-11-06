import React from 'react';
import { Bell, MessageSquare, Wallet } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              SocialPay
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                3
              </span>
            </button>
            
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <MessageSquare className="w-6 h-6 text-gray-600" />
            </button>
            
            <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-500 text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
              <Wallet className="w-5 h-5" />
              <span>₦25,000</span>
            </button>
            
            <button className="flex items-center space-x-2">
              <img
                src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=100&h=100&fit=crop&crop=faces"
                alt="Profile"
                className="w-8 h-8 rounded-full border-2 border-gray-200"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}