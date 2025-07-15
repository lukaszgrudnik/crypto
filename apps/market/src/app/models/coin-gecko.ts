export interface Coin {
  id: string; // e.g., "bitcoin"
  symbol: string; // e.g., "btc"
  name: string; // e.g., "Bitcoin"
  image: string; // URL to the image
  current_price: number; // Current price in USD
  market_cap: number; // Market capitalization in USD
  market_cap_rank: number; // Rank in the market
  fully_diluted_valuation: number; // Fully diluted market cap (if available)
  total_volume: number; // Total volume traded in the last 24 hours
  high_24h: number; // Highest price in the last 24 hours
  low_24h: number; // Lowest price in the last 24 hours
  price_change_24h: number; // Absolute price change in the last 24 hours
  price_change_percentage_24h: number; // Percentage price change in the last 24 hours
  market_cap_change_24h: number; // Change in market cap in the last 24 hours
  market_cap_change_percentage_24h: number; // Percentage change in market cap in the last 24 hours
  circulating_supply: number; // Circulating supply of the coin
  total_supply: number; // Total supply of the coin
  max_supply: number; // Maximum supply (if available)
  ath: number; // All-time high price
  ath_change_percentage: number; // Percentage change from ATH
  ath_date: string; // Date when ATH occurred (ISO 8601 format)
  atl: number; // All-time low price
  atl_change_percentage: number; // Percentage change from ATL
  atl_date: string; // Date when ATL occurred (ISO 8601 format)
  roi: null | {
    // ROI information (null if not available)
    times: number;
    currency: string;
  };
  last_updated: string; // Last updated timestamp (ISO 8601 format)
}
