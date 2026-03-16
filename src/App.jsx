// import './App.css'
import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import CardGrid from "./components/CardGrid";
import Formfield from "./components/Formfield";
import Navbar from "./components/Navbar";

import TotalItems from "./components/wardrobe/TotalItems";
import HomePage from "./pages/HomePage";
import Wardrobe from "./pages/Wardrobe";
import GenerateOutfit from "./pages/GenerateOutfit";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

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
        </Routes>
    </>
  );
}

export default App;
