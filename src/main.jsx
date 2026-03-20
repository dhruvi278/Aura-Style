import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Locationprovider from './components/context/LocationContext.jsx'

createRoot(document.getElementById('root')).render(
  <Locationprovider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Locationprovider>,
  
)
