import React from 'react'

export default function CollectionCard() {
  return (
    <div className="w-80 bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative group">
      
      <a href={item.src} target="_blank" rel="noreferrer">

        {item.type === 'photo' && (
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
          />
        )}

        {item.type === 'video' && (
          <video
            autoPlay
            loop
            muted
            controls
            src={item.src}
            className="w-full h-64 object-cover"
          />
        )}

        {item.type === 'gif' && (
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
          />
        )}

      </a>

      <div className="absolute bottom-0 w-full flex justify-between items-center px-5 py-4 bg-gradient-to-t from-black/90 to-transparent">
        
        <h1 className="text-white text-base font-semibold truncate max-w-[170px]">
          {item.title || 'Untitled'}
        </h1>

        <button
          onClick={handleAddToCollection}
          className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white rounded-xl px-4 py-2 cursor-pointer font-medium transition duration-300"
        >
          Save
        </button>

      </div>
    </div>
  )
}
