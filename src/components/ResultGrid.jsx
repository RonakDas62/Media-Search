import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos, fetchGIF } from '../API/mediaAPI'
import { setLoading, setError, setResults } from '../redux/feature/searchSlice'
import ResultCard from './ResultCard'

export default function ResultGrid() {
  const dispatch = useDispatch()

  const { query, activeTabs, results, loading, error } =
    useSelector((state) => state.search)

  useEffect(() => {
    if (!query) return

    const getData = async () => {
      try {
        dispatch(setLoading())

        let data = []

        if (activeTabs === 'photos') {
          const response = await fetchPhotos(query)

          data = response.map((item) => ({
            id: item.id,
            type: 'photo',
            title: item.alt_description,
            src: item.urls.full
          }))
        }

        if (activeTabs === 'videos') {
          const response = await fetchVideos(query)

          data = response.map((item) => ({
            id: item.id,
            type: 'video',
            title: item.user.name || 'Video',
            src: item.video_files[0].link
          }))
        }

        if (activeTabs === 'gif') {
          const response = await fetchGIF(query)

          data = response.map((item) => ({
            id: item.id,
            type: 'gif',
            title: item.content_description || 'GIF',
            src: item.media_formats.gif.url
          }))
        }

        dispatch(setResults(data))
      } catch (err) {
        dispatch(setError(err.message))
      }
    }

    getData()
  }, [query, activeTabs])

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>{error}</h1>

  return (
    <div className="flex flex-wrap gap-6 justify-center px-10 py-8 bg-gray-100 min-h-screen">
      {results.map((item) => (
        <ResultCard key={item.id} item={item} />
      ))}
    </div>
  )
}