import React from 'react';
import { CryptoInfo } from '../api/crypto';
import { useDispatch, useSelector } from 'react-redux';
import { addCrypto } from '../../../store/store';

export const Tile: React.FC<{ cryptoInfo: CryptoInfo }> = ({ cryptoInfo }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>{cryptoInfo.name}</p>
      <p>${cryptoInfo.price_usd}</p>
      <button onClick={() => dispatch(addCrypto(cryptoInfo))}>add</button>
    </div>
  );
};
