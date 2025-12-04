import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LendsProvider } from './shared/hooks/UseLends.jsx'


import '../public/css/bootstrap.css'

import "../src/features/location/components/mapa.css";
import "../src/features/home/components/service.css";
import "../src/features/lend/components/LendsList.css";
import "../src/features/books/components/list.css";
import "../src/shared/components/footer/footer.css";
import "../src/shared/components/navbar/options.css";
import "../src/features/home/components/about.css";



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
