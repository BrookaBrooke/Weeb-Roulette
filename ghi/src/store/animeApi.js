import { createApi } from '@reduxjs/toolkit/query/react'

export const animeApi = createApi ({
    reducerPath: 'anime',
    baseQuery: process.env.REACT_APP_DJANGO_API,
    endpoints: builder => ({
        getAnime: builder.query({
            query: () => '/anime_list/0',
        }),
    }),
});

export const { useGetAnimeQuery} = animeApi;
