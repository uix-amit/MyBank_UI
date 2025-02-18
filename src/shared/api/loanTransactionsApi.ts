import { createApi } from '@reduxjs/toolkit/query/react';

import { UpdateLoanTransactionDto } from '@shared/models';
import { FilterTransaction } from '@shared/models/filter-transaction-dto';
import { baseQuery } from './baseQuery';

export const loanTransactionsApi = createApi({
  reducerPath: 'loanTransactionsApi',
  baseQuery,
  tagTypes: ['LoanTransaction'],
  endpoints: (builder) => ({
    getLoanTransactions: builder.query<
      Array<UpdateLoanTransactionDto & { Bank: { BankName: string } }>,
      FilterTransaction | void
    >({
      query: (filter) =>
        filter
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            `/loan-transactions?${new URLSearchParams(filter as any).toString()}`
          : '/loan-transactions',
      providesTags: ['LoanTransaction'],
    }),

    getLoanTransactionById: builder.query<UpdateLoanTransactionDto, string>({
      query: (transactionId) => `/loan-transactions/${transactionId}`,
      providesTags: (_result, _error, transactionId) => [
        { type: 'LoanTransaction', id: transactionId },
      ],
    }),

    createLoanTransaction: builder.mutation<UpdateLoanTransactionDto, UpdateLoanTransactionDto>({
      query: (body) => ({
        url: '/loan-transactions',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['LoanTransaction'],
    }),

    updateLoanTransaction: builder.mutation<UpdateLoanTransactionDto, UpdateLoanTransactionDto>({
      query: (body) => ({
        url: `/loan-transactions/${body.TransactionID}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (_result, _error, { TransactionID }) => [
        { type: 'LoanTransaction', id: TransactionID },
      ],
    }),

    deleteLoanTransaction: builder.mutation<void, string>({
      query: (transactionId) => ({
        url: `/loan-transactions/${transactionId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, transactionId) => [
        { type: 'LoanTransaction', id: transactionId },
      ],
    }),
  }),
});

export default loanTransactionsApi;
