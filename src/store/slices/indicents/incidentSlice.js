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

export const fetchIncident = () => {
  return (dispatch) => {
    fetch(`http://kpi.syncronik.com/api/incidents/get-incidents-kpi/`)
      .then((response) => response.json())
      .then((json) => dispatch(setIncidentList(json)));
  };
};
