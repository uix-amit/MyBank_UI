import { createApi } from '@reduxjs/toolkit/query/react';

import { CreateLoanDto, UpdateLoanDto } from '@shared/models';
import { baseQuery } from './baseQuery';
import notificationsApi from './notificationsApi';
import { addToastMessage } from '@shared/store/toast.slice';
import { LoanAccountStats } from '@shared/models/account-stats';

export const loansApi = createApi({
  reducerPath: 'loansApi',
  baseQuery,
  tagTypes: ['Loan'],
  endpoints: (builder) => ({
    getLoans: builder.query<Array<UpdateLoanDto & { Bank: { BankName: string } }>, void>({
      query: () => '/loans',
      providesTags: ['Loan'],
    }),

    getLoanAccountStats: builder.query<LoanAccountStats, void>({
      query: () => '/loans/stats',
    }),

    getLoanById: builder.query<UpdateLoanDto, string>({
      query: (loanId) => `/loans/${loanId}`,
      providesTags: (_result, _error, loanId) => [{ type: 'Loan', id: loanId }],
    }),

    createLoan: builder.mutation<{ message: string }, CreateLoanDto>({
      query: (body) => ({
        url: '/loans',
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
      invalidatesTags: ['Loan'],
    }),

    updateLoan: builder.mutation<UpdateLoanDto, UpdateLoanDto>({
      query: (body) => ({
        url: `/loans/${body.LoanID}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (_result, _error, { LoanID }) => [{ type: 'Loan', id: LoanID }],
    }),

    deleteLoan: builder.mutation<void, string>({
      query: (loanId) => ({
        url: `/loans/${loanId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, loanId) => [{ type: 'Loan', id: loanId }],
    }),
  }),
});

export default loansApi;
