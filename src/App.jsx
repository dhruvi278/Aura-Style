// import './App.css'
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import HomePage from "./pages/HomePage";
import Wardrobe from "./pages/Wardrobe";
import GenerateOutfit from "./pages/GenerateOutfit";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Support from "./pages/Support";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import { Toaster } from "sonner";
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import History from "./pages/History";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "./utils/accessTokenStorage";
import { fetchMe, setInitialized } from "./store/slice/authSlice";

function App() {
  const dispatch = useDispatch()
  const { isInitialized } = useSelector(state => state.auth)
  const { pathname } = useLocation()

  useEffect(() => {
    if (getToken()) {
      dispatch(fetchMe())
    } else {
      dispatch(setInitialized())
    }
  }, [])
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  if (!isInitialized) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-[#F7F4EF]'>
        <div className='w-8 h-8 rounded-full border-2 border-[#C9A96E] border-t-transparent animate-spin' />
      </div>
    )
  }
  return (
    <>
      <Toaster
        position="bottom-right"
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
        <Route path="/wardrobe" element={<Wardrobe />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/generate_outfit" element={<GenerateOutfit />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
