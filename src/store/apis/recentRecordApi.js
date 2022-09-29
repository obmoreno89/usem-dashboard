import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const recentRecordApi = createApi({
  reducerPath: 'recentRecordData',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://kpi.syncronik.com/fake_api/list-first-five/',
  }),

  endpoints: (builder) => ({
    getRecentRecord: builder.query({
      query: () => `/`,
    }),
  }),
});

export const { useGetRecentRecordQuery } = recentRecordApi;

// getDowntime: builder.query({
//   query: ({ fromDate, toDate, lineNumber }) =>
//     `?from_date=${fromDate}&to_date=${toDate}&line_number=${lineNumber}`,
// }),
// }),
