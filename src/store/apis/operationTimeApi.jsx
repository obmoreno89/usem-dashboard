import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const operationTimeApi = createApi({
  reducerPath: 'operationTimeData',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://kpi.syncronik.com/fake_api/list-incidents-test/',
  }),

  endpoints: (builder) => ({
    getOperationTime: builder.query({
      query: () => `/`,
    }),
  }),
});

export const { useGetOperationTimeQuery } = operationTimeApi;
