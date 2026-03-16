
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Card from './components/Card'
import CardGrid from './components/CardGrid'
import Formfield from './components/Formfield'
import Navbar from './components/Navbar'

import TotalItems from './components/wardrobe/TotalItems'
import HomePage from './pages/HomePage'
import Wardrobe from './pages/Wardrobe'
import GenerateOutfit from './pages/GenerateOutfit'
import QuickActions from './components/Dashboard/QuickActions'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
      <Navbar />
      {/* <GenerateOutfit /> */}
      {/* <Wardrobe /> */}
      <Dashboard/>
      {/* <QuickActions/> */}

    </>
  )
}

export default App