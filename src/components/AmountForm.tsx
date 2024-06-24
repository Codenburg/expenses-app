import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "./ui/toast";
import { amountSchema } from "@/types/AmountSchema";
import { supabase } from "../../db/supabase";

interface FormProps {
  onOpenChange: () => void;
}
function AmountForm({ onOpenChange }: FormProps) {
  const form = useForm<z.infer<typeof amountSchema>>({
    resolver: zodResolver(amountSchema),
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<z.infer<typeof amountSchema>> = async (
    values: z.infer<typeof amountSchema>
  ) => {
    onOpenChange();
    if (values.method === "debito") {
      const { data, error } = await supabase
        .from("balances")
        .insert({
          user_id: "31d0761b-2ff0-416d-b969-a890441c0eac",
          debit_amount_available: values.amount,
        })
        .select();
      if (error) {
        toast({
          title: "Error al ingresar el monto!",
          duration: 2500,
          action: <ToastAction altText="close">Cerrar</ToastAction>,
        });
      }
      toast({
        title: `$${data} ingresados con éxito!`,
        duration: 2500,
        action: <ToastAction altText="undo amount">Deshacer</ToastAction>,
      });
    } else if (values.method === "efectivo") {
      const { data, error } = await supabase
        .from("balances")
        .insert({
          user_id: "31d0761b-2ff0-416d-b969-a890441c0eac",
          cash_amount_available: values.amount,
        })
        .select();
      if (error) {
        toast({
          title: "Error al ingresar el monto!",
          duration: 2500,
          action: <ToastAction altText="close">Cerrar</ToastAction>,
        });
      }
      toast({
        title: `$${data} ingresados con éxito!`,
        duration: 2500,
        action: <ToastAction altText="undo amount">Deshacer</ToastAction>,
      });
    }

    console.log("values:", values);
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
          name="method"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Método</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione el método" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="efectivo">Efectivo</SelectItem>
                    <SelectItem value="debito">Debito</SelectItem>
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
            Añadir monto
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
}

export default AmountForm;
