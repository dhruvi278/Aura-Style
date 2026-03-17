// import './App.css'
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import HomePage from "./pages/HomePage";
import Wardrobe from "./pages/Wardrobe";
import GenerateOutfit from "./pages/GenerateOutfit";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Support from "./pages/Support";
import { Toaster } from "sonner";


function App() {
  return (
    <>
      <Toaster
        position="top-center"
        gap={12}
        visibleToasts={3}
        toastOptions={{
          duration: 3000,
          style: {
            background: '#FDFAF6',
            border: '1px solid #E7E1CF',
            borderRadius: '16px',
            padding: '14px 18px',
            color: '#1A1A18',
            fontFamily: 'Jost, sans-serif',
            fontSize: '13px',
            fontWeight: '400',
            letterSpacing: '0.02em',
            boxShadow: '0 8px 32px rgba(28,28,26,0.10)',
            minWidth: '300px',
            maxWidth: '380px',
          },
          classNames: {
            toast: 'aura-toast',
            title: 'aura-toast-title',
            description: 'aura-toast-description',
            success: 'aura-toast-success',
            error: 'aura-toast-error',
            loading: 'aura-toast-loading',
            actionButton: 'aura-toast-action',
          }
        }}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wardrobe" element={<Wardrobe />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/generate_outfit" element={<GenerateOutfit />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </>
  );
}

export default App;
