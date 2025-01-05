import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
function App() {

  return (
    <div className="px-4 sm:px-[5vwJ] md:px-[7vwJ] lg:px-[9vw] ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
