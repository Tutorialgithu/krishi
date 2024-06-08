import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Signin from './Signin'
import Signup from './Signup'
import Home from './Home'
import Contact from './Contact'
import Product from './Product'
import ProductList from './ProductList'
import HeroSection from './HeroSection'
import ProductDetails from './ProductDetails'
import CartPage from './CartPage'
import CheckoutPage from './CheckoutPage'
import OrderConfirmationPage from './OrderConfirmationPage'
import Checkout from './CheckOut'
import Admin from './AdminPannel/Admin'
import ProductDashboard from './AdminPannel/Project/ProductDashboard';    
import AddProduct from './AdminPannel/Project/AddProduct'
import UpdateProduct from './AdminPannel/Project/UpdateProduct'
import ProductRequest from './AdminPannel/ProductRequest/ProductRequest'
import Error from './Error'
import OrderDetails from './OrderDetails'
import Profile from './Profile'
import Orders from './Orders'
import AboutUs from './AboutUs'

const Routess = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/Productlist' element={<ProductList/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/hero' element={<HeroSection/>}/>
            <Route path='/product/:productId' element={<ProductDetails/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/checkout' element={<CheckoutPage/>}/>
            <Route path='/order-confirmation' element={<OrderConfirmationPage/>}/>
            <Route path='/check' element={<Checkout/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/ProductDashboard' element={<ProductDashboard/>}/>
            <Route path='/AddProduct' element={<AddProduct/>}/>
            <Route path='/UpdateProduct' element={<UpdateProduct/>}/>
            <Route path='error' element={<Error/>}/>
            <Route path='/ProductRequest' element={<ProductRequest/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path="/orders" element={<Orders />} />
            <Route path="/order/:orderId" element={<OrderDetails />} />
            <Route path="/about" element={<AboutUs />} />
            
        </Routes>
    </div>
  )
}

export default Routess