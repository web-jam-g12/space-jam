import { baseApi } from './base.api';

const spacecraftsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSpacecraftsList: build.query({
      query: () => 'spacecraft',
    }),
  }),
  overrideExisting: false,
});

export const { useGetSpacecraftsListQuery } = spacecraftsApi;
