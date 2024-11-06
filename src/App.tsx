import React from 'react';
import Header from './components/layout/Header';
import Feed from './components/feed/Feed';
import Sidebar from './components/layout/Sidebar';
import RightPanel from './components/layout/RightPanel';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6">
            {/* Left Sidebar */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-20">
                <Sidebar />
              </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 max-w-2xl">
              <Feed />
            </main>

            {/* Right Panel */}
            <div className="hidden xl:block w-80 flex-shrink-0">
              <div className="sticky top-20">
                <RightPanel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;