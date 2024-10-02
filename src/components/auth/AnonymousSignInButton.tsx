import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  useToast,
  Button,
} from "@/components";
import { AlertTriangleIcon } from "lucide-react";
import { supabase } from "db/supabase";
import { useNavigate } from "react-router-dom";

export default function AnonymousSignInButton() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const onAnonymousLogin = async () => {
    const { error, data } = await supabase.auth.signInAnonymously();
    if (error) {
      toast({
        title: "Error al iniciar sesión anónimo",
        duration: 3000,
      });
      return null;
    }
    navigate("/");
    console.log("anonymouse data:", data);
    toast({
      title: `¡Bienvenido! Iniciaste sesion como anónimo.`,
      duration: 3000,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          Iniciar sesión como anónimo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangleIcon className="h-5 w-5 text-yellow-500" />
            Inicio de sesión anónimo
          </DialogTitle>
          <DialogDescription>
            Iniciarás sesión de forma anónima, lo que limita tus funciones y no
            guarda tus datos en una cuenta, por lo que podrías perderlos.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={onAnonymousLogin}>Proceder de forma anónima</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
