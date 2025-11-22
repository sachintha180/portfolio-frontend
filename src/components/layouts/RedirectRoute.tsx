import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { FiLoader } from "react-icons/fi";

type RedirectRouteProps = {
  redirectTo?: string;
};

export default function RedirectRoute({
  redirectTo = "/cs-class",
}: RedirectRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center gap-2">
        <div className="text-muted">Loading</div>
        <FiLoader className="h-5 w-5 animate-spin" />
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
}
