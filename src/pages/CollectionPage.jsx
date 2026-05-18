import React from 'react'
import { useSelector } from 'react-redux'

export default function CollectionPage() {
  const collection = useSelector((state) => state.collection.items)
  return (
    <div>
      {collection.map((item,idx) => {
        return <div key={idx}>{item.title}</div>
      })}
    </div>
  )
}
