import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  PasswordInput,
  useToast,
  ButtonLoading,
  CardFooter,
} from "@/components/ui";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginUser } from "@/lib/api/loginUser";
import { LoginUserFormSchema } from "types/LoginUserFormSchema";
import { ErrorMessage } from "@hookform/error-message";
import { getUser } from "@/lib/api/getUser";
import { supabase } from "db/supabase";

export function LoginForm() {
  const formInstance = useForm({
    mode: "onSubmit",
    resolver: zodResolver(LoginUserFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    criteriaMode: "all",
    reValidateMode: "onSubmit",
  });
  const navigate = useNavigate();
  const { toast } = useToast();
  const onSubmit = async (values: LoginUserFormSchema) => {
    const { email, password } = values;
    const { ...error } = await loginUser({ email, password });
    if (error.error?.status === 400) {
      formInstance.setError("root", {
        message: "Email o Contraseña incorrectos",
      });
      return;
    }
    navigate("/");
    toast({
      //improve this to get the user name
      title: `Hola ${(await getUser()).user_metadata.firstName}!👋`,
      duration: 3000,
    });
  };
  const onAnonymousLogin = async () => {
    const { error, data } = await supabase.auth.signInAnonymously();
    if (error) {
      console.log(error);
      toast({
        title: "Error al iniciar sesión anónimo",
        duration: 3000,
      });
      return null;
    }
    navigate("/");
    console.log("anonymouse data:", data);
    toast({
      title: `¡bienvenido! Iniciaste sesion como anónimo.`,
      duration: 3000,
    });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center px-4 theme-zinc bg-gray-100">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Ingresa tu email y contraseña para iniciar sesión o continua como
            anónimo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={formInstance.handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              <Form {...formInstance}>
                <div className="grid gap-2">
                  <FormField
                    control={formInstance.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="m@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-2">
                  <FormField
                    control={formInstance.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contraseña</FormLabel>
                        <FormControl>
                          <PasswordInput id="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <ErrorMessage
                    name="root"
                    render={({ message }) => (
                      <p className="mt-2 text-sm text-red-500">{message}</p>
                    )}
                  />
                  <Link
                    to="/reset-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Olvidaste tu contraseña?
                  </Link>
                  {/* add recovery password feature */}
                </div>
              </Form>
              {formInstance.formState.isSubmitting ? (
                <ButtonLoading />
              ) : (
                <Button type="submit" className="w-full">
                  Iniciar sesión
                </Button>
              )}

              {/* <Button variant="outline" className="w-full">
                Login with Google
              </Button> */}
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button
            variant="outline"
            className="w-full"
            onClick={onAnonymousLogin}
          >
            Continuar como anónimo
          </Button>
          <div className=" text-center text-sm">
            No tienes una cuenta?{" "}
            <Link to="/sign-up" className="underline">
              Crear cuenta
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
