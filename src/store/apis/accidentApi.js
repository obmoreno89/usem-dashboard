import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const accidentApi = createApi({
  reducerPath: 'accidentData',

  baseQuery: fetchBaseQuery({
    baseUrl:
      'http://kpi.syncronik.com/api/accidents/list-accident-by-date-and-line',
  }),

  endpoints: (builder) => ({
    getAccident: builder.query({
      query: ({ fromDate, toDate, lineNumber }) =>
        `?from-date=${fromDate}&to-date=${toDate}&line=${lineNumber}`,
    }),
  }),
});

export const { useGetAccidentQuery } = accidentApi;
