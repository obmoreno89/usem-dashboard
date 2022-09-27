import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const incidentApi = createApi({
  reducerPath: 'incidentData',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://kpi.syncronik.com/api/incidents/get-incidents-kpi/',
  }),

  endpoints: (builder) => ({
    getIncident: builder.query({
      query: ({ fromDate, toDate }) =>
        `?from_date=${fromDate}&to_date=${toDate}`,
    }),
  }),
});

export const { useGetIncidentQuery } = incidentApi;
