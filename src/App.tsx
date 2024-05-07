import { CardComponent } from "./components/Card.tsx";
import { FiDollarSign } from "react-icons/fi";
import { FiClipboard } from "react-icons/fi";
import { FiLink } from "react-icons/fi";
function App() {
  return (
    <main className="flex-1 bg-gray-300/75 pt-8">
      <div className="container relative">
        <h1 className="flex justify-start pl-4 antialiased uppercase text-5xl drop-shadow-md font-bold">
          Expenses app
        </h1>
        <section>
          <div className="relative space-y-4 p-8 pt-6">
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
      </div>
    </main>
  );
}

export default App;
