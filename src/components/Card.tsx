import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ReactNode, useEffect, useState } from "react";
import { Database } from "../types/supabase-generated";
import { supabase } from "../../db/supabase";

interface Props {
  title: string;
  IconCard: JSX.Element;
  children: ReactNode;
}
export function CardComponent({ title, IconCard, children }: Props) {
  const [amount, setAmount] =
    useState<
      Database["public"]["Tables"]["balances"]["Row"]["amount_available"]
    >();

  useEffect(() => {
    const fetchAmount = async () => {
      const { data: balances, error } = await supabase
        .from("balances")
        .select(`amount_available`)
        .order("balances_id", { ascending: false });
      if (balances && balances.length >= 0) {
        setAmount(balances[0].amount_available);
      } else {
        console.log("error", error);
      }
    };
    fetchAmount();
  }, []);
  return (
    <Card>
      <CardHeader className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
        {IconCard}
      </CardHeader>
      <CardContent className="flex p-6 space-x-14 pt-3">
        <Label className="text-2xl font-bold ">
          {amount ? `$${amount}` : "Cargando..."}
        </Label>
        {children}
      </CardContent>
    </Card>
  );
}
