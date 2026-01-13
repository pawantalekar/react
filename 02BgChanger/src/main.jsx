import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ChnageBgColor from './components/ChangeBgColor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ChnageBgColor />
  </StrictMode>,
)
