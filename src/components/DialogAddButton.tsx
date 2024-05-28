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

function DialogAddButton() {
  return (
    <Dialog>
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
        <ExpenseForm/>
      </DialogContent>
    </Dialog>
  );
}
export default DialogAddButton;
