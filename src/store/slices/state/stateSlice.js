import { createSlice } from '@reduxjs/toolkit';

export const stateSlice = createSlice({
  name: 'state',
  initialState: {
    dateState: ['2022-09-01', 'to', '2022-09-30'],
  },
  reducers: {
    setState: (state, action) => {
      state.dateState = action.payload;
    },
  },
});

export const { setState } = stateSlice.actions;

export default stateSlice.reducer;
