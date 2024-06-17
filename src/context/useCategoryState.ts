import { supabase } from "../../db/supabase";
import { create } from "zustand";

interface CategoryStore {
  categories: Record<number, string>;
  fetchCategories: () => Promise<void>;
}
interface Category {
  category_id: number;
  category_name: string;
}

const useCategoryStore = create<CategoryStore>((set) => ({
  categories: {},
  fetchCategories: async () => {
    const categoriesData = await fetchCategories();
    const categoriesMap: Record<number, string> = {};
    if (categoriesData) {
      categoriesData.forEach((cat) => {
        categoriesMap[cat.category_id] = cat.category_name;
      });
      set({ categories: categoriesMap });
    } else console.error("Hubo un error al establecer las categorias");
  },
}));

const fetchCategories = async (): Promise<Category[]> => {
  const { data: categories, error } = await supabase
    .from("categories")
    .select(`category_id,category_name`);

  if (error) {
    console.log("fetch categories error:", error);
    return [];
  }

  return categories || [];
};

export default useCategoryStore;
