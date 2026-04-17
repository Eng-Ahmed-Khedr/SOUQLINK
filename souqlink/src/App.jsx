import './App.css'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import Dashboard from './pages/dashboard'
import Settings from './pages/settings'
import Signin from './pages/signin'
import Dashboardlayout from './components/dashboardLayout'


function App() {
  return (
    <>
      <Routes>
        <Route element={<Dashboardlayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </>
  )
}

export default App
