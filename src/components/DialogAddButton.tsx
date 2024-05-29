import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function DialogAddButton() {
  const [open, setOpen] = useState<boolean>(false);

  function handleOpenChange() {
    setOpen(false);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Añadir gasto</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Añadir gasto</DialogTitle>
          <DialogDescription>
            Introduzca el monto, método, categoria y estado del gasto que desea
            añadir.
          </DialogDescription>
        </DialogHeader>
        <ExpenseForm onOpenChange={handleOpenChange} />
      </DialogContent>
    </Dialog>
  );
}
export default DialogAddButton;
