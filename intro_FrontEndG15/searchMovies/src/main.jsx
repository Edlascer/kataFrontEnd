// Estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

// Librerías
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Componentes
import App from './components/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
