import { CardComponent } from "./components/Card.tsx";

function App() {
  return (
    <main className="bg-gray-300/75 pt-8">
      <h1 className="flex justify-start pl-4 antialiased uppercase text-5xl drop-shadow-md font-bold text-sky-950/90">
        Expenses app
      </h1>
      <div className="p-8 flex flex-row justify-between">
        <CardComponent title="Disponible"/>
        <CardComponent title="Gastos totales" />
        <CardComponent title="Servicios" />
      </div>
    </main>
  );
}

export default App;
