import React from 'react';
import { LineChart } from '@mui/x-charts';

export const Chart: React.FC = () => {
  return (
    <div className="list">
      <div>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
              area: true,
              showMark: false,
              disableHighlight: true,
            },
          ]}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};
