import { supabase } from "db/supabase";

export async function logoutUser() {
  await supabase.auth.signOut();
  return location.reload();
}
