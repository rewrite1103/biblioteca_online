import { Route, Routes } from 'react-router-dom'
import Home from '../../features/home/pages/Home.jsx'
import Lends from '../../features/lend/pages/Lends.jsx'
import Books from '../../features/books/pages/Books.jsx'
import Location from '../../features/location/pages/Location.jsx'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lends' element={<Lends />} />
        <Route path='/books' element={<Books />} />
        <Route path='/location' element={<Location />} />
      
    </Routes>
  )
}

export default AppRouter