import { createApi } from '@reduxjs/toolkit/query/react';

import { DashboardData } from '@shared/models/dashboard-data';
import { baseQuery } from './baseQuery';

export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery,
  tagTypes: ['Dashboard'],
  endpoints: (builder) => ({
    getDashboardData: builder.query<DashboardData, void>({
      query: () => '',
      providesTags: ['Dashboard'],
    }),
  }),
});

// Export hooks for usage in components
export default dashboardApi;
