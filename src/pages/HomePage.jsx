import React from 'react'

import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { store } from '../redux/store'
import { useSelector } from 'react-redux'

export default function HomePage() {

    const {query} = useSelector((store) => store.search)

  return (
    <div>
      
        <SearchBar />

        {query != '' ? <div>
            <Tabs />
            <ResultGrid />
        </div> : ''}
    </div>
  )
}
