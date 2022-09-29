import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiPieces = createApi({
  reducerPath: 'piecesData',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://kpi.syncronik.com/fake_api/list-production-test/',
  }),

  endpoints: (builder) => ({
    getPieces: builder.query({
      query: () => `/`,
    }),
  }),
});

export const { useGetPiecesQuery } = apiPieces;

// getPieces: builder.query({
//   query: ({ fromDate, toDate, lineNumber }) =>
//     `?from_date=${fromDate}&to_date=${toDate}&line_number=${lineNumber}`,
// }),
// }),
