import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos,fetchGIF } from '../API/mediaAPI'
import { setQuery, setLoading, setError, setResults } from '../redux/feature/searchSlice'
import { useEffect } from 'react'
import ResultCard from './ResultCard'


export default function ResultGrid() {

    const dispatch = useDispatch()

    const { query, activeTabs, results, loading, error } = useSelector((state) => state.search)

    useEffect(() => {
        if(!query) return 

    const getData = async () => {
        try{
            dispatch(setLoading())

        let data = []
        if (activeTabs === 'photos') {
            let response = await fetchPhotos(query)
            data = response.map((item) => ({
                id: item.id,
                type: 'photo',
                title: item.alt_description,
                thumbnail: item.urls.small,
                src: item.urls.full
            }))
        }
        if (activeTabs === 'videos') {
            let response = await fetchVideos(query)
            data = response.map((item) => ({
                id: item.id,
                type: 'video',
                title: item.user.name || 'video',
                thumbnail: item.image,
                src: item.video_files[0].link
            }))
        }
        if (activeTabs === 'gifs') {
            let response = await fetchGIF(query)
            data = response.data.results.map((item) => ({
                id: item.id,
                type: 'gif',
                title: item.title,
                thumbnail: item.media[0].gif,
                src: item.media[0].gif
            }))
        }
        dispatch(setResults(data))

        }
        catch(err){
            dispatch(setError(err.message))
        }
    }
    getData()   
    }, [query, activeTabs])

    if(error) return <h1>Error</h1>
    if(loading) return <h1>Loading...</h1>

return (
  <div className="flex flex-wrap gap-6 overflow-auto px-10 py-8 justify-center bg-gray-100 min-h-screen">
    {results.map((item) => {
      return (
        <div key={item.id}>
          <ResultCard item={item} />
        </div>
      )
    })}
  </div>
)
}
