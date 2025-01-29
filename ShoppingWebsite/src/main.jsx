import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HeroSection from "./HeroSection";
import NavSection from "./NavSection";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavSection />
    <HeroSection />
  </StrictMode>,
)
