import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import LoadingSkeleton from "@/components/skeletons/LoadingSkeleton";

type RedirectRouteProps = {
  redirectTo?: string;
};

export default function RedirectRoute({
  redirectTo = "/cs-class",
}: RedirectRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingSkeleton className="flex-1 justify-center" />;
  }

  if (isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
}
