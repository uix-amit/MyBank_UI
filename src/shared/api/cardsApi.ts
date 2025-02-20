import { createApi } from '@reduxjs/toolkit/query/react';

import { CreateCardDto, UpdateCardDto } from '@shared/models';
import { CardList } from '@shared/models/card-list.dto';
import { addToastMessage } from '@shared/store/toast.slice';
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

    createCard: builder.mutation<{ message: string }, CreateCardDto>({
      query: (body) => ({
        url: '/cards',
        method: 'POST',
        body,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const {
            data: { message },
          } = await queryFulfilled;
          dispatch(addToastMessage({ message }));
          dispatch(notificationsApi.util.invalidateTags([{ type: 'Notification' }]));
        } catch (error) {
          console.error(error);
        }
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
