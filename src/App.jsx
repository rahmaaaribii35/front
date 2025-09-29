import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import NavBar from './compoenents/NavBar'
import Footer from './compoenents/footer'
import SearchBar from './compoenents/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLayout from './pages/admin/adminLayout'
import Dashboard from './pages/admin/Dashboard'
import Users from './pages/admin/Users'
import Products from './pages/admin/Products'
import Order from './pages/admin/Order'
import { useAuth } from './context/AuthContext'




const App = () => {

  const { user } = useAuth()
  const isAdmin = user?.role === 'admin'

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      
      <ToastContainer/>
      {/* Only show Navbar and SearchBar for non-admin users */}
      {!isAdmin && <NavBar />}
      {!isAdmin && <SearchBar />}

      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        
        
        <Route path="/admin" element={<AdminLayout/>}>
            <Route path="dashboard" element={<Dashboard />} /> 
            <Route path='users' element={<Users/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="order" element={<Order/>}/>
        </Route>


      </Routes>

      {/* Only show Footer for non-admin users */}
      {!isAdmin && <Footer />}

    </div>
  )
}

export default App
