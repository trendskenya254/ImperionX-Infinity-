import React, { createContext, useContext, useState, useEffect } from 'react';
import { CurrencyCode, ExchangeRateConfig } from '../types';
import { DEFAULT_EXCHANGE_CONFIG, CURRENCY_METADATA, formatCurrencyAmount } from '../data/currencies';

interface CurrencyContextType {
  currentCurrency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  exchangeConfig: ExchangeRateConfig;
  updateRate: (code: CurrencyCode, rate: number) => void;
  formatPrice: (amountKsh: number) => string;
  availableCurrencies: CurrencyCode[];
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyCode>('KSH');
  const [exchangeConfig, setExchangeConfig] = useState<ExchangeRateConfig>(DEFAULT_EXCHANGE_CONFIG);

  useEffect(() => {
    const savedCurrency = localStorage.getItem('futuretech_currency') as CurrencyCode;
    if (savedCurrency && CURRENCY_METADATA[savedCurrency]) {
      setCurrentCurrency(savedCurrency);
    }
  }, []);

  const setCurrency = (code: CurrencyCode) => {
    setCurrentCurrency(code);
    localStorage.setItem('futuretech_currency', code);
  };

  const updateRate = (code: CurrencyCode, newRate: number) => {
    setExchangeConfig((prev) => ({
      ...prev,
      rates: {
        ...prev.rates,
        [code]: newRate
      },
      lastUpdated: 'User Custom Adjustment'
    }));
  };

  const formatPrice = (amountKsh: number): string => {
    return formatCurrencyAmount(amountKsh, currentCurrency, exchangeConfig);
  };

  const availableCurrencies: CurrencyCode[] = ['KSH', 'USD', 'EUR', 'GBP', 'NGN', 'ZAR'];

  return (
    <CurrencyContext.Provider
      value={{
        currentCurrency,
        setCurrency,
        exchangeConfig,
        updateRate,
        formatPrice,
        availableCurrencies
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
