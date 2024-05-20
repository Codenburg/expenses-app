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
import SelectMethod from "./SelectMethod";

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
            Introduzca el monto y el método que desea añadir.
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
            <SelectMethod />
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
