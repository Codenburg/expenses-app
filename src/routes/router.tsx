import { createBrowserRouter } from "react-router-dom";
import { LoginForm, SignUpForm } from "@/pages";
import App from "../App.tsx";
import ResetPasswordForm from "@/pages/ResetPasswordForm.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
