import { createSlice, nanoid } from '@reduxjs/toolkit';

import { Toast } from '@shared/models/toast';

const initialState: Toast[] = [];

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToastMessage: (state, action) => [
      ...state,
      {
        message: action.payload.message,
        id: nanoid(),
        timeout: action.payload.timeout || 3,
        type: action.payload.type || 'success',
      },
    ],
    removeToastMessage: (state, action) => state.filter(({ id }) => id !== action.payload),
  },
  selectors: {
    getToastMessages: (state) => state,
  },
});

export const { addToastMessage, removeToastMessage } = toastSlice.actions;
export const { getToastMessages } = toastSlice.selectors;

export default toastSlice.reducer;
