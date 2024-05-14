import { CardComponent } from "@/components/Card";
import PaymentTable from "@/components/PaymentTable";
import PieChart from "@/components/PieChart";
import { FiDollarSign, FiClipboard, FiLink } from "react-icons/fi";

function Home() {
  return (
    <div className="container relative">
      <h1 className="flex justify-start pl-4 antialiased uppercase text-5xl drop-shadow-md font-bold">
        Expenses app
      </h1>

      <section>
        <div className="relative space-y-4 pb-6 pt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <CardComponent title="Disponible" IconCard={<FiDollarSign />} />
            <CardComponent title="Gastos totales" IconCard={<FiClipboard />} />
            <CardComponent title="Servicios" IconCard={<FiLink />} />
          </div>
        </div>
      </section>

      <section>
        <div className="grid gap-2 md:grid-cols-2">
          <PaymentTable />
          <PieChart />
        </div>
      </section>
    </div>
  );
}

export default Home;
