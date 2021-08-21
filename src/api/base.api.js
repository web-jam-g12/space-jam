import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://ll.thespacedevs.com/2.2.0' }),
  endpoints: () => ({}),
});
