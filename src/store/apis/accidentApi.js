import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const accidentApi = createApi({
  reducerPath: 'accidentData',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://kpi.syncronik.com/fake_api/list-accidents-test/',
  }),

  endpoints: (builder) => ({
    getAccident: builder.query({
      query: () => `/`,
    }),
  }),
});

export const { useGetAccidentQuery } = accidentApi;

// query: ({ fromDate, toDate, lineNumber }) =>
// `?from-date=${fromDate}&to-date=${toDate}&line=${lineNumber}`,
// }),
