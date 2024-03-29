import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const incidentApi = createApi({
  reducerPath: 'incidentData',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://kpi.syncronik.com/api/incidents/get-incidents-kpi/',
  }),
  keepUnusedDataFor: 60,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  pollingInterval: 3000,

  endpoints: (builder) => ({
    getIncident: builder.query({
      query: ({ fromDate, toDate, lineNumber }) =>
        `?from_date=${fromDate}&to_date=${toDate}&line_number=${lineNumber}`,
    }),
  }),
});

export const { useGetIncidentQuery } = incidentApi;
