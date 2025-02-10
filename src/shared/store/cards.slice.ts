import { createSlice } from '@reduxjs/toolkit';
import { CardList } from '@shared/models/card-list.dto';

const initialState: CardList[] = [];

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    loadCards: (_, action) => action.payload,
    addCard: (state, action) => [...state, action.payload],
  },
  selectors: {
    getCards: (state) => state,
  },
});

export const { loadCards, addCard } = cardSlice.actions;
export const { getCards } = cardSlice.selectors;

export default cardSlice.reducer;
