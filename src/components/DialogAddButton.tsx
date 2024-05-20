import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SelectButton from "./SelectButton";

function DialogAddButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Añadir gasto</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Añadir gasto</DialogTitle>
          <DialogDescription>
            Introduzca el monto, método, categoria y estado del gasto que desea
            añadir.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="monto" className="text-right">
              Monto:
            </Label>
            <Input id="monto" placeholder="ej: 1000" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="metodo" className="text-right">
              Método:
            </Label>
            <SelectButton buttonValue={"metodo"} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="categoria" className="text-right">
              Categoria:
            </Label>
            <SelectButton buttonValue={"categoria"} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="estado" className="text-right">
              Estado:
            </Label>
            <SelectButton buttonValue={"estado"} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Añadir</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export default DialogAddButton;