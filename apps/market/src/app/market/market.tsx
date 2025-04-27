import * as React from 'react';
import { CoinsList } from './coins-list/coins-list';
import { CoinsDetails } from './coins-details/coins-details';
import './market.scss';

export const Market: React.FC = () => {
  return (
    <div className="market">
      <div className="market_coins-list">
        <CoinsList />
      </div>
      <div>
        <CoinsDetails />
      </div>
    </div>
  );
};
