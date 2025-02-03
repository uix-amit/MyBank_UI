import { createSlice } from '@reduxjs/toolkit';

const headerSlice = createSlice({
  name: 'header',
  initialState: {
    title: 'Dashboard',
  },
  reducers: {
    setTitle: (state, action) => ({
      ...state,
      title: action.payload,
    }),
  },
  selectors: {
    getTitle: (state) => state.title,
  },
});

export const { setTitle } = headerSlice.actions;
export const { getTitle } = headerSlice.selectors;
export default headerSlice.reducer;
