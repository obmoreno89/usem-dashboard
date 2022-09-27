import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './slices/login/loginSlice';

import stateSlice from './slices/state/stateSlice';
import { incidentApi } from './apis/incidientApi';
import { accidentApi } from './apis/accidentApi';

export const store = configureStore({
  reducer: {
    login: loginSlice,
    state: stateSlice,

    [incidentApi.reducerPath]: incidentApi.reducer,
    [accidentApi.reducerPath]: accidentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(incidentApi.middleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(accidentApi.middleware),
});
