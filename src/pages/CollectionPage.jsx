import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from '../components/ResultCard'
import { clearCollection } from '../redux/feature/collectionSlice'

export default function CollectionPage() {
  const dispatch = useDispatch()

  const collection = useSelector(
    (state) => state.collection.items
  )

  return (
    <div className="min-h-screen bg-gray-100 px-8 py-10">

      <div className="flex justify-between items-center mb-10 flex-wrap gap-4">

        <div>
          <h1 className="text-4xl font-bold text-indigo-600">
            My Collection
          </h1>

          <p className="text-gray-500 mt-2">
            Saved Photos, Videos & GIFs
          </p>
        </div>

        {collection.length > 0 && (
          <button
            onClick={() => dispatch(clearCollection())}
            className="bg-red-500 hover:bg-red-600 active:scale-95 text-white px-5 py-3 rounded-xl shadow-lg transition duration-300 font-medium"
          >
            Clear Collection
          </button>
        )}
      </div>

      {collection.length > 0 ? (
        <div className="flex flex-wrap gap-8 justify-center">
          {collection.map((item) => (
            <ResultCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[55vh]">
          <div className="bg-white shadow-xl rounded-3xl px-10 py-10 text-center max-w-md">

            <div className="text-6xl mb-4">
              📂
            </div>

            <h2 className="text-2xl font-bold text-gray-700">
              Collection Empty
            </h2>

            <p className="text-gray-500 mt-3">
              Save photos, videos or gifs and they will appear here.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}