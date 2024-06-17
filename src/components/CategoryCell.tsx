import { useEffect } from "react";
import useCategoryStore from "../context/useCategoryState";
import { Tables } from "@/types/supabase-generated";

const CategoryCell = ({ categoryId }: { categoryId: number }) => {
  const { categories, fetchCategories } = useCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const categoryName = categories[categoryId];
  const categoryStyles: Record<Tables<"categories">["category_name"], string> =
    {
      Salud: "font-bold text-blue-500",
      Supermercado: "font-bold text-green-500",
      Electronica: "font-bold text-red-500",
      Cuentas: "font-bold text-yellow-500",
      Deportes: "font-bold text-purple-500",
      Hogar: "font-bold text-pink-500",
      Impuestos: "font-bold text-orange-500",
      Indumentaria: "font-bold text-indigo-500",
      Transporte: "font-bold text-teal-500",
    };

  return <div className={categoryStyles[categoryName]}>{categoryName}</div>;
};

export default CategoryCell;
