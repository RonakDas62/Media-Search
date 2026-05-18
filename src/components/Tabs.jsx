// import React, { use } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { setActiveTabs } from '../redux/feature/searchSlice';



// export default function Tabs() {
//     const tabs = ['photos', 'videos', 'gifs']

//     const dispatch = useDispatch()

//     const activeTab = useSelector((state) => state.search.activeTab)

//   return (
//     <div>
//       {tabs.map((function(elem,idx){
//         return <button className={`${(activeTab === elem?'bg-blue-700':'bg-gray-500')} `}
//             key={idx}
//             onClick={()=>{
//                 dispatch(setActiveTabs(elem))
//             }}
//             >{elem}</button>
//       })}
//     </div>
//   )
// }



import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/feature/searchSlice'

export default function Tabs() {
  const tabs = ['photos', 'videos', 'gif']

  const dispatch = useDispatch()

  const activeTab = useSelector((state) => state.search.activeTabs)

  return (
    <div className="flex justify-center gap-4 mt-6">
      {tabs.map((elem, idx) => {
        return (
          <button
            key={idx}
            onClick={() => {
              dispatch(setActiveTabs(elem))
            }}
            className={`px-6 py-2 rounded-xl text-white font-semibold transition duration-300
              ${
                activeTab === elem
                  ? 'bg-blue-700 scale-105'
                  : 'bg-gray-500 hover:bg-gray-600'
              }`}
          >
            {elem}
          </button>
        )
      })}
    </div>
  )
}