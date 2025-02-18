import { createApi } from '@reduxjs/toolkit/query/react';

import { CreateUserDto, UpdateUserDto } from '@shared/models';
import { baseQuery } from './baseQuery';

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
    updateUser: builder.mutation<UpdateUserDto, UpdateUserDto>({
      query: (body) => ({
        url: `/users/${body.UserID}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (_result, _error, { UserID }) => [{ type: 'User', id: UserID }],
    }),
  }),
});

export default userApi;
