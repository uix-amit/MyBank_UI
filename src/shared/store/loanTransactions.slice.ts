import { createSlice } from '@reduxjs/toolkit';

import { UpdateLoanTransactionDto } from '@shared/models';

const initialState: {
  transactions: UpdateLoanTransactionDto[];
  activeTransaction: {
    FromAccountID: string;
    ToAccountID: string;
    Amount: number;
  };
} = {
  transactions: [],
  activeTransaction: {
    FromAccountID: '',
    ToAccountID: '',
    Amount: 0,
  },
};

const loanTransactionsSlice = createSlice({
  name: 'loanTransactions',
  initialState,
  reducers: {
    loadLoanTransactions: (state, action) => ({ ...state, transactions: action.payload }),
    initLoanTransaction: (state, action) => ({
      ...state,
      activeTransaction: action.payload,
    }),
    addTransaction: (state, action) => ({
      ...state,
      transactions: [...state.transactions, ...action.payload],
    }),
  },
  selectors: {
    getActiveLoanTransaction: (state) => state.activeTransaction,
    getLoanTransactions: (state) => state.transactions,
  },
});

export const { loadLoanTransactions, initLoanTransaction, addTransaction } =
  loanTransactionsSlice.actions;
export const { getLoanTransactions, getActiveLoanTransaction } = loanTransactionsSlice.selectors;

export default loanTransactionsSlice.reducer;
