import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const operationTimeApi = createApi({
  reducerPath: 'operationTimeData',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://kpi.syncronik.com/api/operation-time/lines/',
  }),

  endpoints: (builder) => ({
    getOperationTime: builder.query({
      query: () => `?line_number=3`,
    }),
  }),
});

export const { useGetOperationTimeQuery } = operationTimeApi;
