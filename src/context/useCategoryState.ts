import { Tables } from "@/types/supabase-generated";
import { supabase } from "../../db/supabase";
import { create } from "zustand";

const useCategoryStore = create((set) => ({
  categories: {},
  fetchCategories: async () => {
    const categoriesData = await fetchCategories();
    const categoriesMap = {};
    categoriesData.forEach((cat) => {
      categoriesMap[cat.category_id] = cat.category_name;
    });
    set({ categories: categoriesMap });
  },
}));

const fetchCategories = async () => {
  const { data: categories, error } = await supabase
    .from("categories")
    .select(`*`).returns<Tables<"categories">>();
  if (error) {
    console.log("fetch categories error:", error);
    return;
  }
  console.log("category", categories);
  return categories || [];
};

export default useCategoryStore;
