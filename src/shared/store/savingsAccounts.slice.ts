import { createSlice } from '@reduxjs/toolkit';
import { UpdateAccountDto } from '@shared/models';

const initialState: Array<UpdateAccountDto & { Bank: { BankName: string } }> = [];

const savingsAccountSlice = createSlice({
  name: 'savingsAccount',
  initialState,
  reducers: {
    loadSavingsAccounts: (_, action) => action.payload,
    addSavingsAccounts: (state, action) => [...state, action.payload],
  },
  selectors: {
    getAllSavingsAccounts: (state) => state,
  },
});

export const { loadSavingsAccounts, addSavingsAccounts } = savingsAccountSlice.actions;
export const { getAllSavingsAccounts } = savingsAccountSlice.selectors;

export default savingsAccountSlice.reducer;
