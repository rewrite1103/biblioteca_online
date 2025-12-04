import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LendsProvider } from './shared/hooks/UseLends.jsx'

import './css/bootstrap.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LendsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </LendsProvider>
  </StrictMode>,
)
