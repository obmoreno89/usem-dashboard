import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: { loading: false, eye: false, errorLogin: false },

  reducers: {
    startLoading: (state, action) => {
      state.loading = true;
    },
    finishLoading: (state, action) => {
      state.loading = false;
    },
    handleEye: (state, action) => {
      state.eye = true;
    },
    handleErrorLogin: (state, action) => {
      state.errorLogin = true;
    },
    handleErrorLoginClosed: (state, action) => {
      state.errorLogin = false;
    },
  },
});

export const {
  startLoading,
  finishLoading,
  handleEye,
  handleErrorLogin,
  handleErrorLoginClosed,
} = loginSlice.actions;

export default loginSlice.reducer;
