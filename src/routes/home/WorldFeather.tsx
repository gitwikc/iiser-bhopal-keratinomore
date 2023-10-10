import * as React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "",
    },
  },
};

const labels = Array(2020 - 1990 + 1)
  .fill(1990)
  .map((v, i) => v + i);

export const data = {
  labels,
  datasets: [
    {
      label: "World",
      data: [
        4264045.464, 4598227.222, 4798062.326, 5104602.171, 5396622.98,
        5727005.637, 5918769.125, 6299134.878, 6566036.635, 6849850.98,
        7067293.38, 7351894.178, 7732362.994, 7931564.312, 8223122.544,
        8509278.428, 8758471.512, 9280468.12, 9740305.098, 10003423.16,
        10507347.73, 10954364.76, 11355701.3, 11748962.38, 12133288.33,
        12609440.95, 12935225.77, 13434608.85, 13799384.01, 14150999.69,
        14503536.91,
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const WorldFeather: React.FC = () => {
  return <Line options={options} data={data} />;
};

export default WorldFeather;
