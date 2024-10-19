import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

  // Define a thunk that dispatches those action creators

 export const fetchPosts = createAsyncThunk(
    'adgroup/getAll',
    async () => {
      try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/1/posts`)
        return data
      } catch (error) {
        console.log({error})
      }
    }
  )

const postSlice = createSlice({
    name: 'posts',
    initialState: {
      loading: 'idle',
      posts: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
            state.posts = payload
        })
      },
  })
  
export default postSlice.reducer
  