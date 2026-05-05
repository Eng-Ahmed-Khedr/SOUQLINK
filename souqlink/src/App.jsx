import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import ActiveBids from './pages/activebids';
import OrderHistory from './pages/orderhistory';
import Settings from './pages/settings';
import Login from './pages/login';
import Myinventory from './pages/myinventory';
import Dashboard from './components/dashboard';
import Marketplace from './pages/marketplace';
import Product from './pages/product';


function App() {
  return (
    <>
      <Routes>
        <Route element={<Dashboard />}>
          <Route path='/' element={<Home />} />
          <Route path='/marketplace' element={<Marketplace />} />
          <Route path='/myinventory' element={<Myinventory />} />
          <Route path='/activebids' element={<ActiveBids />} />
          <Route path='/orderhistory' element={<OrderHistory />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/product/:id' element={<Product />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
