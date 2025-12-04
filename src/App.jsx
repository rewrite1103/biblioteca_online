import { useState } from 'react'

import AppRouter from './App/Router/AppRouter.jsx'
import Navbar from './shared/components/navBar/NavBar.jsx'
import Footer from './shared/components/footer/footer.jsx'

function App() {

  return (
    <>
    <Navbar /> 
   <AppRouter />
    <Footer />

    </>
  )
}

export default App
