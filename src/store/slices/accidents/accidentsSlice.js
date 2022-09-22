import { createSlice } from '@reduxjs/toolkit';

export const accidentsSlice = createSlice({
  name: 'accidents',
  initialState: {
    accidentList: [],
  },
  reducers: {
    setAccidentList: (state, action) => {
      state.accidentList = action.payload;
    },
  },
});

export const { setAccidentList } = accidentsSlice.actions;

export default accidentsSlice.reducer;

export const fetchAccident = () => {
  return (dispatch) => {
    fetch('http://kpi.syncronik.com/api/accidents/all/')
      .then((response) => response.json())
      .then((json) => dispatch(setAccidentList(json)));
  };
};
