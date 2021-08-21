import { baseApi } from './base.api';

const exampleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getResourceList: build.query({
      query: () => 'resource',
    }),
    getResourceDetail: build.query({
      query: (id) => `resource/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetResourceListQuery, useGetResourceDetailQuery } = exampleApi;
