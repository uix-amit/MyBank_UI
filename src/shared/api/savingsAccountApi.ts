import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import { CreateAccountDto, UpdateAccountDto } from '@shared/models';

export const savingsAccountApi = createApi({
  reducerPath: 'savingsAccountApi',
  baseQuery,
  tagTypes: ['SavingsAccount'],
  endpoints: (builder) => ({
    // Get all savings accounts
    getSavingsAccounts: builder.query<
      Array<UpdateAccountDto & { Bank: { BankName: string } }>,
      void
    >({
      query: () => '/savings-account',
      providesTags: ['SavingsAccount'],
    }),

    // Get a single savings account by ID
    getSavingsAccountById: builder.query<UpdateAccountDto, string>({
      query: (accountId) => `/savings-account/${accountId}`,
      providesTags: (_result, _error, accountId) => [{ type: 'SavingsAccount', id: accountId }],
    }),

    // Create a new savings account
    createSavingsAccount: builder.mutation<CreateAccountDto, CreateAccountDto>({
      query: (body) => ({
        url: '/savings-account',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['SavingsAccount'],
    }),

    // Update an existing savings account
    updateSavingsAccount: builder.mutation<UpdateAccountDto, UpdateAccountDto>({
      query: (body) => ({
        url: `/savings-account/${body.AccountID}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (_result, _error, { AccountID }) => [
        { type: 'SavingsAccount', id: AccountID },
      ],
    }),

    // Delete a savings account by ID
    deleteSavingsAccount: builder.mutation<void, string>({
      query: (accountId) => ({
        url: `/savings-account/${accountId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, accountId) => [{ type: 'SavingsAccount', id: accountId }],
    }),
  }),
});

// Export hooks for usage in components
export default savingsAccountApi;
