import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Props from './component/Props.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Props />
  </StrictMode>,
)
