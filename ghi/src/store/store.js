// import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
// import { accountSlice } from './accountSlice';

// export const store = configureStore({
//     reducer: {
//         [accountSlice.reducerPath]: accountSlice.reducer,
//     },
//     middleware: getDefaultMiddleware => {
//         return getDefaultMiddleware()
//             .concat(accountSlice.middleware)
//     }
// })

// setupListeners(store.dispatch)

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

