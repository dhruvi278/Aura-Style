
// import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import image from './components/image.png'

function App() {
  // const date = new Date(Date.now());
  return (
    <>
     
      <Navbar />
      <Card src={image} text1="Casual" text2="28 FEB,2026"/>
    </>
  )
}

export default App
