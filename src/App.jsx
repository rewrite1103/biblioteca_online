import { useState } from 'react'

import AppRouter from "../src/app/router/AppRouter.jsx"
import Navbar from "./shared/components/navbar/navbar.jsx"
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
