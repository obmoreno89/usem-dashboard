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
  },
});

export const { startLoading, finishLoading, handleEye, handleErrorLogin } =
  loginSlice.actions;

export default loginSlice.reducer;
