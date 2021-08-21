import { baseApi } from './base.api';

const astronautsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAstronautList: build.query({
      query: (offset) => `astronaut/?offset=${offset}`,
    }),
    getAstronautDetail: build.query({
      query: (id) => `astronaut/${id}/`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetAstronautListQuery, useGetAstronautDetailQuery } = astronautsApi;
