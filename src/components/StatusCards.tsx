import React from 'react';
import { Globe, AlertTriangle, Gift, Clock } from 'lucide-react';

interface StatusCardProps {
  icon: React.ReactNode;
  label: string;
  count: number;
}

function StatusCard({ icon, label, count }: StatusCardProps) {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100">
      <div className="flex flex-col items-center text-center">
        <div className="mb-2 sm:mb-3">{icon}</div>
        <p className="text-gray-500 text-xs sm:text-sm mb-1 sm:mb-2">{label}</p>
        <p className="text-2xl sm:text-3xl text-gray-900">{count}</p>
      </div>
    </div>
  );
}

export function StatusCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 lg:mb-8">
      <StatusCard
        icon={<Globe className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" strokeWidth={1.5} />}
        label="Active"
        count={1}
      />
      <StatusCard
        icon={<AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" strokeWidth={1.5} />}
        label="Expired"
        count={0}
      />
      <StatusCard
        icon={<Gift className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" strokeWidth={1.5} />}
        label="Redemption"
        count={0}
      />
      <StatusCard
        icon={<Clock className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" strokeWidth={1.5} />}
        label="In Process"
        count={1}
      />
    </div>
  );
}
