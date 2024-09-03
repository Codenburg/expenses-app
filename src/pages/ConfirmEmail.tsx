import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MailCheck } from "lucide-react";
import { Link } from "react-router-dom";

function ConfirmEmail() {
  const handleResendEmail = () => {
    // TODO: Implement the logic to resend the confirmation email
    console.log("Resending confirmation email...");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <MailCheck className="w-8 h-8 text-blue-600" />
          </div>
          <CardTitle className="text-2xl font-bold">
            Revisa tu correo electrónico
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground">
            Hemos enviado un correo electrónico de confirmación a tu bandeja de
            entrada. Haz clic en el enlace del correo electrónico para verificar
            tu cuenta.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full" onClick={handleResendEmail}>
            Reenviar correo de confirmación
          </Button>
          <Link
            to={"/login"}
            className="text-sm text-muted-foreground hover:text-primary"
          >Volver al inicio</Link>
          
        </CardFooter>
      </Card>
    </div>
  );
}

export default ConfirmEmail;