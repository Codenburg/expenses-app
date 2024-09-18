import { createBrowserRouter, redirect } from "react-router-dom";
import { LoginForm, SignUpForm } from "@/pages";
import App from "../App.tsx";
import ResetPasswordForm from "@/pages/auth/reset-passwordForm.tsx";
import { getUser } from "@/lib/api/getUser.ts";
import ConfirmEmail from "@/pages/auth/confirm-email.tsx";

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
    children: [],
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
    path: "confirm-email",
    element: <ConfirmEmail />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordForm />,
  },
]);
