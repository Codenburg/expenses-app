import { createBrowserRouter } from "react-router-dom";
import { LoginForm, SignUpForm } from "@/pages";
import { getSession } from "@/lib/api/getSession.ts";
import DashboardHome from "@/pages/dashboard-home.tsx";
import ProtectedRoute from "../Protected-route";
import DashboardLayout from "@/layout/dashboard-layout";
import ConfirmEmail from "@/pages/auth/confirm-email";
import ResetPasswordForm from "@/pages/auth/reset-passwordForm";

const getAccessToken = async (): Promise<string | null> => {
  const session = await getSession();
  console.log("access_token", session?.access_token);
  if (!session?.access_token) {
    return null;
  }
  return session.access_token;
};

const isAuthenticated = async (): Promise<boolean | null> => {
  const accessToken = await getAccessToken();
  if (!accessToken) {
    return false;
  }
  return true;
};

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
