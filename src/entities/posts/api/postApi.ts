import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IPost } from "../model/Post"
import { IRequestCreatePostApi } from "./types";
import mainApi from "../../../app/store/mainApi";

enum TAGS {
  POST = 'POST'
}

const enchancedApi = mainApi.enhanceEndpoints({
  addTagTypes: [TAGS.POST],
})

const postApi = enchancedApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], null>({
      query: () => `posts`,
      providesTags: [TAGS.POST],
    }),
    createPost: builder.mutation<IPost, IRequestCreatePostApi>({
      query: (({ body }) => ({
        url: 'posts',
        method: 'POST',
        body,
      })),
      invalidatesTags: [TAGS.POST]
    })
  }),
});

//provider
//invalidator

export const {
  useGetPostsQuery,
  useCreatePostMutation,
} = postApi;

export default postApi;
