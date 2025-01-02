import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/shared/Navbar'
function App() {

  return (
    <div className="px-4 sm:px-[5vwJ] md:px-[7vwJ] lg:px-[9vw] ">
      <Navbar />
      <Outlet />
      <h2>Footer</h2>
    </div>
  )
}

export default App
