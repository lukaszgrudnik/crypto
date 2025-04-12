import React from 'react';
import { cryptoList } from './api/crypto-list';
import { Tile } from './tile/tile';

export const List: React.FC = () => {
  return (
    <div className="app">
      {cryptoList.map((item) => (
        <Tile cryptoInfo={item} />
      ))}
    </div>
  );
};
