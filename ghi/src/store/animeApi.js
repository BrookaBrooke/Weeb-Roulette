import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const animeApi = createApi ({
    redcuerPath: 'anime',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000',
    }),
    endpoints: builder => ({
        getAnime: builder.query({
            query: () => '/anime_list',
        }),
    }),
});

export const { useGetAnimeQuery} = animeApi;