import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const downtimeApi = createApi({
  reducerPath: 'downtimeData',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://kpi.syncronik.com/fake_api/list-downtime-test/',
  }),

  endpoints: (builder) => ({
    getDowntime: builder.query({
      query: () => `/`,
    }),
  }),
});

export const { useGetDowntimeQuery } = downtimeApi;

// getDowntime: builder.query({
//   query: ({ fromDate, toDate, lineNumber }) =>
//     `?from_date=${fromDate}&to_date=${toDate}&line_number=${lineNumber}`,
// }),
// }),
