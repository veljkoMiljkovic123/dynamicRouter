import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import SingleProductDetailPage from './pages/SingleProductDetailPage.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<HomePage />
      },
      {
        path:'/products',
        element:<ProductsPage />
      },
      {
        path:'singleProduct/:id',
        element:<SingleProductDetailPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
