import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const accidentApi = createApi({
  reducerPath: 'accidentData',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://kpi.syncronik.com/api/accidents/list-accident-by-date',
  }),

  endpoints: (builder) => ({
    getAccident: builder.query({
      query: ({ fromDate, toDate }) =>
        `?from-date=${fromDate}&to-date=${toDate}`,
    }),
  }),
});

export const { useGetAccidentQuery } = accidentApi;
