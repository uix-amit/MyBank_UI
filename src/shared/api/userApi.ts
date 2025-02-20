import { createApi } from '@reduxjs/toolkit/query/react';

import { CreateUserDto, UpdateUserDto } from '@shared/models';
import { baseQuery } from './baseQuery';
import notificationsApi from './notificationsApi';
import { addToastMessage } from '@shared/store/toast.slice';

export const userApi = createApi({
  reducerPath: 'user',
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({
    // Get user
    getUser: builder.query<UpdateUserDto, void>({
      query: () => '/users',
      providesTags: ['User'],
    }),

    // Create a new user
    createUser: builder.mutation<CreateUserDto, CreateUserDto>({
      query: (body) => ({
        url: '/users',
        method: 'POST',
        body,
      }),
    }),

    // Update an existing user
    updateUser: builder.mutation<{ message: string }, UpdateUserDto>({
      query: (body) => ({
        url: `/users/${body.UserID}`,
        method: 'PATCH',
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
      invalidatesTags: (_result, _error, { UserID }) => [{ type: 'User', id: UserID }],
    }),
  }),
});

export default userApi;
