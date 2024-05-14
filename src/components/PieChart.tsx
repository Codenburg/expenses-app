import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import { Pie } from "react-chartjs-2";
function PieChart() {
  ChartJS.register(ArcElement, Tooltip, Legend, Colors);

  const data = {
    labels: [
      "Supermercado",
      "Suscripciones",
      "Salud",
      "Servicios",
      "Electronica",
      "Transporte",
    ],
    datasets: [
      {
        data: [45, 34, 67, 56, 23, 32],
        borderWidth: 3,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      colors: {
        forceOverride: true,
      },
      legend: {
        position: "top" as const,
      },
    },
  };

  return (
    <div>
      <Pie options={options} data={data} />
    </div>
  );
}
export default PieChart;
