import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import Layout from './components/layout/Layout'

// Sample page components
const About = () => (
  <div>
    <h2>About Us</h2>
    <p>This is the about page of our application.</p>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
    <p>Get in touch with us!</p>
    <p>Email: contact@example.com</p>
  </div>
);

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
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
