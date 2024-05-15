import { CardComponent } from "@/components/Card";
import PaymentTable from "@/components/PaymentTable";
import PieChart from "@/components/PieChart";
import { FiDollarSign } from "react-icons/fi";

function Home() {
  return (
    <div className="relative">
      <h1 className="flex justify-start antialiased uppercase text-5xl drop-shadow-md font-bold">
        Expenses app
      </h1>

      <section>
        <div className="space-y-4 pb-6 pt-6">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1">
            <CardComponent title="Disponible" IconCard={<FiDollarSign />} />
          </div>
        </div>
      </section>

      <section>
        <div className="grid gap-2 md:grid-cols-2">
          <PieChart />
          <PaymentTable />
        </div>
      </section>
    </div>
  );
}

export default Home;
