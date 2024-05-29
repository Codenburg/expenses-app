import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { expenseSchema } from "@/types/expenseSchema";
import { z } from "zod";
import CurrencyInput from "./ui/CurrencyInput";
import { DialogFooter } from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

interface FormProps {
  onOpenChange: () => void;
}
function ExpenseForm({ onOpenChange }: FormProps) {
  const form = useForm<z.infer<typeof expenseSchema>>({
    resolver: zodResolver(expenseSchema),
    mode: "onChange",
  });
  const { toast } = useToast();
  // const { watch } = useForm<z.infer<typeof expenseSchema>>();
  const onSubmit: SubmitHandler<z.infer<typeof expenseSchema>> = (
    values: z.infer<typeof expenseSchema>
  ) => {
    console.log("values:", values);
    onOpenChange();
    toast({
      title: "Scheduled: Catch up",
      description: "Friday, February 10, 2023 at 5:57 PM",
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="amount"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel>Monto</FormLabel>
              <FormControl>
                <CurrencyInput
                  value={value}
                  onValueChange={(value) => onChange(value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estado</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el estado de tu gasto" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="pagado">Pagado</SelectItem>
                    <SelectItem value="atrasado">Atrasado</SelectItem>
                    <SelectItem value="pendiente">Pendiente</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoria</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una categoria" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="salud">Salud</SelectItem>
                    <SelectItem value="supermercado">Supermercado</SelectItem>
                    <SelectItem value="electronica">Electronica</SelectItem>
                    <SelectItem value="servicios">Servicios</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="method"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Método de pago</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el método de pago" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="efectivo">Efectivo</SelectItem>
                    <SelectItem value="debito">Debito</SelectItem>
                    <SelectItem value="credito">Credito</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogFooter>
          <Button
            type="button"
            disabled={!form.formState.isValid}
            onClick={form.handleSubmit(onSubmit)}
          >
            Añadir gasto
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
}
export default ExpenseForm;
