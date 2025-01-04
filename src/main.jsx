import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.jsx'
import ShopContextProvider from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
    <RouterProvider router={router}>
      <StrictMode>
        <App />
      </StrictMode>,
    </RouterProvider>
  </ShopContextProvider>
)
