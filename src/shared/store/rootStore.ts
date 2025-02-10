import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../../counter.slice';
import accountPreferencesSlice from './accountPreferences.slice';
import banksSlice from './banks.slice';
import cardsSlice from './cards.slice';
import headerSlice from './header.slice';
import loanAccountsSlice from './loanAccounts.slice';
import loanTransactionsSlice from './loanTransactions.slice';
import notificationsSlice from './notifications.slice';
import savingsAccountsSlice from './savingsAccounts.slice';
import transactionSlice from './transaction.slice';
import usersSlice from './users.slice';

export const store = configureStore({
  reducer: {
    accountPreferences: accountPreferencesSlice,
    banks: banksSlice,
    cards: cardsSlice,
    counter: counterReducer,
    header: headerSlice,
    loanAccounts: loanAccountsSlice,
    loanTransactions: loanTransactionsSlice,
    notifications: notificationsSlice,
    savingsAccounts: savingsAccountsSlice,
    transactions: transactionSlice,
    users: usersSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
