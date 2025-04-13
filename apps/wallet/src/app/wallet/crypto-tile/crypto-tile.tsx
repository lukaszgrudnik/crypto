import React from 'react';
import { Crypto } from '../../store/crypto';
import { Button, Card } from '@mui/material';
import './crypto-tile.scss';

export const CryptoTile: React.FC<{ details: Crypto }> = ({ details }) => {
  return (
    <Card className="crypto-tile">
      <div>
        <p>{details.symbol} </p>
        <p className="amount">0.00003</p>
      </div>
      <div>
        <p>$ 0.25</p>
      </div>
    </Card>
  );
};
