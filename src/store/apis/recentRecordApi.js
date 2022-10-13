import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const recentRecordApi = createApi({
  reducerPath: 'recentRecordData',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://kpi.syncronik.com/api/latest-records/list',
  }),
  keepUnusedDataFor: 60,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  pollingInterval: 3000,

  endpoints: (builder) => ({
    getRecentRecord: builder.query({
      query: () => `/`,
    }),
  }),
});

export const { useGetRecentRecordQuery } = recentRecordApi;
