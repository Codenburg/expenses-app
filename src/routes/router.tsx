import { LoginForm, SignUpForm } from "@/components";
import ConfirmEmail from "@/components/auth/ConfirmEmail";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import BalanceAvailable from "@/components/dashboard/BalanceAvailable";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Home from "@/components/dashboard/Home";
import Error404 from "@/components/error/404";
import { isAuthenticated } from "@/hooks/auth/isAuth";
import ProtectedRoute from "@/services/auth/ProtectedRoute";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path:'*',
    element: <Error404/>
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
    path: "reset-password",
    element: <ResetPasswordForm />,
  },
  {
    element: <ProtectedRoute isAuthenticated={isAuthenticated} />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            element: <Home />,
            path: "/",
          },
          {
            element: <BalanceAvailable />,
            path: "/saldo-disponible",
          },
        ],
      },
    ],
  },
]);
