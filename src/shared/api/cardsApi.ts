import { createApi } from '@reduxjs/toolkit/query/react';

import { CreateCardDto, UpdateCardDto } from '@shared/models';
import { CardList } from '@shared/models/card-list.dto';
import { baseQuery } from './baseQuery';
import notificationsApi from './notificationsApi';

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery,
  tagTypes: ['Card'],
  endpoints: (builder) => ({
    getCards: builder.query<CardList, void>({
      query: () => '/cards',
      providesTags: ['Card'],
    }),

    getCardById: builder.query<UpdateCardDto, string>({
      query: (cardId) => `/cards/${cardId}`,
      providesTags: (_result, _error, cardId) => [{ type: 'Card', id: cardId }],
    }),

    createCard: builder.mutation<CreateCardDto, CreateCardDto>({
      query: (body) => ({
        url: '/cards',
        method: 'POST',
        body,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
        } catch (error) {
          console.error(error);
        }

        dispatch(notificationsApi.util.invalidateTags([{ type: 'Notification' }]));
      },
      invalidatesTags: ['Card'],
    }),

    updateCard: builder.mutation<UpdateCardDto, UpdateCardDto>({
      query: (body) => ({
        url: `/cards/${body.CardID}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (_result, _error, { CardID }) => [{ type: 'Card', id: CardID }],
    }),

    deleteCard: builder.mutation<void, string>({
      query: (cardId) => ({
        url: `/cards/${cardId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, cardId) => [{ type: 'Card', id: cardId }],
    }),
  }),
});

export default cardsApi;
