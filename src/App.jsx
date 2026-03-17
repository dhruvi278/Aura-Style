// import './App.css'
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import HomePage from "./pages/HomePage";
import Wardrobe from "./pages/Wardrobe";
import GenerateOutfit from "./pages/GenerateOutfit";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Support from "./pages/Support";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wardrobe" element={<Wardrobe />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/generate_outfit" element={<GenerateOutfit />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/support" element={<Support/>} />
        </Routes>
    </>
  );
}

export default App;
