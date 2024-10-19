import { configureStore } from '@reduxjs/toolkit'
import { getUserApi } from './services/userApi'
import postSlice from './slices/postSlice'

export const store = configureStore({
  reducer: {
    posts: postSlice,
    [getUserApi.reducerPath]: getUserApi.reducer,
  },
  middleware: (gDM) => gDM().concat(getUserApi.middleware),
})