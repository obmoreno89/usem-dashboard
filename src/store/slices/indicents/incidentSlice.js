import { createSlice } from '@reduxjs/toolkit';

export const inicidentSlice = createSlice({
  name: 'inicidents',
  initialState: {
    incidentList: [],
  },
  reducers: {
    setIncidentList: (state, action) => {
      state.incidentList = action.payload;
    },
  },
});

export const { setIncidentList } = inicidentSlice.actions;

export default inicidentSlice.reducer;
