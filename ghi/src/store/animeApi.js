import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const animeApi = createApi ({
    reducerPath: 'animequeue',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000',
    }),
    endpoints: builder => ({
        getAnime: builder.query({
            query: () => `/anime_list/0`,
        }),
    }),
});

export const { useGetAnimeQuery } = animeApi;
