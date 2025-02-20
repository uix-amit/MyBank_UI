import { createApi } from '@reduxjs/toolkit/query/react';

import { CreateAccountPreferencesDto, UpdateAccountPreferencesDto } from '@shared/models';
import { addToastMessage } from '@shared/store/toast.slice';
import { baseQuery } from './baseQuery';
import notificationsApi from './notificationsApi';

export const accountPreferencesApi = createApi({
  reducerPath: 'accountPreferencesApi',
  baseQuery,
  tagTypes: ['AccountPreferences'],
  endpoints: (builder) => ({
    getAccountPreferences: builder.query<UpdateAccountPreferencesDto, void>({
      query: () => '/account-preferences',
      providesTags: ['AccountPreferences'],
    }),

    createAccountPreferences: builder.mutation<
      CreateAccountPreferencesDto,
      CreateAccountPreferencesDto
    >({
      query: (body) => ({
        url: '/account-preferences',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['AccountPreferences'],
    }),

    updateAccountPreferences: builder.mutation<{ message: string }, UpdateAccountPreferencesDto>({
      query: (body) => ({
        url: `/account-preferences/${body.AccountPreferenceID}`,
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
      invalidatesTags: (_result, _error, { AccountPreferenceID }) => [
        { type: 'AccountPreferences', id: AccountPreferenceID },
      ],
    }),

    deleteAccountPreferences: builder.mutation<void, string>({
      query: (accountPreferenceId) => ({
        url: `/account-preferences/${accountPreferenceId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, accountPreferenceId) => [
        { type: 'AccountPreferences', id: accountPreferenceId },
      ],
    }),
  }),
});

// Export hooks for usage in components
export default accountPreferencesApi;
