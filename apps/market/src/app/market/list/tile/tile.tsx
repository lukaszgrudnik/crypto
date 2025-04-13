import React from 'react';
import { CryptoInfo } from '../api/crypto';
import { useDispatch, useSelector } from 'react-redux';
import { addCrypto } from '../../../store/store';
import './tile.scss';

export const Tile: React.FC<{ cryptoInfo: CryptoInfo }> = ({ cryptoInfo }) => {
  const dispatch = useDispatch();

  return (
    <div className="tile">
      <div
        className="crypto-icon"
        dangerouslySetInnerHTML={{ __html: cryptoInfo.svg }}
      />
      <div>
        <p>{cryptoInfo.name}</p>
        <p>{cryptoInfo.symbol}</p>
      </div>
      <div>
        <p>${cryptoInfo.price_usd}</p>
        <p>{cryptoInfo.changeIn24h}%</p>
      </div>
    </div>
  );
};
