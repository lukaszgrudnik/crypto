import React, { useEffect, useState } from 'react';
import { Tile } from './tile/tile';
import { useSelector } from 'react-redux';
import './list.scss';
import { Crypto, getCryptoList } from '../market-api';
import { Card } from '@mui/material';

export const List: React.FC<{ onClick: (name: Crypto) => void }> = ({
  onClick,
}) => {
  const [cryptoList, setCryptoList] = useState<Crypto[]>([]);

  useEffect(() => {
    getCrypto();
  }, []);

  const getCrypto = () => {
    getCryptoList()
      .then((value) => {
        setCryptoList(value);
      })
      .catch(() => {});
    console.error('Error getCryptoList');
  };

  return (
    <div className="list">
      {cryptoList.map((item, index) => (
        <Card className="card" onClick={() => onClick(item)}>
          <Tile key={index} cryptoInfo={item} />
        </Card>
      ))}
    </div>
  );
};
