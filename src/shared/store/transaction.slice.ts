import { createSlice } from '@reduxjs/toolkit';
import { UpdateTransactionDto } from '@shared/models';

const initialState: {
  transactions: UpdateTransactionDto[];
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
const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    loadTransactions: (state, action) => ({ ...state, transactions: action.payload }),
    initTransaction: (state, action) => ({
      ...state,
      activeTransaction: action.payload,
    }),
    addTransaction: (state, action) => ({
      ...state,
      transactions: [...state.transactions, ...action.payload],
    }),
  },
  selectors: {
    getActiveTransaction: (state) => state.activeTransaction,
    getTransactions: (state) => state.transactions,
  },
});

export const { loadTransactions, initTransaction, addTransaction } = transactionSlice.actions;
export const { getTransactions, getActiveTransaction } = transactionSlice.selectors;
export default transactionSlice.reducer;
