import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Database } from "../types/schema";
import { supabase } from "../../db/supabase";

export function CardComponent({ title }: { title: string }) {
  const [amount, setAmount] =
    useState<Database["public"]["Tables"]["expenses"]["Row"]["amount"]>();

  useEffect(() => {
    const fetchAmount = async () => {
      const { data: expenses, error } = await supabase
        .from("expenses")
        .select(`*`);
      if (expenses && expenses.length > 0) {
        setAmount(expenses[0].amount);
      } else {
        console.log("error", error);
      }
    };
    fetchAmount();
  }, []);
  return (
    <Card className="w-[270px] ">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm">{title}</CardTitle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          className="h-4 w-4 text-muted-foreground"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      </CardHeader>
      <CardContent className="flex justify-between pt-2">
        <Label className="text-2xl font-bold ">
          ${amount ? amount : 50000}
        </Label>
        <Button>add</Button>
      </CardContent>
    </Card>
  );
}
