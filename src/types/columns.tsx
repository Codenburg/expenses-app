import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Expenses } from "./Expenses";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<Expenses>[] = [
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
    accessorKey: "amount",
    header: "Monto",
    cell: ({ row }) => {
      const amount: Expenses["amount"] = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <>{formatted}</>;
    },
  },
  {
    accessorKey: "status",
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
      const status: Expenses["status"] = row.getValue("status");
      const statusUppercase = status.toUpperCase();

      const statusStyles: Record<Expenses["status"], string> = {
        pagado: "font-bold text-green-300",
        pendiente: "font-bold text-yellow-300",
        atrasado: "font-bold text-red-400",
      };
      const statusStyle = statusStyles[status];
      return <div className={statusStyle}>{statusUppercase}</div>;
    },
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row }) => {
      const category: Expenses["category"] = row.getValue("category");
      const categoryUppercase: string = category.toUpperCase();
      const categoryStyles: Record<Expenses["category"], string> = {
        salud: "font-bold text-blue-500",
        supermercado: "font-bold text-green-500",
        electronica: "font-bold text-red-500",
        servicios: "font-bold text-yellow-500",
      };
      return (
        <div className={categoryStyles[category]}>{categoryUppercase}</div>
      );
    },
  },
  {
    accessorKey: "method",
    header: "Metodo",
    cell: ({ row }) => {
      const method: Expenses["method"] = row.getValue("method");
      const methodUppercase: string = method.toUpperCase();
      return <>{methodUppercase}</>;
    },
  },
];
