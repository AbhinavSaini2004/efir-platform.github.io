// admin/frontend/src/components/ChartComponent.js
import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const ChartComponent = ({ type, data, options }) => {
  switch (type) {
    case 'bar':
      return <Bar data={data} options={options} />;
    case 'pie':
      return <Pie data={data} options={options} />;
    case 'line':
        return <Line data={data} options={options} />;
    default:
      return null;
  }
};

export default ChartComponent;