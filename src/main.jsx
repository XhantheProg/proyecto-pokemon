import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PokeInicio } from './components/poke_inicio.jsx'
// import App from './App.jsx'
import { ThemeProvider } from './components/ThemeProvider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider>
    <PokeInicio />
  </ThemeProvider>
  </StrictMode>,
)
