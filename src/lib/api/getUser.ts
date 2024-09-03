import { User } from "@supabase/supabase-js";
import { supabase } from "db/supabase";

export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user as User;
}
