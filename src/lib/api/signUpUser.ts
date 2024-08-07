import { supabase } from "db/supabase";

export const signUpNewUser = async (email: string, password: string) => {
  const { error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  return { error };
};
