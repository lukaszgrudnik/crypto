import React from 'react';
import { List } from './list/list';
import { Chart } from './chart/chart';
import './market.scss';

const Market: React.FC = () => {
  return (
    <div className="market">
      <List />
      <Chart></Chart>
    </div>
  );
};

export default Market;
