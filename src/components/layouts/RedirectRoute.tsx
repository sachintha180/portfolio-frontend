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
      <div className="flex-1 flex gap-2 items-center justify-center">
        <div className="text-muted">Loading</div>
        <FiLoader className="w-5 h-5 animate-spin" />
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
}
