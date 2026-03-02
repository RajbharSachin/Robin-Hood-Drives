import { createBrowserRouter, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Drives from './pages/Drives'
import DriveDetails from './pages/DriveDetails'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Layout component that wraps all pages
const Layout = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      <Outlet /> {/* This renders the matched child route */}
    </main>
    <Footer />
  </div>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, // → /
      { path: 'drives', element: <Drives /> }, // → /drives
      { path: 'drive/:id', element: <DriveDetails /> }, // → /drive/:id
    ],
  },
])

export default router
