import * as React from 'react';
import { CoinsList } from './coins-list/coins-list';
import { CoinDetails } from './coin-details/coin-details';
import './market.scss';
import { useState } from 'react';
import { Coin } from '../models/coin-gecko/coin';

export const Market: React.FC = () => {
  const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null);

  return (
    <div className="market">
      <div className="market_coins-list">
        <CoinsList selectCoin={setSelectedCoin} />
      </div>
      <div>
        {selectedCoin ? <CoinDetails coin={selectedCoin} /> : <div></div>}
      </div>
    </div>
  );
};
