import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    setFilterString(state, action) {
      return action.payload;
    },
  },
});

export const { setFilterString } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
