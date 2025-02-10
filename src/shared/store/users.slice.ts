import { createSlice } from '@reduxjs/toolkit';
import { UpdateUserDto } from '@shared/models';

const initialState: UpdateUserDto = {
  UserID: '',
  UserName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadUser: (state, action) => ({ ...state, ...action.payload }),
  },
  selectors: {
    getUser: (state) => state,
  },
});

export const { loadUser } = userSlice.actions;
export const { getUser } = userSlice.selectors;

export default userSlice.reducer;
