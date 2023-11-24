import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IPost } from "../model/Post"
import { IRequestCreatePostApi } from "./types";

enum TAGS {
  POST = 'POST'
}

const postApi = createApi({
  reducerPath: "postApi",
  tagTypes: [TAGS.POST],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
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
