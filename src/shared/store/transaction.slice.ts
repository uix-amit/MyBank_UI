import { createSlice } from '@reduxjs/toolkit';

const transactionSlice = createSlice({
  initialState: {
    FromAccountID: '',
    ToAccountID: '',
    Amount: 0,
  },
  name: 'transaction',
  reducers: {
    createTransaction: (_, action) => {
      return action.payload;
    },
  },
  selectors: {
    getTransaction: (state) => {
      return state;
    },
  },
});
export const { createTransaction } = transactionSlice.actions;
export const { getTransaction } = transactionSlice.selectors;
export default transactionSlice.reducer;
