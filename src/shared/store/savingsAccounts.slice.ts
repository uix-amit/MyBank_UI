import { createSlice } from '@reduxjs/toolkit';
import { UpdateAccountDto } from '@shared/models';

const initialState: Array<UpdateAccountDto & { Bank: { BankName: string } }> = [];

const savingsAccountSlice = createSlice({
  name: 'savingsAccounts',
  initialState,
  reducers: {
    loadSavingsAccounts: (_, action) => action.payload,
    addSavingsAccounts: (state, action) => [...state, action.payload],
  },
  selectors: {
    getAllSavingsAccounts: (state) => state,
    getSavingsAccountsAsOption: (state) =>
      state.map(({ AccountID, AccountNumber }) => ({
        value: AccountID,
        label: AccountNumber,
      })),
  },
});

export const { loadSavingsAccounts, addSavingsAccounts } = savingsAccountSlice.actions;
export const { getAllSavingsAccounts, getSavingsAccountsAsOption } = savingsAccountSlice.selectors;

export default savingsAccountSlice.reducer;
