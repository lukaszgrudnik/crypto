import axios from 'axios';

export type Crypto = {
  id: string; // Unique ID used in CoinGecko (e.g., 'bitcoin')
  symbol: string; // Ticker symbol (e.g., 'btc')
  name: string; // Full name (e.g., 'Bitcoin')
  image: string; // URL to the coin's image
  current_price: number; // Current market price in selected currency (e.g., USD)

  market_cap: number; // Total market capitalization
  market_cap_rank: number; // Rank by market cap
  fully_diluted_valuation: number; // Valuation if max supply was in circulation

  total_volume: number; // Total 24h trading volume
  high_24h: number; // Highest price in the last 24 hours
  low_24h: number; // Lowest price in the last 24 hours

  price_change_24h: number; // Price difference from 24h ago
  price_change_percentage_24h: number; // Price change percentage in 24h
  market_cap_change_24h: number; // Market cap difference from 24h ago
  market_cap_change_percentage_24h: number; // Market cap change % in 24h

  ath: number; // All-Time High price
  ath_change_percentage: number; // % down from ATH
  ath_date: string; // Date of All-Time High

  atl: number; // All-Time Low price
  atl_change_percentage: number; // % up from ATL
  atl_date: string; // Date of All-Time Low

  total_supply: number; // Total coins created (may include locked coins)
  circulating_supply: number; // Coins that are actively circulating
  max_supply: number | null; // Max possible coins (if known)

  roi: null | {
    times: number;
    currency: string;
    percentage: number;
  }; // Return on Investment (usually null for BTC/ETH)

  last_updated: string; // ISO timestamp of last update
};

export const getCryptoPrice = async (id: string): Promise<number> => {
  let value = await axios.get(
    `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`
  );
  return await value.data[id].usd;
};

export const getCryptoPriceInRange = async (
  id: string,
  days: number
): Promise<{
  market_caps: number[][];
  prices: number[][];
  total_volumes: number[][];
}> => {
  let value = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`
  );
  return await value.data;
};

export const getCryptoList = async (): Promise<Crypto[]> => {
  let value = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`
  );
  return await value.data;
};
