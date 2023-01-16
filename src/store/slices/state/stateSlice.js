import { createSlice } from '@reduxjs/toolkit';

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

const initialState = {
  dateState: dateRange,
  lineNumber: null,
  lineNumberName: null,
  nameBusinessUnity: null,
  idNameBusinessUnity: null,
  nameBU: null,
};

export const stateSlice = createSlice({
  initialState,
  name: 'state',
  reducers: {
    setState: (state, action) => {
      state.dateState = action.payload;
    },
    setLineNumber: (state, action) => {
      state.lineNumber = action.payload;
    },
    setLineNumberName: (state, action) => {
      state.lineNumberName = action.payload;
    },
    setNameBusinessUnity: (state, action) => {
      state.nameBusinessUnity = action.payload;
    },
    setIdNameBusinessUnity: (state, action) => {
      state.idNameBusinessUnity = action.payload;
    },
    setNameBU: (state, action) => {
      state.nameBU = action.payload;
    },
  },
});

export const {
  setState,
  setLineNumber,
  setNameBusinessUnity,
  setIdNameBusinessUnity,
  setNameBU,
  setLineNumberName,
} = stateSlice.actions;

export default stateSlice.reducer;
