import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import { UpdateTransactionDto } from '@shared/models';
import { FilterTransaction } from '@shared/models/filter-transaction-dto';

export const transactionsApi = createApi({
  reducerPath: 'transactionsApi',
  baseQuery,
  tagTypes: ['Transaction'],
  endpoints: (builder) => ({
    getTransactions: builder.query<UpdateTransactionDto[], FilterTransaction | void>({
      query: (filter) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        filter ? `/transactions?${new URLSearchParams(filter as any).toString()}` : '/transactions',
      providesTags: ['Transaction'],
    }),

    getTransactionById: builder.query<UpdateTransactionDto, string>({
      query: (transactionId) => `/transactions/${transactionId}`,
      providesTags: (_result, _error, transactionId) => [
        { type: 'Transaction', id: transactionId },
      ],
    }),

    createTransaction: builder.mutation<UpdateTransactionDto, UpdateTransactionDto>({
      query: (body) => ({
        url: '/transactions',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Transaction'],
    }),

    updateTransaction: builder.mutation<UpdateTransactionDto, UpdateTransactionDto>({
      query: (body) => ({
        url: `/transactions/${body.TransactionID}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (_result, _error, { TransactionID }) => [
        { type: 'Transaction', id: TransactionID },
      ],
    }),

    deleteTransaction: builder.mutation<void, string>({
      query: (transactionId) => ({
        url: `/transactions/${transactionId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, transactionId) => [
        { type: 'Transaction', id: transactionId },
      ],
    }),
  }),
});

export default transactionsApi;
