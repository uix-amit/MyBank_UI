import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  FromAccountID: string;
  ToAccountID: string;
  Amount: number;
} = {
  FromAccountID: '',
  ToAccountID: '',
  Amount: 0,
};

const loanTransactionSlice = createSlice({
  name: 'loanTransaction',
  initialState,
  reducers: {
    createLoanTransaction: (state, action) => ({
      ...state,
      ...action.payload
    })
  },
  selectors: {
    getLoanTransaction: (state) => state
  }
});

export const { createLoanTransaction } = loanTransactionSlice.actions;
export const { getLoanTransaction } = loanTransactionSlice.selectors;

export default loanTransactionSlice.reducer;
