import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Label,
} from "@/components/ui";
import { supabase } from "db/supabase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUpNewUser = async () => {
    const { data: user, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) {
      console.log("ERROR SIGN UP", error);
    }
    console.log("USER CREATED", user);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    // Prevent default form submission
    event.preventDefault();
    await signUpNewUser();
    navigate("/login");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center px-4 theme-zinc">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Registrarse</CardTitle>
          <CardDescription>
            Ingresa tus datos para crear una cuenta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">Nombre</Label>
                <Input id="first-name" placeholder="Max" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Apellido</Label>
                <Input id="last-name" placeholder="Robinson" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <Button type="submit" className="w-full" onClick={handleSubmit}>
              Crear una cuenta
            </Button>

            <Button variant="outline" className="w-full">
              Ingresar con Google (próximamente)
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Ya tienes una cuenta?{" "}
            <Link to="/login" className="underline">
              Inicia sesión
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
