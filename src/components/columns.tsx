import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Enums, Tables } from "@/types/supabase-generated";
import CategoryCell from "./CategoryCell";


export const columns: ColumnDef<Tables<"expenses">>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "expense_amount",
    header: "Monto",
    cell: ({ row }) => {
      const amount: Tables<"expenses">["expense_amount"] = parseFloat(
        row.getValue("expense_amount")
      );
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <>{formatted}</>;
    },
  },
  {
    accessorKey: "payment_state",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Estado
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status: Enums<"payment_state"> = row.getValue("payment_state");
      const statusUppercase = status.toUpperCase();

      const statusStyles: Record<Enums<"payment_state">, string> = {
        pagado: "font-bold text-green-300",
        pendiente: "font-bold text-yellow-300",
        atrasado: "font-bold text-red-400",
      };
      const statusStyle = statusStyles[status];
      return <div className={statusStyle}>{statusUppercase}</div>;
    },
  },
  {
    accessorKey: "category_id",
    header: "Categoria",
    cell: ({ row }) => {
      const category_id: Tables<"expenses">["category_id"] =
        row.getValue("category_id");
      // const categoryUppercase: string = category.toUpperCase();

      return <CategoryCell categoryId={category_id}/>
    },
  },
  {
    accessorKey: "payment_method",
    header: "Metodo",
    cell: ({ row }) => {
      const method: Enums<"payment_methods"> = row.getValue("payment_method");
      const methodUppercase: string = method.toUpperCase();
      const methodStyles: Record<Enums<"payment_methods">, string> = {
        credito: "font-bold text-blue-500",
        debito: "font-bold text-green-500",
        efectivo: "font-bold text-red-500",
        transferencia: "font-bold text-yellow-500",
      };
      return <div className={methodStyles[method]}>{methodUppercase}</div>;
    },
  },
  {
    accessorKey: "created_at",
    header: "Fecha de pago",
    cell: ({ row }) => {
      const created_at: Tables<"expenses">["created_at"] =
        row.getValue("created_at");
      return <>{created_at}</>;
    },
  },
];
