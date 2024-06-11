import { useEffect } from "react";
import useCategoryStore from "../context/useCategoryState";
import { Tables } from "@/types/supabase-generated";

const CategoryCell = ({ categoryId }) => {
  const { categories, fetchCategories } = useCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const categoryName = categories[categoryId] || "Desconocido";
  const categoryStyles: Record<Tables<"categories">["category_name"], string> =
    {
      salud: "font-bold text-blue-500",
      supermercado: "font-bold text-green-500",
      electronica: "font-bold text-red-500",
      cuentas: "font-bold text-yellow-500",
      deportes: "font-bold text-purple-500",
      hogar: "font-bold text-pink-500",
      impuestos: "font-bold text-orange-500",
      indumentaria: "font-bold text-indigo-500",
      transporte: "font-bold text-teal-500",
    };

  return <div className={categoryStyles[categoryId]}>{categoryName}</div>;
};

export default CategoryCell;
