import { createSlice } from '@reduxjs/toolkit';
import { Bank } from '@shared/models/banks-dto';

const initialState: Bank[] = [];

const bankSlice = createSlice({
  name: 'banks',
  initialState,
  reducers: {
    loadBanks: (_, action) => action.payload,
  },
  selectors: {
    getBanks: (state) => state,
  },
});

export const { loadBanks } = bankSlice.actions;
export const { getBanks } = bankSlice.selectors;

export default bankSlice.reducer;
