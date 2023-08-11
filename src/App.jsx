import { useState } from 'react'
import './App.css'
import Resturants from './component/resturants'
import PhotoSlider from './component/slider'
import BookingPage from './component/book'
import NavBar from './component/navBar'
import BookForm from './component/bookForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from './component/overView'
import Footer from './component/footer'
import AboutPage from './component/about'

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<PhotoSlider />} />
        <Route path='/overview' element={<Overview />} />
        <Route path="/bookForm" element={<BookForm />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path='/resturants' element={<Resturants />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
