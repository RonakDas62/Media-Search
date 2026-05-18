// import React from 'react'
// import { useState } from 'react'

// export default function SearchBar() {
//     const [text, setText] = useState('');

//     const submitHandler = (e) => {
//         e.preventDefault();
//         console.log(text);

//         setText('');
//     }

//   return (
//     <div>
//       <form onSubmit={(e) => submitHandler(e)}>
//         <input
//             value={text}
//             onChange={(e) => {
//                 setText(e.target.value)
//             }}
//          required type="text" placeholder="Search here..." />
//         <button>Search</button>
//       </form>
//     </div>
//   )
// }



import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import  {setQuery}    from '../redux/feature/searchSlice';

export default function SearchBar() {
  const [text, setText] = useState('')

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(setQuery(text))

    setText('')
  }

  return (
    <div className="flex justify-center items-center min-h-[200px] bg-gray-100">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex gap-3 bg-white p-5 rounded-2xl shadow-lg"
      >
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
          required
          type="text"
          placeholder="Search here..."
          className="border border-gray-300 px-4 py-2 rounded-lg outline-none w-72 focus:ring-2 focus:ring-blue-400"
        />

        <button
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>
    </div>
  )
}