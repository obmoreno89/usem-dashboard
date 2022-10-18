import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const accidentApi = createApi({
  reducerPath: 'accidentData',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://kpi.syncronik.com/api/accidents/list-accident-by-date',
  }),
  keepUnusedDataFor: 60,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  pollingInterval: 3000,

  endpoints: (builder) => ({
    getAccident: builder.query({
      query: ({ fromDate, toDate, lineNumber }) =>
        `?from-date=${fromDate}&to-date=${toDate}&line-id=${lineNumber}`,
    }),
  }),
});

export const { useGetAccidentQuery } = accidentApi;
