import React from 'react';
import { cryptoList } from './api/crypto-list';
import { Tile } from './tile/tile';
import { useSelector } from 'react-redux';
import './list.scss';
import { Crypto } from '../../store/crypto';

export const List: React.FC = () => {
  const crypto = useSelector(
    (state: { assets: { crypto: Crypto[] } }) => state?.assets?.crypto
  );

  return (
    <div className="list">
      <div>
        <p>added</p>
        {crypto?.map((item) => <Tile cryptoInfo={item} />)}
      </div>
      <div>
        {cryptoList.map((item) => (
          <Tile cryptoInfo={item} />
        ))}
      </div>
    </div>
  );
};
