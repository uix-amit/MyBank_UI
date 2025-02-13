import { configureStore } from '@reduxjs/toolkit';

import accountPreferencesSlice from './accountPreferences.slice';
import banksSlice from './banks.slice';
import cardsSlice from './cards.slice';
import headerSlice from './header.slice';
import loanAccountsSlice from './loanAccounts.slice';
import loanTransactionsSlice from './loanTransactions.slice';
import notificationsSlice from './notifications.slice';
import savingsAccountsSlice from './savingsAccounts.slice';
import transactionSlice from './transaction.slice';
import userSlice from './users.slice';

export const store = configureStore({
  reducer: {
    accountPreferences: accountPreferencesSlice,
    banks: banksSlice,
    cards: cardsSlice,
    header: headerSlice,
    loanAccounts: loanAccountsSlice,
    loanTransactions: loanTransactionsSlice,
    notifications: notificationsSlice,
    savingsAccounts: savingsAccountsSlice,
    transactions: transactionSlice,
    user: userSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
