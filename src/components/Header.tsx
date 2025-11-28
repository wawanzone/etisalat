import React from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  const menuItems = ['Home', 'Services', 'Domains', 'Billing', 'Support', 'More'];
  
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        {/* Mobile Menu Button & Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {sidebarOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
          
          {/* Logo */}
          <div className="flex items-center gap-1">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-10 md:h-10">
              <path d="M12 12C12 10.8954 12.8954 10 14 10H18C19.1046 10 20 10.8954 20 12C20 13.1046 19.1046 14 18 14H14C12.8954 14 12 13.1046 12 12Z" fill="#E31E24"/>
              <circle cx="14" cy="20" r="3" fill="#E31E24"/>
              <circle cx="26" cy="20" r="3" fill="#E31E24"/>
              <path d="M14 24C14 24 16 28 20 28C24 28 26 24 26 24" stroke="#E31E24" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div className="ml-1 hidden sm:block">
              <div className="text-red-600" style={{ fontSize: '11px', letterSpacing: '0.5px', lineHeight: '1' }}>etisalat</div>
              <div className="text-red-600" style={{ fontSize: '11px', letterSpacing: '0.5px', lineHeight: '1' }}>by <span className="italic">e&</span></div>
            </div>
          </div>
        </div>

        {/* Navigation Menu - Desktop Only */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {menuItems.map((item) => (
            <div key={item} className="relative">
              <a
                href="#"
                className={`text-gray-900 hover:text-red-600 transition-colors ${
                  item === 'Domains' ? 'text-red-600' : ''
                }`}
              >
                {item}
              </a>
              {item === 'Domains' && (
                <div className="absolute bottom-[-17px] left-0 right-0 h-0.5 bg-red-600"></div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3 md:gap-6">
          <span className="text-red-600 text-sm md:text-base hidden sm:inline">Hello, XX!</span>
          <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-gray-700" strokeWidth={1.5} />
        </div>
      </div>
    </header>
  );
}
