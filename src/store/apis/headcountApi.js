import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const headcountApi = createApi({
  reducerPatch: 'headcountData',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://kpi.syncronik.com/api/headcount/total-headcount/',
  }),

  endpoints: (builder) => ({
    getHeadcount: builder.query({
      query: () => `?line_number=1`,
    }),
  }),
});

export const { useGetHeadcountQuery } = headcountApi;
