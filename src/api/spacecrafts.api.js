import { baseApi } from './base.api';

const spacecraftsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSpacecraftsList: build.query({
      query: (offset) => `spacecraft/?offset=${offset}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetSpacecraftsListQuery } = spacecraftsApi;
