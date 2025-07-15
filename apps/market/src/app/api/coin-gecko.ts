import axios from 'axios';
import { Coin } from '../models/coin-gecko';

export const getCoinsList = async (): Promise<Coin[]> => {
    return await axios
        .get(`http://localhost:3000/api/v3/coins/markets?vs_currency=usd`)
        .then((res) => res.data);
};
