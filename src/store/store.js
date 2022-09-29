import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './slices/login/loginSlice';

import stateSlice from './slices/state/stateSlice';
import { incidentApi } from './apis/incidientApi';
import { accidentApi } from './apis/accidentApi';
import { apiPieces } from './apis/apiPieces';
import { downtimeApi } from './apis/downtimeApi';
import { recentRecordApi } from './apis/recentRecordApi';

export const store = configureStore({
  reducer: {
    login: loginSlice,
    state: stateSlice,

    [incidentApi.reducerPath]: incidentApi.reducer,
    [accidentApi.reducerPath]: accidentApi.reducer,
    [apiPieces.reducerPath]: apiPieces.reducer,
    [downtimeApi.reducerPath]: downtimeApi.reducer,
    [recentRecordApi.reducerPath]: recentRecordApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(incidentApi.middleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(accidentApi.middleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiPieces.middleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(downtimeApi.middleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recentRecordApi.middleware),
});
