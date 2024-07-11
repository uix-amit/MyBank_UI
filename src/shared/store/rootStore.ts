import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../../counter.slice';
import headerSlice from './header.slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    header: headerSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
