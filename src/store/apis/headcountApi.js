import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const headcountApi = createApi({
  reducerPatch: 'headcountData',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://kpi.syncronik.com/api/headcount/total-headcount/',
  }),
  keepUnusedDataFor: 60,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  pollingInterval: 3000,

  endpoints: (builder) => ({
    getHeadcount: builder.query({
      query: ({ lineNumber }) => `?line_number=${lineNumber}`,
    }),
  }),
});

export const { useGetHeadcountQuery } = headcountApi;
