import React from 'react'
// import { fetchPhotos, fetchVideos } from './api/mediaAPI'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CollectionPage from './pages/CollectionPage'
import { ToastContainer } from 'react-toastify'

export default function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>













      {/* <button onClick={async () => {
        const data = await fetchPhotos('cat')
        console.log(data)
      }}>
        Get Photos
      </button>

      <button onClick={async () => {
        const data = await fetchVideos('cat')
        console.log(data)
      }}>
        Get Videos
      </button>
      
      <button onClick={async () => {
        const data = await fetchVideos('cat')
        console.log(data)
      }}>
        Get GIF
      </button> */}
    </div>
  )
}