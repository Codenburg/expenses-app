import { CardComponent } from "./components/Card.tsx";
import { FiDollarSign } from "react-icons/fi";
import { FiClipboard } from "react-icons/fi";
import { FiLink } from "react-icons/fi";
import PaymentTable from "./components/PaymentTable.tsx";
function App() {
  return (
    <main className="flex-1 pt-8">
      <div className="container relative">
        <h1 className="flex justify-start pl-4 antialiased uppercase text-5xl drop-shadow-md font-bold">
          Expenses app
        </h1>
        <section>
          <div className="relative space-y-4 pb-6 pt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <CardComponent title="Disponible" IconCard={<FiDollarSign />} />
              <CardComponent
                title="Gastos totales"
                IconCard={<FiClipboard />}
              />
              <CardComponent title="Servicios" IconCard={<FiLink />} />
            </div>
          </div>
        </section>
        <section>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7"> 
          <div className="border rounded-xl shadow col-span-2">
          <PaymentTable/>
          </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
