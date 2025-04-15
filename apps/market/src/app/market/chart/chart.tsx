import React, { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts';
import { Button, ButtonGroup } from '@mui/material';
import { Crypto, getCryptoPriceInRange } from '../market-api';
import './chart.scss';

export const Chart: React.FC<{ crypto: Crypto | undefined }> = ({ crypto }) => {
  const [dataset, setDataset] = useState<
    { price: number; timestamp: number }[]
  >([]);

  useEffect(() => {
    setCryptoRange(30);
  }, [crypto]);

  const setCryptoRange = (range: number) => {
    if (crypto !== undefined) {
      getCryptoPriceInRange(crypto.id, range)
        .then((data) => {
          const dataset = data.prices.map((pair) => {
            return {
              price: pair[1],
              timestamp: pair[0],
            };
          });

          setDataset(dataset);
        })
        .catch(() => {
          console.error('Error getCryptoRange');
        });
    }
  };

  return (
    <div>
      <div className="chart-details">
        <LineChart
          dataset={dataset}
          leftAxis={null}
          bottomAxis={null}
          xAxis={[
            {
              label: 'Day',
              dataKey: 'timestamp',
              valueFormatter: (date) => new Date(date).toLocaleDateString(),
            },
          ]}
          yAxis={[{ label: 'Price (USD)' }]}
          series={[
            {
              dataKey: 'price',
              area: true,
              showMark: false,
              disableHighlight: true,
            },
          ]}
          width={600}
          height={300}
        />
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button onClick={() => setCryptoRange(1)}>Today</Button>
          <Button onClick={() => setCryptoRange(7)}>7 Days</Button>
          <Button onClick={() => setCryptoRange(30)}>30 Days</Button>
          <Button onClick={() => setCryptoRange(90)}>90 Days</Button>
          <Button onClick={() => setCryptoRange(180)}>6 M</Button>
          <Button onClick={() => setCryptoRange(360)}>12 M</Button>
        </ButtonGroup>
      </div>
      <div>
        <ul>
          <li>Price: ${crypto?.current_price.toLocaleString()}</li>
          <li>Market Rank: #{crypto?.market_cap_rank}</li>
          <li>Market Cap: ${crypto?.market_cap.toLocaleString()}</li>
          <li>24h Volume: ${crypto?.total_volume.toLocaleString()}</li>
          <li>High 24h: ${crypto?.high_24h.toLocaleString()}</li>
          <li>Low 24h: ${crypto?.low_24h.toLocaleString()}</li>
          <li>
            Price Change 24h: {crypto?.price_change_percentage_24h.toFixed(2)}%
          </li>
        </ul>
      </div>
    </div>
  );
};
