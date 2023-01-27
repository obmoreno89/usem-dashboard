import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const lineNumberApi = createApi({
  reducerPath: 'lineNumberData',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://kpi.syncronik.com/api/misc/get-lines/',
  }),
  keepUnusedDataFor: 60,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  pollingInterval: 3000,

  endpoints: (builder) => ({
    getLineNumber: builder.query({
      query: ({ idNameBusinessUnity }) => `${idNameBusinessUnity}`,
    }),
  }),
});

export const { useGetLineNumberQuery } = lineNumberApi;
