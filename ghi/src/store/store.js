import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { animeApi } from './animeApi';
import { myListApi } from './myList';

export const store = configureStore({
  reducer: {
    [animeApi.reducerPath] : animeApi.reducer,
    [myListApi.reducerPath] : myListApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(animeApi.middleware)
      .concat(myListApi.middleware)
})

setupListeners(store.dispatch)
