
// import './App.css'
import Card from './components/Card'
import CardGrid from './components/CardGrid'
import Formfield from './components/Formfield'
import Navbar from './components/Navbar'

import TotalItems from './components/wardrobe/TotalItems'
import HomePage from './pages/HomePage'
import Wardrobe from './pages/Wardrobe'

function App() {
  // const date = new Date(Date.now());
  return (
    <>
      <Navbar />
      {/* <GenerateOutfit /> */}
      <Wardrobe />

    </>
  )
}

export default App