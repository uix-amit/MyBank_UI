import { configureStore } from '@reduxjs/toolkit';

import notificationsApi from '@shared/api/notificationsApi';
import savingsAccountApi from '@shared/api/savingsAccountApi';
import { userApi } from '@shared/api/userApi';
import accountPreferencesSlice from './accountPreferences.slice';
import banksSlice from './banks.slice';
import cardsSlice from './cards.slice';
import headerSlice from './header.slice';
import loanAccountsSlice from './loanAccounts.slice';
import loanTransactionsSlice from './loanTransactions.slice';
import toastSlice from './toast.slice';
import transactionSlice from './transaction.slice';

export const store = configureStore({
  reducer: {
    accountPreferences: accountPreferencesSlice,
    banks: banksSlice,
    cards: cardsSlice,
    header: headerSlice,
    loanAccounts: loanAccountsSlice,
    loanTransactions: loanTransactionsSlice,
    toast: toastSlice,
    transactions: transactionSlice,
    [userApi.reducerPath]: userApi.reducer,
    [notificationsApi.reducerPath]: notificationsApi.reducer,
    [savingsAccountApi.reducerPath]: savingsAccountApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      notificationsApi.middleware,
      savingsAccountApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
