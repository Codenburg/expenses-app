import { CardComponent } from "@/components/Card";
import DataTable from "@/components/DataTable";
import PieChart from "@/components/PieChart";
import { Expenses, columns } from "@/types/Expenses";
import { FiDollarSign } from "react-icons/fi";

const expensesData: Expenses[] = [
  {
    id: "3434",
    amount: 434,
    status: "pending",
    category: "salud",
  },
  {
    id: "343445",
    amount: 4345,
    status: "failed",
    category: "salud",
  },
  {
    id: "3434",
    amount: 434,
    status: "processing",
    category: "salud",
  },
  {
    id: "3434",
    amount: 434,
    status: "pending",
    category: "salud",
  },
  {
    id: "3434",
    amount: 434,
    status: "success",
    category: "salud",
  },
];

function Home() {
  return (
    <div className="relative">
      <h1 className="flex justify-center antialiased uppercase text-5xl drop-shadow-md font-bold">
        Expenses app
      </h1>

      <section>
        <div className="space-y-4 pb-6 pt-6">
          <div className="flex justify-center">
            <CardComponent title="Disponible" IconCard={<FiDollarSign />} />
          </div>
        </div>
      </section>

      <section>
        <div className="flex-row space-y-10">
          <PieChart />
          <DataTable data={expensesData} columns={columns} />
        </div>
      </section>
    </div>
  );
}

export default Home;
