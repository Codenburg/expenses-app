import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
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
} from "@/components/ui";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SignUpFormSchema } from "types/SignUpFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpNewUser } from "@/lib/api/signUpUser";
import { useNavigate } from "react-router-dom";

export function SignUpForm() {
  const { toast } = useToast();
  const formInstance = useForm({
    mode: "onChange",
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    criteriaMode: "all",
    reValidateMode: "onChange",
  });
  const navigate = useNavigate();
  const onSubmit = async (values: SignUpFormSchema) => {
    const { email, password, firstName, lastName } = values;
    const { ...error } = await signUpNewUser({
      email,
      password,
      firstName,
      lastName,
    });
    if (error.error?.message) {
      formInstance.setError(
        "email",
        { message: error.error.message },
        { shouldFocus: true }
      );
      return;
    }
    navigate("/login");
    toast({
      title: "¡Registro exitoso!",
      description: `${firstName} ${lastName} te has registrado con éxito`,
      duration: 3000,
    });
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
            <Form {...formInstance}>
              <form onSubmit={formInstance.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <FormField
                      control={formInstance.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl>
                            <Input placeholder="Max" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-2">
                    <FormField
                      control={formInstance.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Apellido</FormLabel>
                          <FormControl>
                            <Input placeholder="Robinson" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <FormField
                    control={formInstance.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="maxrobinson@gmail.com"
                            {...field}
                          />
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
                </div>
                <div className="grid gap-4">
                  <FormField
                    control={formInstance.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirmar contraseña</FormLabel>
                        <FormControl>
                          <PasswordInput id="confirmPassword" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {formInstance.formState.isSubmitting ? (
                    <ButtonLoading />
                  ) : (
                    <Button type="submit" className="w-full">
                      Crear una cuenta
                    </Button>
                  )}
                </div>
              </form>
            </Form>
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
