import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

const initialState = {
  items: JSON.parse(localStorage.getItem("collectionItems")) || []
}

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addToCollection: (state, action) => {
      const alreadyExists = state.items.find(
        item => item.id === action.payload.id
      )

      if (!alreadyExists) {
        state.items.push(action.payload)

        localStorage.setItem(
          "collectionItems",
          JSON.stringify(state.items)
        )

        toast.success('Added to collection', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Zoom,
        })
      } else {
        toast.info('Already in collection', {
          position: "top-right",
          autoClose: 2000,
          theme: "dark",
          transition: Zoom,
        })
      }
    },

    removeCollection: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      )

      localStorage.setItem(
        "collectionItems",
        JSON.stringify(state.items)
      )

      toast.error('Removed from collection', {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
        transition: Zoom,
      })
    },

    clearCollection: (state) => {
      state.items = []
      localStorage.removeItem("collectionItems")

      toast.warn('Collection cleared', {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
        transition: Zoom,
      })
    }
  }
})

export const {
  addToCollection,
  removeCollection,
  clearCollection
} = collectionSlice.actions

export default collectionSlice.reducer