import { supabase } from "db/supabase";

interface loginUser {
  email: string;
  password: string;
}

export const loginUser = async ({ email, password }: loginUser) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    return { error };
  }
  return { data };
};
