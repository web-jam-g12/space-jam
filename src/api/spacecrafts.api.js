import { baseApi } from './base.api';

const spacecraftsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSpacecraftsList: build.query({
      query: () => 'spacecraft',
    }),
    getSpacecraftDetail: build.query({
      query: (id) => `spacecraft/${id}/`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetSpacecraftsListQuery, useGetSpacecraftDetailQuery } = spacecraftsApi;
