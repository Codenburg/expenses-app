import { User, UserMetadata } from "@supabase/supabase-js";
import { supabase } from "db/supabase";

export async function getUser(): Promise<
  { user: User | null; metadata: UserMetadata | null }
> {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (!user) {
    console.log("Error getting user", error);
    return { user: null, metadata: null };
  }
  return { user, metadata: user.user_metadata };
}
