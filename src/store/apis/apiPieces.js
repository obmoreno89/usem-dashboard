import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiPieces = createApi({
  reducerPath: 'piecesData',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://kpi.syncronik.com/api/pieces/production-kpi/',
  }),

  endpoints: (builder) => ({
    getPieces: builder.query({
      query: ({ fromDate, toDate }) =>
        `?from_date=${fromDate}&to_date=${toDate}`,
    }),
  }),
});

export const { useGetPiecesQuery } = apiPieces;
