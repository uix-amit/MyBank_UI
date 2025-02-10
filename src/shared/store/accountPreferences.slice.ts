import { createSlice } from '@reduxjs/toolkit';
import { UpdateAccountPreferencesDto } from '@shared/models';

const initialState: UpdateAccountPreferencesDto = {
  AccountPreferenceID: '',
  UserID: '',
};

const accountPreferencesSlice = createSlice({
  name: 'accountPreferences',
  initialState,
  reducers: {
    loadAccountPreferences: (state, action) => ({ ...state, ...action.payload }),
  },
  selectors: {
    getAccountPreferences: (state) => state,
  },
});

export const { loadAccountPreferences } = accountPreferencesSlice.actions;
export const { getAccountPreferences } = accountPreferencesSlice.selectors;

export default accountPreferencesSlice.reducer;
