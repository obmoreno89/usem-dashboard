import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './slices/login/loginSlice';
import accidentsSlice from './slices/accidents/accidentsSlice';

export const store = configureStore({
  reducer: {
    login: loginSlice,
    accidents: accidentsSlice,
  },
});
