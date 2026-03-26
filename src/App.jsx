// import './App.css'
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import HomePage from "./pages/HomePage";
import Wardrobe from "./pages/Wardrobe";
import GenerateOutfit from "./pages/GenerateOutfit";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Support from "./pages/Support";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import { toast, Toaster } from "sonner";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import History from "./pages/History";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "./utils/accessTokenStorage";
import { fetchMe, setInitialized } from "./store/slices/authSlice";
import { GuestRoute, ProtectedRoute } from "./components/routes/ProtectedRoute";
import PageNotFound from "./pages/PageNotFound";
import useTokenExpiry from "./hooks/useTokenExpiry";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isInitialized } = useSelector((state) => state.auth);
  const { pathname } = useLocation();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (getToken()) {
      dispatch(fetchMe());
    } else {
      dispatch(setInitialized());
    }
  }, []);

  useTokenExpiry();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    const handleAuthLogout = () => {
      dispatch({ type: "auth/logout/fulfilled" });
      navigate("/login", { replace: true });
      toast.error("Session expired", {
        description: "Please sign in again to continue",
      });
    };

    window.addEventListener("auth:logout", handleAuthLogout);
    return () => window.removeEventListener("auth:logout", handleAuthLogout);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // if (!isInitialized) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-[#F7F4EF]">
  //       <div className="w-8 h-8 rounded-full border-2 border-[#C9A96E] border-t-transparent animate-spin" />
  //     </div>
  //   );
  // }
  return (
    <>
      <Toaster
        position={isMobile? 'top-center' : 'bottom-center'}
        gap={12}
        visibleToasts={3}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#FDFAF6",
            border: "1px solid #E7E1CF",
            borderRadius: "16px",
            padding: "14px 18px",
            color: "#1A1A18",
            fontFamily: "Jost, sans-serif",
            fontSize: "13px",
            fontWeight: "400",
            letterSpacing: "0.02em",
            boxShadow: "0 8px 32px rgba(28,28,26,0.10)",
            minWidth: "300px",
            maxWidth: "380px",
          },
          classNames: {
            toast: "aura-toast",
            title: "aura-toast-title",
            description: "aura-toast-description",
            success: "aura-toast-success",
            error: "aura-toast-error",
            loading: "aura-toast-loading",
            actionButton: "aura-toast-action",
          },
        }}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<PageNotFound />} />

        <Route element={<GuestRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" index={true} element={<Dashboard />} />
          <Route path="/wardrobe" element={<Wardrobe />} />
          <Route path="/generate_outfit" element={<GenerateOutfit />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
