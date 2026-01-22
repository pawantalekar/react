import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Layout from './components/layout/Layout'
import Header from './components/Header/Header'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "header",
        element: <Header />
      },
      {
        path: "footer",
        element: <Footer />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
