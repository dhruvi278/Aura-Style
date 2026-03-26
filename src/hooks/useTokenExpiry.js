import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  getTimeUntilExpiry,
  isTokenExpired,
  removeToken,
} from "../utils/accessTokenStorage";

function useTokenExpiry() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const warningTostid = useRef(null);
  const warningTimerRef = useRef(null);
  const expiryTimerRef = useRef(null);

  const handleLogout = () => {
    if (warningTostid.current) {
      toast.dismiss(warningTostid.current);
    }
    removeToken();
    dispatch({ type: "auth/logout/fulfilled" });
    navigate("/login", { replace: true });
    toast.error("Session expired", {
      description: "Please Sign in agian to continue",
    });
  };

  useEffect(() => {
    const clearTimers = () => {
      if (warningTostid.current) clearTimeout(warningTostid.current);
      if (expiryTimerRef.current) clearTimeout(expiryTimerRef.current);
    };

    if (isTokenExpired()) {
      handleLogout();
      return;
    }

    const timeUntilExpiry = getTimeUntilExpiry();
    const timeUntilWarning = timeUntilExpiry - 5 * 60 * 1000;

    if (timeUntilWarning > 0) {
      warningTimerRef.current = setTimeout(() => {
        warningTostid.current = toast.warning("Session expiring soon", {
          description:
            "Your session is expiring in 5 minutes, Save your Style..",
          duration: Infinity,
          style: { borderLeft: "3px solid #C9A96E" },
          action: {
            label: "Stay Logged in",
            onClick: () => toast.dismiss(warningTostid.current),
          },
        });
      }, timeUntilWarning);
    } else {
      warningTostid.current = toast.warning("Session expiring soon", {
        description: `Your session expires in ${Math.ceil(timeUntilExpiry / 60000)} minutes.`,
        duration: Infinity,
        style: { borderLeft: "3px solid #C9A96E" },
      });
    }

    expiryTimerRef.current = setTimeout(() => {
      handleLogout();
    }, timeUntilExpiry);

    return () => clearTimers();
  }, []);

  return null;
}

export default useTokenExpiry;