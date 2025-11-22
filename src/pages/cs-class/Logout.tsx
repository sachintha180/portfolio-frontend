import { useAuth } from "@/contexts/AuthContext";
import { FiLoader } from "react-icons/fi";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const { logout, error: logoutError } = useAuth();
  const hasLoggedOut = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      if (!hasLoggedOut.current) {
        hasLoggedOut.current = true;
        await logout();
        navigate("/cs-class/login", { replace: true });
      }
    };
    handleLogout();
  }, [logout, navigate]);

  return (
    <div className="flex flex-1 items-center justify-center gap-2">
      {logoutError ? (
        <div className="text-red-500">{logoutError}</div>
      ) : (
        <>
          <div className="text-muted">Logging out</div>
          <FiLoader className="h-5 w-5 animate-spin" />
        </>
      )}
    </div>
  );
}
