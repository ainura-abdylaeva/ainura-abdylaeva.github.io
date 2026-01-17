import React from 'react';

interface BenefitCardProps {
  title: string;
  gradient: string;
}

export function BenefitCard({ title, gradient }: BenefitCardProps) {
  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-2xl p-4 text-center shadow-lg`}>
      <div className="aspect-square flex items-center justify-center">
        <p className="text-white font-semibold text-sm leading-tight">{title}</p>
      </div>
    </div>
  );
}
