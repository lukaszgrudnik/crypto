import React from 'react';

import './tile.scss';
import { Crypto } from '../../market-api';

export const Tile: React.FC<{ cryptoInfo: Crypto }> = ({ cryptoInfo }) => {
  return (
    <div className="tile">
      <img src={cryptoInfo.image} width={24} height={24} alt="Crypto Icon" />
      <div>
        <p>{cryptoInfo.name}</p>
        <p>{cryptoInfo.symbol}</p>
      </div>
      <div>
        <p>${cryptoInfo.current_price}</p>
        <p>{cryptoInfo.price_change_24h}%</p>
      </div>
    </div>
  );
};
