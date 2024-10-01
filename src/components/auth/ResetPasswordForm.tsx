import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "@/components/ui";
import { Link } from "react-router-dom";

export default function ResetPasswordForm() {
  return (
    <div className="w-full h-screen flex items-center justify-center px-4 theme-zinc">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Restablecer Contraseña</CardTitle>
          <CardDescription>
            Ingresa tu correo electrónico para recibir un enlace para
            restablecer tu contraseña
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Restablecer Contraseña
            </Button>
          </form>
          <Link to="/login" className="font-semibold underline text-sm">
            ← Volver al inicio
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
