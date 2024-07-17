import { createBrowserRouter } from "react-router-dom";
import { LoginForm } from "@/pages/LoginForm.tsx";
import App from "../App.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
]);
