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

interface formProps {
  onOpenChange: () => void;
}

function ExpenseForm({ onOpenChange }: formProps) {
  const form = useForm<z.infer<typeof expenseSchema>>({
    resolver: zodResolver(expenseSchema),
    mode: "onChange",
  });

  // const { watch } = useForm<z.infer<typeof expenseSchema>>();

  const onSubmit: SubmitHandler<z.infer<typeof expenseSchema>> = (
    values: z.infer<typeof expenseSchema>
  ) => {
    console.log("values", values);
    onOpenChange();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          name="amount"
          control={form.control}
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
