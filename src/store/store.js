import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './slices/login/loginSlice';
import accidentsSlice from './slices/accidents/accidentsSlice';
import incidentSlice from './slices/indicents/incidentSlice';
import stateSlice from './slices/state/stateSlice';

export const store = configureStore({
  reducer: {
    login: loginSlice,
    accidents: accidentsSlice,
    incidents: incidentSlice,
    state: stateSlice,
  },
});
