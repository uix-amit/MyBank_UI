import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { BASE_URL } from '@utils/constants';

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    const token = sessionStorage.getItem('jwt');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
