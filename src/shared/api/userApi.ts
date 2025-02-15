import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { CreateUserDto, UpdateUserDto } from '@shared/models';
import { BASE_URL } from '@utils/constants';

export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem('jwt');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    // Get user
    getUser: builder.query<UpdateUserDto, void>({
      query: () => '/users',
      providesTags: ['User'],
    }),

    // Create a new user
    createUser: builder.mutation<CreateUserDto, UpdateUserDto>({
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
