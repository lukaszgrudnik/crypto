import React from 'react';
import { useSelector } from 'react-redux';
import { Crypto } from '../store/crypto';
import { CryptoTile } from './crypto-tile/crypto-tile';
import './wallet.scss';

const Wallet: React.FC = () => {
  const crypto = useSelector(
    (state: { assets: { crypto: Crypto[] } }) => state?.assets?.crypto
  );

  return (
    <div>
      <div className="assets-list">
        {crypto.map((item, index) => (
          <CryptoTile key={index} details={item}></CryptoTile>
        ))}
      </div>
    </div>
  );
};

export default Wallet;
