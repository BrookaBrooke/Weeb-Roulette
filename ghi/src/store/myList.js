import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const myListApi = createApi ({
    reducerPath: 'animequeue',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000',
    }),
    endpoints: builder => ({
        getLists: builder.query({
            query: () => `/anime_queues/639256a9d393f6555302ac52`,
        }),
    }),
});

export const { useGetListsQuery } = myListApi;
