import React, { useState, useEffect } from 'react';
import { ChevronDown, RotateCcw, Globe, ArrowLeftRight } from 'lucide-react';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const [showFullPin, setShowFullPin] = useState(false);
  const [supportPinOpen, setSupportPinOpen] = useState(true);
  const [actionsOpen, setActionsOpen] = useState(true);
  
  // Close sidebar on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setSidebarOpen]);
  
  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 z-50 lg:z-0
          w-72 sm:w-80 lg:w-64
          bg-white border-r border-gray-200 
          min-h-screen lg:min-h-[calc(100vh-73px)]
          p-4 sm:p-6
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Support PIN Section */}
        <div className="mb-8">
          <button
            onClick={() => setSupportPinOpen(!supportPinOpen)}
            className="flex items-center justify-between w-full mb-4"
          >
            <span className="text-red-600">Support Pin</span>
            <ChevronDown
              className={`w-4 h-4 text-red-600 transition-transform ${
                supportPinOpen ? '' : '-rotate-90'
              }`}
            />
          </button>
          
          {supportPinOpen && (
            <div>
              <div className="mb-4 text-xl tracking-wider" style={{ fontFamily: 'monospace' }}>
                {showFullPin ? '123456789012' : '****12'}
              </div>
              
              <div className="space-y-3">
                <button
                  onClick={() => setShowFullPin(!showFullPin)}
                  className="w-full py-2.5 px-4 rounded-full text-red-600 transition-colors text-sm sm:text-base"
                  style={{ backgroundColor: '#FFD8D8' }}
                >
                  {showFullPin ? 'Hide PIN' : 'Show Full PIN'}
                </button>
                
                <button
                  className="w-full py-2.5 px-4 rounded-full text-red-600 transition-colors text-sm sm:text-base"
                  style={{ backgroundColor: '#FFD8D8' }}
                >
                  Generate New PIN
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Actions Section */}
        <div>
          <button
            onClick={() => setActionsOpen(!actionsOpen)}
            className="flex items-center justify-between w-full mb-4"
          >
            <span className="text-red-600">Actions</span>
            <ChevronDown
              className={`w-4 h-4 text-red-600 transition-transform ${
                actionsOpen ? '' : '-rotate-90'
              }`}
            />
          </button>
          
          {actionsOpen && (
            <div className="space-y-4">
              <button className="flex items-center gap-3 w-full text-left text-gray-900 hover:text-red-600 transition-colors">
                <RotateCcw className="w-5 h-5" strokeWidth={1.5} />
                <span className="text-sm sm:text-base">Renew Domains</span>
              </button>
              
              <button className="flex items-center gap-3 w-full text-left text-gray-900 hover:text-red-600 transition-colors">
                <Globe className="w-5 h-5" strokeWidth={1.5} />
                <span className="text-sm sm:text-base">Register Domains</span>
              </button>
              
              <button className="flex items-center gap-3 w-full text-left text-gray-900 hover:text-red-600 transition-colors">
                <ArrowLeftRight className="w-5 h-5" strokeWidth={1.5} />
                <span className="text-sm sm:text-base">Transfer Domains</span>
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
