import { AuthError, User } from "@supabase/supabase-js";
import { supabase } from "db/supabase";

interface loginUser {
  email: string;
  password: string;
}

export const loginUser = async (
  { email, password }: loginUser,
): Promise<{ user: User | null; error: AuthError | null }> => {
  const { data: { user }, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    return { user: null, error };
  }
  return { user: user, error: null };
};
