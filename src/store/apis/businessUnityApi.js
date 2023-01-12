import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const businessUnityApi = createApi({
  reducerPath: 'businessUnityData',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://kpi.syncronik.com/api/misc/list-business-unitys',
  }),
  keepUnusedDataFor: 60,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  pollingInterval: 3000,

  endpoints: (builder) => ({
    getBusinessUnity: builder.query({
      query: () => ``,
    }),
  }),
});

export const { useGetBusinessUnityQuery } = businessUnityApi;
