import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        
        <h2 className="text-2xl font-bold text-indigo-600 tracking-wide cursor-pointer">
          Media Search
        </h2>

        <div className="flex items-center gap-5">
          <Link
            to="/"
            className="text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-indigo-100 hover:text-indigo-600 transition duration-300"
          >
            Search
          </Link>

          <Link
            to="/collection"
            className="text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-indigo-100 hover:text-indigo-600 transition duration-300"
          >
            Collection
          </Link>
        </div>
      </div>
    </nav>
  )
}