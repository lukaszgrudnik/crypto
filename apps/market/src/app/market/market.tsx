import React, { useState } from 'react';
import { List } from './list/list';
import { Chart } from './chart/chart';
import './market.scss';
import { Crypto } from './market-api';
import { Button } from '@mui/material';

const Market: React.FC = () => {
  const [selectedCrypto, setSelectedCrypto] = useState<Crypto | undefined>();

  return (
    <div className="market">
      <List onClick={setSelectedCrypto} />
      <Chart crypto={selectedCrypto}></Chart>
      <Button>Buy</Button>
    </div>
  );
};

export default Market;
