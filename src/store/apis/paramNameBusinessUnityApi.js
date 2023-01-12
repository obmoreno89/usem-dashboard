import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const paramNameBusinessUnityApi = createApi({
  reducerPath: 'paramNameBusinessUnityData',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://kpi.syncronik.com/api/misc/list-area-byBU/',
  }),
  keepUnusedDataFor: 60,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  pollingInterval: 3000,

  endpoints: (builder) => ({
    getParamNameBusinessUnity: builder.query({
      query: ({ nameBusinessUnity }) => `?business_unity=${nameBusinessUnity}`,
    }),
  }),
});

export const { useGetParamNameBusinessUnityQuery } = paramNameBusinessUnityApi;
