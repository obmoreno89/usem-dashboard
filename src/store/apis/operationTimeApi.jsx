import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const operationTimeApi = createApi({
  reducerPath: 'operationTimeData',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://kpi.syncronik.com/api/operation-time/lines/',
  }),

  endpoints: (builder) => ({
    getOperationTime: builder.query({
      query: ({ fromDate, toDate, lineNumber }) =>
        `?from_date=${fromDate}&to_date=${toDate}&line_number=${lineNumber}`,
    }),
  }),
});

export const { useGetOperationTimeQuery } = operationTimeApi;
