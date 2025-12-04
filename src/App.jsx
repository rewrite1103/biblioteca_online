import { useState } from 'react'

import AppRouter from "../src/app/router/AppRouter.jsx"
import Navbar from "../src/shared/components/navBar/NavBar.jsx"
import Footer from "../src/shared/components/footer/footer.jsx"

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
