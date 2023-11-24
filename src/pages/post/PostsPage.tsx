import React, { FC } from 'react';
import PostList from '../../entities/posts/ui/PostsList';
import {
  Link
} from 'react-router-dom';

interface IPostPageProps {

};

const PostsPage:FC<IPostPageProps> = ({}) => {
  return (
    <div>
      <Link />
      <PostList />
    </div>
  )
};

export default PostsPage;