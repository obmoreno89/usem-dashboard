import { createSlice } from '@reduxjs/toolkit';

export const stateSlice = createSlice({
  name: 'state',
  initialState: {
    dateState: ['2022-10-01', 'to', '2022-10-29'],
    lineNumber: 1,
  },
  reducers: {
    setState: (state, action) => {
      state.dateState = action.payload;
    },
    setLineNumber: (state, action) => {
      state.lineNumber = action.payload;
    },
  },
});

export const { setState, setLineNumber } = stateSlice.actions;

export default stateSlice.reducer;
