import { configureStore } from '@reduxjs/toolkit';

import accountPreferencesApi from '@shared/api/accountPreferencesApi';
import cardsApi from '@shared/api/cardsApi';
import notificationsApi from '@shared/api/notificationsApi';
import savingsAccountApi from '@shared/api/savingsAccountApi';
import { userApi } from '@shared/api/userApi';
import banksSlice from './banks.slice';
import headerSlice from './header.slice';
import loanAccountsSlice from './loanAccounts.slice';
import loanTransactionsSlice from './loanTransactions.slice';
import toastSlice from './toast.slice';
import transactionSlice from './transaction.slice';

export const store = configureStore({
  reducer: {
    banks: banksSlice,
    header: headerSlice,
    loanAccounts: loanAccountsSlice,
    loanTransactions: loanTransactionsSlice,
    toast: toastSlice,
    transactions: transactionSlice,
    [userApi.reducerPath]: userApi.reducer,
    [notificationsApi.reducerPath]: notificationsApi.reducer,
    [savingsAccountApi.reducerPath]: savingsAccountApi.reducer,
    [accountPreferencesApi.reducerPath]: accountPreferencesApi.reducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      notificationsApi.middleware,
      savingsAccountApi.middleware,
      accountPreferencesApi.middleware,
      cardsApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
