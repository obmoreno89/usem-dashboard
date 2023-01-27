import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './slices/login/loginSlice';
import stateSlice from './slices/state/stateSlice';

import { incidentApi } from './apis/incidientApi';
import { accidentApi } from './apis/accidentApi';
import { apiPieces } from './apis/apiPieces';
import { downtimeApi } from './apis/downtimeApi';
import { recentRecordApi } from './apis/recentRecordApi';
import { operationTimeApi } from './apis/operationTimeApi';
import { headcountApi } from './apis/headcountApi';
import { businessUnityApi } from './apis/businessUnityApi';
import { paramNameBusinessUnityApi } from './apis/paramNameBusinessUnityApi';
import { lineNumberApi } from './apis/lineNumberApi';

export const store = configureStore({
  reducer: {
    login: loginSlice,
    state: stateSlice,

    [incidentApi.reducerPath]: incidentApi.reducer,
    [accidentApi.reducerPath]: accidentApi.reducer,
    [apiPieces.reducerPath]: apiPieces.reducer,
    [downtimeApi.reducerPath]: downtimeApi.reducer,
    [recentRecordApi.reducerPath]: recentRecordApi.reducer,
    [operationTimeApi.reducerPath]: operationTimeApi.reducer,
    [headcountApi.reducerPath]: headcountApi.reducer,
    [businessUnityApi.reducerPath]: businessUnityApi.reducer,
    [paramNameBusinessUnityApi.reducerPath]: paramNameBusinessUnityApi.reducer,
    [lineNumberApi.reducerPath]: lineNumberApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      incidentApi.middleware,
      accidentApi.middleware,
      apiPieces.middleware,
      downtimeApi.middleware,
      recentRecordApi.middleware,
      operationTimeApi.middleware,
      headcountApi.middleware,
      paramNameBusinessUnityApi.middleware,
      lineNumberApi.middleware,
    ]),
});
