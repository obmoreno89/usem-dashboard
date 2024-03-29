import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const downtimeApi = createApi({
  reducerPath: 'downtimeData',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://kpi.syncronik.com/api/downtime/lines/',
  }),
  keepUnusedDataFor: 60,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  pollingInterval: 3000,

  endpoints: (builder) => ({
    getDowntime: builder.query({
      query: ({ fromDate, toDate, lineNumber }) =>
        `?from_date=${fromDate}&to_date=${toDate}&line_number=${lineNumber}`,
    }),
  }),
});

export const { useGetDowntimeQuery } = downtimeApi;
