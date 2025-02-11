import { createSlice } from '@reduxjs/toolkit';
import { CardList } from '@shared/models/card-list.dto';

const initialState: CardList = {
  Accounts: [],
  FirstName: '',
  LastName: '',
};

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    loadCards: (state, action) => ({ ...state, ...action.payload }),
    addCard: (state, action) => ({ ...state, Accounts: [...state.Accounts, action.payload] }),
  },
  selectors: {
    getCards: (state) => state,
  },
});

export const { loadCards, addCard } = cardSlice.actions;
export const { getCards } = cardSlice.selectors;

export default cardSlice.reducer;
