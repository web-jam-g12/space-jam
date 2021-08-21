import { baseApi } from './base.api';

const astronautsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAstronautList: build.query({
      query: () => 'astronaut',
    }),
    getAstronautDetail: build.query({
      query: (id) => `astronaut/${id}/`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetAstronautListQuery, useGetAstronautDetailQuery } = astronautsApi;
