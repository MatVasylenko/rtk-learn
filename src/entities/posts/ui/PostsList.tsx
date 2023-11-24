import React, { FC } from 'react';
import { useCreatePostMutation, useGetPostsQuery } from '../api/postApi';

interface IPostListProps {

};

const PostList:FC<IPostListProps> = ({}) => {
  const {
    data: posts,
    isSuccess,
  } = useGetPostsQuery(null);

  const [createPost] = useCreatePostMutation();

  const onClick = () => {
    createPost({
      body: 'Description',
      title: 'Test',
      userId: 1,
    });
  };

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={onClick}>Add Post</button>
      {isSuccess && posts?.map((post) => (
        <div>{post.title}</div>
      ))}
    </div>
  )
};

export default PostList;