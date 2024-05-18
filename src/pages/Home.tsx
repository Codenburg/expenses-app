import { CardComponent } from "@/components/Card";
import DataTable from "@/components/DataTable";
import PieChart from "@/components/PieChart";
import { expensesData } from "@/lib/_data";
import { columns } from "@/types/Expenses";

import { FiDollarSign } from "react-icons/fi";

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
