import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const incidentApi = createApi({
  reducerPath: 'incidentData',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://kpi.syncronik.com/fake_api/list-incidents-test/',
  }),

  endpoints: (builder) => ({
    getIncident: builder.query({
      query: () => `/`,
    }),
  }),
});

export const { useGetIncidentQuery } = incidentApi;

// query: ({ fromDate, toDate, lineNumber }) =>
//         `?from_date=${fromDate}&to_date=${toDate}&line_number=${lineNumber}`,
