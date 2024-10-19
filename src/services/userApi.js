import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getUserApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  reducerPath: 'userApi',
  endpoints: (build) => ({
    getUserByName: build.query({
      query: (name) => `users`,
    }),
  }),
})

export const { useGetUserByNameQuery } = getUserApi