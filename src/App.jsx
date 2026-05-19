import React from 'react'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CollectionPage from './pages/CollectionPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>

      <ToastContainer />
    </div>
  )
}