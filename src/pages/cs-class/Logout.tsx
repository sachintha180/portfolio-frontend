import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useRef } from "react";
import LoadingSkeleton from "@/components/skeletons/LoadingSkeleton";

export default function Logout() {
  const { logout, isAuthenticated } = useAuth();
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

  return (
    <section className="flex h-full flex-col items-center justify-center gap-5">
      <LoadingSkeleton message="Logging out" />
    </section>
  );
}
