import { FC } from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale, Chart, ChartData, Legend, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const data: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            label: 'Website Traffic',
            data: [300, 450, 500, 700, 650, 800],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.4, // smooth curve
            fill: true,
        },
    ],
};


export const CryptoPriceChart: FC = () => {
    return (<Line data={data}></Line>)
};
