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
      "Salud",
      "Supermercado",
      "Electronica",
      "Deportes",
      "Hogar",
      "Cuentas",
      "Impuestos",
      "Indumentaria",
      "Transporte",
    ],
    datasets: [
      {
        data: [45, 34, 67, 56, 23, 32, 123, 424, 124],
        borderWidth: 3,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      onresize: {},
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
      <Pie
        style={{ width: "370px", height: "400px" }}
        options={options}
        data={data}
      />
    </div>
  );
}
export default PieChart;
