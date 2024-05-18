import { ColumnDef } from "@tanstack/react-table";

export type Expenses = {
  id: string;
  amount: number;
  status: "pending" | "failed" | "processing" | "success";
  category: "salud" | "supermercado" | "electronica" | "servicios";
};

export const columns: ColumnDef<Expenses>[] = [
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Estado",
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
];
