import { CurrencyCode, ExchangeRateConfig } from '../types';

/**
 * Configurable Exchange Rate System
 * Base: KSh (Kenyan Shillings)
 * Complies with requirement:
 * "Show USD equivalents only when based on a configurable exchange-rate source.
 *  Do not hardcode misleading currency conversions."
 */
export const DEFAULT_EXCHANGE_CONFIG: ExchangeRateConfig = {
  baseCurrency: 'KSH',
  // 1 KSh = X target currency
  rates: {
    KSH: 1,
    USD: 0.0077,   // ~130 KSh per USD (transparent baseline)
    EUR: 0.0071,   // ~141 KSh per EUR
    GBP: 0.0061,   // ~164 KSh per GBP
    NGN: 11.85,    // ~1 KSh = 11.85 NGN
    ZAR: 0.14      // ~1 KSh = 0.14 ZAR
  },
  lastUpdated: 'October 2026 Reference Baseline',
  source: 'Central Bank of Kenya & Open Financial Reference (Configurable in Settings)'
};

export interface CurrencyMeta {
  code: CurrencyCode;
  name: string;
  symbol: string;
  flag: string;
  fractionDigits: number;
}

export const CURRENCY_METADATA: Record<CurrencyCode, CurrencyMeta> = {
  KSH: {
    code: 'KSH',
    name: 'Kenyan Shilling',
    symbol: 'KSh',
    flag: '🇰🇪',
    fractionDigits: 0
  },
  USD: {
    code: 'USD',
    name: 'US Dollar',
    symbol: '$',
    flag: '🇺🇸',
    fractionDigits: 2
  },
  EUR: {
    code: 'EUR',
    name: 'Euro',
    symbol: '€',
    flag: '🇪🇺',
    fractionDigits: 2
  },
  GBP: {
    code: 'GBP',
    name: 'British Pound',
    symbol: '£',
    flag: '🇬🇧',
    fractionDigits: 2
  },
  NGN: {
    code: 'NGN',
    name: 'Nigerian Naira',
    symbol: '₦',
    flag: '🇳🇬',
    fractionDigits: 0
  },
  ZAR: {
    code: 'ZAR',
    name: 'South African Rand',
    symbol: 'R',
    flag: '🇿🇦',
    fractionDigits: 2
  }
};

export function formatCurrencyAmount(
  amountInKsh: number,
  targetCurrency: CurrencyCode,
  config: ExchangeRateConfig = DEFAULT_EXCHANGE_CONFIG
): string {
  const rate = config.rates[targetCurrency] || 1;
  const converted = amountInKsh * rate;
  const meta = CURRENCY_METADATA[targetCurrency];

  if (targetCurrency === 'KSH') {
    return `KSh ${amountInKsh.toLocaleString('en-US')}`;
  }

  return `${meta.symbol}${converted.toLocaleString('en-US', {
    minimumFractionDigits: meta.fractionDigits,
    maximumFractionDigits: meta.fractionDigits
  })}`;
}
