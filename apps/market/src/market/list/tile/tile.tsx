import React from 'react';
import { CryptoInfo } from '../api/crypto';

export const Tile: React.FC<{ cryptoInfo: CryptoInfo }> = ({ cryptoInfo }) => {
  return (
    <div>
      <p>{cryptoInfo.name}</p>
      <p>${cryptoInfo.price_usd}</p>
    </div>
  );
};
