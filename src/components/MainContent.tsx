import React from 'react';
import { Download } from 'lucide-react';
import { StatusCards } from './StatusCards';
import { DomainTable } from './DomainTable';

export function MainContent() {
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8">
      {/* Page Header */}
      <div className="mb-6 lg:mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900">My Domains</h1>
          <button className="flex items-center gap-2 px-4 sm:px-6 py-2 border-2 border-red-600 text-red-600 rounded-full hover:bg-red-50 transition-colors text-sm sm:text-base">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
        <p className="text-gray-400 text-xs sm:text-sm">
          Portal Home / Client Area / My Domains
        </p>
      </div>

      {/* Status Cards */}
      <StatusCards />

      {/* Domain Table */}
      <DomainTable />
    </main>
  );
}
