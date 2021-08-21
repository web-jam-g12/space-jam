import { baseApi } from './base.api';

const astronautsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAstronautList: build.query({
      query: (offset) => `astronaut/?offset=${offset}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetAstronautListQuery } = astronautsApi;
