import React from 'react';

export function PriceCard() {
  return (
    <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 text-white shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm opacity-90 mb-1">Курстун узактыгы</p>
          <p className="text-3xl font-bold">7 күн</p>
        </div>
        <div className="text-right">
          <p className="text-sm opacity-90 mb-1">Баасы</p>
          <p className="text-3xl font-bold">9 999 сом</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-white/20">
        <p className="text-sm opacity-90">7 күндүк онлайн курс</p>
      </div>
    </div>
  );
}
