import { LoginForm, SignUpForm } from "@/components";
import ConfirmEmail from "@/components/auth/ConfirmEmail";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardHome from "@/components/dashboard/Home";
import { isAuthenticated } from "@/hooks/auth/isAuth";
import ProtectedRoute from "@/services/auth/ProtectedRoute";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
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
            element: <DashboardHome />,
            path: "/",
          },
        ],
      },
    ],
  },
]);
