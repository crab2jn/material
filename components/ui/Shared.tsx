
import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, subtitle, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
      <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-slate-800">{title}</h3>
          {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
        </div>
        <div className="h-2 w-12 bg-blue-500 rounded-full opacity-20"></div>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export const Badge: React.FC<{ children: ReactNode; color?: string }> = ({ children, color = 'blue' }) => (
  <span className={`px-2 py-0.5 rounded text-xs font-medium bg-${color}-100 text-${color}-700 border border-${color}-200`}>
    {children}
  </span>
);
