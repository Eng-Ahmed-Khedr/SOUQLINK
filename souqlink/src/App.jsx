import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import ActiveBids from './pages/activebids';
import OrderHistory from './pages/orderhistory';
import Settings from './pages/settings';
import Login from './pages/login';
import Myinventory from './pages/myinventory';
import Dashboard from './components/dashboard';


function App() {
  return (
    <>
      <Routes>
        <Route element={<Dashboard />}>
          <Route path='/' element={<Home />} />
          <Route path='/myinventory' element={<Myinventory />} />
          <Route path='/activebids' element={<ActiveBids />} />
          <Route path='/orderhistory' element={<OrderHistory />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
