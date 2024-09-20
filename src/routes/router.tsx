import { createBrowserRouter, redirect } from "react-router-dom";
import { LoginForm, SignUpForm } from "@/pages";
import App from "../App.tsx";
import ResetPasswordForm from "@/pages/auth/reset-passwordForm.tsx";
import ConfirmEmail from "@/pages/auth/confirm-email.tsx";
import { getSession } from "@/lib/api/getSession.ts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      const { session } = await getSession();
      if (!session) {
        return redirect("/login");
      }
      return session;
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
    path: "confirm-email",
    element: <ConfirmEmail />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordForm />,
  },
]);
