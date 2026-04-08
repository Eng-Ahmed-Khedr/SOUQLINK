import './App.css'
import { Route, Routes } from 'react-router-dom'

import Header from './components/header'

import Home from './pages/home'
import About from './pages/about'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
