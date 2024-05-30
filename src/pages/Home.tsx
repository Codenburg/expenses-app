import { CardComponent } from "@/components/Card";
import DataTable from "@/components/DataTable";
import PieChart from "@/components/PieChart";
import { expensesData } from "@/lib/_data";
import { columns } from "@/components/columns";

import { FiDollarSign, FiPlus } from "react-icons/fi";
import DialogAddButton from "@/components/DialogAddButton";
import { Toaster } from "@/components/ui/toaster";
import ExpenseForm from "@/components/ExpenseForm";
import { useState } from "react";
import AmountForm from "@/components/AmountForm";

function Home() {
  const [dialogs, setDialogs] = useState({
    amountDialogOpen: false,
    expenseDialogOpen: false,
  });
  const handleDialogOpenChange = (dialogName: string, isOpen: boolean) => {
    setDialogs((prevDialogs) => ({
      ...prevDialogs,
      [dialogName]: isOpen,
    }));
  };
  return (
    <div className="relative">
      <h1 className="flex justify-center antialiased uppercase text-5xl drop-shadow-md font-bold">
        Expenses app
      </h1>
      <section>
        <div className="space-y-4 pb-6 pt-6">
          <div className="flex justify-center">
            <CardComponent
              title="Disponible"
              IconCard={<FiDollarSign className="m-3" />}
              children={
                <DialogAddButton
                  title={ <FiPlus />}
                  buttonVariant={'outline'}
                  dialogTitle="Ingrese un monto"
                  dialogDescription="Ingrese el monto que desee añadir"
                  open={dialogs.amountDialogOpen}
                  setOpen={(isOpen) =>
                    handleDialogOpenChange("amountDialogOpen", isOpen)
                  }
                  children={
                    <AmountForm
                      onOpenChange={() =>
                        handleDialogOpenChange("amountDialogOpen", false)
                      }
                    />
                  }
                />
              }
            />
          </div>
          <div className="flex justify-center">
            <DialogAddButton
              title="Añadir gasto"
              dialogTitle="Añadir gasto"
              dialogDescription="Introduzca el monto, método, categoria y estado del gasto que desea
            añadir."
              open={dialogs.expenseDialogOpen}
              setOpen={(isOpen) =>
                handleDialogOpenChange("expenseDialogOpen", isOpen)
              }
              children={
                <ExpenseForm
                  onOpenChange={() =>
                    handleDialogOpenChange("expenseDialogOpen", false)
                  }
                />
              }
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex-row space-y-10">
          <PieChart />
          <DataTable data={expensesData} columns={columns} />
        </div>
      </section>
      <Toaster />
    </div>
  );
}

export default Home;
