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
      label: "Europe",
      data: [
        10521595, 9644994, 9530762, 9577201, 9586158, 9872042, 10025558,
        10398303, 10078541, 9317664, 9872201, 10318486, 10075471, 10381590,
        10905877, 10946884, 11770897, 12025101, 13137496, 13804812, 14475754,
        15430281, 15885528, 16604659, 17263132, 17865094, 18381968, 19065962,
        19516326, 19194396,
      ],
      borderColor: "#007BA7",
      backgroundColor: "#007BA7",
    },
    {
      label: "India",
      data: [
        493200, 511200, 576900, 591300, 605700, 621000, 624600, 698000, 770000,
        864000, 923000, 1088000, 1210000, 1304000, 1403000, 1518000, 1755000,
        1884000, 2087000, 2193000, 2483100, 2681600, 2848922, 3045100, 3263810,
        3444762.8, 3766940, 4061790, 4343702, 4472690,
      ],
      borderColor: "#0F52BA",
      backgroundColor: "#0F52BA",
    },
    {
      label: "United States",
      data: [
        9177703, 9783785, 10292718, 11046599, 11573549, 12166760, 12600790,
        12875796, 13741001, 14072482, 14415894, 14871856, 15082695, 15679617,
        16275452, 16331289, 16627438, 16994092, 16334044, 16970632, 17111218,
        17035082, 17396796, 17729278, 18402752, 18708464, 19140570, 19568042,
        20197090, 20514868,
      ],
      borderColor: "#40E0D0",
      backgroundColor: "#40E0D0",
    },
    {
      label: "China",
      data: [
        2700000, 3080000, 4020000, 4600000, 5500000, 5520000, 6553000, 7266000,
        7476000, 8364000, 8180800, 8499000, 8790000, 8850000, 9367000, 9566000,
        10133000, 10735000, 11164000, 11592000, 11962000, 12761000, 12586000,
        12257000, 12782000, 13216000, 13279000, 13958000, 13800000, 14600000,
      ],
      borderColor: "#000080",
      backgroundColor: "#000080",
    },
  ],
};

// export default function WorldFeather() {
//   return <Line options={options} data={data} />;
// }
const RegionFeather: React.FC = () => {
  return <Line options={options} data={data} />;
};

export default RegionFeather;
