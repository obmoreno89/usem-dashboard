import { createSlice } from '@reduxjs/toolkit';

let fecha = ['2022-10-01', 'to', '2022-10-29'];

let lastDate = new Date();

let year = lastDate.toLocaleString('default', { year: 'numeric' });
let month = lastDate.toLocaleString('default', { month: '2-digit' });
let day = lastDate.toLocaleString('default', { day: '2-digit' });

let formattedDate = year + '-' + month + '-' + day;

let firstDate = new Date();
firstDate.setDate(firstDate.getDate() - 7);

let years = firstDate.toLocaleString('default', { year: 'numeric' });
let months = firstDate.toLocaleString('default', { month: '2-digit' });
let days = firstDate.toLocaleString('default', { day: '2-digit' });

let formattedDates = years + '-' + months + '-' + days;

const dateRange = [formattedDates, 'to', formattedDate];

export const stateSlice = createSlice({
  name: 'state',
  initialState: {
    dateState: dateRange,
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
