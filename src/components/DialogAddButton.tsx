import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

interface DialogProps {
  title: string | ReactNode;
  dialogTitle: string;
  dialogDescription: string;
  open: boolean;
  setOpen: (arg: boolean) => void;
  children: ReactNode;
  buttonVariant?: null | "outline";
}
function DialogAddButton({
  title,
  dialogTitle,
  dialogDescription,
  open,
  setOpen,
  children,
  buttonVariant,
}: DialogProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={buttonVariant}>{title}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
export default DialogAddButton;
