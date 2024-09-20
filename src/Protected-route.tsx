import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthenticated: () => Promise<boolean | null>;
}

function ProtectedRoute({ isAuthenticated }: ProtectedRouteProps) {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      const authStatus = await isAuthenticated();
      setAuthenticated(authStatus);
    };

    checkAuthentication();
  }, [isAuthenticated]);

  if (authenticated === null) {
    // Optionally, you can render a loading spinner here while checking authentication
    return <div>Loading...</div>;
  }

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
