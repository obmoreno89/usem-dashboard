import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const incidentApi = createApi({
  reducerPath: 'incidentData',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://kpi.syncronik.com/api/incidents/get-incidents-kpi/',
  }),

  endpoints: (builder) => ({
    getIncident: builder.query({
      query: (incidentDate) =>
        `?from_date${incidentDate}&to_date=${incidentDate}`,
    }),
  }),
});

export const { useGetIncidentQuery } = incidentApi;
