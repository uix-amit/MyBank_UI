import { configureStore } from '@reduxjs/toolkit';

import accountPreferencesApi from '@shared/api/accountPreferencesApi';
import cardsApi from '@shared/api/cardsApi';
import loanTransactionsApi from '@shared/api/loanTransactionsApi';
import loansApi from '@shared/api/loansApi';
import notificationsApi from '@shared/api/notificationsApi';
import savingsAccountApi from '@shared/api/savingsAccountApi';
import transactionsApi from '@shared/api/transactionsApi';
import { userApi } from '@shared/api/userApi';
import banksSlice from './banks.slice';
import headerSlice from './header.slice';
import loanAccountsSlice from './loanAccounts.slice';
import toastSlice from './toast.slice';

export const store = configureStore({
  reducer: {
    banks: banksSlice,
    header: headerSlice,
    loanAccounts: loanAccountsSlice,
    toast: toastSlice,
    [userApi.reducerPath]: userApi.reducer,
    [notificationsApi.reducerPath]: notificationsApi.reducer,
    [savingsAccountApi.reducerPath]: savingsAccountApi.reducer,
    [accountPreferencesApi.reducerPath]: accountPreferencesApi.reducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
    [loansApi.reducerPath]: loansApi.reducer,
    [transactionsApi.reducerPath]: transactionsApi.reducer,
    [loanTransactionsApi.reducerPath]: loanTransactionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      notificationsApi.middleware,
      savingsAccountApi.middleware,
      accountPreferencesApi.middleware,
      cardsApi.middleware,
      loansApi.middleware,
      transactionsApi.middleware,
      loanTransactionsApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
