import { baseApi } from './base.api';

const astronautsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAstronautList: build.query({
      query: () => 'astronaut',
    }),
  }),
  overrideExisting: false,
});

export const { useGetAstronautListQuery } = astronautsApi;
