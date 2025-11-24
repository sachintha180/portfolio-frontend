import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useRef } from "react";
import UnderliningLink from "@/components/ui/underlining-link";
import { FiArrowLeft } from "react-icons/fi";
import LoadingSkeleton from "@/components/skeletons/LoadingSkeleton";

export default function Logout() {
  const { logout, error: logoutError, isLoading, isAuthenticated } = useAuth();
  const hasLoggedOut = useRef(false);

  useEffect(() => {
    const handleLogout = async () => {
      if (isAuthenticated && !hasLoggedOut.current) {
        hasLoggedOut.current = true;
        await logout();
      }
    };
    handleLogout();
  }, [isAuthenticated, logout]);

  if (isLoading) {
    return (
      <section className="flex h-full flex-col items-center justify-center gap-5">
        <LoadingSkeleton message="Logging out" />
      </section>
    );
  }

  return (
    <section className="flex h-full flex-col items-center justify-center gap-3">
      <p className={`text-lg ${logoutError ? "text-red-500" : "text-muted"}`}>
        {logoutError ? logoutError : "You have been logged out"}
      </p>
      <UnderliningLink href="/cs-class/login" variant="link">
        <FiArrowLeft aria-hidden="true" className="h-5 w-5" />
        <span className="text-lg">Return to login</span>
      </UnderliningLink>
    </section>
  );
}
