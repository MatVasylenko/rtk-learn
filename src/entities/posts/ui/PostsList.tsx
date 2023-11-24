import React, { FC } from 'react';
import { useGetPostsQuery } from '../api/postApi';

interface IPostListProps {

};

const PostList:FC<IPostListProps> = ({}) => {
  const {
    data: posts,
    isSuccess,
  } = useGetPostsQuery(null);
  return (
    <div>
      <h1>Posts</h1>
      {isSuccess && posts?.map((post) => (
        <div>{post.title}</div>
      ))}
    </div>
  )
};

export default PostList;