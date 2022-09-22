import { createSlice } from '@reduxjs/toolkit';

export const stateSlice = createSlice({
  name: 'state',
  initialState: {
    dateState: '',
  },
  reducers: {
    setState: (state, action) => {
      state.dateState = action.payload;
    },
  },
});

export const { setState } = stateSlice.actions;

export default stateSlice.reducer;
