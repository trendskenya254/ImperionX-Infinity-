import React, { useState, useRef, useEffect } from 'react';
import { useCurrency } from '../../context/CurrencyContext';
import { CURRENCY_METADATA } from '../../data/currencies';
import { ChevronDown, Info } from 'lucide-react';
import { CurrencyCode } from '../../types';

export const CurrencySelector: React.FC = () => {
  const { currentCurrency, setCurrency, availableCurrencies, exchangeConfig } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const meta = CURRENCY_METADATA[currentCurrency];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-[#0e1626] border border-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
        aria-label="Select currency"
        title={`Active currency: ${meta.name} (Source: ${exchangeConfig.source})`}
      >
        <span className="text-sm">{meta.flag}</span>
        <span className="font-semibold text-white">{currentCurrency}</span>
        <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-[#0c1322] border border-slate-800 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-800/80 mb-1">
            Display Currency
          </div>
          <div className="space-y-0.5">
            {availableCurrencies.map((code) => {
              const itemMeta = CURRENCY_METADATA[code];
              const isSelected = code === currentCurrency;
              return (
                <button
                  key={code}
                  onClick={() => {
                    setCurrency(code as CurrencyCode);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs transition-colors text-left ${
                    isSelected
                      ? 'bg-blue-600/20 text-blue-300 font-semibold border border-blue-500/30'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-base">{itemMeta.flag}</span>
                    <span className="truncate">{itemMeta.name}</span>
                  </div>
                  <span className="font-mono text-slate-400 shrink-0 ml-2">{itemMeta.symbol}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-2 pt-2 border-t border-slate-800/80 px-2 text-[10px] text-slate-400 leading-tight flex items-start gap-1">
            <Info className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
            <span>USD & FX rates calculated from transparent baseline rate ({exchangeConfig.rates.USD} USD/KSh).</span>
          </div>
        </div>
      )}
    </div>
  );
};
