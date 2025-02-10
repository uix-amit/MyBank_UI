import { createSlice } from '@reduxjs/toolkit';
import { UpdateLoanDto } from '@shared/models';

const initialState: Array<UpdateLoanDto & { Bank: { BankName: string } }> = [];

const loanAccountSlice = createSlice({
  name: 'loanAccounts',
  initialState,
  reducers: {
    loadLoanAccounts: (_, action) => action.payload,
    addLoanAccount: (state, action) => [...state, action.payload],
  },
  selectors: {
    getAllLoanAccounts: (state) => state,
  },
});

export const { loadLoanAccounts, addLoanAccount } = loanAccountSlice.actions;
export const { getAllLoanAccounts } = loanAccountSlice.selectors;

export default loanAccountSlice.reducer;
