import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiPieces = createApi({
  reducerPath: 'piecesData',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://kpi.syncronik.com/api/pieces/production-kpi/',
  }),
  keepUnusedDataFor: 60,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  pollingInterval: 3000,

  endpoints: (builder) => ({
    getPieces: builder.query({
      query: ({ fromDate, toDate, lineNumberName }) =>
        `?from_date=${fromDate}&to_date=${toDate}&line-name=${lineNumberName}`,
    }),
  }),
});

export const { useGetPiecesQuery } = apiPieces;
