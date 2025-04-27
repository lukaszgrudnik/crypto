import axios from 'axios';
import { Coin } from '../../models/coin-gecko/coin';

export const getCoinsList = async (): Promise<Coin[]> => {
  return await axios
    .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`)
    .then((res) => res.data);
};
