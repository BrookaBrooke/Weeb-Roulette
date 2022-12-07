import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
// import { accountSlice } from './accountSlice';
import { animeApi } from './animeApi';

export const store = configureStore({
    reducer: {
        [animeApi.reducerPath]: animeApi.reducer,
        // [accountSlice.reducerPath]: accountSlice.reducer,
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware()
            .concat(animeApi.middleware)
    }
})

setupListeners(store.dispatch)
