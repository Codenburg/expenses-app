import { supabase } from "db/supabase";

interface SignUpUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
export const signUpNewUser = async (
  { email, password, firstName, lastName }: SignUpUser,
) => {
  const { error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: "http://localhost:5173/",
      data: {
        firstName: firstName,
        lastName: lastName,
      },
    },
  });
  return { error };
};
