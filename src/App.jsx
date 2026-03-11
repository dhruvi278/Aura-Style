
// import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import image from './components/image.png'

function App() {

  return (
    <>
      <Navbar />
      <Card src={image}/>
    </>
  )
}

export default App
