import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ITSGWebsite from './ITSGWebsite.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ITSGWebsite />
  </StrictMode>,
)
