import { createSlice, nanoid } from '@reduxjs/toolkit';

import { Toast } from '@shared/models/toast';

const initialState: Toast[] = [];

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToastMessage: (state, action) => [...state, { ...action.payload, id: nanoid() }],
    removeToastMessage: (state, action) => state.filter(({ id }) => id !== action.payload),
  },
  selectors: {
    getToastMessages: (state) => state,
  },
});

export const { addToastMessage, removeToastMessage } = toastSlice.actions;
export const { getToastMessages } = toastSlice.selectors;

export default toastSlice.reducer;
