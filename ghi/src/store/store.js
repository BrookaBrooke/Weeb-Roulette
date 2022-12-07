import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { animeApi } from './animeApi';

export const store = configureStore({
  reducer: {
    [animeApi.reducerPath] : animeApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(animeApi.middleware),
})

setupListeners(store.dispatch)
