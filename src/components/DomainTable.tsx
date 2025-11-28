import React, { useState } from 'react';
import { ChevronDown, Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ArrowUpDown } from 'lucide-react';

interface Domain {
  id: number;
  name: string;
  regDate: string;
  nextDueDate: string;
  autoRenewal: string;
  status: 'Active' | 'Pending';
}

const domains: Domain[] = [
  {
    id: 1,
    name: 'example.com',
    regDate: 'Wednesday, January 1st, 2025',
    nextDueDate: 'Thursday, January 1st, 2026',
    autoRenewal: 'Enabled',
    status: 'Active',
  },
  {
    id: 2,
    name: 'example2.com',
    regDate: 'Wednesday, January 1st, 2025',
    nextDueDate: 'Thursday, January 1st, 2026',
    autoRenewal: 'Enabled',
    status: 'Pending',
  },
];

export function DomainTable() {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-3 sm:p-4 lg:p-6">
      {/* Table Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
          <span className="text-gray-700">Show</span>
          <div className="relative">
            <select
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(Number(e.target.value))}
              className="appearance-none bg-gray-50 border border-gray-200 rounded-full pl-3 sm:pl-4 pr-8 sm:pr-10 py-1.5 sm:py-2 text-gray-700 cursor-pointer hover:border-gray-300 transition-colors text-sm sm:text-base"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <ChevronDown className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-500 pointer-events-none" />
          </div>
          <span className="text-gray-700">Entries</span>
        </div>

        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-auto pl-10 pr-4 py-1.5 sm:py-2 border border-gray-200 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:border-red-300 transition-colors text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="pb-4 pr-4 text-left">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
              </th>
              <th className="pb-4 px-4 text-left text-gray-700">
                <div className="flex items-center gap-1">
                  Domain
                  <ArrowUpDown className="w-3 h-3 text-gray-400" />
                </div>
              </th>
              <th className="pb-4 px-4 text-left text-gray-700">
                <div className="flex items-center gap-1">
                  Reg Date
                  <ArrowUpDown className="w-3 h-3 text-gray-400" />
                </div>
              </th>
              <th className="pb-4 px-4 text-left text-gray-700">
                <div className="flex items-center gap-1">
                  Next Due Date
                  <ArrowUpDown className="w-3 h-3 text-gray-400" />
                </div>
              </th>
              <th className="pb-4 px-4 text-left text-gray-700">
                <div className="flex items-center gap-1">
                  Auto Renewal
                  <ArrowUpDown className="w-3 h-3 text-gray-400" />
                </div>
              </th>
              <th className="pb-4 px-4 text-left text-gray-700">
                <div className="flex items-center gap-1">
                  Status
                  <ArrowUpDown className="w-3 h-3 text-gray-400" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {domains.map((domain) => (
              <tr key={domain.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 pr-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                  />
                </td>
                <td className="py-4 px-4 text-gray-900">{domain.name}</td>
                <td className="py-4 px-4 text-gray-700">{domain.regDate}</td>
                <td className="py-4 px-4 text-gray-700">{domain.nextDueDate}</td>
                <td className="py-4 px-4 text-gray-700">{domain.autoRenewal}</td>
                <td className="py-4 px-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm ${
                      domain.status === 'Active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {domain.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile/Tablet Card View */}
      <div className="lg:hidden space-y-4">
        {domains.map((domain) => (
          <div key={domain.id} className="border border-gray-200 rounded-xl p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-1 rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
                <div>
                  <p className="text-gray-900 mb-1">{domain.name}</p>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs ${
                      domain.status === 'Active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {domain.status}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Reg Date:</span>
                <span className="text-gray-700 text-right">{domain.regDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Next Due:</span>
                <span className="text-gray-700 text-right">{domain.nextDueDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Auto Renewal:</span>
                <span className="text-gray-700">{domain.autoRenewal}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mt-4 sm:mt-6">
        <p className="text-xs sm:text-sm text-gray-600">Showing 1 to 2 of 2 entries</p>
        
        <div className="flex items-center gap-1 sm:gap-2">
          <button className="p-1.5 sm:p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <ChevronsLeft className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
          </button>
          <button className="p-1.5 sm:p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
          </button>
          
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-red-600 text-white text-sm">
            1
          </button>
          
          <button className="p-1.5 sm:p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
          </button>
          <button className="p-1.5 sm:p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <ChevronsRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
