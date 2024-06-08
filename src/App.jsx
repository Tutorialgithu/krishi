import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Routess from './components/Routess';

const App = () => {
  const location = useLocation();
  const adminPaths = ['/admin', '/ProductDashboard', '/AddProduct', '/UpdateProduct', '/ProductRequest', '/orders', '/order/:orderId'];

  const isAdminRoute = adminPaths.includes(location.pathname);

  return (
    <div>
      {!isAdminRoute && <Header />}
      <Routess />
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
