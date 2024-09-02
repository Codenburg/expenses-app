import { createBrowserRouter, redirect } from "react-router-dom";
import { LoginForm, SignUpForm } from "@/pages";
import App from "../App.tsx";
import ResetPasswordForm from "@/pages/ResetPasswordForm.tsx";
import { getUser } from "@/lib/api/getUser.ts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      const user = await getUser();
      if (!user) {
        return redirect("/login");
      }
      return null;
    },
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/sign-up",
    element: <SignUpForm />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordForm />,
  },
]);
