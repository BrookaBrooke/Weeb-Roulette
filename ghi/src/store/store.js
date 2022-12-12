import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { animeApi } from './animeApi';
import { accountSlice } from './accountSlice';
import { authApiSlice } from './authApi';

export const store = configureStore({
  reducer: {
    [animeApi.reducerPath] : animeApi.reducer,
    [accountSlice.name] : accountSlice.reducer,
    [authApiSlice.reducerPath] : authApiSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware()
    .concat(animeApi.middleware)
    .concat(authApiSlice.middleware);
  },
});

setupListeners(store.dispatch)
